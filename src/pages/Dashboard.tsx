import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useTranslation } from '../hooks/useTranslation';

export const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [userName, setUserName] = useState<string>('User');
  const [jobs, setJobs] = useState<any[]>([]);
  const [events, setEvents] = useState<any[]>([]);
  const [insights, setInsights] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      setLoading(true);
      
      // Get User info
      const { data: { user } } = await supabase.auth.getUser();
      if (user?.user_metadata?.full_name) {
        setUserName(user.user_metadata.full_name);
      }

      // Fetch Jobs
      const { data: jobsData } = await supabase
        .from('jobs')
        .select('*')
        .limit(3)
        .order('created_at', { ascending: false });
      if (jobsData) setJobs(jobsData);

      // Fetch Events
      const { data: eventsData } = await supabase
        .from('events')
        .select('*')
        .limit(3)
        .order('date', { ascending: true });
      if (eventsData) setEvents(eventsData);

      // Fetch Insights
      const { data: insightsData } = await supabase
        .from('insights')
        .select('*')
        .limit(3)
        .order('created_at', { ascending: false });
      if (insightsData) setInsights(insightsData);

      setLoading(false);
    };

    fetchDashboardData();
  }, []);

  return (
    <div className="bg-[#f7f9fb] font-[Manrope] text-[#191c1e] min-h-screen pb-32">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-800 shadow-sm z-50 pt-safe">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/')}
            className="p-1 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors active:scale-95 duration-200 rounded-xl overflow-hidden"
          >
            <img src="/hashtag-fixed.png" alt="Hashtag Logo" className="h-8 w-auto" />
          </button>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors rounded-full active:scale-95 duration-200">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm active:scale-95 transition-transform duration-200 cursor-pointer">
            <img alt="User Profile" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=User&background=ba0013&color=fff"/>
          </div>
        </div>
      </header>

      <main className="pt-24 px-4 md:px-8 max-w-7xl mx-auto space-y-6">
        {/* Welcome Section */}
        <section className="mb-12">
          <h1 className="font-[Manrope] text-[32px] font-bold tracking-tight text-[#191c1e] leading-snug">{t('dashboard.welcome', { name: userName })}</h1>
          <p className="font-[Manrope] text-[18px] text-[#565e74] mt-2">{t('dashboard.subtitle')}</p>
        </section>

        {/* Quick Actions & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button 
              onClick={() => navigate('/cv-builder')}
              className="flex flex-col items-center justify-center p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95 group"
            >
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-3 group-hover:bg-[#ba0013] transition-colors">
                <span className="material-symbols-outlined text-[#ba0013] group-hover:text-white">description</span>
              </div>
              <span className="font-[Manrope] text-[14px] font-bold">{t('dashboard.createCv')}</span>
            </button>
            <button 
              onClick={() => navigate('/career')}
              className="flex flex-col items-center justify-center p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95 group"
            >
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-3 group-hover:bg-[#ba0013] transition-colors">
                <span className="material-symbols-outlined text-[#ba0013] group-hover:text-white">business_center</span>
              </div>
              <span className="font-[Manrope] text-[14px] font-bold">{t('dashboard.findJob')}</span>
            </button>
            <button 
              onClick={() => navigate('/events')}
              className="flex flex-col items-center justify-center p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95 group"
            >
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-3 group-hover:bg-[#ba0013] transition-colors">
                <span className="material-symbols-outlined text-[#ba0013] group-hover:text-white">confirmation_number</span>
              </div>
              <span className="font-[Manrope] text-[14px] font-bold">{t('dashboard.joinEvent')}</span>
            </button>
          </div>

          {/* Active Applications Summary */}
          <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-6 flex flex-col justify-between relative overflow-hidden mt-6 lg:mt-0">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-[Manrope] text-[14px] font-semibold tracking-wider text-[#565e74]">{t('dashboard.activeApplications')}</span>
                <span className="material-symbols-outlined text-[#565e74] text-sm">trending_up</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-[#ba0013]">12</span>
                <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+2 {t('common.new')}</span>
              </div>
              <div className="mt-6 border-t border-slate-50 pt-4">
                <p className="text-xs text-[#565e74] font-medium uppercase tracking-wider mb-2">{t('dashboard.recentStatus')}</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-xs">apartment</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold truncate">Frontend Developer</p>
                    <p className="text-[10px] text-emerald-600 font-bold">{t('dashboard.interviewInvited')}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Abstract decorative element */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-red-50 rounded-full blur-2xl opacity-50"></div>
          </div>
        </div>

        {/* Recommended For You (Horizontal Scroll) */}
        <section className="pt-6 mt-6">
          <div className="flex items-center justify-between mb-3 border-b border-gray-100 pb-2">
            <h2 className="font-[Manrope] text-[20px] font-bold">{t('dashboard.recommendedFires')}</h2>
            <button 
              onClick={() => navigate('/career')}
              className="text-[#ba0013] font-bold text-sm flex items-center gap-1 hover:underline"
            >
              {t('common.seeAll')} <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
          <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 hide-scrollbar">
            {loading ? (
              <div className="flex gap-4">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-[280px] h-[200px] bg-slate-100 animate-pulse rounded-2xl" />
                ))}
              </div>
            ) : (
              <>
                {jobs.map((job) => (
                  <div 
                    key={job.id}
                    onClick={() => navigate(`/job/${job.id}`)}
                    className="flex-none w-[280px] bg-white border border-slate-100 rounded-2xl shadow-sm p-4 flex flex-col gap-4 cursor-pointer"
                  >
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 p-2">
                        <img alt={job.company_name} className="w-full h-full object-contain" src={job.logo_url || "https://placeholder.com/50"}/>
                      </div>
                      {job.is_hot && <span className="px-2 py-1 bg-red-50 text-red-600 text-[10px] font-bold rounded-full uppercase">HOT JOB</span>}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg leading-tight">{job.title}</h3>
                      <p className="text-sm text-[#565e74]">{job.company_name} • {job.location}</p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {job.work_type && <span className="px-2 py-0.5 bg-slate-50 text-slate-600 text-[10px] rounded-md font-medium">{job.work_type}</span>}
                    </div>
                    <button className="mt-2 w-full py-2 bg-[#ba0013] text-white font-bold rounded-lg text-sm active:scale-95 transition-transform">{t('common.apply')}</button>
                  </div>
                ))}

                {events.map((event) => (
                  <div 
                    key={event.id}
                    onClick={() => navigate(`/event/${event.id}`)}
                    className="flex-none w-[280px] bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden flex flex-col cursor-pointer"
                  >
                    <div className="h-28 relative">
                      <img alt={event.title} className="w-full h-full object-cover" src={event.image_url}/>
                      <div className="absolute top-2 left-2 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg flex flex-col items-center shadow-sm">
                        <span className="text-[8px] font-black text-red-600 uppercase">{new Date(event.date).toLocaleDateString('tr-TR', { month: 'short' })}</span>
                        <span className="text-sm font-bold">{new Date(event.date).getDate()}</span>
                      </div>
                    </div>
                    <div className="p-4 flex flex-col flex-1">
                      <h3 className="font-bold text-base leading-tight mb-1">{event.title}</h3>
                      <p className="text-xs text-[#565e74] mb-3 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[12px]">location_on</span> {event.location}
                      </p>
                      <button className="mt-auto w-full py-2 border border-[#ba0013] text-[#ba0013] font-bold rounded-lg text-sm active:scale-95 transition-transform">{t('common.register')}</button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </section>

        {/* Bento Grid Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* My Tickets / Payment Link Section */}
          <div 
            onClick={() => navigate('/my-tickets')}
            className="bg-slate-900 rounded-2xl p-6 text-white overflow-hidden relative group min-h-[220px] cursor-pointer"
          >
             <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                   <div className="flex items-center gap-2 mb-4">
                      <span className="material-symbols-outlined text-white">confirmation_number</span>
                      <h2 className="font-bold text-lg tracking-tight">{t('dashboard.myTickets')}</h2>
                   </div>
                   <p className="text-slate-400 text-sm font-medium">{t('dashboard.upcomingEventsCount')}</p>
                   <p className="text-3xl font-extrabold mt-1">0 Adet</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 flex items-center justify-between border border-white/10 mt-6">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white">
                         <span className="material-symbols-outlined max-w-full" style={{fontVariationSettings: "'FILL' 1"}}>qr_code_2</span>
                      </div>
                      <div>
                         <p className="text-xs font-bold text-white">Hashtag Summit 2024</p>
                         <p className="text-[10px] text-emerald-400 font-bold">{t('dashboard.ticketReady')}</p>
                      </div>
                   </div>
                   <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                </div>
             </div>
             <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#ba0013] rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
          </div>

          {/* Hashtag Academy / Insights teaser */}
          <div 
            onClick={() => navigate('/insights')}
            className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-md transition-shadow"
          >
             <div>
                <div className="flex items-center justify-between mb-4">
                   <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#ba0013]">auto_stories</span>
                      <h2 className="font-bold text-lg tracking-tight">{t('dashboard.hashtagInsights')}</h2>
                   </div>
                   <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">{t('common.new')}</span>
                </div>
                <p className="font-[Manrope] font-bold text-xl mb-4 leading-snug">{t('dashboard.insightTitle')}</p>
                
                {insights.length > 0 ? (
                  <div className="flex gap-4 items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <img alt={insights[0].title} className="w-full h-full object-cover" src={insights[0].image_url}/>
                    </div>
                    <div>
                        <p className="text-sm font-bold mb-0.5">{insights[0].title}</p>
                        <div className="flex items-center gap-2 text-[10px] text-[#565e74] font-medium">
                          <span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[12px]">schedule</span> 5 dk</span>
                          <span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[12px]">visibility</span> 12.5k</span>
                        </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-20 bg-slate-50 rounded-xl animate-pulse" />
                )}
             </div>
             <button className="mt-6 w-full py-3 bg-slate-900 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 group">
                {t('dashboard.exploreAll')}
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
             </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
