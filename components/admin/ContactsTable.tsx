import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Eye, EyeOff, Trash2, ChevronLeft, ChevronRight, MessageSquare, X } from 'lucide-react';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import type { Contact } from '../../types/database';

interface ContactsTableProps {
  contacts: Contact[];
  loading: boolean;
  currentPage: number;
  totalPages: number;
  onMarkAsRead: (id: string, read: boolean) => void;
  onDelete: (id: string) => void;
  onNextPage: () => void;
  onPrevPage: () => void;
}

const ContactsTable: React.FC<ContactsTableProps> = ({
  contacts,
  loading,
  currentPage,
  totalPages,
  onMarkAsRead,
  onDelete,
  onNextPage,
  onPrevPage
}) => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    onDelete(id);
    setDeleteConfirm(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="w-8 h-8 border-2 border-brand-cyan border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (contacts.length === 0) {
    return (
      <div className="text-center py-20">
        <MessageSquare size={48} className="mx-auto mb-4 text-gray-600" />
        <p className="text-gray-500">No hay contactos para mostrar</p>
      </div>
    );
  }

  return (
    <>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-4 text-xs uppercase tracking-wider text-gray-500 font-bold">Estado</th>
              <th className="text-left py-4 px-4 text-xs uppercase tracking-wider text-gray-500 font-bold">Nombre</th>
              <th className="text-left py-4 px-4 text-xs uppercase tracking-wider text-gray-500 font-bold">Email</th>
              <th className="text-left py-4 px-4 text-xs uppercase tracking-wider text-gray-500 font-bold">Asunto</th>
              <th className="text-left py-4 px-4 text-xs uppercase tracking-wider text-gray-500 font-bold">Fecha</th>
              <th className="text-right py-4 px-4 text-xs uppercase tracking-wider text-gray-500 font-bold">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <motion.tr
                key={contact.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`border-b border-white/5 hover:bg-white/5 transition-colors cursor-pointer ${
                  !contact.leido ? 'bg-brand-cyan/5' : ''
                }`}
                onClick={() => setSelectedContact(contact)}
              >
                <td className="py-4 px-4">
                  {contact.leido ? (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gray-500/10 text-gray-500 text-xs">
                      <Eye size={12} /> Leído
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-brand-cyan/10 text-brand-cyan text-xs">
                      <Mail size={12} /> Nuevo
                    </span>
                  )}
                </td>
                <td className="py-4 px-4 text-white font-medium">{contact.nombre}</td>
                <td className="py-4 px-4 text-gray-400">{contact.email}</td>
                <td className="py-4 px-4 text-gray-400">{contact.asunto}</td>
                <td className="py-4 px-4 text-gray-500 text-sm font-mono">
                  {format(new Date(contact.created_at), 'dd MMM yyyy', { locale: es })}
                </td>
                <td className="py-4 px-4 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onMarkAsRead(contact.id, !contact.leido);
                      }}
                      className={`p-2 rounded-lg transition-colors ${
                        contact.leido
                          ? 'bg-gray-500/10 text-gray-500 hover:bg-gray-500/20'
                          : 'bg-brand-cyan/10 text-brand-cyan hover:bg-brand-cyan/20'
                      }`}
                      title={contact.leido ? 'Marcar como no leído' : 'Marcar como leído'}
                    >
                      {contact.leido ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setDeleteConfirm(contact.id);
                      }}
                      className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors"
                      title="Eliminar"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
          <p className="text-sm text-gray-500">
            Página {currentPage} de {totalPages}
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={onPrevPage}
              disabled={currentPage === 1}
              className="p-2 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={onNextPage}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      {/* Contact Detail Modal */}
      <AnimatePresence>
        {selectedContact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-black/90 backdrop-blur-md py-8 px-4"
            onClick={() => setSelectedContact(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: -20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: -20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-[#0A0A15] border border-white/20 rounded-2xl w-full max-w-lg shadow-2xl shadow-brand-purple/20 my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Glow Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-cyan via-brand-purple to-brand-orange rounded-t-2xl" />

              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-white/10">
                <h3 className="text-xl font-bold text-white font-display">Detalle del Mensaje</h3>
                <button
                  onClick={() => setSelectedContact(null)}
                  className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-brand-cyan uppercase font-bold tracking-wider">Nombre</label>
                    <p className="text-white mt-1 font-medium">{selectedContact.nombre}</p>
                  </div>
                  <div>
                    <label className="text-xs text-brand-cyan uppercase font-bold tracking-wider">Fecha</label>
                    <p className="text-white mt-1 font-mono text-sm">
                      {format(new Date(selectedContact.created_at), "dd MMM yyyy", { locale: es })}
                    </p>
                  </div>
                </div>
                <div>
                  <label className="text-xs text-brand-cyan uppercase font-bold tracking-wider">Email</label>
                  <p className="text-white mt-1">{selectedContact.email}</p>
                </div>
                <div>
                  <label className="text-xs text-brand-cyan uppercase font-bold tracking-wider">Asunto</label>
                  <p className="text-white mt-1">{selectedContact.asunto}</p>
                </div>
                <div>
                  <label className="text-xs text-brand-cyan uppercase font-bold tracking-wider">Mensaje</label>
                  <p className="text-gray-300 mt-2 whitespace-pre-wrap bg-black/50 p-4 rounded-xl border border-white/10 max-h-40 overflow-y-auto">
                    {selectedContact.mensaje}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 p-6 border-t border-white/10 bg-black/30 rounded-b-2xl">
                <button
                  onClick={() => {
                    onMarkAsRead(selectedContact.id, !selectedContact.leido);
                    setSelectedContact({ ...selectedContact, leido: !selectedContact.leido });
                  }}
                  className="flex-1 py-3 px-4 rounded-xl bg-brand-cyan/10 text-brand-cyan hover:bg-brand-cyan/20 transition-colors flex items-center justify-center gap-2 font-medium"
                >
                  {selectedContact.leido ? <EyeOff size={18} /> : <Eye size={18} />}
                  {selectedContact.leido ? 'No leído' : 'Leído'}
                </button>
                <a
                  href={`mailto:${selectedContact.email}`}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-brand-orange to-brand-purple text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2 font-medium"
                >
                  <Mail size={18} />
                  Responder
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Delete Confirmation Modal */}
      <AnimatePresence>
        {deleteConfirm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setDeleteConfirm(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-[#0A0A15] border border-red-500/30 rounded-2xl p-6 max-w-sm w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold text-white font-display mb-4">Confirmar Eliminación</h3>
              <p className="text-gray-400 mb-6">¿Estás seguro de que deseas eliminar este mensaje? Esta acción no se puede deshacer.</p>
              <div className="flex gap-3">
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="flex-1 py-3 px-4 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => handleDelete(deleteConfirm)}
                  className="flex-1 py-3 px-4 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-colors"
                >
                  Eliminar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactsTable;
