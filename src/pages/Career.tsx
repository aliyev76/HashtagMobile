import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Career: React.FC = () => {
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
          <div className="flex items-center gap-3">
            <button className="p-1 text-slate-600 dark:text-slate-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all active:scale-95 duration-200">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden ring-2 ring-white shadow-sm ml-1">
              <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg05rx6Z8u_k0muq6FmE4-zv5RXZMsjEPwv5z_soF2E0csr6qp0zwJ2KTJ0JPe7KixHPkXiRXfzZt0wH7ygtn3W5GMM6cNn4MypomIMKOXJwPUGBcB80vYfZiCkojJFm4Srp_wUCFOndMWUX_e_H4z5ymWG8Y0TyeeqxafTcyWFs83REoTwc84EP06DBvy8-EJslNDdZ2R41wgVhkbCps7naqZ6pSfV-mEu4idDSukC5tncu4AHIyk_EPHzjCbdSHxva1gAxSTyrQf" />
            </div>
          </div>
        </div>
      </header>

      <main className="pt-24 px-4 max-w-7xl mx-auto space-y-6">
        {/* Search and Filter Section */}
        <section className="mb-12">
          <div className="max-w-3xl mx-auto mb-6">
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-slate-400 group-focus-within:text-[#ba0013] transition-colors">search</span>
              </div>
              <input className="block w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-xl font-[Manrope] text-[#191c1e] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#ba0013] focus:border-transparent transition-all shadow-sm" placeholder="İş veya staj ara..." type="text"/>
            </div>
          </div>
          <div className="flex overflow-x-auto pb-2 gap-3 scrollbar-hide no-scrollbar -mx-4 px-4 sm:justify-center">
            <button className="flex-none items-center gap-2 px-6 py-2.5 rounded-full bg-[#ba0013] text-white text-[14px] font-semibold shadow-md border hover:opacity-90 active:scale-95 transition-all">
              Tümü
            </button>
            <button className="flex-none items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-slate-200 text-slate-600 text-[14px] font-semibold hover:bg-slate-50 active:scale-95 transition-all">
              Tam Zamanlı
            </button>
            <button className="flex-none items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-slate-200 text-slate-600 text-[14px] font-semibold hover:bg-slate-50 active:scale-95 transition-all">
              Staj
            </button>
            <button className="flex-none items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-slate-200 text-slate-600 text-[14px] font-semibold hover:bg-slate-50 active:scale-95 transition-all">
              Uzaktan
            </button>
            <button className="flex-none items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-slate-200 text-slate-600 text-[14px] font-semibold hover:bg-slate-50 active:scale-95 transition-all">
              Yarı Zamanlı
            </button>
          </div>
        </section>

        {/* Job Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Job Card 1 */}
          <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative group">
             <div className="flex justify-between items-start mb-4">
                <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center overflow-hidden border border-slate-100">
                   <img className="w-full h-full object-cover" alt="abstract minimalist tech company logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmh-2AJPmmKj3XrReoqCg58kjDwRMKKdHSos61OvU2WWpsqjafv5y7BT0_KWYTVl6XvyBXLw4XtbGjFaJDvmkZHikqej_Ad7BUkFvSaD0tDVyOgKVrAxbrEmH-_TBESnNoS5HzZLZab2AEmHRR6SFMnGhwdLOJelRQUokTsHdR3Y2aunyQcqx5ibLM8iRwb0_N8JgunR04cOOJtu0F4CT8LM5so8D-g3GJgMyFJ0sgfqlvjAN-oYhmQVeWEJXf6QE0Dmf9BkFIo07T" />
                </div>
                <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-[12px] font-semibold">Staj</span>
             </div>
             <h3 className="font-[Manrope] text-[24px] font-bold text-[#191c1e] mb-1 group-hover:text-[#ba0013] transition-colors leading-tight">Yazılım Stajyeri</h3>
             <p className="text-[#565e74] text-[16px] mb-4 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">business</span>
                TechCorp
             </p>
             <div className="flex flex-col gap-2 mb-6">
                <div className="flex items-center gap-2 text-slate-500 text-[12px] font-medium">
                   <span className="material-symbols-outlined text-[18px]">location_on</span>
                   İstanbul, TR
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-[12px] font-medium">
                   <span className="material-symbols-outlined text-[18px]">schedule</span>
                   2 gün önce
                </div>
             </div>
             <button className="w-full py-3 bg-[#ba0013] text-white rounded-lg text-[14px] font-semibold hover:opacity-90 active:scale-95 transition-all">Başvur</button>
          </article>

          {/* Job Card 2 */}
          <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative group">
             <div className="flex justify-between items-start mb-4">
                <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center overflow-hidden border border-slate-100">
                   <img className="w-full h-full object-cover" alt="creative agency logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoKaUA4B5E0R7oLq3HEuWqISAHumF_Evwb9Vrz0GjQQfbPH30KXVGYoGamSwlZEYR7od4c4MCLkQkvBCJ1Ni0_pDK2DzUTfzuB9Aq_mj9NDCCINDB2HejVXaZDjyUwIeJmOwPCe3lZvDQuKRNCixOwyMuUakUpxrGKg5sCIAarBt0hLHw76NC8NRpbo799ZN1tOV-l8TdfpUQTTGVMQLEmLy6UXU8pw_uFMS5G_v_Aj-OyU5PvGqyDUaGRg1vpSRX0YLVd3EGdsjaS" />
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[12px] font-semibold">Tam Zamanlı</span>
             </div>
             <h3 className="font-[Manrope] text-[24px] font-bold text-[#191c1e] mb-1 group-hover:text-[#ba0013] transition-colors leading-tight">Pazarlama Uzmanı</h3>
             <p className="text-[#565e74] text-[16px] mb-4 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">business</span>
                MediaGroup
             </p>
             <div className="flex flex-col gap-2 mb-6">
                <div className="flex items-center gap-2 text-slate-500 text-[12px] font-medium">
                   <span className="material-symbols-outlined text-[18px]">location_on</span>
                   Ankara, TR (Remote)
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-[12px] font-medium">
                   <span className="material-symbols-outlined text-[18px]">schedule</span>
                   5 saat önce
                </div>
             </div>
             <button className="w-full py-3 bg-[#ba0013] text-white rounded-lg text-[14px] font-semibold hover:opacity-90 active:scale-95 transition-all">Başvur</button>
          </article>

          {/* Job Card 3 */}
          <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative group">
             <div className="flex justify-between items-start mb-4">
                <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center overflow-hidden border border-slate-100">
                   <img className="w-full h-full object-cover" alt="finance company logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEGBLTXHg5KUl9Vj90wActxxjXSTblA795eQXhLI3HEq9ERoh_55qYiscw62HvH_FtevPUJoZDzMUAhTmP16KpJovgJQHAFk76vtxWUHIYC8KhFIs7wmO1FcxIlPePu5HlB1zPnJ49xx5TO8VO2jhAtMRrM_1iYm7DJWhXo0q18nFOhpKA0a_Qy7y0c-Srj9lN1m0dmiIQcc83n-agytYtLn72aGOGcLwbHPcOxFTKMnTOd3dmc-I-wy5dmKwva_6lenP_3xyy9cBr" />
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-[12px] font-semibold">Uzaktan</span>
             </div>
             <h3 className="font-[Manrope] text-[24px] font-bold text-[#191c1e] mb-1 group-hover:text-[#ba0013] transition-colors leading-tight">UI/UX Designer</h3>
             <p className="text-[#565e74] text-[16px] mb-4 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">business</span>
                DesignFlow
             </p>
             <div className="flex flex-col gap-2 mb-6">
                <div className="flex items-center gap-2 text-slate-500 text-[12px] font-medium">
                   <span className="material-symbols-outlined text-[18px]">location_on</span>
                   Global
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-[12px] font-medium">
                   <span className="material-symbols-outlined text-[18px]">schedule</span>
                   1 hafta önce
                </div>
             </div>
             <button className="w-full py-3 bg-[#ba0013] text-white rounded-lg text-[14px] font-semibold hover:opacity-90 active:scale-95 transition-all">Başvur</button>
          </article>

          {/* Job Card 4 */}
          <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative group">
             <div className="flex justify-between items-start mb-4">
                <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center overflow-hidden border border-slate-100">
                   <img className="w-full h-full object-cover" alt="modern startup logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaRRbrqeGYQdcF6o7OySf2TGdpuFNjmC4hSHn_ioqoav0RKBTUuh4qlrUKQ6JPamQLbPRiadca2z3Tsy6Ov9CEWo-dNd1uQxKPq9ook3xE2DX-9MCZcoYHTtOC7GOXBN2-sZCuS1L6QLiWeoe-j_k8ucOQsldL5AGUVnvLkoFx9IHFlvSp1AXY4W1mTQOt9eC5PgVGEFhdcrq7eSlKNKOTOcI3zb0dr-3O_eS_6jypmbig29L41x43a64qdr85WuS9SjLrgREFOY2k" />
                </div>
                <span className="px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-[12px] font-semibold">Yarı Zamanlı</span>
             </div>
             <h3 className="font-[Manrope] text-[24px] font-bold text-[#191c1e] mb-1 group-hover:text-[#ba0013] transition-colors leading-tight">Sosyal Medya Yönetimi</h3>
             <p className="text-[#565e74] text-[16px] mb-4 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">business</span>
                SocialWave
             </p>
             <div className="flex flex-col gap-2 mb-6">
                <div className="flex items-center gap-2 text-slate-500 text-[12px] font-medium">
                   <span className="material-symbols-outlined text-[18px]">location_on</span>
                   İzmir, TR
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-[12px] font-medium">
                   <span className="material-symbols-outlined text-[18px]">schedule</span>
                   Dün
                </div>
             </div>
             <button className="w-full py-3 bg-[#ba0013] text-white rounded-lg text-[14px] font-semibold hover:opacity-90 active:scale-95 transition-all">Başvur</button>
          </article>

          {/* Job Card 5 */}
          <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative group">
             <div className="flex justify-between items-start mb-4">
                <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center overflow-hidden border border-slate-100">
                   <img className="w-full h-full object-cover" alt="global enterprise corporate logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKLJ5Mi4indP3cSp8MRCp9_27XE4TEQEu0zKMNastRSKeOzBkVFmh78oGzaVGFvoRiGp6TK2sTPyjtGI7VN0iY0EHAXLRINTZvRkAqG49xIZH1ChU3tQW5R43D-yy4kACE9NXA_3WkOfsI1SR3w2_2J0RmEjt9_SaYkfsfVDjEuGOh7PKgy_JjSKgJqsqeB6eiuiFBUJxJrOT76EpFt7xCNwBEYd66ciX4vVQsk8-nIwL0tbqMGHbz4fIrv5nbsN8ORrnGOiy3U03d" />
                </div>
                <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-[12px] font-semibold">Staj</span>
             </div>
             <h3 className="font-[Manrope] text-[24px] font-bold text-[#191c1e] mb-1 group-hover:text-[#ba0013] transition-colors leading-tight">Backend Developer</h3>
             <p className="text-[#565e74] text-[16px] mb-4 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">business</span>
                DataSystems
             </p>
             <div className="flex flex-col gap-2 mb-6">
                <div className="flex items-center gap-2 text-slate-500 text-[12px] font-medium">
                   <span className="material-symbols-outlined text-[18px]">location_on</span>
                   Kocaeli, TR
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-[12px] font-medium">
                   <span className="material-symbols-outlined text-[18px]">schedule</span>
                   3 gün önce
                </div>
             </div>
             <button className="w-full py-3 bg-[#ba0013] text-white rounded-lg text-[14px] font-semibold hover:opacity-90 active:scale-95 transition-all">Başvur</button>
          </article>

          {/* Job Card 6 */}
          <article className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative group">
             <div className="flex justify-between items-start mb-4">
                <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center overflow-hidden border border-slate-100">
                   <img className="w-full h-full object-cover" alt="consulting firm logo" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTi7HVldVCuUO9-f6Sw0kwLTA0RlervWLpqSGBScv5lHdqMamtC9xuc8j0jPeZnR_V0l3ITYRuCocD8LYbeoxF_nKFKJu1ZfCmn4P-NTsc7Hv_o12kQ0UMHOWZLdk_q_15v55yVPzfnQ2UbewmgAm-ORcefwtkjqjd6UDLOBMUGblVAbrjLLJ_uz5ZyK_OyFY_vLbzOpZSU_IQlsXjSInpnUztaCsXsPHD_M2hOprVGFgTQteAqhFk_7FsZUqdxT4thPkZ6esjsj-N" />
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-[12px] font-semibold">Tam Zamanlı</span>
             </div>
             <h3 className="font-[Manrope] text-[24px] font-bold text-[#191c1e] mb-1 group-hover:text-[#ba0013] transition-colors leading-tight">Satış Temsilcisi</h3>
             <p className="text-[#565e74] text-[16px] mb-4 flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">business</span>
                GrowthHub
             </p>
             <div className="flex flex-col gap-2 mb-6">
                <div className="flex items-center gap-2 text-slate-500 text-[12px] font-medium">
                   <span className="material-symbols-outlined text-[18px]">location_on</span>
                   Antalya, TR
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-[12px] font-medium">
                   <span className="material-symbols-outlined text-[18px]">schedule</span>
                   Az önce
                </div>
             </div>
             <button className="w-full py-3 bg-[#ba0013] text-white rounded-lg text-[14px] font-semibold hover:opacity-90 active:scale-95 transition-all">Başvur</button>
          </article>
        </div>

        {/* Pagination or Load More */}
        <div className="mt-12 flex justify-center pb-8">
          <button className="px-8 py-3 border border-[#ba0013] text-[#ba0013] text-[14px] font-semibold rounded-xl hover:bg-red-50 active:scale-95 transition-all">
            Daha Fazla Göster
          </button>
        </div>
      </main>
    </div>
  );
};

export default Career;
