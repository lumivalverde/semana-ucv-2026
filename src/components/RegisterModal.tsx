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

    setIsConfirmed(true);
    onSuccess(`${formData.names} ${formData.surnames}`);
  };

  const handleDownloadComuniCard = async () => {
    try {
      setIsGeneratingPdf(true);
      await generateComuniCardPdf({
        names: formData.names,
        surnames: formData.surnames,
        email: formData.email,
        dniOrCode: formData.dniOrCode,
        cycle: formData.cycle,
        campus: formData.campusOrAffiliation,
      });
      setDownloadCompleted(true);
    } catch (err) {
      console.error('Error al generar la credencial PDF:', err);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const handleFieldChange = (field: keyof RegistrationFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id="registration-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-black/92 backdrop-blur-2xl"
        >
          {/* Floating Modal Box with Custom Glass Style */}
          <motion.div
            id="register-modal-container"
            initial={{ opacity: 0, scale: 0.9, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{
              duration: 0.28,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative glass-modal w-full max-w-lg rounded-3xl p-6 sm:p-8 md:p-10 border border-[#7135F5]/50 shadow-[0_20px_70px_rgba(0,0,0,0.98)] z-10 my-auto bg-[#080312]"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              id="register-modal-close"
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-[#120826] border border-[#7135F5]/60 text-white hover:text-[#111111] hover:bg-[#C6FF00] hover:border-[#C6FF00] transition-colors flex items-center justify-center cursor-pointer shadow-md shadow-black"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#7135F5]/20 text-[#C6FF00] text-xs font-semibold uppercase tracking-wider mb-2 border border-[#7135F5]/50 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#C6FF00]" />
                Acreditación Exclusiva
              </div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
                Inscripción al <span className="text-[#9B6CFF]">Congreso</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 font-normal">
                Completa tus datos para confirmar tu participación y generar tu{' '}
                <strong className="text-[#C6FF00]">ComuniCard</strong> oficial de acceso.
              </p>
            </div>

            {/* Confirmation Status Banner */}
            {isConfirmed && (
              <div
                id="confirmation-banner"
                className="mb-5 p-4 rounded-2xl bg-[#0F0721] border border-[#C6FF00]/80 text-white flex items-start gap-3 animate-in fade-in shadow-lg shadow-black"
              >
                <CheckCircle2 className="w-6 h-6 text-[#C6FF00] shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <div className="font-heading font-black text-white text-sm sm:text-base">
                    ¡Inscripción Confirmada con Éxito!
                  </div>
                  <p className="text-slate-300 mt-0.5">
                    Tus datos han sido registrados en la base oficial del congreso. Haz clic en el botón de abajo para descargar tu credencial <span className="text-[#C6FF00] font-bold">ComuniCard</span> en PDF.
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
                    className={`w-full px-4 py-2.5 bg-[#030108] border rounded-xl text-white focus:outline-none text-sm transition-colors placeholder:text-slate-600 shadow-inner ${
                      errors.names
                        ? 'border-[#C6FF00] focus:border-[#C6FF00]'
                        : 'border-[#7135F5]/40 focus:border-[#C6FF00]'
                    } ${isConfirmed ? 'opacity-85 cursor-default' : ''}`}
                  />
                  {errors.names && (
                    <p className="text-xs text-[#C6FF00] mt-1 flex items-center gap-1 font-semibold">
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
                    className={`w-full px-4 py-2.5 bg-[#030108] border rounded-xl text-white focus:outline-none text-sm transition-colors placeholder:text-slate-600 shadow-inner ${
                      errors.surnames
                        ? 'border-[#C6FF00] focus:border-[#C6FF00]'
                        : 'border-[#7135F5]/40 focus:border-[#C6FF00]'
                    } ${isConfirmed ? 'opacity-85 cursor-default' : ''}`}
                  />
                  {errors.surnames && (
                    <p className="text-xs text-[#C6FF00] mt-1 flex items-center gap-1 font-semibold">
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
                    className={`w-full px-4 py-2.5 bg-[#030108] border rounded-xl text-white focus:outline-none text-sm transition-colors placeholder:text-slate-600 shadow-inner ${
                      errors.email
                        ? 'border-[#C6FF00] focus:border-[#C6FF00]'
                        : 'border-[#7135F5]/40 focus:border-[#C6FF00]'
                    } ${isConfirmed ? 'opacity-85 cursor-default' : ''}`}
                  />
                  {errors.email && (
                    <p className="text-xs text-[#C6FF00] mt-1 flex items-center gap-1 font-semibold">
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
                    className={`w-full px-4 py-2.5 bg-[#030108] border rounded-xl text-white focus:outline-none text-sm transition-colors placeholder:text-slate-600 shadow-inner ${
                      errors.dniOrCode
                        ? 'border-[#C6FF00] focus:border-[#C6FF00]'
                        : 'border-[#7135F5]/40 focus:border-[#C6FF00]'
                    } ${isConfirmed ? 'opacity-85 cursor-default' : ''}`}
                  />
                  {errors.dniOrCode && (
                    <p className="text-xs text-[#C6FF00] mt-1 flex items-center gap-1 font-semibold">
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
                    className={`w-full px-4 py-2.5 bg-[#030108] border rounded-xl text-white focus:outline-none text-sm appearance-none cursor-pointer transition-colors shadow-inner ${
                      errors.cycle
                        ? 'border-[#C6FF00] focus:border-[#C6FF00]'
                        : 'border-[#7135F5]/40 focus:border-[#C6FF00]'
                    } ${isConfirmed ? 'opacity-85 cursor-default' : ''}`}
                  >
                    <option value="I" className="bg-[#030108] text-white">Ciclo I</option>
                    <option value="II" className="bg-[#030108] text-white">Ciclo II</option>
                    <option value="III" className="bg-[#030108] text-white">Ciclo III</option>
                    <option value="IV" className="bg-[#030108] text-white">Ciclo IV</option>
                    <option value="V" className="bg-[#030108] text-white">Ciclo V</option>
                    <option value="VI" className="bg-[#030108] text-white">Ciclo VI</option>
                    <option value="VII" className="bg-[#030108] text-white">Ciclo VII</option>
                    <option value="VIII" className="bg-[#030108] text-white">Ciclo VIII</option>
                    <option value="IX" className="bg-[#030108] text-white">Ciclo IX</option>
                    <option value="X" className="bg-[#030108] text-white">Ciclo X</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-[#C6FF00]">
                    <GraduationCap className="w-4 h-4 text-[#C6FF00]" />
                  </div>
                </div>
                {errors.cycle && (
                  <p className="text-xs text-[#C6FF00] mt-1 flex items-center gap-1 font-semibold">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.cycle}
                  </p>
                )}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                {!isConfirmed ? (
                  <button
                    type="submit"
                    id="btn-confirm-registration"
                    className="w-full py-3.5 bg-[#090414] hover:bg-[#C6FF00] text-white hover:text-black font-heading font-black text-sm uppercase rounded-xl border-2 border-[#C6FF00] shadow-xl shadow-black transition-all duration-300 hover:scale-[1.01] active:scale-95 cursor-pointer flex items-center justify-center gap-2 group"
                  >
                    <Ticket className="w-5 h-5 text-[#C6FF00] group-hover:text-black transition-colors" />
                    <span>Confirmar Inscripción Gratuita</span>
                  </button>
                ) : (
                  <div className="space-y-3">
                    <button
                      type="button"
                      id="btn-download-comunicard"
                      onClick={handleDownloadComuniCard}
                      disabled={isGeneratingPdf}
                      className="w-full py-4 bg-[#090414] hover:bg-[#C6FF00] text-white hover:text-black font-heading font-black text-sm uppercase rounded-xl shadow-2xl shadow-black border-2 border-[#C6FF00] transition-all duration-300 hover:scale-[1.01] active:scale-95 cursor-pointer flex items-center justify-center gap-3 animate-in fade-in group"
                    >
                      {isGeneratingPdf ? (
                        <>
                          <Sparkles className="w-5 h-5 animate-spin text-[#C6FF00] group-hover:text-black transition-colors" />
                          <span>Generando PDF oficial...</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-5 h-5 text-[#C6FF00] group-hover:text-black transition-colors" />
                          <span>Descargar tu ComuniCard</span>
                        </>
                      )}
                    </button>

                    {downloadCompleted && (
                      <div className="p-3 rounded-xl bg-[#090414] border border-[#C6FF00] text-white text-xs flex items-center justify-between gap-2 animate-in fade-in">
                        <div className="flex items-center gap-2">
                          <FileCheck className="w-4 h-4 text-[#C6FF00] shrink-0" />
                          <span>ComuniCard descargada en PDF. ¡Todo listo para tu ingreso!</span>
                        </div>
                        <button
                          type="button"
                          onClick={handleDownloadComuniCard}
                          className="px-2.5 py-1 rounded-lg bg-[#120826] hover:bg-[#C6FF00] text-[#C6FF00] hover:text-black border border-[#C6FF00]/50 text-xs font-bold cursor-pointer shrink-0 transition-all duration-300"
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
