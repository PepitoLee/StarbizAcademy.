import { useState, useEffect, useCallback } from 'react';
import { supabase } from '../lib/supabase';
import type { Contact, ContactInsert } from '../types/database';

interface UseContactsOptions {
  autoFetch?: boolean;
  pageSize?: number;
}

interface ContactsState {
  contacts: Contact[];
  loading: boolean;
  error: string | null;
  totalCount: number;
  currentPage: number;
}

interface FilterOptions {
  searchTerm?: string;
  leido?: boolean | null;
  startDate?: string;
  endDate?: string;
}

export const useContacts = (options: UseContactsOptions = {}) => {
  const { autoFetch = true, pageSize = 10 } = options;

  const [state, setState] = useState<ContactsState>({
    contacts: [],
    loading: false,
    error: null,
    totalCount: 0,
    currentPage: 1
  });

  const [filters, setFilters] = useState<FilterOptions>({});

  const fetchContacts = useCallback(async (page: number = 1) => {
    setState(prev => ({ ...prev, loading: true, error: null }));

    try {
      let query = supabase
        .from('contacts')
        .select('*', { count: 'exact' });

      // Apply filters
      if (filters.searchTerm) {
        query = query.or(`nombre.ilike.%${filters.searchTerm}%,email.ilike.%${filters.searchTerm}%,asunto.ilike.%${filters.searchTerm}%`);
      }

      if (filters.leido !== null && filters.leido !== undefined) {
        query = query.eq('leido', filters.leido);
      }

      if (filters.startDate) {
        query = query.gte('created_at', filters.startDate);
      }

      if (filters.endDate) {
        query = query.lte('created_at', filters.endDate);
      }

      // Pagination
      const from = (page - 1) * pageSize;
      const to = from + pageSize - 1;

      query = query
        .order('created_at', { ascending: false })
        .range(from, to);

      const { data, error, count } = await query;

      if (error) throw error;

      setState(prev => ({
        ...prev,
        contacts: data || [],
        totalCount: count || 0,
        currentPage: page,
        loading: false
      }));
    } catch (err) {
      setState(prev => ({
        ...prev,
        error: err instanceof Error ? err.message : 'Error fetching contacts',
        loading: false
      }));
    }
  }, [filters, pageSize]);

  const addContact = async (contact: ContactInsert): Promise<{ success: boolean; error: string | null }> => {
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([contact]);

      if (error) throw error;

      return { success: true, error: null };
    } catch (err) {
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Error adding contact'
      };
    }
  };

  const markAsRead = async (id: string, leido: boolean = true): Promise<{ success: boolean; error: string | null }> => {
    try {
      const { error } = await supabase
        .from('contacts')
        .update({ leido })
        .eq('id', id);

      if (error) throw error;

      // Update local state
      setState(prev => ({
        ...prev,
        contacts: prev.contacts.map(c =>
          c.id === id ? { ...c, leido } : c
        )
      }));

      return { success: true, error: null };
    } catch (err) {
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Error updating contact'
      };
    }
  };

  const deleteContact = async (id: string): Promise<{ success: boolean; error: string | null }> => {
    try {
      const { error } = await supabase
        .from('contacts')
        .delete()
        .eq('id', id);

      if (error) throw error;

      // Update local state
      setState(prev => ({
        ...prev,
        contacts: prev.contacts.filter(c => c.id !== id),
        totalCount: prev.totalCount - 1
      }));

      return { success: true, error: null };
    } catch (err) {
      return {
        success: false,
        error: err instanceof Error ? err.message : 'Error deleting contact'
      };
    }
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Nombre', 'Email', 'Asunto', 'Mensaje', 'Fecha', 'Leido'];
    const rows = state.contacts.map(c => [
      c.id,
      c.nombre,
      c.email,
      c.asunto,
      `"${c.mensaje.replace(/"/g, '""')}"`,
      new Date(c.created_at).toLocaleDateString('es-ES'),
      c.leido ? 'Si' : 'No'
    ]);

    const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `contactos_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  useEffect(() => {
    if (autoFetch) {
      fetchContacts(1);
    }
  }, [autoFetch, fetchContacts]);

  const totalPages = Math.ceil(state.totalCount / pageSize);

  return {
    ...state,
    totalPages,
    filters,
    setFilters,
    fetchContacts,
    addContact,
    markAsRead,
    deleteContact,
    exportToCSV,
    goToPage: (page: number) => fetchContacts(page),
    nextPage: () => fetchContacts(state.currentPage + 1),
    prevPage: () => fetchContacts(state.currentPage - 1)
  };
};
