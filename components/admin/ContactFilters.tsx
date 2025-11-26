import React from 'react';
import { Search, Filter, Download, RefreshCw } from 'lucide-react';

interface FilterOptions {
  searchTerm?: string;
  leido?: boolean | null;
  startDate?: string;
  endDate?: string;
}

interface ContactFiltersProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  onExport: () => void;
  onRefresh: () => void;
  totalCount: number;
}

const ContactFilters: React.FC<ContactFiltersProps> = ({
  filters,
  onFilterChange,
  onExport,
  onRefresh,
  totalCount
}) => {
  return (
    <div className="space-y-4">
      {/* Top Row: Search and Actions */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Buscar por nombre, email o asunto..."
            value={filters.searchTerm || ''}
            onChange={(e) => onFilterChange({ ...filters, searchTerm: e.target.value })}
            className="w-full bg-black/50 border border-white/10 rounded-lg pl-12 pr-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onRefresh}
            className="p-3 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
            title="Actualizar"
          >
            <RefreshCw size={18} />
          </button>
          <button
            onClick={onExport}
            className="flex items-center gap-2 px-4 py-3 rounded-lg bg-brand-cyan/10 text-brand-cyan hover:bg-brand-cyan/20 transition-colors"
          >
            <Download size={18} />
            <span className="hidden sm:inline">Exportar CSV</span>
          </button>
        </div>
      </div>

      {/* Second Row: Filters */}
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2 text-gray-500">
          <Filter size={16} />
          <span className="text-sm">Filtros:</span>
        </div>

        {/* Status Filter */}
        <select
          value={filters.leido === null ? 'all' : filters.leido ? 'read' : 'unread'}
          onChange={(e) => {
            const value = e.target.value;
            onFilterChange({
              ...filters,
              leido: value === 'all' ? null : value === 'read'
            });
          }}
          className="bg-black/50 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-brand-cyan transition-all"
        >
          <option value="all">Todos los estados</option>
          <option value="unread">No leídos</option>
          <option value="read">Leídos</option>
        </select>

        {/* Date Range */}
        <div className="flex items-center gap-2">
          <input
            type="date"
            value={filters.startDate || ''}
            onChange={(e) => onFilterChange({ ...filters, startDate: e.target.value })}
            className="bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-cyan transition-all"
          />
          <span className="text-gray-500">-</span>
          <input
            type="date"
            value={filters.endDate || ''}
            onChange={(e) => onFilterChange({ ...filters, endDate: e.target.value })}
            className="bg-black/50 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-brand-cyan transition-all"
          />
        </div>

        {/* Clear Filters */}
        {(filters.searchTerm || filters.leido !== null || filters.startDate || filters.endDate) && (
          <button
            onClick={() => onFilterChange({ searchTerm: '', leido: null, startDate: '', endDate: '' })}
            className="text-sm text-brand-orange hover:underline"
          >
            Limpiar filtros
          </button>
        )}

        {/* Total Count */}
        <div className="ml-auto text-sm text-gray-500">
          <span className="text-white font-bold">{totalCount}</span> contactos
        </div>
      </div>
    </div>
  );
};

export default ContactFilters;
