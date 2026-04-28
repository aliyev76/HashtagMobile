import React from 'react';
import { ArrowLeft, Bookmark, Share2, MapPin, Briefcase, Calendar, Clock, ChevronRight } from 'lucide-react';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { useNavigate } from 'react-router-dom';

export const JobDetail: React.FC = () => {
  const navigate = useNavigate();

  const handleBack = async () => {
    try { await Haptics.impact({ style: ImpactStyle.Light }); } catch {}
    navigate(-1);
  };

  const handleAction = async () => {
    try { await Haptics.impact({ style: ImpactStyle.Light }); } catch {}
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-28">
      {/* Navbar with blur */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-100 flex items-center justify-between px-4 h-16 pt-safe">
        <button onClick={handleBack} className="p-2 -ml-2 rounded-full active:bg-gray-100 transition-colors">
          <ArrowLeft className="w-6 h-6 text-gray-800" />
        </button>
        <div className="flex gap-2">
          <button onClick={handleAction} className="p-2 rounded-full active:bg-gray-100 transition-colors">
            <Bookmark className="w-5 h-5 text-gray-600" />
          </button>
          <button onClick={handleAction} className="p-2 -mr-2 rounded-full active:bg-gray-100 transition-colors">
            <Share2 className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div className="pt-20 px-5 relative bg-white pb-6 rounded-b-[2rem] shadow-sm">
        {/* Company Header */}
        <div className="flex flex-col items-center mt-4">
          <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-[22px] flex items-center justify-center font-bold text-3xl mb-4 shadow-sm">
            T
          </div>
          <h1 className="text-2xl font-bold text-center text-[var(--color-secondary)] leading-tight mb-2">Frontend Developer</h1>
          <p className="text-sm text-[var(--color-primary)] font-semibold mb-6">TechNova Inc.</p>
          
          <div className="flex flex-wrap items-center justify-center gap-3 w-full border-t border-gray-50 pt-5">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-gray-500 mb-1">
                <MapPin className="w-4 h-4" />
                <span className="text-xs font-semibold">Konum</span>
              </div>
              <span className="text-[13px] font-bold text-gray-800">Bakü, AZ</span>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-gray-500 mb-1">
                <Briefcase className="w-4 h-4" />
                <span className="text-xs font-semibold">Çalışma</span>
              </div>
              <span className="text-[13px] font-bold text-gray-800">Tam Zamanlı</span>
            </div>
            <div className="w-px h-8 bg-gray-200" />
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5 text-gray-500 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-xs font-semibold">Deneyim</span>
              </div>
              <span className="text-[13px] font-bold text-gray-800">2-3 Yıl</span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-5 mt-8 space-y-8">
        <div>
          <h3 className="text-[17px] font-bold text-[var(--color-secondary)] mb-3">İlan Detayları</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            TechNova olarak, kullanıcı deneyimini ön planda tutan ve modern web teknolojileri ile geliştirmeler yapacak dinamik bir Frontend Geliştirici arıyoruz. React, TypeScript ve Tailwind CSS konularında tecrübeliyseniz ve vizyoner bir ekiple benzersiz ürünler yaratmak istiyorsanız tam aradığımız kişisiniz.
          </p>
        </div>

        <div>
          <h3 className="text-[17px] font-bold text-[var(--color-secondary)] mb-3">Aranan Nitelikler</h3>
          <ul className="space-y-3">
            {[
              "En az 2 yıl React ve ekosistemi üzerinde deneyim",
              "TypeScript ile güçlü tip güvenliği sağlayabilme",
              "TailwindCSS veya modern CSS Framework'lerine hakimiyet",
              "Mobil öncelikli (Mobile First) tasarım prensiplerini uygulama yeteneği",
              "Git versiyon kontrol sistemlerini aktif kullanabilme"
            ].map((req, i) => (
              <li key={i} className="flex gap-3 items-start">
                <div className="mt-1 w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full flex-shrink-0" />
                <span className="text-sm text-gray-600 leading-tight">{req}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-white border text-center p-5 rounded-2xl border-gray-200">
           <h4 className="font-bold text-[15px] mb-1">Son Başvuru Tarihi</h4>
           <p className="text-sm text-[var(--color-primary)] font-bold">12 Mayıs 2026</p>
        </div>
      </div>

      {/* Sticky Bottom Apply Action */}
      <div className="fixed bottom-0 left-0 right-0 px-5 pt-4 pb-8 bg-white border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.05)] z-40">
        <button 
          onClick={handleAction}
          className="w-full bg-[var(--color-primary)] active:bg-[var(--color-primary-container)] text-white h-14 rounded-2xl font-bold text-[15px] shadow-[0_8px_16px_rgba(186,0,19,0.2)] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
        >
          Şimdi Başvur
        </button>
      </div>
    </div>
  );
};

export default JobDetail;
