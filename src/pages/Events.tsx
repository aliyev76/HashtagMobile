import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { useTranslation } from '../hooks/useTranslation';

export const Events: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [events, setEvents] = useState<any[]>([]);
  const [featuredEvent, setFeaturedEvent] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const { data } = await supabase
        .from('events')
        .select('*')
        .order('date', { ascending: true });

      if (data) {
        setEvents(data);
        setFeaturedEvent(data.find(e => e.is_featured) || data[0]);
      }
      setLoading(false);
    };

    fetchEvents();
  }, []);

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
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <button className="material-symbols-outlined text-slate-600 dark:text-slate-400 p-2 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors active:scale-95 duration-200">
                notifications
              </button>
              <img alt="User Profile" className="w-10 h-10 rounded-full border border-slate-200 shadow-sm" src="https://ui-avatars.com/api/?name=User&background=ba0013&color=fff" />
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16 md:pb-8">
        {/* Hero Section: Featured Event */}
        {featuredEvent && (
          <section className="relative w-full h-[400px] md:h-[500px] flex items-end overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img alt={featuredEvent.title} className="w-full h-full object-cover" src={featuredEvent.image_url} />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
              <div className="max-w-2xl">
                <span className="inline-block px-3 py-1 bg-[#ba0013] text-white text-[12px] rounded-full mb-4 font-bold tracking-wider">{t('events.featured')}</span>
                <h1 className="font-[Manrope] text-[48px] font-extrabold text-white mb-4 leading-tight">{featuredEvent.title}</h1>
                <p className="font-[Manrope] text-[18px] text-white/90 mb-8 max-w-lg">{featuredEvent.description}</p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#ba0013] hover:bg-red-700 text-white font-bold text-[14px] px-8 py-4 rounded-xl shadow-lg transition-transform active:scale-95">{t('events.buyTicket')}</button>
                  <button onClick={() => navigate(`/event/${featuredEvent.id}`)} className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold text-[14px] px-8 py-4 rounded-xl transition-all">{t('events.viewDetails')}</button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Discovery & Filters */}
        <div className="max-w-7xl mx-auto px-6 mt-12">
          {/* Categories Row */}
          <div className="flex items-center justify-between mb-8 overflow-x-auto hide-scrollbar -mx-6 px-6">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-[#ba0013] text-white rounded-full font-semibold text-[14px] shadow-md transition-all whitespace-nowrap">
                <span className="material-symbols-outlined">stars</span>
                {t('events.categories.summits')}
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-[#565e74] border border-slate-200 rounded-full font-semibold text-[14px] hover:bg-slate-50 transition-all whitespace-nowrap">
                <span className="material-symbols-outlined">construction</span>
                {t('events.categories.workshops')}
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-[#565e74] border border-slate-200 rounded-full font-semibold text-[14px] hover:bg-slate-50 transition-all whitespace-nowrap">
                <span className="material-symbols-outlined">groups</span>
                {t('events.categories.networking')}
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-[#565e74] border border-slate-200 rounded-full font-semibold text-[14px] hover:bg-slate-50 transition-all whitespace-nowrap">
                <span className="material-symbols-outlined">emoji_events</span>
                {t('events.categories.competitions')}
              </button>
            </div>
          </div>

          {/* Main Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <aside className="hidden lg:block lg:col-span-1 space-y-8">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-[24px] text-[#191c1e] mb-6">{t('events.filterTitle')}</h3>
                <div className="space-y-6">
                  <div>
                    <label className="font-bold text-[14px] block mb-3 text-[#191c1e]">{t('events.eventType')}</label>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input defaultChecked className="w-5 h-5 rounded border-slate-300 text-[#ba0013] focus:ring-[#ba0013]" type="checkbox"/>
                        <span className="font-[Manrope] text-[16px] text-[#565e74] group-hover:text-[#191c1e]">{t('events.physical')}</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="w-5 h-5 rounded border-slate-300 text-[#ba0013] focus:ring-[#ba0013]" type="checkbox"/>
                        <span className="font-[Manrope] text-[16px] text-[#565e74] group-hover:text-[#191c1e]">{t('events.online')}</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="w-5 h-5 rounded border-slate-300 text-[#ba0013] focus:ring-[#ba0013]" type="checkbox"/>
                        <span className="font-[Manrope] text-[16px] text-[#565e74] group-hover:text-[#191c1e]">{t('events.hybrid')}</span>
                      </label>
                    </div>
                  </div>
                  <hr className="border-slate-100"/>
                  <div>
                    <label className="font-bold text-[14px] block mb-3 text-[#191c1e]">{t('events.dateLabel')}</label>
                    <select className="w-full bg-[#f2f4f6] border-none rounded-xl font-[Manrope] text-[16px] px-4 py-3 focus:ring-2 focus:ring-[#ba0013]">
                      <option>{t('events.thisWeek')}</option>
                      <option>{t('events.thisMonth')}</option>
                      <option>{t('events.nextMonth')}</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="relative bg-[#0d1c2f] rounded-2xl p-6 overflow-hidden text-white shadow-xl">
                <div className="relative z-10">
                  <h4 className="font-bold text-[24px] mb-2 leading-tight">{t('events.promoTitle')}</h4>
                  <p className="font-[Manrope] text-[16px] text-white/80 mb-4">{t('events.promoSubtitle')}</p>
                  <button className="w-full py-3 bg-white text-[#0d1c2f] font-bold text-[14px] rounded-xl hover:bg-slate-100 transition-colors">{t('events.getCard')}</button>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10">
                  <span className="material-symbols-outlined text-[120px]" style={{fontVariationSettings: "'FILL' 1"}}>credit_card</span>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-[24px] text-[#191c1e]">{t('events.upcomingEvents')}</h2>
                <span className="font-[Manrope] text-[16px] text-[#565e74] hidden sm:block">{t('events.foundCount', { count: events.length.toString() })}</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {loading ? (
                  [1, 2, 3, 4].map(i => (
                    <div key={i} className="h-[400px] bg-white animate-pulse rounded-2xl border border-slate-100" />
                  ))
                ) : (
                  events.map((event) => (
                    <div 
                      key={event.id}
                      onClick={() => navigate(`/event/${event.id}`)}
                      className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300 cursor-pointer"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={event.image_url}/>
                        <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg text-center shadow-sm">
                          <div className="text-[#ba0013] font-bold text-lg">{new Date(event.date).getDate()}</div>
                          <div className="text-slate-500 text-[10px] uppercase tracking-wider font-bold">{new Date(event.date).toLocaleDateString('tr-TR', { month: 'short' })}</div>
                        </div>
                        <div className="absolute top-4 right-4 bg-[#ba0013]/90 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase">{event.type || 'Fiziksel'}</div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-bold text-xl mb-2 text-[#191c1e] group-hover:text-[#ba0013] transition-colors leading-tight">{event.title}</h3>
                        <div className="flex flex-col gap-2 mb-6 text-[#565e74] text-[16px]">
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">schedule</span>
                            <span>{event.time || '09:00 - 18:00'}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="material-symbols-outlined text-sm">location_on</span>
                            <span>{event.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                          <span className="text-[#ba0013] font-bold text-xl">{event.price ? `₺${event.price}` : 'Ücretsiz'}</span>
                          <button className="bg-[#ba0013] text-white font-semibold text-[14px] px-6 py-2 rounded-xl active:scale-95 transition-all">{event.price ? t('events.buyTicket') : t('common.register')}</button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {!loading && events.length > 0 && (
                <div className="mt-12 text-center">
                  <button className="px-8 py-3 bg-white border border-slate-200 text-[#565e74] font-bold text-[14px] rounded-xl hover:bg-slate-50 transition-all inline-flex items-center gap-2">
                    {t('career.loadMore')}
                    <span className="material-symbols-outlined text-sm">expand_more</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;
