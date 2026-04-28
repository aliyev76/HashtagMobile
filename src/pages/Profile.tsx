import React from 'react';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen font-[Manrope] antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#eceef0] h-16 flex items-center px-4 pt-safe">
        <div className="flex justify-between items-center w-full px-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => window.location.href = '/'}
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3xVlYR2P32n5yOzn3ixFIy3rakL295zIkLM-tBn4oYpijO0stcewbA5LFjSgJt9ScnR0tCclVWn_BFXlSYRs3VU_GwHUB3YvvPq0Qz6N_oCmkP1Fv0wcl7kB6iLxf6x4RkkrZDUyDjV5VfIH7VRZSG18Wux3MKM1uorkhA22drdJTT9DQGXYZQzvYMlYDfLgaY6r8UT6TpIar-_zX82ZNZpiBjO6VlvBXBYGNTLxv0FH7xwYCDiEFlkpY2I77a48NxjzDoOECxRlu" 
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
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOFxwynAibLU6Izb7wfs485NWF8mElZAM-yad5XreiLMKi3g9twWJXtkwhenejyYOXWjj9gsKddvj1U97OokKqQKN-Qj0nGZXM86jlQ7Qpb6j6FqmJoNN5w3jG25wUBQO82zbOHnEceNf9m3vfMBeVUwnewyM1UvmutsOl-3pMqTUIWNA8X9KRKE24YCWMeF-R9Me1MZiFQLSivc5M2HjWohs0hCxpHiafEk_DoBCKlioDMwHBoRV1IwK3aJV-ijrsR6xzyvUqf-MY" 
                  />
                  <button className="absolute bottom-1 right-1 bg-[#ba0013] text-white p-2 rounded-full shadow-md hover:scale-105 transition-transform active:scale-95">
                    <span className="material-symbols-outlined text-[18px]">edit</span>
                  </button>
                </div>
                <h2 className="text-[24px] font-bold text-[#191c1e] mb-1">Marcus Sterling</h2>
                <p className="text-[#565e74] font-bold text-[14px] mb-4">Product Designer & Tech Enthusiast</p>
                <p className="text-[#5d3f3c] text-[16px] leading-relaxed px-4">
                  Fueling digital innovation with 5+ years of experience in UI/UX and product strategy. Currently building the future of career tech at Hashtag.
                </p>
              </div>
            </div>

            {/* CV Builder Card */}
            <div className="bg-[#ba0013] text-white rounded-2xl p-6 shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-8xl">description</span>
              </div>
              <h3 className="text-[24px] font-bold mb-1 relative z-10">ATS CV Builder</h3>
              <p className="text-[16px] opacity-90 mb-6 pr-8 relative z-10 font-[Manrope]">Optimize your resume for modern hiring algorithms and land your dream role.</p>
              <Link 
                to="/cv-builder"
                className="bg-white text-[#ba0013] font-bold text-[14px] uppercase tracking-widest px-6 py-4 rounded-xl shadow-sm hover:shadow-md active:scale-95 transition-all w-full flex items-center justify-center gap-2 relative z-10"
              >
                <span className="material-symbols-outlined">bolt</span>
                Build Now
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
                  <h4 className="text-[14px] font-bold text-[#191c1e]">My Applications</h4>
                  <p className="text-[12px] text-[#565e74]">12 Active Roles</p>
                </div>
                <span className="material-symbols-outlined text-slate-300">chevron_right</span>
              </div>
              <Link to="/my-tickets" className="bg-white rounded-xl p-4 border border-[#eceef0] flex items-center gap-4 hover:bg-[#f2f4f6] transition-colors cursor-pointer group active:scale-[0.98]">
                <div className="w-12 h-12 rounded-lg bg-[#f2f4f6] flex items-center justify-center text-[#ba0013] group-hover:bg-[#ba0013] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">confirmation_number</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-[14px] font-bold text-[#191c1e]">My Tickets</h4>
                  <p className="text-[12px] text-[#565e74]">3 Events Booked</p>
                </div>
                <span className="material-symbols-outlined text-slate-300">chevron_right</span>
              </Link>
              <div className="bg-white rounded-xl p-4 border border-[#eceef0] flex items-center gap-4 hover:bg-[#f2f4f6] transition-colors cursor-pointer group active:scale-[0.98]">
                <div className="w-12 h-12 rounded-lg bg-[#f2f4f6] flex items-center justify-center text-[#ba0013] group-hover:bg-[#ba0013] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">settings</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-[14px] font-bold text-[#191c1e]">Settings</h4>
                  <p className="text-[12px] text-[#565e74]">Privacy & Preferences</p>
                </div>
                <span className="material-symbols-outlined text-slate-300">chevron_right</span>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#eceef0] flex items-center gap-4 hover:bg-red-50 transition-colors cursor-pointer group active:scale-[0.98]">
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined">logout</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-[14px] font-bold text-red-600">Logout</h4>
                  <p className="text-[12px] text-[#565e74]">End Session</p>
                </div>
                <span className="material-symbols-outlined text-slate-300">chevron_right</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#eceef0] shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-[24px] font-bold text-[#191c1e]">Activity Stream</h3>
                <button className="text-[#ba0013] font-bold text-[14px]">View All</button>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 pb-4 border-b border-[#f2f4f6]">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#ba0013] flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-[16px] font-medium">Applied to <span className="text-[#ba0013] font-bold">Senior UX Designer</span> at Velocity Tech</p>
                    <p className="text-[12px] text-[#565e74] mt-1">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 pb-4 border-b border-[#f2f4f6]">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#dae2fd] flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-[16px] font-medium">Ticket booked for <span className="text-[#ba0013] font-bold">Product Catalyst Meetup 2024</span></p>
                    <p className="text-[12px] text-[#565e74] mt-1">Yesterday</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1.5 w-2 h-2 rounded-full bg-[#d8dadc] flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-[16px] font-medium">Updated <span className="text-[#ba0013] font-bold">ATS Optimized CV</span></p>
                    <p className="text-[12px] text-[#565e74] mt-1">3 days ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mentorship Banner */}
            <div className="relative h-48 rounded-2xl overflow-hidden shadow-md group">
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10 p-8 flex flex-col justify-center">
                <h4 className="text-white text-[24px] font-bold mb-1">Professional Mentorship</h4>
                <p className="text-white/80 text-[16px] max-w-md mb-4">Connect with industry leaders and accelerate your career growth.</p>
                <div className="flex gap-2">
                  <button className="bg-white text-[#191c1e] px-5 py-2 rounded-xl font-bold text-[12px] active:scale-95 transition-transform">Explore Mentors</button>
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
