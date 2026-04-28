import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Events: React.FC = () => {
  const navigate = useNavigate();
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
              <img alt="User Profile" className="w-8 h-8 rounded-full border border-slate-200 shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzZEiRcG8gjVLyFWkQ5r_Crl4XAXSVyBXbbYJ1x40MLukuLXy2bOnbio2lSjHDuPWMF1k0teA7Dmu1xcdzr6ygsKPEb-pHp261zmmlAfZUn8aSHqYNYj2cTzQ4BYw8p1PhytcnUSGbXzSqEVuDbx4d3gx3Bzst3SabfjaNNrSgkLPHfkTuO-ZDfulEDPsBgnU_REvX9rsITVToGtmUfSRWp_DBV_qWjQwVhKwOZf9wXVychW-sSSEx8n8i1639edmj-rkIV-3zPpHJ" />
            </div>
          </div>
        </div>
      </header>

      <main className="pt-16 md:pb-8">
        {/* Hero Section: Featured Event */}
        <section className="relative w-full h-[400px] md:h-[500px] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img alt="Hashtag Summit 2024" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1NYoufZGGQ2hQ5iayabCZ6v6mwZwGPx-ZvV3PaKEXh2nsllJOWEEP2U7jJiofO4LDGvT9U58LjR8n6pNKl1ZzpPCALswCH6gC-7fYEHT7lP-9XwktKZNPNygZB2i_1bPX1bv5jDzi1P2pXmt-vrP11luxdGMXJVzNTvZYnkRXVBNH6sd5fI80FNjaHD0gqtW0CdMYUrhYDYlEzuC_RSXteHbWIKDQHfVtLx5k50kiLb-WJx45cjecYIB-jxCQDAXTM4g_DeVt6ic_" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
            <div className="max-w-2xl">
              <span className="inline-block px-3 py-1 bg-[#ba0013] text-white text-[12px] rounded-full mb-4 font-bold tracking-wider">ÖNE ÇIKAN</span>
              <h1 className="font-[Manrope] text-[48px] font-extrabold text-white mb-4 leading-tight">Hashtag Summit 2024</h1>
              <p className="font-[Manrope] text-[18px] text-white/90 mb-8 max-w-lg">Kariyerini şekillendirecek vizyonerlerle tanış, geleceğin teknolojilerini yerinde keşfet.</p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#ba0013] hover:bg-red-700 text-white font-bold text-[14px] px-8 py-4 rounded-xl shadow-lg transition-transform active:scale-95">Bilet Al</button>
                <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 font-bold text-[14px] px-8 py-4 rounded-xl transition-all">Detayları Gör</button>
              </div>
            </div>
          </div>
        </section>

        {/* Discovery & Filters */}
        <div className="max-w-7xl mx-auto px-6 mt-12">
          {/* Categories Row */}
          <div className="flex items-center justify-between mb-8 overflow-x-auto hide-scrollbar -mx-6 px-6">
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-[#ba0013] text-white rounded-full font-semibold text-[14px] shadow-md transition-all whitespace-nowrap">
                <span className="material-symbols-outlined">stars</span>
                Zirveler
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-[#565e74] border border-slate-200 rounded-full font-semibold text-[14px] hover:bg-slate-50 transition-all whitespace-nowrap">
                <span className="material-symbols-outlined">construction</span>
                Atölyeler
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-[#565e74] border border-slate-200 rounded-full font-semibold text-[14px] hover:bg-slate-50 transition-all whitespace-nowrap">
                <span className="material-symbols-outlined">groups</span>
                Networking
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-white text-[#565e74] border border-slate-200 rounded-full font-semibold text-[14px] hover:bg-slate-50 transition-all whitespace-nowrap">
                <span className="material-symbols-outlined">emoji_events</span>
                Yarışmalar
              </button>
            </div>
          </div>

          {/* Main Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar Filters (Hidden on Mobile typically, or styled differently) */}
            <aside className="hidden lg:block lg:col-span-1 space-y-8">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h3 className="font-bold text-[24px] text-[#191c1e] mb-6">Filtrele</h3>
                <div className="space-y-6">
                  <div>
                    <label className="font-bold text-[14px] block mb-3 text-[#191c1e]">Etkinlik Türü</label>
                    <div className="space-y-3">
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input defaultChecked className="w-5 h-5 rounded border-slate-300 text-[#ba0013] focus:ring-[#ba0013]" type="checkbox"/>
                        <span className="font-[Manrope] text-[16px] text-[#565e74] group-hover:text-[#191c1e]">Fiziksel</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="w-5 h-5 rounded border-slate-300 text-[#ba0013] focus:ring-[#ba0013]" type="checkbox"/>
                        <span className="font-[Manrope] text-[16px] text-[#565e74] group-hover:text-[#191c1e]">Online</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <input className="w-5 h-5 rounded border-slate-300 text-[#ba0013] focus:ring-[#ba0013]" type="checkbox"/>
                        <span className="font-[Manrope] text-[16px] text-[#565e74] group-hover:text-[#191c1e]">Hibrit</span>
                      </label>
                    </div>
                  </div>
                  <hr className="border-slate-100"/>
                  <div>
                    <label className="font-bold text-[14px] block mb-3 text-[#191c1e]">Tarih</label>
                    <select className="w-full bg-[#f2f4f6] border-none rounded-xl font-[Manrope] text-[16px] px-4 py-3 focus:ring-2 focus:ring-[#ba0013]">
                      <option>Bu Hafta</option>
                      <option>Bu Ay</option>
                      <option>Gelecek Ay</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Promo Card */}
              <div className="relative bg-[#0d1c2f] rounded-2xl p-6 overflow-hidden text-white shadow-xl">
                <div className="relative z-10">
                  <h4 className="font-bold text-[24px] mb-2 leading-tight">Erken Kayıt Fırsatı!</h4>
                  <p className="font-[Manrope] text-[16px] text-white/80 mb-4">%25 indirimle Hashtag Card sahiplerine özel.</p>
                  <button className="w-full py-3 bg-white text-[#0d1c2f] font-bold text-[14px] rounded-xl hover:bg-slate-100 transition-colors">Kartını Al</button>
                </div>
                <div className="absolute -right-4 -bottom-4 opacity-10">
                  <span className="material-symbols-outlined text-[120px]" style={{fontVariationSettings: "'FILL' 1"}}>credit_card</span>
                </div>
              </div>
            </aside>

            {/* Event Grid */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h2 className="font-bold text-[24px] text-[#191c1e]">Yaklaşan Etkinlikler</h2>
                <span className="font-[Manrope] text-[16px] text-[#565e74] hidden sm:block">24 Etkinlik Bulundu</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Event Card 1 */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img alt="UX Research Workshop" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoGEgXhKkilj41p-pQv7F5kjumlPo1DnzMiCtl1x0gL2Hpca8V1ADrO3gP-LFKDOlGlCdBDP5xXcHXzvbn-VxoyxErwQJQBraKjzsfYpcLRfEND647146UCjYYOd4a-JDTfq-ss5gusxmnS8j6DyuPretp0YBT6g3o9-mPEEkhX0ARxa7ox6kxoP0Gnl0X6eyRNsEfzFOyNOBtT8vvVk4i__WKRl_WgQeYxxrCNI1kGMZ2329g7lWvUvRFBIP7wJWbI_t2YvHit3QM"/>
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg text-center shadow-sm">
                      <div className="text-[#ba0013] font-bold text-lg">15</div>
                      <div className="text-slate-500 text-[10px] uppercase tracking-wider font-bold">EKİM</div>
                    </div>
                    <div className="absolute top-4 right-4 bg-[#ba0013]/90 text-white px-3 py-1 rounded-full text-[10px] font-bold">FİZİKSEL</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-[#191c1e] group-hover:text-[#ba0013] transition-colors leading-tight">UX Research &amp; Design Workshop</h3>
                    <div className="flex flex-col gap-2 mb-6 text-[#565e74] text-[16px]">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        <span>10:00 - 16:00</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        <span>Maslak Collective, İstanbul</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                      <span className="text-[#ba0013] font-bold text-xl">₺250</span>
                      <button className="bg-[#ba0013] text-white font-semibold text-[14px] px-6 py-2 rounded-xl active:scale-95 transition-all">Bilet Al</button>
                    </div>
                  </div>
                </div>

                {/* Event Card 2 */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img alt="Tech Career Networking" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYclKAmjNxxJLbKumf2MAdc5AE2hkxmdheCk-vuQVsRI_hBcsZoGP-GPxgNn0ux7fGO37BiBabx8XMLABz2unKJRae-J0JtECt8yjZIEVsdFjqi7iIBXKpER-J-EDxX1pTUdH22XD1zf0z29clYXINPh9gYnMqFXuO2R8Mq9Vb3pBpj9AhShsgLic2s_dduPv4Ry68XARM9OHs7U79IMBxzLZEOKL4RlkihdaqUcvWUcXn6UTV7gQLUaaVzvb7bYzsWnDk4KtTJILj"/>
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg text-center shadow-sm">
                      <div className="text-[#ba0013] font-bold text-lg">18</div>
                      <div className="text-slate-500 text-[10px] uppercase tracking-wider font-bold">EKİM</div>
                    </div>
                    <div className="absolute top-4 right-4 bg-[#565e74]/90 text-white px-3 py-1 rounded-full text-[10px] font-bold">ONLINE</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-[#191c1e] group-hover:text-[#ba0013] transition-colors leading-tight">Tech Career Networking Night</h3>
                    <div className="flex flex-col gap-2 mb-6 text-[#565e74] text-[16px]">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        <span>19:30 - 21:30</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">videocam</span>
                        <span>Zoom Platformu</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                      <span className="text-[#ba0013] font-bold text-xl">Ücretsiz</span>
                      <button className="bg-[#ba0013] text-white font-semibold text-[14px] px-6 py-2 rounded-xl active:scale-95 transition-all">Kayıt Ol</button>
                    </div>
                  </div>
                </div>

                {/* Event Card 3 */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img alt="AI &amp; Future Summit" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHQjveuKPIHUK9-z_5fZ32-j-M11d3bYw4hHaGihK-_OnEQ9zfTOe4ofHOSpScSZAAG5v6hnQfmcvoDnmvAV9E0Y-lXjTzEZzDAzfMs0Puyiwy8VxOaxvZEpLkZcGX-NdxbXwKs_cIQC8bIjApKF0mp-O5b24eMIGNAwLiSCIDxW6qG59LWQ-8rUsgrG0mggsuj7_fRS_qz19JWBbRVhfs1Tz4GVy6uhnM6n6i8skL43j-r8sl6lGURpEEVmClIxXYK5i_rK5sUBtt"/>
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg text-center shadow-sm">
                      <div className="text-[#ba0013] font-bold text-lg">22</div>
                      <div className="text-slate-500 text-[10px] uppercase tracking-wider font-bold">EKİM</div>
                    </div>
                    <div className="absolute top-4 right-4 bg-[#ba0013]/90 text-white px-3 py-1 rounded-full text-[10px] font-bold">HİBRİT</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-[#191c1e] group-hover:text-[#ba0013] transition-colors leading-tight">AI &amp; Future of Work Summit</h3>
                    <div className="flex flex-col gap-2 mb-6 text-[#565e74] text-[16px]">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        <span>09:00 - 18:00</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        <span>Grand Pera, İstanbul</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                      <span className="text-[#ba0013] font-bold text-xl">₺450</span>
                      <button className="bg-[#ba0013] text-white font-semibold text-[14px] px-6 py-2 rounded-xl active:scale-95 transition-all">Bilet Al</button>
                    </div>
                  </div>
                </div>

                {/* Event Card 4 */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img alt="Full-stack Hackathon" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_Q1F_yvJjyHB_T7eo3ED34ndqt17AqvOUric7y9vUfUkTTxUqxZi8CZHDip5lsfcRxEmXp_EjunBR9hKpopV7jmyda7XkH2q-QLHhSEV9lIxU774zJ1Qtg2geMSvo9opdwGWZViIFWyHdyX240GsKfbLKEnFUI64uG5vqAeC1yv-XJbS1XLE94zB-KZNet7uoz0VYNfWCTYtjxKp4kyHHhdldBltpk-Z4FxvhjnRzeE2LH3v8cd-YMVbg9wwxfr-ScW3wavbof4Xf"/>
                    <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-lg text-center shadow-sm">
                      <div className="text-[#ba0013] font-bold text-lg">05</div>
                      <div className="text-slate-500 text-[10px] uppercase tracking-wider font-bold">KASIM</div>
                    </div>
                    <div className="absolute top-4 right-4 bg-[#ba0013]/90 text-white px-3 py-1 rounded-full text-[10px] font-bold">YARIŞMA</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-2 text-[#191c1e] group-hover:text-[#ba0013] transition-colors leading-tight">Hashtag 48h Hackathon</h3>
                    <div className="flex flex-col gap-2 mb-6 text-[#565e74] text-[16px]">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">schedule</span>
                        <span>48 Saat Kesintisiz</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-sm">location_on</span>
                        <span>YTÜ Teknopark</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                      <span className="text-[#ba0013] font-bold text-xl">Başvuruya Açık</span>
                      <button className="bg-[#ba0013] text-white font-semibold text-[14px] px-6 py-2 rounded-xl active:scale-95 transition-all">Başvur</button>
                    </div>
                  </div>
                </div>

              </div>

              {/* Pagination / Load More */}
              <div className="mt-12 text-center">
                <button className="px-8 py-3 bg-white border border-slate-200 text-[#565e74] font-bold text-[14px] rounded-xl hover:bg-slate-50 transition-all inline-flex items-center gap-2">
                  Daha Fazla Göster
                  <span className="material-symbols-outlined text-sm">expand_more</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;
