import React from 'react';

export const Dashboard: React.FC = () => {
  return (
    <div className="bg-[#f7f9fb] font-[Manrope] text-[#191c1e] min-h-screen pb-32">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-800 shadow-sm z-50 pt-safe">
        <div className="flex items-center gap-3">
          <button className="p-2 text-red-600 dark:text-red-500 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors active:scale-95 duration-200 rounded-full">
            <span className="material-symbols-outlined">rocket_launch</span>
          </button>
          <span className="text-xl font-black text-red-600 dark:text-red-500 tracking-tighter font-[Manrope]">Hashtag</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors rounded-full active:scale-95 duration-200">
            <span className="material-symbols-outlined">notifications</span>
          </button>
          <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-white shadow-sm active:scale-95 transition-transform duration-200 cursor-pointer">
            <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0nI92_YBjxKXAAzo5tslNrdGUCakO1bF6kUlwtrM37d89w_ntiDU67DT8flTq7l4FYnOXLKO5Xca4Y-pqokIvomfxpUF5bOer0gZ2rjZYe8MzkPqnaIIMGrjYUmaJ15WH4Q3GFbHOqowul61Y7y-03XvZPm4Yqv_0o4hHGCPhbYFxWNTwPUrwrM-LBMjpDOiBg-Hr25e6AWIsk3Bv8p1ZEinqCwV30GWka2FyV4SYG0UYDW6gSrBaJOJFe6DDxAsdxzs88QspZswx"/>
          </div>
        </div>
      </header>

      <main className="pt-24 px-4 md:px-8 max-w-7xl mx-auto space-y-6">
        {/* Welcome Section */}
        <section className="mb-12">
          <h1 className="font-[Manrope] text-[32px] font-bold tracking-tight text-[#191c1e] leading-snug">Merhaba, User Name! 👋</h1>
          <p className="font-[Manrope] text-[18px] text-[#565e74] mt-2">Bugün kariyerin için ne yapmak istersin?</p>
        </section>

        {/* Quick Actions & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quick Actions */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button className="flex flex-col items-center justify-center p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95 group">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-3 group-hover:bg-[#ba0013] transition-colors">
                <span className="material-symbols-outlined text-[#ba0013] group-hover:text-white">description</span>
              </div>
              <span className="font-[Manrope] text-[14px] font-bold">CV Oluştur</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95 group">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-3 group-hover:bg-[#ba0013] transition-colors">
                <span className="material-symbols-outlined text-[#ba0013] group-hover:text-white">business_center</span>
              </div>
              <span className="font-[Manrope] text-[14px] font-bold">İş Bul</span>
            </button>
            <button className="flex flex-col items-center justify-center p-6 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95 group">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center mb-3 group-hover:bg-[#ba0013] transition-colors">
                <span className="material-symbols-outlined text-[#ba0013] group-hover:text-white">confirmation_number</span>
              </div>
              <span className="font-[Manrope] text-[14px] font-bold">Etkinliğe Katıl</span>
            </button>
          </div>

          {/* Active Applications Summary */}
          <div className="bg-white border border-slate-100 rounded-xl shadow-sm p-6 flex flex-col justify-between relative overflow-hidden mt-6 lg:mt-0">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="font-[Manrope] text-[14px] font-semibold tracking-wider text-[#565e74]">Aktif Başvurular</span>
                <span className="material-symbols-outlined text-[#565e74] text-sm">trending_up</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-extrabold text-[#ba0013]">12</span>
                <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+2 Yeni</span>
              </div>
              <div className="mt-6 border-t border-slate-50 pt-4">
                <p className="text-xs text-[#565e74] font-medium uppercase tracking-wider mb-2">Son Durum</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-xs">apartment</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold truncate">Frontend Developer</p>
                    <p className="text-[10px] text-emerald-600 font-bold">Mülakat Daveti Alındı</p>
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
            <h2 className="font-[Manrope] text-[20px] font-bold">Senin İçin Önerilen Fırsatlar</h2>
            <button className="text-[#ba0013] font-bold text-sm flex items-center gap-1 hover:underline">
              Tümünü Gör <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>
          <div className="flex overflow-x-auto gap-4 pb-4 -mx-4 px-4 hide-scrollbar">
            {/* Job Card */}
            <div className="flex-none w-[280px] bg-white border border-slate-100 rounded-2xl shadow-sm p-4 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 p-2">
                  <img alt="Google" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANnUZYU6rS-XLWc_s8KOOOPV8Y1Dy7i7Hh9S5tZb7gp_FrnfOIwbOnTWm8VEC15KVc4pY06P433sjLs6uOz4diWPXmI8jbFy81EP8tTPCb5gYyMesRc_HtNKP_7ry_xL2VGU6cv7D_v9QpdWmoT_YcjrBLD_fcgj72dbeNu0ZU6pmR9p6Vba7aO0HS365-C0NoHQ9AvKNWtU0X5zBEqAXJkRTThlc_j6pxQISKSid6IuU_xy0BwpCvi9Y50MSmd_GMKv9lnTEW9bTF"/>
                </div>
                <span className="px-2 py-1 bg-red-50 text-red-600 text-[10px] font-bold rounded-full">HOT JOB</span>
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">UX Designer</h3>
                <p className="text-sm text-[#565e74]">Google • Dublin, Ireland</p>
              </div>
              <div className="flex flex-wrap gap-1">
                <span className="px-2 py-0.5 bg-slate-50 text-slate-600 text-[10px] rounded-md font-medium">Remote</span>
                <span className="px-2 py-0.5 bg-slate-50 text-slate-600 text-[10px] rounded-md font-medium">Full-time</span>
              </div>
              <button className="mt-2 w-full py-2 bg-[#ba0013] text-white font-bold rounded-lg text-sm active:scale-95 transition-transform">Başvur</button>
            </div>

            {/* Event Card */}
            <div className="flex-none w-[280px] bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden flex flex-col">
              <div className="h-28 relative">
                <img alt="Tech Event" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6CngUqfFDIoyjVWHFugoDbCeklweKNYUKUZr4rai6nuZxWCYZukYGpVyGW3jF02QcmaBIJ_0xcKLRf8Md9iBRsvbrR6Cj0tmmjvebxVcjQTWYQpIzV2IaKCI8jLzpSRTfyWqDXrkAR4uRrB5fZ5mgY7P0RMwwg8wxMOgy15PE8MsgyD3xCyOYCUtsMkxouiyGVjdtIewJPuR4m2zjUiJ3HZ0eISAjKKlvzciU5E4woSxRijIMgRbp9qZ2pTXqHVPBBvCOOzEuMQig"/>
                <div className="absolute top-2 left-2 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-lg flex flex-col items-center shadow-sm">
                  <span className="text-[8px] font-black text-red-600 uppercase">Haz</span>
                  <span className="text-sm font-bold">15</span>
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-bold text-base leading-tight mb-1">Career Launch 2024</h3>
                <p className="text-xs text-[#565e74] mb-3 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[12px]">location_on</span> İstanbul, TR
                </p>
                <button className="mt-auto w-full py-2 border border-[#ba0013] text-[#ba0013] font-bold rounded-lg text-sm active:scale-95 transition-transform">Kayıt Ol</button>
              </div>
            </div>

            {/* Course/Job mix card */}
            <div className="flex-none w-[280px] bg-white border border-slate-100 rounded-2xl shadow-sm p-4 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 p-2 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#ba0013]">terminal</span>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">Python for Data Science</h3>
                <p className="text-sm text-[#565e74]">Hashtag Academy • 12 Saat</p>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-2">
                <div className="bg-[#ba0013] h-full w-2/3"></div>
              </div>
              <p className="text-[10px] text-[#565e74] font-medium">Eğitimin %65'i tamamlandı</p>
              <button className="mt-auto w-full py-2 bg-slate-900 text-white font-bold rounded-lg text-sm active:scale-95 transition-transform">Devam Et</button>
            </div>
          </div>
        </section>

        {/* Bento Grid Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Hashtag Card Section */}
          <div className="bg-slate-900 rounded-2xl p-6 text-white overflow-hidden relative group min-h-[220px]">
             <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                   <div className="flex items-center gap-2 mb-4">
                      <span className="material-symbols-outlined text-white">credit_card</span>
                      <h2 className="font-bold text-lg tracking-tight">Hashtag Card</h2>
                   </div>
                   <p className="text-slate-400 text-sm font-medium">Güncel Bakiyen</p>
                   <p className="text-3xl font-extrabold mt-1">₺2,450.00</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 flex items-center justify-between border border-white/10 mt-6">
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white">
                         <span className="material-symbols-outlined max-w-full" style={{fontVariationSettings: "'FILL' 1"}}>local_cafe</span>
                      </div>
                      <div>
                         <p className="text-xs font-bold text-white">Kahve Dünyası</p>
                         <p className="text-[10px] text-emerald-400 font-bold">%20 İndirim Kazandın!</p>
                      </div>
                   </div>
                   <span className="material-symbols-outlined text-slate-400">chevron_right</span>
                </div>
             </div>
             {/* Abstract card graphic */}
             <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#ba0013] rounded-full opacity-30 group-hover:scale-110 transition-transform duration-500"></div>
             <div className="absolute -right-10 top-10 w-48 h-48 border border-white/10 rounded-3xl rotate-45 group-hover:-rotate-12 transition-transform duration-700"></div>
          </div>

          {/* Hashtag Academy Teaser */}
          <div className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col justify-between">
             <div>
                <div className="flex items-center justify-between mb-4">
                   <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[#ba0013]">auto_stories</span>
                      <h2 className="font-bold text-lg tracking-tight">Hashtag Academy</h2>
                   </div>
                   <span className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">Trend</span>
                </div>
                <p className="font-[Manrope] font-bold text-xl mb-4 leading-snug">Yeni Yetkinlikler Kazan</p>
                <div className="flex gap-4 items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                   <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img alt="Featured Course" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx6hf8dJ-mJcxPzKj3ck92ND3LUWE9lpM5IxdxFfGUhSWoE9XGQOk0u_MQd3bQo33mK7OJb2cQMlThtkEviXJS0iUiILfFSprHR50vnU1uLIoEdXTvcin1J-JHXUAhfEzULjQdbSnWgdEHQ94f1nPTk8uRxY6W9S-82q_VrAVCcJZayRRWOwo12kFajgdx5qKrvvqgx3nI1nyIBTynqrNlEe9zSnNxcoysjjdLawE18ZCfJw2DzQGKzexbClYhsVDvWDzGlraZDHCQ"/>
                   </div>
                   <div>
                      <p className="text-sm font-bold mb-0.5">Yapay Zeka ile Verimlilik</p>
                      <div className="flex items-center gap-2 text-[10px] text-[#565e74] font-medium">
                         <span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[12px]">schedule</span> 4.5 Saat</span>
                         <span className="flex items-center gap-0.5"><span className="material-symbols-outlined text-[12px]">star</span> 4.9</span>
                      </div>
                   </div>
                </div>
             </div>
             <button className="mt-6 w-full py-3 bg-slate-900 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 group">
                Eğitimlere Göz At
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
             </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
