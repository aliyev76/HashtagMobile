import React from 'react';
import { useNavigate } from 'react-router-dom';

const InsightDetail: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen font-[Manrope] antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#eceef0] h-16 flex items-center px-4 pt-safe">
        <div className="flex justify-between items-center w-full px-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 rounded-full hover:bg-[#f2f4f6] transition-colors active:scale-95 duration-200 text-[#191c1e]"
            >
              <span className="material-symbols-outlined font-bold">arrow_back</span>
            </button>
            <h1 className="text-[#ba0013] font-black italic tracking-tighter text-xl font-[Manrope]">Hashtag</h1>
          </div>
          <div className="flex items-center gap-2">
            <img 
              alt="User" 
              className="w-10 h-10 rounded-full border-2 border-[#eceef0] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqIUUzscE2UfBPF3qXZJeTmmUVXbPsaiE8yBwzVyjQqJb7rNUelwydHGBDo-s9IdKssWPe7e_KVP9I5EnY6MbaGOaEGT3qfhfmtPTNEK0EeyrpOfjZHG1RQmJS5y1SUyZ7kMZN0474DNH5fr853qF1to1hl15Da2XS-H0Ah4pDxKNPQsHt8se0VgnATlX4MOtucrFGuSQSiuQ7BI3d0E38ZigzW_iXrsAIGPEDFdJMKAH46yFNYzr-koSxgbbSV39tlOGjHAWsCxjR" 
            />
          </div>
        </div>
      </header>

      <main className="pt-16 pb-20">
        {/* Hero Section */}
        <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
          <img 
            alt="Article Header" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX836U54HuTn8wFArF8_LltxJlrD5wwLAICIpkOZ2JtWKUTaNthYrr4Tw_K5Nx_9hUu_fGztLy8ZEB_ZOton4XyFWhqp8KwvJA1plu5ufatVdBL-q7DhqwGTjk5kQ2LCYNUhJPFpPJoyYtP439nTzxJIQwGp6PAmRtWveUJfLH6UtGkw6qAjkSuuLxTyMr4C3z64vdlCvo8dBP6TAEQ0Jl7yMUvI2MlANtgKJ5QgPSoN_hXQYOuruxKNUlyJNzRVGusAf0RXW_DvQB" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 max-w-4xl mx-auto text-white">
            <div className="flex gap-2 mb-4">
              <span className="bg-[#ba0013] px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest text-white shadow-lg">Career Growth</span>
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest">7 min read</span>
            </div>
            <h2 className="text-[32px] md:text-[48px] font-bold mb-6 leading-tight">Mastering the Art of Modern Networking for Gen Z</h2>
          </div>
        </div>

        <div className="max-w-4xl mx-auto px-6 mt-8">
          {/* Author Meta */}
          <div className="flex items-center justify-between py-6 border-b border-[#eceef0]">
            <div className="flex items-center gap-4">
              <img 
                alt="Sarah Chen" 
                className="w-12 h-12 rounded-full object-cover border border-[#eceef0]" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-zLKVXy0j670FTvKvZadreMx5fP6gg1oVtWhfn9gUcr83-dGOKmUGwe5ojrQfKsBDKETk2prcXgOPY4Pje3ekCNgxPB1ysW0Qyw_Ht10n362OY3gfY2VrPNb7rnsIqfN1H4Ilp0BXmy1a9ybfuliDd-3Ny-4kD8PTU-e4vjGcUNIZM_CPn4uHbG3u92VMpcC_g6-jDQzH_Jr2MyEteR2o-wpRxj8YPdCz3MDWHrZHEkzJgCYYYI-yyxrc3-vqow6fYgIuhww51q_0" 
              />
              <div>
                <p className="font-bold text-[16px] leading-none text-[#191c1e]">Sarah Chen</p>
                <p className="text-[12px] font-bold text-[#565e74] mt-1 uppercase tracking-wider">Senior Career Strategist • Oct 24, 2023</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#eceef0] hover:bg-[#f2f4f6] transition-colors active:scale-95">
                <span className="material-symbols-outlined text-[#5d3f3c]">share</span>
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#eceef0] hover:bg-[#f2f4f6] transition-colors active:scale-95">
                <span className="material-symbols-outlined text-[#5d3f3c]">bookmark</span>
              </button>
            </div>
          </div>

          {/* Content Body */}
          <article className="py-8 text-[#191c1e] text-[18px] leading-relaxed font-[Manrope]">
            <p className="font-black text-[#ba0013] text-[22px] italic mb-8 leading-tight">
              In an era where digital presence is as vital as a physical handshake, the landscape of career advancement has undergone a seismic shift.
            </p>
            <p className="mb-6">
              For the rising generation of professionals, "networking" often carries a cold, transactional connotation. However, the most successful career trajectories in today's economy are built on <strong className="text-[#ba0013]">authentic synergy</strong> rather than business card exchanges.
            </p>
            
            <div className="my-8 rounded-2xl overflow-hidden border border-[#eceef0] bg-white p-8 shadow-sm">
              <h3 className="text-[20px] font-bold text-[#ba0013] mb-4 uppercase tracking-wider">The 3-2-1 Rule for Connection</h3>
              <ul className="space-y-4 text-[16px] text-[#565e74]">
                <li className="flex gap-4">
                  <span className="font-black text-[#ba0013] shrink-0 w-4">3</span>
                  <span className="font-semibold">Meaningful comments on industry-related LinkedIn posts per week.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-black text-[#ba0013] shrink-0 w-4">2</span>
                  <span className="font-semibold">Direct outreach messages to potential mentors in your target field.</span>
                </li>
                <li className="flex gap-4">
                  <span className="font-black text-[#ba0013] shrink-0 w-4">1</span>
                  <span className="font-semibold">Informational interview or virtual coffee chat every month.</span>
                </li>
              </ul>
            </div>

            <h2 className="text-[28px] font-bold text-[#191c1e] mb-6 leading-tight">Leveraging Digital Anchors</h2>
            <p className="mb-6">
              Your digital footprint is your 24/7 advocate. Before you ever step into a room—virtual or otherwise—your future colleagues have likely formed an impression of your expertise based on your curated "Hashtag" profile and professional contributions.
            </p>
            <p className="mb-6">
              We recommend focusing on high-signal content. Instead of reposting generic news, provide a three-sentence synthesis of how a specific trend affects your niche. This transforms you from a consumer into a thought leader.
            </p>
            <blockquote className="border-l-4 border-[#ba0013] pl-8 my-10 italic text-[24px] text-[#565e74] font-medium leading-relaxed bg-[#f7f9fb] py-6 rounded-r-2xl">
              "Visibility without value is just noise. High-octane career growth happens when your talent meets the right audience at the right time."
            </blockquote>
            <p className="mb-6">
              As you navigate this journey, remember that consistency beats intensity. The small, daily sparks of talent you share today are the fuel for the professional fire you'll light tomorrow.
            </p>
          </article>

          {/* Interaction Section */}
          <section className="border-t border-[#eceef0] py-8 mb-12">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-8">
                <button className="flex items-center gap-2 text-[#ba0013] font-black group">
                  <span className="material-symbols-outlined font-bold group-active:scale-125 transition-transform" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  <span className="text-[14px] uppercase tracking-wider">1,248 Likes</span>
                </button>
                <button className="flex items-center gap-2 text-[#565e74] font-black hover:text-[#ba0013] transition-colors">
                  <span className="material-symbols-outlined font-bold">chat_bubble</span>
                  <span className="text-[14px] uppercase tracking-wider">42 Comments</span>
                </button>
              </div>
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img 
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white object-cover" 
                    src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  />
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-[#eceef0] flex items-center justify-center text-[10px] font-black text-[#565e74] tracking-tighter cursor-default">+1k</div>
              </div>
            </div>

            {/* Comment Input */}
            <div className="bg-white rounded-2xl p-6 border border-[#eceef0] shadow-sm">
              <div className="flex gap-4">
                <img 
                  alt="Me" 
                  className="w-10 h-10 rounded-full border border-[#eceef0] object-cover" 
                  src="https://i.pravatar.cc/100?img=12" 
                />
                <div className="flex-1">
                  <textarea 
                    className="w-full border-none focus:ring-0 text-[15px] placeholder:text-[#d8dadc] resize-none font-[Manrope] outline-none" 
                    placeholder="Add to the conversation..." 
                    rows={2}
                  ></textarea>
                  <div className="flex justify-end mt-4 pt-4 border-t border-[#f2f4f6]">
                    <button className="bg-[#ba0013] text-white px-6 py-2 rounded-xl font-black text-[12px] uppercase tracking-widest active:scale-95 transition-transform shadow-lg shadow-[#ba0013]/10">
                      Post Comment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default InsightDetail;
