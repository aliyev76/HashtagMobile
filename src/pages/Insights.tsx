import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useTranslation } from '../hooks/useTranslation';

const Insights: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [insights, setInsights] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        setUser({ ...user, ...profile });
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const fetchInsights = async () => {
      setLoading(true);
      let query = supabase.from('insights').select('*').order('created_at', { ascending: false });

      if (filter !== 'all') {
        query = query.eq('category', filter);
      }

      if (searchQuery) {
        query = query.ilike('title', `%${searchQuery}%`);
      }

      const { data } = await query;
      if (data) setInsights(data);
      setLoading(false);
    };

    fetchInsights();
  }, [filter, searchQuery]);

  const featuredInsight = insights.find(i => i.is_featured) || insights[0];
  const otherInsights = insights.filter(i => i.id !== featuredInsight?.id);

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen font-[Manrope] antialiased pb-32">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#eceef0] h-16 flex items-center px-4 pt-safe">
        <div className="flex justify-between items-center w-full px-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => navigate('/')}
              className="p-1 hover:bg-neutral-50 transition-all active:scale-95 duration-200 rounded-xl overflow-hidden"
            >
              <img src="/hashtag-fixed.png" alt="Hashtag Logo" className="h-8 w-auto" />
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-[#565e74] hover:bg-[#f2f4f6] transition-colors p-2 rounded-full active:scale-95 duration-200">
              <span className="material-symbols-outlined font-bold">notifications</span>
            </button>
            <img 
              alt="Profile" 
              className="w-10 h-10 rounded-full border-2 border-[#eceef0] object-cover" 
              src={user?.avatar_url || `https://ui-avatars.com/api/?name=${user?.full_name || 'User'}&background=ba0013&color=fff`}
            />
          </div>
        </div>
      </header>

      <main className="pt-20 px-4 max-w-7xl mx-auto space-y-6">
        {/* Search and Categories */}
        <section className="space-y-4">
          <div className="relative group mt-4">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-[#5d3f3c]" style={{ fontVariationSettings: "'wght' 500" }}>search</span>
            <input 
              className="w-full h-14 pl-12 pr-4 bg-white border border-[#eceef0] rounded-2xl shadow-sm focus:border-[#ba0013] transition-all outline-none text-[16px]" 
              placeholder={t('insights.searchPlaceholder')}
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
            <button 
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full font-bold text-[14px] whitespace-nowrap transition-colors ${filter === 'all' ? 'bg-[#ba0013] text-white' : 'bg-[#eceef0] text-[#5d3f3c] hover:bg-[#ffdad6]'}`}
            >
              {t('insights.allInsights')}
            </button>
            {['career', 'tech', 'lifestyle'].map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full font-bold text-[14px] whitespace-nowrap transition-colors ${filter === cat ? 'bg-[#ba0013] text-white' : 'bg-[#eceef0] text-[#5d3f3c] hover:bg-[#ffdad6]'}`}
              >
                {t(`insights.categories.${cat}`)}
              </button>
            ))}
          </div>
        </section>

        {loading ? (
          <div className="flex flex-col gap-6 animate-pulse">
            <div className="h-[400px] bg-gray-200 rounded-3xl"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="h-64 bg-gray-200 rounded-2xl"></div>
              <div className="h-64 bg-gray-200 rounded-2xl"></div>
              <div className="h-64 bg-gray-200 rounded-2xl"></div>
            </div>
          </div>
        ) : (
          <>
            {/* Featured Article */}
            {featuredInsight && (
              <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <div className="md:col-span-8 relative overflow-hidden rounded-3xl h-[400px] shadow-lg group">
                  <img 
                    alt="Featured" 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    src={featuredInsight.image_url || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2070&auto=format&fit=crop'} 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 p-8 space-y-4">
                    <span className="inline-block px-3 py-1 bg-[#ba0013] text-white text-[12px] font-bold rounded-full uppercase tracking-wider">{t('insights.featuredArticle')}</span>
                    <h2 className="text-white text-[32px] font-bold leading-tight">{featuredInsight.title}</h2>
                    <div className="flex items-center gap-4 text-white/80 text-[12px] font-bold uppercase tracking-widest">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span> {t('insights.readTime', { count: featuredInsight.read_time || 5 })}</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> {new Date(featuredInsight.created_at).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-4 bg-[#ba0013] p-8 rounded-3xl flex flex-col justify-between text-white shadow-lg relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-8xl">auto_awesome</span>
                  </div>
                  <div className="space-y-4 relative z-10">
                    <span className="material-symbols-outlined text-[48px]">auto_awesome</span>
                    <h3 className="text-[24px] font-bold leading-tight">Career Catalyst Program</h3>
                    <p className="text-[16px] opacity-90 leading-relaxed font-[Manrope]">Unlock exclusive workshops and mentorship sessions tailored for high-achievers.</p>
                  </div>
                  <button className="w-full mt-6 py-4 bg-white text-[#ba0013] font-bold text-[14px] uppercase tracking-widest rounded-xl shadow-sm hover:shadow-md active:scale-95 transition-all relative z-10">{t('insights.joinNow')}</button>
                </div>
              </section>
            )}

            {/* Recent Articles */}
            <section className="space-y-6 pt-4">
              <div className="flex justify-between items-center">
                <h3 className="text-[24px] font-bold text-[#191c1e]">{t('insights.latestThinking')}</h3>
                <button className="text-[#ba0013] font-bold text-[14px] flex items-center gap-1">{t('insights.viewArchive')} <span className="material-symbols-outlined text-[18px]">arrow_forward</span></button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherInsights.map(item => (
                  <Link key={item.id} to={`/insight/${item.id}`} className="bg-white border border-[#eceef0] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col active:scale-[0.99] transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                        src={item.image_url || 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop'} 
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-[#ba0013] font-bold text-[12px] rounded-full shadow-sm uppercase">{item.category}</span>
                      </div>
                    </div>
                    <div className="p-6 space-y-4 flex flex-col flex-1">
                      <h4 className="text-[20px] font-bold group-hover:text-[#ba0013] transition-colors leading-tight">{item.title}</h4>
                      <p className="text-[#5d3f3c] text-[15px] line-clamp-2 font-[Manrope]">{item.description}</p>
                      <div className="flex justify-between items-center pt-4 border-t border-[#eceef0] mt-auto">
                        <span className="text-[12px] font-bold text-[#5d3f3c] flex items-center gap-1 uppercase tracking-wider"><span className="material-symbols-outlined text-[16px]">timer</span> {t('insights.readTime', { count: item.read_time || 5 })}</span>
                        <button className="material-symbols-outlined text-[#5d3f3c] hover:text-[#ba0013] transition-colors">bookmark</button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              {otherInsights.length === 0 && (
                <p className="text-[#565e74] text-center py-12">{t('common.noData')}</p>
              )}
            </section>
          </>
        )}

        {/* Newsletter OTA */}
        <section className="bg-[#191c1e] text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 mb-8 shadow-xl">
          <div className="flex-1 space-y-4">
            <h3 className="text-[32px] font-bold leading-tight">{t('insights.stayAhead')}</h3>
            <p className="text-[18px] opacity-80 font-[Manrope]">{t('insights.newsletterSubtitle')}</p>
          </div>
          <div className="flex-1 w-full max-w-md">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                className="flex-1 px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:border-[#ba0013] outline-none text-white transition-all" 
                placeholder={t('auth.email')} 
                type="email"
              />
              <button className="px-8 py-4 bg-[#ba0013] text-white font-bold text-[14px] rounded-xl hover:bg-[#e31e24] transition-all active:scale-95 shadow-lg shadow-[#ba0013]/20">{t('insights.subscribe')}</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Insights;
