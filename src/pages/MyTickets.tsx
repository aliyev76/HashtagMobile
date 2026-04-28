import React from 'react';

export const MyTickets: React.FC = () => {
  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen font-[Manrope] antialiased pb-32">
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-800 pt-safe">
        <div className="flex justify-between items-center w-full px-6 py-4">
          <div className="flex items-center gap-4">
            <button className="active:scale-95 transition-transform duration-200 text-[#ba0013]">
              <span className="material-symbols-outlined">rocket_launch</span>
            </button>
            <h1 className="text-xl font-black text-[#ba0013] tracking-tighter italic font-[Manrope]">Hashtag</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="active:scale-95 transition-transform duration-200 text-[#565e74]">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="w-8 h-8 rounded-full border-2 border-[#ba0013] overflow-hidden">
              <img 
                alt="User Profile Avatar" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPH2HAx3I_yc1sRWUUrkPN772s-yJzIpffH16euR4OuFMgyBS2TQ5OHGgEuNXjPHHyOYUk6ykT9wWTlC2r7drTjKyBQ5cs7FAUbQ2qhaEzBBBCyTpvUnfAzi9TxvXSPF78NQ5uhvA8y9XwS907DLUhHcSijeqpXEG7lPNZQuoIKl-xfVlQzPnsUklyvJ-YZoG-DbYab-kfhfLu722fqd18h2CpKy891cyc7LlAq--fYhb7cXI5UJ1XPudPzuXH9g4aLC0e4RxkMn8s" 
              />
            </div>
          </div>
        </div>
      </header>

      <main className="pt-20 px-6 space-y-8">
        {/* Page Header */}
        <section>
          <h2 className="font-[Manrope] text-[32px] font-bold text-[#191c1e] mb-2">Your Passes</h2>
          <p className="text-[16px] text-[#565e74] leading-relaxed">Access your digital entry keys for upcoming professional networking and tech summits. Keep your spark alive.</p>
        </section>

        {/* Bento Layout for Tickets */}
        <div className="space-y-6">
          {/* Active/Upcoming Section Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ba0013] animate-pulse"></span>
              <h3 className="text-[24px] font-bold text-[#191c1e]">Upcoming</h3>
            </div>
            <span className="px-3 py-1 bg-[#ffdad6] text-[#ba1a1a] text-[12px] font-bold rounded-full">2 Active</span>
          </div>

          {/* Featured Ticket Card */}
          <div className="group relative overflow-hidden bg-white border border-slate-100 rounded-2xl shadow-sm p-6 flex flex-col gap-6">
            <div className="relative h-48 rounded-xl overflow-hidden shrink-0">
              <img 
                alt="Tech Summit Stage" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZy_N0Slwl6848VuSZcD3Aq5jmNuC2Xzb_8HTVI3oJXtVJ-lz-9MDs7KvI5LHinERfA_gow-GRvLsnhzK4fgm_jwjhNDe5DDELUL1e7o4KaXU7GG5Yz407Wdaj1xnoB-4zM_a5srcosX0MphQJAEXr7byeWFGiUCQ9Nt-Z8dO9FSvH_zaw2A-_wGtg94kou0mfjGAgcQ3aJmAH5lSCXeWF5HW60JcNCn9eUVGBb9vEq8v08uh5YqbM7LQowcXL2OuNvwaG9DSG6gLo" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-[10px] font-bold opacity-80 uppercase tracking-widest">In 3 Days</p>
                <p className="text-[24px] font-black leading-none">OCT 24</p>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-[#ba0013]/10 text-[#ba0013] rounded-full text-[10px] font-bold uppercase tracking-wider">VIP PASS</span>
                  <button className="text-[#565e74] opacity-40">
                    <span className="material-symbols-outlined">more_horiz</span>
                  </button>
                </div>
                <h4 className="text-[24px] font-bold text-[#191c1e] mb-2 leading-tight">NextGen Tech Catalyst Summit 2024</h4>
                <div className="flex flex-wrap gap-4 text-[#565e74]">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">location_on</span>
                    <span className="text-[14px] font-medium">Innovation Hub, SF</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                    <span className="text-[14px] font-medium">09:00 AM - 05:00 PM</span>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <button className="flex-1 bg-[#ba0013] text-white font-bold text-[14px] py-4 rounded-xl shadow-lg shadow-[#ba0013]/20 hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
                  VIEW DIGITAL PASS
                </button>
                <button className="p-4 border-2 border-[#565e74] text-[#565e74] rounded-xl active:scale-95 transition-all">
                  <span className="material-symbols-outlined">share</span>
                </button>
              </div>
            </div>
          </div>

          {/* Smaller Ticket Card */}
          <div className="bg-white border border-slate-100 rounded-2xl shadow-sm p-6 space-y-4 group">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 bg-[#eceef0] rounded-xl flex items-center justify-center group-hover:bg-[#ffdad6] transition-colors duration-300">
                <span className="material-symbols-outlined text-[#ba0013]">terminal</span>
              </div>
              <span className="px-3 py-1 bg-[#dae2fd] text-[#3f465c] text-[10px] font-bold rounded-full uppercase">Standard</span>
            </div>
            <div>
              <h4 className="text-[20px] font-bold text-[#191c1e] mb-1">Founders Circle Networking Night</h4>
              <p className="text-[16px] text-[#565e74] mb-2">Nov 12 • 6:30 PM</p>
              <div className="flex items-center gap-1 text-[#565e74]">
                <span className="material-symbols-outlined text-[16px]">location_on</span>
                <span className="text-[12px] font-medium">The Red Attic, Downtown</span>
              </div>
            </div>
            <button className="w-full py-3 border-2 border-[#ba0013] text-[#ba0013] font-bold text-[14px] rounded-xl hover:bg-[#ba0013] hover:text-white transition-all duration-300 flex items-center justify-center gap-2 active:scale-95">
              <span className="material-symbols-outlined text-[18px]">qr_code</span>
              QR CODE
            </button>
          </div>

          {/* History Section */}
          <div className="pt-4">
            <h3 className="text-[24px] font-bold text-[#191c1e] mb-4">History</h3>
            <div className="space-y-4">
              {/* Past Item 1 */}
              <div className="flex items-center justify-between p-4 bg-[#f2f4f6] rounded-xl border border-transparent hover:border-slate-200 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center shrink-0 grayscale group-hover:grayscale-0 transition-all">
                    <span className="material-symbols-outlined text-[#565e74]">rocket_launch</span>
                  </div>
                  <div>
                    <h5 className="text-[14px] font-bold text-[#191c1e]">Startup Launchpad Hackathon</h5>
                    <p className="text-[10px] text-[#565e74] font-medium uppercase tracking-wider">Sep 15, 2024 • Completed</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden sm:block px-2 py-0.5 bg-[#e0e3e5] text-[#565e74] text-[10px] font-bold rounded-full uppercase">Certificate Issued</span>
                  <button className="text-[#565e74] hover:text-[#ba0013] transition-colors active:scale-90">
                    <span className="material-symbols-outlined">file_download</span>
                  </button>
                </div>
              </div>
              {/* Past Item 2 */}
              <div className="flex items-center justify-between p-4 bg-[#f2f4f6] rounded-xl border border-transparent hover:border-slate-200 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center shrink-0 grayscale group-hover:grayscale-0 transition-all">
                    <span className="material-symbols-outlined text-[#565e74]">psychology</span>
                  </div>
                  <div>
                    <h5 className="text-[14px] font-bold text-[#191c1e]">AI Ethics & Future of Work Seminar</h5>
                    <p className="text-[10px] text-[#565e74] font-medium uppercase tracking-wider">Aug 22, 2024 • Completed</p>
                  </div>
                </div>
                <button className="text-[#565e74] hover:text-[#ba0013] transition-colors active:scale-90">
                  <span className="material-symbols-outlined">file_download</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyTickets;
