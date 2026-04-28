import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useTranslation } from '../hooks/useTranslation';

export const CVBuilder: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    phone: '',
    linkedin_url: '',
    about_me: '',
    avatar_url: ''
  });

  useEffect(() => {
    const fetchInitialData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        
        if (data) {
          setFormData({
            full_name: data.full_name || '',
            email: user.email || '',
            phone: data.phone || '',
            linkedin_url: data.linkedin_url || '',
            about_me: data.bio || '',
            avatar_url: data.avatar_url || ''
          });
        }
      }
    };

    fetchInitialData();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    
    if (user) {
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: formData.full_name,
          phone: formData.phone,
          linkedin_url: formData.linkedin_url,
          bio: formData.about_me,
          updated_at: new Date().toISOString(),
        })
        .eq('id', user.id);

      if (!error) {
        alert(t('cvBuilder.success'));
        if (currentStep < 5) {
          setCurrentStep(currentStep + 1);
        } else {
          navigate('/profile');
        }
      } else {
        alert(error.message);
      }
    }
    setLoading(false);
  };

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
          <img src="/hashtag-fixed.png" alt="Hashtag" className="h-6 w-auto" />
        </div>
        <div className="flex items-center gap-3">
          <button className="hidden sm:flex items-center gap-2 px-4 py-2 text-[#565e74] font-semibold text-[14px] hover:bg-[#f2f4f6] transition-colors rounded-lg">
            <span className="material-symbols-outlined text-[20px]">preview</span>
            {t('cvBuilder.preview')}
          </button>
          <div className="w-10 h-10 rounded-full bg-[#eceef0] overflow-hidden ring-2 ring-white shadow-sm">
            <img 
              alt="User" 
              className="w-full h-full object-cover" 
              src={formData.avatar_url || `https://ui-avatars.com/api/?name=${formData.full_name || 'User'}&background=ba0013&color=fff`}
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
                    currentStep === step ? 'bg-[#ba0013] text-white shadow-md' : 
                    currentStep > step ? 'bg-[#ba0013] text-white opacity-60' : 'bg-[#e6e8ea] text-[#565e74]'
                  }`}>
                    {step}
                  </div>
                  <span className={`text-[12px] font-bold ${currentStep === step ? 'text-[#ba0013]' : 'text-[#565e74]'}`}>
                    {step === 1 ? t('cvBuilder.personal') : step === 2 ? t('cvBuilder.education') : step === 3 ? t('cvBuilder.experience') : step === 4 ? t('cvBuilder.skills') : t('cvBuilder.template')}
                  </span>
                  {step < 5 && (
                    <div className={`absolute top-5 left-1/2 w-full h-[2px] -z-0 ${currentStep > step ? 'bg-[#ba0013]/20' : 'bg-[#eceef0]'}`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-2xl shadow-sm border border-[#eceef0] overflow-hidden">
            <div className="p-6 border-b border-[#eceef0] flex justify-between items-center">
              <div>
                <h2 className="text-[24px] font-bold text-[#191c1e]">{t('cvBuilder.personalInfo')}</h2>
                <p className="text-[16px] text-[#565e74] mt-1">{t('cvBuilder.personalInfoSubtitle')}</p>
              </div>
              <button onClick={() => navigate(-1)} className="p-2 text-[#565e74] hover:bg-[#f2f4f6] rounded-full transition-colors">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <form className="p-6 space-y-6" onSubmit={(e) => e.preventDefault()}>
              {/* Photo Upload */}
              <div className="flex items-center gap-6">
                <div className="relative group">
                  <div className="w-24 h-24 rounded-2xl bg-[#f2f4f6] flex items-center justify-center border-2 border-dashed border-[#e7bdb8] overflow-hidden group-hover:border-[#ba0013] transition-colors cursor-pointer">
                    {formData.avatar_url ? (
                      <img src={formData.avatar_url} className="w-full h-full object-cover" alt="Profile" />
                    ) : (
                      <span className="material-symbols-outlined text-[#926f6b] text-3xl group-hover:text-[#ba0013]">add_a_photo</span>
                    )}
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-[14px] font-bold text-[#191c1e]">{t('cvBuilder.photoUpload')}</p>
                  <p className="text-[12px] text-[#565e74]">{t('cvBuilder.photoUploadSubtitle')}</p>
                  <button className="mt-2 text-[#ba0013] font-bold text-[12px] hover:underline" type="button">{t('cvBuilder.selectFile')}</button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[14px] font-bold text-[#191c1e]">{t('cvBuilder.fullName')}</label>
                  <input 
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#eceef0] focus:ring-2 focus:ring-[#ba0013] focus:border-[#ba0013] outline-none transition-all placeholder:text-slate-300" 
                    placeholder={t('cvBuilder.fullNamePlaceholder')}
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[14px] font-bold text-[#191c1e]">{t('cvBuilder.email')}</label>
                  <input 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled
                    className="w-full px-4 py-3 rounded-xl border border-[#eceef0] bg-slate-50 outline-none transition-all placeholder:text-slate-300" 
                    placeholder={t('cvBuilder.emailPlaceholder')}
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[14px] font-bold text-[#191c1e]">{t('cvBuilder.phone')}</label>
                  <input 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#eceef0] focus:ring-2 focus:ring-[#ba0013] focus:border-[#ba0013] outline-none transition-all placeholder:text-slate-300" 
                    placeholder={t('cvBuilder.phonePlaceholder')}
                    type="tel"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[14px] font-bold text-[#191c1e]">{t('cvBuilder.linkedin')}</label>
                  <input 
                    name="linkedin_url"
                    value={formData.linkedin_url}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#eceef0] focus:ring-2 focus:ring-[#ba0013] focus:border-[#ba0013] outline-none transition-all placeholder:text-slate-300" 
                    placeholder={t('cvBuilder.linkedinPlaceholder')}
                    type="url"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-[14px] font-bold text-[#191c1e]">{t('cvBuilder.aboutMe')}</label>
                <textarea 
                  name="about_me"
                  value={formData.about_me}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-[#eceef0] focus:ring-2 focus:ring-[#ba0013] focus:border-[#ba0013] outline-none transition-all placeholder:text-slate-300 resize-none h-32" 
                  placeholder={t('cvBuilder.aboutMePlaceholder')}
                ></textarea>
              </div>

              <div className="flex items-center justify-between pt-6">
                <button 
                  onClick={() => navigate(-1)}
                  className="px-6 py-3 font-bold text-[#565e74] hover:bg-[#f2f4f6] rounded-xl transition-colors border-2 border-transparent hover:border-[#eceef0]" 
                  type="button"
                >
                  {t('cvBuilder.cancel')}
                </button>
                <button 
                  onClick={handleSave}
                  disabled={loading}
                  className="px-8 py-3 bg-[#ba0013] text-white font-bold text-[14px] rounded-xl hover:shadow-lg shadow-[#ba0013]/30 active:scale-95 transition-all disabled:opacity-50" 
                  type="button"
                >
                  {loading ? '...' : t('cvBuilder.continue')}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side: Live Preview (Hidden on Mobile) */}
        <div className="lg:col-span-5 hidden lg:block">
          <div className="sticky top-24 space-y-6">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-[24px] font-bold text-[#191c1e]">{t('cvBuilder.livePreview')}</h3>
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
                    <h1 className="text-xl font-bold text-gray-900">{formData.full_name || 'Your Name'}</h1>
                    <p className="text-sm text-gray-600">{formData.about_me ? formData.about_me.substring(0, 100) + '...' : 'Professional Summary'}</p>
                    <div className="flex gap-3 mt-4 text-[10px] text-gray-500">
                      <span>{formData.email}</span>
                      <span>{formData.phone}</span>
                    </div>
                  </div>
                  <div className="w-20 h-20 bg-[#f2f4f6] rounded-xl overflow-hidden border border-gray-100">
                    {formData.avatar_url && <img src={formData.avatar_url} className="w-full h-full object-cover" alt="Profile" />}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-5 w-32 border-b-2 border-[#ba0013] text-[#ba0013] font-bold text-[10px] uppercase">{t('cvBuilder.education')}</div>
                  <div className="space-y-2">
                    <div className="h-3 w-full bg-[#f2f4f6] rounded-sm"></div>
                    <div className="h-3 w-3/4 bg-[#f2f4f6]/50 rounded-sm"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="h-5 w-32 border-b-2 border-[#ba0013] text-[#ba0013] font-bold text-[10px] uppercase">{t('cvBuilder.experience')}</div>
                  <div className="space-y-3">
                    <div className="h-3 w-full bg-[#f2f4f6] rounded-sm"></div>
                    <div className="h-3 w-5/6 bg-[#f2f4f6]/50 rounded-sm"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px] flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                <button className="bg-white/95 shadow-xl px-6 py-3 rounded-xl font-bold text-[14px] flex items-center gap-2 border border-[#eceef0]">
                  <span className="material-symbols-outlined">visibility</span>
                  {t('cvBuilder.preview')}
                </button>
              </div>
            </div>

            {/* ATS Tips */}
            <div className="bg-[#fff1f0] border border-[#ffccc7] p-6 rounded-2xl">
              <div className="flex gap-3">
                <span className="material-symbols-outlined text-[#ba0013]">lightbulb</span>
                <div>
                  <p className="text-[14px] font-bold text-[#ba0013]">{t('cvBuilder.atsTipTitle')}</p>
                  <p className="text-[12px] text-[#5a1011] mt-1">{t('cvBuilder.atsTip')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Action Button for Mobile Preview */}
      <button className="lg:hidden fixed bottom-24 right-6 w-14 h-14 bg-[#ba0013] text-white rounded-full shadow-2xl flex items-center justify-center active:scale-90 transition-transform z-40">
        <span className="material-symbols-outlined">preview</span>
      </button>
    </div>
  );
};

export default CVBuilder;
