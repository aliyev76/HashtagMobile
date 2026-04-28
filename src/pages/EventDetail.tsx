import React from 'react';
import { useNavigate } from 'react-router-dom';

export const EventDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen font-[Manrope] antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#eceef0] h-14 flex items-center px-4 pt-safe">
        <div className="flex items-center justify-between w-full">
          <button 
            onClick={() => navigate(-1)}
            className="w-10 h-10 flex items-center justify-start rounded-full active:bg-[#eceef0] transition-colors"
          >
            <span className="material-symbols-outlined text-[#191c1e]">arrow_back</span>
          </button>
          <div className="flex items-center gap-2">
            <span className="font-[Manrope] text-[24px] text-[#ba0013] italic font-black tracking-tighter">#</span>
            <h1 className="font-[Manrope] text-[14px] font-bold uppercase tracking-widest text-[#565e74]">Event Details</h1>
          </div>
          <button className="w-10 h-10 flex items-center justify-end rounded-full active:bg-[#eceef0] transition-colors">
            <span className="material-symbols-outlined text-[#191c1e]">share</span>
          </button>
        </div>
      </header>

      <main className="pt-14 pb-32">
        {/* Hero Banner Section */}
        <section className="relative w-full h-[400px] overflow-hidden bg-[#e0e3e5]">
          <img 
            alt="Tech Conference Hero" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtmec0hqPWr1ZMuTZ34sewa37an393ygq4f4cNchYnCOUF8X1PRDauKuI-NumzlAIOPPWxYw9-ZUGxMLe0rUOnD-x_-pEzzHI-XCga8yh20dP0e-HTfIXxxtSMFVaZSxPRW1IVti2F7LykqVqGFOj8mo6vii1G8Sc3Un5H0YktV2RAukKyoJA08jlHrcxppxCsXP_YNmGla4TtW2GVdsP3aqC7djGIXwJaQKfACKyhxCTTaAy7v0cwEqfcPD1xLiOMWYVJ3VdQaYaQ"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-3 py-1 bg-[#ba0013] text-white text-[12px] font-bold rounded mb-3 uppercase tracking-wider">Career Launch</span>
            <h2 className="text-white font-[Manrope] text-[32px] font-bold leading-tight">Future Creators: Design & Engineering Summit 2024</h2>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 mt-8 space-y-6">
          {/* Quick Info Chips */}
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 px-4 py-3 bg-white rounded border border-[#eceef0] flex-1 min-w-[140px]">
              <span className="material-symbols-outlined text-[#ba0013]" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_today</span>
              <div>
                <p className="text-[10px] text-[#565e74] font-bold uppercase">Date</p>
                <p className="text-[16px] font-semibold text-[#191c1e]">Oct 24, 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 bg-white rounded border border-[#eceef0] flex-1 min-w-[140px]">
              <span className="material-symbols-outlined text-[#ba0013]" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
              <div>
                <p className="text-[10px] text-[#565e74] font-bold uppercase">Time</p>
                <p className="text-[16px] font-semibold text-[#191c1e]">09:00 - 18:00</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-3 bg-white rounded border border-[#eceef0] flex-1 min-w-[140px]">
              <span className="material-symbols-outlined text-[#ba0013]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <div>
                <p className="text-[10px] text-[#565e74] font-bold uppercase">Venue</p>
                <p className="text-[16px] font-semibold text-[#191c1e]">Innovation Hub, TR</p>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white p-6 rounded border border-[#eceef0]">
            <h3 className="font-[Manrope] text-[24px] font-bold mb-4 text-[#191c1e]">About the Event</h3>
            <div className="space-y-4 text-[#5d3f3c] text-[16px] leading-relaxed">
              <p>Join the next generation of digital pioneers at the <strong>#Hashtag Design & Engineering Summit</strong>. This year, we're focusing on the intersection of generative AI and human-centric design systems. Whether you're a junior developer looking for your first big break or a senior designer aiming to sharpen your edge, this summit is the catalyst for your next career move.</p>
              <p>We have curated a high-octane itinerary featuring hands-on workshops, portfolio reviews, and exclusive networking sessions with industry leaders from top global firms. Discover how the latest technological shifts are reshaping the career landscape for young professionals.</p>
            </div>
          </div>

          {/* Speaker List */}
          <div>
            <h3 className="font-[Manrope] text-[24px] font-bold mb-4 text-[#191c1e]">Keynote Speakers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {/* Speaker 1 */}
              <div className="flex items-center gap-3 p-4 bg-white rounded border border-[#eceef0]">
                <img 
                  alt="Zeynep Yılmaz" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#ba0013]/10" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGNoFCVqmO0r2dE2eIT_zwqxWQffrLOfZ6VRctUUJKI0Ldrc5_st58XQF_xvWVwYrwW-OwCeEWiWCaApFxX7XHLJWCTiKsgwY35fJQ9Z9dqAeLR8Rmf3d839x28yEdDuj52rqoaLox-c90VnTUA6pKcfbJ8PrF4dzxnQlR9tBBydWlh0jd5MrVjtD7JQvDwW-Dgjle5uRORBtZYlqJabNRI3If25PYz4sbl9FqC1zhnl4isayy3_wvo46yknZSpOoi02oYJnhluW3D" 
                />
                <div>
                  <h4 className="text-[16px] font-bold text-[#191c1e]">Zeynep Yılmaz</h4>
                  <p className="text-[12px] text-[#565e74]">Head of Product @ TechFlow</p>
                </div>
              </div>
              {/* Speaker 2 */}
              <div className="flex items-center gap-3 p-4 bg-white rounded border border-[#eceef0]">
                <img 
                  alt="Can Demir" 
                  className="w-16 h-16 rounded-full object-cover border-2 border-[#ba0013]/10" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4aGikvOyQRnKrnsAW3rmXwt7ka3JvaqPCCFwO8YYEWYuGhAXfYkpOMAiSC_pc0Rj827RiDaJC3bBieKyv3QarO4plUAlbfJjKvvdZMi3hp4to3jcu-A6ut7PIwFuVs7xJzash87tRHdXWs1g79gIbO4RMWscEX9uVAdGFP7LU58UrsrsWfKZjvF6flyTWbktGBrOYbJNTs8GBdMknTbuzdd56qOpro_hbBSAXS_cmkEw8HhzSlv46lh1iONAjgYQRYuDTTmq3hbHF" 
                />
                <div>
                  <h4 className="text-[16px] font-bold text-[#191c1e]">Can Demir</h4>
                  <p className="text-[12px] text-[#565e74]">Principal Engineer @ ArchiSys</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Preview Card */}
          <div className="bg-white rounded border border-[#eceef0] overflow-hidden">
            <div className="h-48 bg-[#e0e3e5] relative">
              <img 
                alt="Map Location" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1ukrHQQc7vlljhB-JkUuy_5owxUDyPuxd-ZNcHxPHXF4ocJRRRad0VFqubSCYOoqodvj6ILuFu1p5gCo5RFmg1LNHUpQ-0IOo25VLhqakwq2bvp2xJeK40ZjLZi4VHE_RbAWyKcgBrC4jmrDUy4FnOsyGNwVGL790fsMXgCBKMxdNn-679zJBsIao06X0UJolZUHwJOi8i0sV8uojVnvpsTr9nQvqtIDVuT8--98S6fg9t1YSdtdVkrjSGEqvdIwzA9ab-s2au5JF" 
              />
              <div className="absolute top-2 right-2">
                <button className="bg-white/90 backdrop-blur p-2 rounded shadow-sm transition-transform active:scale-95">
                  <span className="material-symbols-outlined text-[#191c1e]">open_in_new</span>
                </button>
              </div>
            </div>
            <div className="p-4">
              <h4 className="text-[16px] font-bold text-[#191c1e] mb-1">Innovation Hub Istanbul</h4>
              <p className="text-[12px] text-[#565e74]">Levent, Büyükdere Cd. No:199, 34394 Şişli/İstanbul</p>
            </div>
          </div>

          {/* Logistics / Extras */}
          <div className="bg-[#f2f4f6] p-6 rounded border border-dashed border-[#e7bdb8]">
            <h4 className="text-[14px] font-bold text-[#191c1e] mb-4">Event Perks</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#ba0013] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-[12px] text-[#565e74]">Digital Certificate of Attendance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#ba0013] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-[12px] text-[#565e74]">Lunch and Networking Drinks</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#ba0013] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                <span className="text-[12px] text-[#565e74]">Exclusive Access to Job Board</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* Fixed Bottom Action Bar */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#eceef0] z-50 pb-safe">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between gap-6">
          <div className="hidden sm:block">
            <p className="text-[10px] text-[#565e74] font-bold uppercase tracking-wider">Price per person</p>
            <div className="flex items-baseline gap-1">
              <span className="font-[Manrope] text-[24px] font-bold text-[#191c1e]">₺450</span>
              <span className="text-[12px] text-[#565e74] line-through">₺600</span>
            </div>
          </div>
          <button className="flex-1 max-w-md bg-[#ba0013] hover:bg-red-700 text-white font-bold text-[14px] py-4 rounded shadow-lg shadow-[#ba0013]/10 transition-all active:scale-95 flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">confirmation_number</span>
            Bilet Al
          </button>
        </div>
      </footer>
    </div>
  );
};

export default EventDetail;
