import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Ticket, Sparkles, GraduationCap, Download, AlertCircle, FileCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { RegistrationFormData } from '../types';
import { generateComuniCardPdf } from '../utils/generateComuniCardPdf';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (fullName: string) => void;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    names: '',
    surnames: '',
    email: '',
    dniOrCode: '',
    campusOrAffiliation: 'Campus Lima Norte',
    cycle: 'I',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [downloadCompleted, setDownloadCompleted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  // AnimatePresence handles mounting and unmounting transitions smoothly

  const validateAllFields = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.names.trim()) {
      newErrors.names = 'Por favor ingresa tus nombres';
    }
    if (!formData.surnames.trim()) {
      newErrors.surnames = 'Por favor ingresa tus apellidos';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Por favor ingresa tu correo electrónico';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Ingresa un formato de correo válido';
    }
    if (!formData.dniOrCode.trim()) {
      newErrors.dniOrCode = 'Por favor ingresa tu código UCV o DNI';
    }
    if (!formData.cycle) {
      newErrors.cycle = 'Por favor selecciona tu ciclo académico';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleConfirmRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateAllFields()) {
      return;
    }

    const fullName = `${formData.names} ${formData.surnames}`.trim();
    setIsConfirmed(true);
    if (fullName) {
      onSuccess(fullName);
    }
  };

  const handleDownloadComuniCard = async () => {
    setIsGeneratingPdf(true);
    try {
      await generateComuniCardPdf(formData);
      setDownloadCompleted(true);
    } catch (error) {
      console.error('Error al generar la credencial ComuniCard:', error);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handleFieldChange = (field: keyof RegistrationFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="registro-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-[#050B18]/80 backdrop-blur-xl"
        >
          <motion.div
            id="registro-modal-card"
            initial={{ opacity: 0, scale: 0.91, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 16 }}
            transition={{
              duration: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative glass-modal w-full max-w-2xl rounded-3xl p-6 sm:p-10 border border-[#D91B24]/60 shadow-[0_0_60px_-15px_rgba(217,27,36,0.3)] z-10 my-auto max-h-[92vh] overflow-y-auto"
          >
        {/* Close Button */}
        <button
          onClick={onClose}
          id="register-modal-close"
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#111F42] border border-[#1E3266] text-slate-300 hover:text-white hover:bg-[#D91B24] transition-colors flex items-center justify-center z-20 cursor-pointer"
          aria-label="Cerrar modal de inscripción"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-1 text-[#D91B24] font-bold text-xs uppercase tracking-widest bg-[#D91B24]/10 px-3 py-1 rounded-full border border-[#D91B24]/20">
            <Sparkles className="w-3.5 h-3.5" />
            Inscripciones Abiertas
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-white mt-2">
            Asegura tu Cupo en la Semana de Comunicadores
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-lg mx-auto">
            Completa tus datos para registrar tu participación y obtener tu credencial oficial del congreso.
          </p>
        </div>

        {/* Confirmation Status Banner (Shown once validated and confirmed) */}
        {isConfirmed && (
          <div
            id="confirmation-banner"
            className="mb-5 p-4 rounded-2xl bg-[#111F42]/80 border border-emerald-500/50 text-slate-200 flex items-start gap-3 animate-in fade-in"
          >
            <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm">
              <div className="font-bold text-white text-sm sm:text-base">
                ¡Inscripción Confirmada con Éxito!
              </div>
              <p className="text-slate-300 mt-0.5">
                Tus datos han sido registrados en la base oficial del congreso. Haz clic en el botón de abajo para descargar tu credencial <span className="text-[#D91B24] font-semibold">ComuniCard</span> en PDF.
              </p>
            </div>
          </div>
        )}

        <form id="registration-form" onSubmit={handleConfirmRegistration} className="space-y-4 sm:space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                Nombres
              </label>
              <input
                type="text"
                value={formData.names}
                disabled={isConfirmed}
                onChange={(e) => handleFieldChange('names', e.target.value)}
                placeholder="Ej. Valeria"
                className={`w-full px-4 py-2.5 bg-[#050B18] border rounded-xl text-white focus:outline-none text-sm transition-colors ${
                  errors.names
                    ? 'border-[#D91B24] focus:border-[#D91B24]'
                    : 'border-[#1E3266] focus:border-[#D91B24]'
                } ${isConfirmed ? 'opacity-85 cursor-default' : ''}`}
              />
              {errors.names && (
                <p className="text-xs text-[#D91B24] mt-1 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.names}
                </p>
              )}
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                Apellidos
              </label>
              <input
                type="text"
                value={formData.surnames}
                disabled={isConfirmed}
                onChange={(e) => handleFieldChange('surnames', e.target.value)}
                placeholder="Ej. Mendoza Sánchez"
                className={`w-full px-4 py-2.5 bg-[#050B18] border rounded-xl text-white focus:outline-none text-sm transition-colors ${
                  errors.surnames
                    ? 'border-[#D91B24] focus:border-[#D91B24]'
                    : 'border-[#1E3266] focus:border-[#D91B24]'
                } ${isConfirmed ? 'opacity-85 cursor-default' : ''}`}
              />
              {errors.surnames && (
                <p className="text-xs text-[#D91B24] mt-1 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.surnames}
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                Correo Electrónico
              </label>
              <input
                type="email"
                value={formData.email}
                disabled={isConfirmed}
                onChange={(e) => handleFieldChange('email', e.target.value)}
                placeholder="correo@ucvvirtual.edu.pe"
                className={`w-full px-4 py-2.5 bg-[#050B18] border rounded-xl text-white focus:outline-none text-sm transition-colors ${
                  errors.email
                    ? 'border-[#D91B24] focus:border-[#D91B24]'
                    : 'border-[#1E3266] focus:border-[#D91B24]'
                } ${isConfirmed ? 'opacity-85 cursor-default' : ''}`}
              />
              {errors.email && (
                <p className="text-xs text-[#D91B24] mt-1 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                </p>
              )}
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
                Código UCV / DNI
              </label>
              <input
                type="text"
                value={formData.dniOrCode}
                disabled={isConfirmed}
                onChange={(e) => handleFieldChange('dniOrCode', e.target.value)}
                placeholder="70123456"
                className={`w-full px-4 py-2.5 bg-[#050B18] border rounded-xl text-white focus:outline-none text-sm transition-colors ${
                  errors.dniOrCode
                    ? 'border-[#D91B24] focus:border-[#D91B24]'
                    : 'border-[#1E3266] focus:border-[#D91B24]'
                } ${isConfirmed ? 'opacity-85 cursor-default' : ''}`}
              />
              {errors.dniOrCode && (
                <p className="text-xs text-[#D91B24] mt-1 flex items-center gap-1 font-medium">
                  <AlertCircle className="w-3.5 h-3.5" /> {errors.dniOrCode}
                </p>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="student-cycle" className="block text-xs font-semibold text-slate-300 uppercase mb-1.5">
              Ciclo del Alumno
            </label>
            <div className="relative">
              <select
                id="student-cycle"
                value={formData.cycle}
                disabled={isConfirmed}
                onChange={(e) => handleFieldChange('cycle', e.target.value)}
                className={`w-full px-4 py-2.5 bg-[#050B18] border rounded-xl text-white focus:outline-none text-sm appearance-none cursor-pointer transition-colors ${
                  errors.cycle
                    ? 'border-[#D91B24] focus:border-[#D91B24]'
                    : 'border-[#1E3266] focus:border-[#D91B24]'
                } ${isConfirmed ? 'opacity-85 cursor-default' : ''}`}
              >
                <option value="I">Ciclo I</option>
                <option value="II">Ciclo II</option>
                <option value="III">Ciclo III</option>
                <option value="IV">Ciclo IV</option>
                <option value="V">Ciclo V</option>
                <option value="VI">Ciclo VI</option>
                <option value="VII">Ciclo VII</option>
                <option value="VIII">Ciclo VIII</option>
                <option value="IX">Ciclo IX</option>
                <option value="X">Ciclo X</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-400">
                <GraduationCap className="w-4 h-4 text-[#D91B24]" />
              </div>
            </div>
            {errors.cycle && (
              <p className="text-xs text-[#D91B24] mt-1 flex items-center gap-1 font-medium">
                <AlertCircle className="w-3.5 h-3.5" /> {errors.cycle}
              </p>
            )}
          </div>

          {/* Action Button: Changes dynamically to "Descargar tu ComuniCard" once confirmed */}
          <div className="pt-2">
            {!isConfirmed ? (
              <button
                type="submit"
                id="btn-confirm-registration"
                className="w-full py-3.5 bg-[#D91B24] hover:bg-red-600 text-white font-bold text-base rounded-xl shadow-xl shadow-[#D91B24]/30 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer flex items-center justify-center gap-2"
              >
                <Ticket className="w-5 h-5" />
                <span>Confirmar Inscripción Gratuita</span>
              </button>
            ) : (
              <div className="space-y-3">
                <button
                  type="button"
                  id="btn-download-comunicard"
                  onClick={handleDownloadComuniCard}
                  disabled={isGeneratingPdf}
                  className="w-full py-4 bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-700 hover:from-emerald-500 hover:via-green-500 hover:to-emerald-600 text-white font-bold text-base rounded-xl shadow-2xl shadow-emerald-600/40 border border-emerald-400/30 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer flex items-center justify-center gap-3 animate-in fade-in"
                >
                  {isGeneratingPdf ? (
                    <>
                      <Sparkles className="w-5 h-5 animate-spin" />
                      <span>Generando PDF oficial...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-5 h-5" />
                      <span>Descargar tu ComuniCard</span>
                    </>
                  )}
                </button>

                {downloadCompleted && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center justify-between gap-2 animate-in fade-in">
                    <div className="flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>ComuniCard descargada en PDF. ¡Todo listo para tu ingreso!</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleDownloadComuniCard}
                      className="text-xs text-white underline hover:text-emerald-200 font-semibold cursor-pointer shrink-0"
                    >
                      Descargar de nuevo
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

