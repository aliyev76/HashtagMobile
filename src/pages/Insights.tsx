import React from 'react';
import { Link } from 'react-router-dom';

const Insights: React.FC = () => {
  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen font-[Manrope] antialiased pb-32">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#eceef0] h-16 flex items-center px-4 pt-safe">
        <div className="flex justify-between items-center w-full px-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => window.location.href = '/'}
              className="p-1 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all active:scale-95 duration-200 rounded-xl overflow-hidden"
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPyv84jxd0hOCzlLhgT0OVvtf5B2_89fuHN1X4ow5iAgqygoOxFKhadO0jUqUvWG_Ca48b3nyDEOcnYUxgRXCQ9X6ecoxKT02JnT2sQUYRYD6F0zth8uZAXlI9Pfll3TAvJ53ed7ska9dxSvaT2veLcm_DyI1hOL4QgoBG_OkYfWitwDf5GGo6BX6wOIQSqNYaed9xFal0-fk_L0auFcDi3fmzG43nsk5fyr2WHxdFPhEEY1kLXAXfUGn3E63JModoedMK39oG0RMB" 
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
              placeholder="Search insights..." 
              type="text"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 hide-scrollbar">
            <button className="px-6 py-2 bg-[#ba0013] text-white rounded-full font-bold text-[14px] whitespace-nowrap">All Insights</button>
            <button className="px-6 py-2 bg-[#eceef0] text-[#5d3f3c] hover:bg-[#ffdad6] transition-colors rounded-full font-bold text-[14px] whitespace-nowrap">Career</button>
            <button className="px-6 py-2 bg-[#eceef0] text-[#5d3f3c] hover:bg-[#ffdad6] transition-colors rounded-full font-bold text-[14px] whitespace-nowrap">Tech</button>
            <button className="px-6 py-2 bg-[#eceef0] text-[#5d3f3c] hover:bg-[#ffdad6] transition-colors rounded-full font-bold text-[14px] whitespace-nowrap">Lifestyle</button>
          </div>
        </section>

        {/* Featured Article */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 relative overflow-hidden rounded-3xl h-[400px] shadow-lg group">
            <img 
              alt="Featured" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhopKg75JjrzIFnHbZQBNG8KFERlR12VI8lBvS8SdKOfBExqBI0eihFBil5HoOJZoiuIcl8LIReFYnpsa7gbcG9-LmrUNcuER8z-uRePUL5dy4Uo4Cu_JQJHv2_1UyJTMNb2b41SxoI0wN3UB2h5hItPkcQLI9SOpwZmCxp-x0a1woqtWVi6Ysfuz2IMPq1E2wDSNyiwkKk8L5O9jDvoIqo06OLJ4bRINeXLwhRUl6d14rJMJBfyoEsG0yo4mKz4NCZ7mxOb9ajrwb" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 p-8 space-y-4">
              <span className="inline-block px-3 py-1 bg-[#ba0013] text-white text-[12px] font-bold rounded-full uppercase tracking-wider">Featured Article</span>
              <h2 className="text-white text-[32px] font-bold leading-tight">Navigating the Hybrid Era: A Guide for Graduates</h2>
              <div className="flex items-center gap-4 text-white/80 text-[12px] font-bold uppercase tracking-widest">
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">schedule</span> 8 min read</span>
                <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[16px]">calendar_today</span> Oct 12, 2023</span>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 bg-[#e31e24] p-8 rounded-3xl flex flex-col justify-between text-white shadow-lg relative overflow-hidden group">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-8xl">auto_awesome</span>
              </div>
            <div className="space-y-4 relative z-10">
              <span className="material-symbols-outlined text-[48px]">auto_awesome</span>
              <h3 className="text-[24px] font-bold leading-tight">Career Catalyst Program</h3>
              <p className="text-[16px] opacity-90 leading-relaxed font-[Manrope]">Unlock exclusive workshops and mentorship sessions tailored for high-achievers.</p>
            </div>
            <button className="w-full mt-6 py-4 bg-white text-[#ba0013] font-bold text-[14px] uppercase tracking-widest rounded-xl shadow-sm hover:shadow-md active:scale-95 transition-all relative z-10">Join Now</button>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="space-y-6 pt-4">
          <div className="flex justify-between items-center">
            <h3 className="text-[24px] font-bold text-[#191c1e]">Latest Thinking</h3>
            <button className="text-[#ba0013] font-bold text-[14px] flex items-center gap-1">View Archive <span className="material-symbols-outlined text-[18px]">arrow_forward</span></button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Article Card 1 */}
            <Link to="/insight/1" className="bg-white border border-[#eceef0] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col active:scale-[0.99] transition-all">
              <div className="relative h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASrXXqU4vbJPzyUE3YIi1nXcTUC6X8qfitkV8DHsPFgry8rUASH4ZZHs7QLcurp-VY8qYw1d3A1Yg_fzgtKAxAPFRFSpzFTJ7y1TwSKLINH4I8y62JxtSzpk8I72iLhQaNcaqrq85eYNJW6bInAtJY-X7S2lghoqoZYAXP76pn6eIr538tdRkQFeHNHQr4jJlP7pCQb06mbFxeT7wUJJw4a8vZ_4bp0DYa7zBKuB0fTAI90Ahez6daBduldrjqVRHqhs_trJuzdB-H" 
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-[#ba0013] font-bold text-[12px] rounded-full shadow-sm uppercase">Tech</span>
                </div>
              </div>
              <div className="p-6 space-y-4 flex flex-col flex-1">
                <h4 className="text-[20px] font-bold group-hover:text-[#ba0013] transition-colors leading-tight">The Future of AI in Junior Roles</h4>
                <p className="text-[#5d3f3c] text-[15px] line-clamp-2 font-[Manrope]">How automation is reshaping what entry-level positions look like and what you can do to stay ahead.</p>
                <div className="flex justify-between items-center pt-4 border-t border-[#eceef0] mt-auto">
                  <span className="text-[12px] font-bold text-[#5d3f3c] flex items-center gap-1 uppercase tracking-wider"><span className="material-symbols-outlined text-[16px]">timer</span> 5 min read</span>
                  <button className="material-symbols-outlined text-[#5d3f3c] hover:text-[#ba0013] transition-colors">bookmark</button>
                </div>
              </div>
            </Link>

            {/* Article Card 2 */}
            <Link to="/insight/2" className="bg-white border border-[#eceef0] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col active:scale-[0.99] transition-all">
              <div className="relative h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuADBO32kGECvaccGb-lfqwY7PHlZIadSqsdrc-awhMae4NDAdTbKWmTtDu29mbxFrpTL2W46WzIDvjDmCrE6sccUC8B6njj1D5RqllyAVhahF-MwR7fJdQ6hLAsJK7yaacq8Ft7kyYs-Qc9S5KIg5MFCiYTRzfwfZIOniN-x4muaNBTgZOx8O_6M4HuNKOm8WRVF631c3nKXgOS0rEd9tgMMfvlLMJL93msiYpUbGSZfAHPl0Gopr5leZPv8p9pH35PIDH0soWowyUt" 
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-[#ba0013] font-bold text-[12px] rounded-full shadow-sm uppercase">Lifestyle</span>
                </div>
              </div>
              <div className="p-6 space-y-4 flex flex-col flex-1">
                <h4 className="text-[20px] font-bold group-hover:text-[#ba0013] transition-colors leading-tight">Sustainable Hustle: Avoiding Early Burnout</h4>
                <p className="text-[#5d3f3c] text-[15px] line-clamp-2 font-[Manrope]">Why grinding 24/7 is a myth and how to build long-term career stamina through intentional rest.</p>
                <div className="flex justify-between items-center pt-4 border-t border-[#eceef0] mt-auto">
                  <span className="text-[12px] font-bold text-[#5d3f3c] flex items-center gap-1 uppercase tracking-wider"><span className="material-symbols-outlined text-[16px]">timer</span> 12 min read</span>
                  <button className="material-symbols-outlined text-[#5d3f3c] hover:text-[#ba0013] transition-colors">bookmark</button>
                </div>
              </div>
            </Link>

            {/* Article Card 3 */}
            <Link to="/insight/3" className="bg-white border border-[#eceef0] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col active:scale-[0.99] transition-all">
              <div className="relative h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3gF7AEaacSTixiYCQVx9WlwRkIOxinMQajT8jGYX71-a7kBoyokB0PD6_6HdToxofnJY0SE3tJ_cMYMshUfqA7Gd5EfJI1EIP65czmcJtl4BUqB-LAsz5rVgdgydRWqDlbPmL7qoifddLaGNbuaHoDFqopSiGxYAa4xNhDS38xcZJJvSHBZXe4vfWUHRanw-0JSD7sKk1s2n9obxUqLXJFhroCJlpgWLGuARrg3JrzTbdsIBEQKRUEctzWyTM7NFlXVSayPmmQy5C" 
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-[#ba0013] font-bold text-[12px] rounded-full shadow-sm uppercase">Career</span>
                </div>
              </div>
              <div className="p-6 space-y-4 flex flex-col flex-1">
                <h4 className="text-[20px] font-bold group-hover:text-[#ba0013] transition-colors leading-tight">Mastering the Modern Interview</h4>
                <p className="text-[#5d3f3c] text-[15px] line-clamp-2 font-[Manrope]">From technical tests to cultural fit questions, here is everything you need to know for 2024.</p>
                <div className="flex justify-between items-center pt-4 border-t border-[#eceef0] mt-auto">
                  <span className="text-[12px] font-bold text-[#5d3f3c] flex items-center gap-1 uppercase tracking-wider"><span className="material-symbols-outlined text-[16px]">timer</span> 7 min read</span>
                  <button className="material-symbols-outlined text-[#5d3f3c] hover:text-[#ba0013] transition-colors">bookmark</button>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Newsletter OTA */}
        <section className="bg-[#191c1e] text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 mb-8 shadow-xl">
          <div className="flex-1 space-y-4">
            <h3 className="text-[32px] font-bold leading-tight">Stay ahead of the curve</h3>
            <p className="text-[18px] opacity-80 font-[Manrope]">Get weekly insights on career growth, industry shifts, and productivity hacks delivered straight to your inbox.</p>
          </div>
          <div className="flex-1 w-full max-w-md">
            <div className="flex flex-col sm:flex-row gap-4">
              <input 
                className="flex-1 px-4 py-4 bg-white/10 border border-white/20 rounded-xl focus:border-[#ba0013] outline-none text-white transition-all" 
                placeholder="Email address" 
                type="email"
              />
              <button className="px-8 py-4 bg-[#ba0013] text-white font-bold text-[14px] rounded-xl hover:bg-[#e31e24] transition-all active:scale-95 shadow-lg shadow-[#ba0013]/20">Subscribe</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Insights;
