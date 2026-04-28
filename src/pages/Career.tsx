import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useTranslation } from '../hooks/useTranslation';

export const Career: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchJobs();
  }, [filter]);

  const fetchJobs = async () => {
    setLoading(true);
    let query = supabase
      .from('jobs')
      .select('*')
      .order('created_at', { ascending: false });

    if (filter !== 'all') {
      query = query.eq('work_type', filter);
    }

    if (searchTerm) {
      query = query.ilike('title', `%${searchTerm}%`);
    }

    const { data } = await query;
    if (data) setJobs(data);
    setLoading(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    fetchJobs();
  };

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen pb-32 font-[Manrope]">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-800 shadow-sm pt-safe">
        <div className="flex justify-between items-center w-full px-6 py-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/')}
              className="p-1 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all active:scale-95 duration-200 rounded-xl overflow-hidden"
            >
              <img src="/hashtag-fixed.png" alt="Hashtag Logo" className="h-8 w-auto" />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all active:scale-95 duration-200">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden ring-2 ring-white shadow-sm ml-1">
              <img alt="User Profile" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=User&background=ba0013&color=fff" />
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 px-4 max-w-7xl mx-auto space-y-6">
        {/* Search and Filter Section */}
        <section className="mb-12">
          <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-6">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400 group-focus-within:text-[#ba0013] transition-colors">search</span>
              </div>
              <input 
                className="block w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl font-[Manrope] text-[#191c1e] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ba0013] focus:border-transparent transition-all shadow-sm" 
                placeholder={t('career.searchPlaceholder')}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>
          <div className="flex overflow-x-auto pb-2 gap-3 scrollbar-hide no-scrollbar -mx-4 px-4 sm:justify-center">
            <button 
              onClick={() => setFilter('all')}
              className={`flex-none items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-semibold shadow-md border transition-all active:scale-95 ${filter === 'all' ? 'bg-[#ba0013] text-white' : 'bg-white border-slate-200 text-slate-600'}`}
            >
              {t('career.filters.all')}
            </button>
            <button 
              onClick={() => setFilter('Tam Zamanlı')}
              className={`flex-none items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-semibold shadow-md border transition-all active:scale-95 ${filter === 'Tam Zamanlı' ? 'bg-[#ba0013] text-white' : 'bg-white border-slate-200 text-slate-600'}`}
            >
              {t('career.filters.fullTime')}
            </button>
            <button 
              onClick={() => setFilter('Staj')}
              className={`flex-none items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-semibold shadow-md border transition-all active:scale-95 ${filter === 'Staj' ? 'bg-[#ba0013] text-white' : 'bg-white border-slate-200 text-slate-600'}`}
            >
              {t('career.filters.internship')}
            </button>
            <button 
              onClick={() => setFilter('Uzaktan')}
              className={`flex-none items-center gap-2 px-6 py-2.5 rounded-full text-[14px] font-semibold shadow-md border transition-all active:scale-95 ${filter === 'Uzaktan' ? 'bg-[#ba0013] text-white' : 'bg-white border-slate-200 text-slate-600'}`}
            >
              {t('career.filters.remote')}
            </button>
          </div>
        </section>

        {/* Job Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            [1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="h-64 bg-white animate-pulse rounded-xl border border-slate-100" />
            ))
          ) : (
            jobs.map((job) => (
              <article 
                key={job.id}
                onClick={() => navigate(`/job/${job.id}`)}
                className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative group cursor-pointer"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="w-14 h-14 rounded-lg bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-100 p-2">
                    <img className="w-full h-full object-contain" alt={job.company_name} src={job.logo_url || "https://placeholder.com/50"} />
                  </div>
                  <span className={`px-3 py-1 rounded-full text-[12px] font-semibold ${job.work_type === 'Staj' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                    {job.work_type}
                  </span>
                </div>
                <h3 className="font-[Manrope] text-[24px] font-bold text-[#191c1e] mb-1 group-hover:text-[#ba0013] transition-colors leading-tight">{job.title}</h3>
                <p className="text-[#565e74] text-[16px] mb-4 flex items-center gap-1">
                  <span className="material-symbols-outlined text-sm">business</span>
                  {job.company_name}
                </p>
                <div className="flex flex-col gap-2 mb-6">
                  <div className="flex items-center gap-2 text-slate-500 text-[12px] font-medium">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                    {job.location}
                  </div>
                  <div className="flex items-center gap-2 text-slate-500 text-[12px] font-medium">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                    {new Date(job.created_at).toLocaleDateString()}
                  </div>
                </div>
                <button className="w-full py-3 bg-[#ba0013] text-white rounded-lg text-[14px] font-semibold hover:opacity-90 active:scale-95 transition-all">{t('common.apply')}</button>
              </article>
            ))
          )}
        </div>

        {/* Pagination or Load More */}
        {!loading && jobs.length > 0 && (
          <div className="mt-12 flex justify-center pb-8">
            <button className="px-8 py-3 border border-[#ba0013] text-[#ba0013] text-[14px] font-semibold rounded-xl hover:bg-red-50 active:scale-95 transition-all">
              {t('career.loadMore')}
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Career;
