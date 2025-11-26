import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Eye, EyeOff, Users } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useContacts } from '../hooks/useContacts';
import AdminLayout from '../components/admin/AdminLayout';
import LoginForm from '../components/admin/LoginForm';
import ContactsTable from '../components/admin/ContactsTable';
import ContactFilters from '../components/admin/ContactFilters';

const AdminPage: React.FC = () => {
  const { user, loading: authLoading } = useAuth();
  const {
    contacts,
    loading,
    totalCount,
    currentPage,
    totalPages,
    filters,
    setFilters,
    fetchContacts,
    markAsRead,
    deleteContact,
    exportToCSV,
    nextPage,
    prevPage
  } = useContacts({ autoFetch: false });

  // Fetch contacts when user is authenticated
  useEffect(() => {
    if (user) {
      fetchContacts(1);
    }
  }, [user, fetchContacts]);

  // Handle filter changes with debounce
  useEffect(() => {
    if (user) {
      const timer = setTimeout(() => {
        fetchContacts(1);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [filters, user]);

  // Show loading while checking auth
  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#020005] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-brand-cyan border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Show login if not authenticated
  if (!user) {
    return <LoginForm />;
  }

  // Calculate stats
  const unreadCount = contacts.filter(c => !c.leido).length;
  const readCount = contacts.filter(c => c.leido).length;

  return (
    <AdminLayout>
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-display tracking-wider text-white mb-2">
          Dashboard de <span className="text-brand-cyan">Contactos</span>
        </h1>
        <p className="text-gray-500">
          Gestiona los mensajes recibidos desde el formulario de contacto
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#0A0A15]/80 backdrop-blur-xl border border-white/10 rounded-xl p-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
              <Users size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Total Contactos</p>
              <p className="text-2xl font-bold text-white">{totalCount}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-[#0A0A15]/80 backdrop-blur-xl border border-white/10 rounded-xl p-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-brand-cyan/10 flex items-center justify-center text-brand-cyan">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">No Leídos</p>
              <p className="text-2xl font-bold text-white">{unreadCount}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-[#0A0A15]/80 backdrop-blur-xl border border-white/10 rounded-xl p-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center text-green-400">
              <Eye size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Leídos</p>
              <p className="text-2xl font-bold text-white">{readCount}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-[#0A0A15]/80 backdrop-blur-xl border border-white/10 rounded-xl p-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange">
              <EyeOff size={24} />
            </div>
            <div>
              <p className="text-gray-500 text-sm">Tasa Respuesta</p>
              <p className="text-2xl font-bold text-white">
                {totalCount > 0 ? Math.round((readCount / totalCount) * 100) : 0}%
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="bg-[#0A0A15]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden"
      >
        {/* Top Glow Line */}
        <div className="h-[2px] bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-orange" />

        <div className="p-6">
          {/* Filters */}
          <ContactFilters
            filters={filters}
            onFilterChange={setFilters}
            onExport={exportToCSV}
            onRefresh={() => fetchContacts(currentPage)}
            totalCount={totalCount}
          />

          {/* Divider */}
          <div className="h-px bg-white/5 my-6" />

          {/* Table */}
          <ContactsTable
            contacts={contacts}
            loading={loading}
            currentPage={currentPage}
            totalPages={totalPages}
            onMarkAsRead={async (id, read) => {
              await markAsRead(id, read);
            }}
            onDelete={async (id) => {
              await deleteContact(id);
            }}
            onNextPage={nextPage}
            onPrevPage={prevPage}
          />
        </div>
      </motion.div>
    </AdminLayout>
  );
};

export default AdminPage;
