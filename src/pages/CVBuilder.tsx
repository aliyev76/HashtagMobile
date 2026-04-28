import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const CVBuilder: React.FC = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen font-[Manrope] antialiased pb-32">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-4 h-16 bg-white border-b border-[#eceef0] shadow-sm z-50 pt-safe">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-[#f2f4f6] transition-colors active:scale-95 duration-200 text-[#565e74]"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-xl font-black text-[#e31e24] tracking-tighter italic">Hashtag</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 px-4 py-2 text-[#565e74] font-semibold text-[14px] hover:bg-[#f2f4f6] transition-colors rounded-lg">
            <span className="material-symbols-outlined text-[20px]">preview</span>
            Preview
          </button>
          <div className="w-10 h-10 rounded-full bg-[#eceef0] overflow-hidden ring-2 ring-white shadow-sm">
            <img 
              alt="User" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG-KZDTjYxsZ_cYPhPQlxydsvXiGDvS2mDTfwDhl32t6u5ODKaxPrMu_l12LqArepm7FP0PvRqmZGP6HGzCdYG80bH5CThFQclNuqEKSQU70n9GXrSAQ4ATqi3zhy9likZ_UyU32ElpFQjzrK1FVY_U8X7FVxoEYI9CaZLmGOxjHOV1_aEBbsVwFcoVJgssUevPxKgnpA0opqQI0ccHZNuW6TpdQ5YtbDAx5dGmTntEHoKCxgEUYlzIZxip-McBa7K22h0fgh1KCnp" 
            />
          </div>
        </div>
      </header>

      <main className="pt-24 px-4 max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: Progress & Form */}
        <div className="lg:col-span-7 space-y-6">
          {/* Progress Stepper */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#eceef0] overflow-x-auto hide-scrollbar">
            <div className="flex items-center justify-between min-w-[500px]">
              {[1, 2, 3, 4, 5].map((step) => (
                <div key={step} className="flex flex-col items-center gap-2 relative flex-1">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold z-10 transition-colors ${
                    currentStep === step ? 'bg-[#e31e24] text-white shadow-md' : 
                    currentStep > step ? 'bg-[#e31e24] text-white opacity-60' : 'bg-[#e6e8ea] text-[#565e74]'
                  }`}>
                    {step}
                  </div>
                  <span className={`text-[12px] font-bold ${currentStep === step ? 'text-[#e31e24]' : 'text-[#565e74]'}`}>
                    {step === 1 ? 'Kişisel' : step === 2 ? 'Eğitim' : step === 3 ? 'Deneyim' : step === 4 ? 'Yetenekler' : 'Şablon'}
                  </span>
                  {step < 5 && (
                    <div className={`absolute top-5 left-1/2 w-full h-[2px] -z-0 ${currentStep > step ? 'bg-[#e31e24]/20' : 'bg-[#eceef0]'}`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#eceef0] overflow-hidden">
            <div className="p-6 border-b border-[#eceef0] flex justify-between items-center">
              <div>
                <h2 className="text-[24px] font-bold text-[#191c1e]">Kişisel Bilgiler</h2>
                <p className="text-[16px] text-[#565e74] mt-1">Gelecekteki işvereninize kendinizi tanıtın.</p>
              </div>
              <button className="p-2 text-[#565e74] hover:bg-[#f2f4f6] rounded-full transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <form className="p-6 space-y-6">
              {/* Photo Upload */}
              <div className="flex items-center gap-6">
                <div className="relative group">
                  <div className="w-24 h-24 rounded-2xl bg-[#f2f4f6] flex items-center justify-center border-2 border-dashed border-[#e7bdb8] overflow-hidden group-hover:border-[#e31e24] transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-[#926f6b] text-3xl group-hover:text-[#e31e24]">add_a_photo</span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-bold text-[#191c1e]">Profil Fotoğrafı</p>
                  <p className="text-[12px] text-[#565e74]">SVG, PNG veya JPG. Max 2MB.</p>
                  <button className="mt-2 text-[#e31e24] font-bold text-[12px] hover:underline" type="button">Dosya Seç</button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[14px] font-bold text-[#191c1e]">Ad Soyad</label>
                  <input className="w-full px-4 py-3 rounded-xl border border-[#eceef0] focus:ring-2 focus:ring-[#e31e24] focus:border-[#e31e24] outline-none transition-all placeholder:text-slate-300" placeholder="Örn: Ahmet Yılmaz" type="text"/>
                </div>
                <div className="space-y-2">
                  <label className="block text-[14px] font-bold text-[#191c1e]">E-posta</label>
                  <input className="w-full px-4 py-3 rounded-xl border border-[#eceef0] focus:ring-2 focus:ring-[#e31e24] focus:border-[#e31e24] outline-none transition-all placeholder:text-slate-300" placeholder="ahmet@example.com" type="email"/>
                </div>
                <div className="space-y-2">
                  <label className="block text-[14px] font-bold text-[#191c1e]">Telefon</label>
                  <input className="w-full px-4 py-3 rounded-xl border border-[#eceef0] focus:ring-2 focus:ring-[#e31e24] focus:border-[#e31e24] outline-none transition-all placeholder:text-slate-300" placeholder="+90 5XX XXX XX XX" type="tel"/>
                </div>
                <div className="space-y-2">
                  <label className="block text-[14px] font-bold text-[#191c1e]">LinkedIn URL</label>
                  <input className="w-full px-4 py-3 rounded-xl border border-[#eceef0] focus:ring-2 focus:ring-[#e31e24] focus:border-[#e31e24] outline-none transition-all placeholder:text-slate-300" placeholder="linkedin.com/in/username" type="url"/>
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[14px] font-bold text-[#191c1e]">Hakkımda</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-[#eceef0] focus:ring-2 focus:ring-[#e31e24] focus:border-[#e31e24] outline-none transition-all placeholder:text-slate-300 resize-none h-32" placeholder="Kariyer hedeflerinizi ve tutkularınızı kısaca özetleyin..."></textarea>
              </div>

              <div className="flex items-center justify-between pt-6">
                <button className="px-6 py-3 font-bold text-[#565e74] hover:bg-[#f2f4f6] rounded-xl transition-colors border-2 border-transparent hover:border-[#eceef0]" type="button">Vazgeç</button>
                <button 
                  onClick={() => setCurrentStep(Math.min(5, currentStep + 1))}
                  className="px-8 py-3 bg-[#e31e24] text-white font-bold text-[14px] rounded-xl hover:shadow-lg shadow-[#e31e24]/30 active:scale-95 transition-all" 
                  type="button"
                >
                  Devam Et
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side: Live Preview (Hidden on Mobile) */}
        <div className="lg:col-span-5 hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-[24px] font-bold text-[#191c1e]">Canlı Önizleme</h3>
              <div className="flex gap-2">
                <button className="p-2 rounded-xl bg-white border border-[#eceef0] hover:bg-[#f2f4f6] text-[#565e74] transition-colors">
                  <span className="material-symbols-outlined text-[20px]">zoom_in</span>
                </button>
                <button className="p-2 rounded-xl bg-white border border-[#eceef0] hover:bg-[#f2f4f6] text-[#565e74] transition-colors">
                  <span className="material-symbols-outlined text-[20px]">file_download</span>
                </button>
              </div>
            </div>

            {/* CV Paper Mockup */}
            <div className="bg-white shadow-2xl rounded-sm aspect-[1/1.414] w-full p-8 border border-[#eceef0] overflow-hidden relative">
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="h-6 w-48 bg-[#f2f4f6] rounded-sm animate-pulse"></div>
                    <div className="h-4 w-64 bg-[#f2f4f6]/50 rounded-sm"></div>
                    <div className="flex gap-3 mt-4">
                      <div className="h-3 w-16 bg-[#f2f4f6] rounded-sm"></div>
                      <div className="h-3 w-16 bg-[#f2f4f6] rounded-sm"></div>
                    </div>
                  </div>
                  <div className="w-20 h-20 bg-[#f2f4f6] rounded-xl"></div>
                </div>
                <div className="space-y-4">
                  <div className="h-5 w-32 border-b-2 border-[#e31e24] text-[#e31e24] font-bold text-[10px]">EĞİTİM</div>
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-[#f2f4f6] rounded-sm"></div>
                    <div className="h-3 w-3/4 bg-[#f2f4f6]/50 rounded-sm"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-5 w-32 border-b-2 border-[#e31e24] text-[#e31e24] font-bold text-[10px]">DENEYİM</div>
                  <div className="space-y-3">
                    <div className="h-3 w-full bg-[#f2f4f6] rounded-sm"></div>
                    <div className="h-3 w-5/6 bg-[#f2f4f6]/50 rounded-sm"></div>
                  </div>
                </div>
              </div>
              
              {/* Glass Overlay Hint */}
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                <button className="bg-white/95 shadow-xl px-6 py-3 rounded-xl font-bold text-[14px] flex items-center gap-2 border border-[#eceef0]">
                  <span className="material-symbols-outlined">visibility</span>
                  Tam Ekran Önizleme
                </button>
              </div>
            </div>

            {/* ATS Tips */}
            <div className="bg-[#fff1f0] border border-[#ffccc7] p-6 rounded-2xl">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-[#e31e24]">lightbulb</span>
                <div>
                  <p className="text-[14px] font-bold text-[#e31e24]">ATS İpucu</p>
                  <p className="text-[12px] text-[#5a1011] mt-1">LinkedIn profilinizi eklemek, işe alım uzmanlarının hakkınızda daha fazla bilgi edinme şansını %40 artırır.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button for Mobile Preview */}
      <button className="lg:hidden fixed bottom-24 right-6 w-14 h-14 bg-[#e31e24] text-white rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform z-40">
        <span className="material-symbols-outlined">preview</span>
      </button>
    </div>
  );
};

export default CVBuilder;
