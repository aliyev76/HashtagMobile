import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useTranslation } from '../hooks/useTranslation';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        
        if (data) setProfile(data);
      }
      setLoading(false);
    };

    fetchProfile();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/auth');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#f7f9fb]">
        <div className="w-12 h-12 border-4 border-[#ba0013] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen font-[Manrope] antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#eceef0] h-16 flex items-center px-4 pt-safe">
        <div className="flex justify-between items-center w-full px-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/')}
              className="p-1 hover:bg-neutral-50 transition-all active:scale-95 duration-200 rounded-xl overflow-hidden"
            >
              <img src="/hashtag-fixed.png" alt="Hashtag Logo" className="h-8 w-auto" />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-[#565e74] hover:bg-[#f2f4f6] transition-colors p-2 rounded-full active:scale-95 duration-200">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <img 
              alt="Profile" 
              className="w-10 h-10 rounded-full border-2 border-[#ba0013] active:opacity-80 transition-all duration-200 cursor-pointer object-cover" 
              src={profile?.avatar_url || `https://ui-avatars.com/api/?name=${profile?.full_name || 'User'}&background=ba0013&color=fff`}
            />
          </div>
        </div>
      </header>

      <main className="pt-20 px-4 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 py-6">
          {/* Profile Card Section */}
          <section className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#eceef0]">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <img 
                    alt="User Avatar" 
                    className="w-32 h-32 rounded-full border-4 border-white shadow-lg object-cover" 
                    src={profile?.avatar_url || `https://ui-avatars.com/api/?name=${profile?.full_name || 'User'}&background=ba0013&color=fff`}
                  />
                  <button className="absolute bottom-1 right-1 bg-[#ba0013] text-white p-2 rounded-full shadow-md hover:scale-105 transition-transform active:scale-95">
                    <span className="material-symbols-outlined text-[18px]">edit</span>
                  </button>
                </div>
                <h2 className="text-[24px] font-bold text-[#191c1e] mb-1">{profile?.full_name || 'Hashtag User'}</h2>
                <p className="text-[#565e74] font-bold text-[14px] mb-4">{profile?.title || 'Tech Enthusiast'}</p>
                <p className="text-[#5d3f3c] text-[16px] leading-relaxed px-4">
                  {profile?.bio || 'Fueling digital innovation. Building the future of career tech at Hashtag.'}
                </p>
              </div>
            </div>

            {/* CV Builder Card */}
            <div className="bg-[#ba0013] text-white rounded-2xl p-6 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-8xl">description</span>
              </div>
              <h3 className="text-[24px] font-bold mb-1 relative z-10">{t('profile.cvBuilderTitle')}</h3>
              <p className="text-[16px] opacity-90 mb-6 pr-8 relative z-10 font-[Manrope]">{t('profile.cvBuilderSubtitle')}</p>
              <Link 
                to="/cv-builder"
                className="bg-white text-[#ba0013] font-bold text-[14px] uppercase tracking-widest px-6 py-4 rounded-xl shadow-sm hover:shadow-md active:scale-95 transition-all w-full flex items-center justify-center gap-2 relative z-10"
              >
                <span className="material-symbols-outlined">bolt</span>
                {t('profile.buildNow')}
              </Link>
            </div>
          </section>

          {/* Activity & Settings Section */}
          <section className="lg:col-span-8 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 border border-[#eceef0] flex items-center gap-4 hover:bg-[#f2f4f6] transition-colors cursor-pointer group active:scale-[0.98]">
                <div className="w-12 h-12 rounded-lg bg-[#f2f4f6] flex items-center justify-center text-[#ba0013] group-hover:bg-[#ba0013] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">work</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-[14px] font-bold text-[#191c1e]">{t('profile.myApplications')}</h4>
                  <p className="text-[12px] text-[#565e74]">{t('profile.activeRoles', { count: '0' })}</p>
                </div>
                <span className="material-symbols-outlined text-slate-300">chevron_right</span>
              </div>
              <Link to="/my-tickets" className="bg-white rounded-xl p-4 border border-[#eceef0] flex items-center gap-4 hover:bg-[#f2f4f6] transition-colors cursor-pointer group active:scale-[0.98]">
                <div className="w-12 h-12 rounded-lg bg-[#f2f4f6] flex items-center justify-center text-[#ba0013] group-hover:bg-[#ba0013] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">confirmation_number</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-[14px] font-bold text-[#191c1e]">{t('profile.myTickets')}</h4>
                  <p className="text-[12px] text-[#565e74]">{t('profile.bookedEvents', { count: '0' })}</p>
                </div>
                <span className="material-symbols-outlined text-slate-300">chevron_right</span>
              </Link>
              <div className="bg-white rounded-xl p-4 border border-[#eceef0] flex items-center gap-4 hover:bg-[#f2f4f6] transition-colors cursor-pointer group active:scale-[0.98]">
                <div className="w-12 h-12 rounded-lg bg-[#f2f4f6] flex items-center justify-center text-[#ba0013] group-hover:bg-[#ba0013] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">settings</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-[14px] font-bold text-[#191c1e]">{t('profile.settings')}</h4>
                  <p className="text-[12px] text-[#565e74]">{t('profile.privacyPrefs')}</p>
                </div>
                <span className="material-symbols-outlined text-slate-300">chevron_right</span>
              </div>
              <div 
                onClick={handleLogout}
                className="bg-white rounded-xl p-4 border border-[#eceef0] flex items-center gap-4 hover:bg-red-50 transition-colors cursor-pointer group active:scale-[0.98]"
              >
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">logout</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-[14px] font-bold text-red-600">{t('profile.logout')}</h4>
                  <p className="text-[12px] text-[#565e74]">{t('profile.logoutSubtitle')}</p>
                </div>
                <span className="material-symbols-outlined text-slate-300">chevron_right</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#eceef0] shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[24px] font-bold text-[#191c1e]">{t('profile.activityStream')}</h3>
                <button className="text-[#ba0013] font-bold text-[14px]">{t('profile.viewAll')}</button>
              </div>
              <div className="space-y-4">
                <p className="text-[#565e74] text-center py-8">{t('common.noData')}</p>
              </div>
            </div>

            {/* Mentorship Banner */}
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-md group">
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10 p-8 flex flex-col justify-center">
                <h4 className="text-white text-[24px] font-bold mb-1">{t('profile.mentorshipTitle')}</h4>
                <p className="text-white/80 text-[16px] max-w-md mb-4">{t('profile.mentorshipSubtitle')}</p>
                <div className="flex gap-2">
                  <button className="bg-white text-[#191c1e] px-5 py-2 rounded-xl font-bold text-[12px] active:scale-95 transition-transform">{t('profile.exploreMentors')}</button>
                </div>
              </div>
              <img 
                alt="Team meeting" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeqjEYl_K71GDMGI6Ny6SPWxHpeiPdACJhzRb_hSaZ1uRA8yEXUtrJTOsiNjCYdSkiAms44mAq7BQpjBD3BnddupmeLx4EowAF5fAzbU8h_a9PY8HHytTlQKvQQ5J-o9bvmhn8aagTkOb-VgM9RMo_yE2E1B65eFbadBHpG7LFxjC3RVI13cPO3ZItU6ic5GGiQ9gTlmQlEF6eT9ldPHIADd9kBF20dxa2x8T3EbmCK4w8TyYz_VhepHHnBc1USHN996jiOy4dT2xr" 
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Profile;
