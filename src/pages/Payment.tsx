import React from 'react';
import { useNavigate } from 'react-router-dom';

const Payment: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f7f9fb] text-[#191c1e] min-h-screen font-[Manrope] antialiased">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#eceef0] h-16 flex items-center px-4 pt-safe">
        <div className="flex justify-between items-center w-full px-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate(-1)}
              className="p-2 rounded-full hover:bg-[#f2f4f6] transition-colors active:scale-95 duration-200 text-[#565e74]"
            >
              <span className="material-symbols-outlined font-bold">arrow_back</span>
            </button>
            <span className="text-[#ba0013] font-black italic tracking-tighter text-xl">Hashtag</span>
          </div>
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-[#e0e3e5] overflow-hidden border border-[#eceef0]">
              <img 
                alt="User" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfe4YyMZ38GHAEtlEqUXEyF7noSTMGT29WOSwKFGT_0W_ozhOhQjOZ8MZDemRlKUvYEKuvUBdAIiHnciWriaaDP5FfWiVXB4u_HkIxzk5G4oWmH0kwbkjZDBuf47tCYCSVv4wim_nxLYjdCLg2qSQE0slTNW8D5rwfQJtdc3UspZdG0dF7nfJ1shI8QT15h-12YNwxEpOa967zyFTmtn_fsapAkGStlxrKWB3n6a_D7UlEB4nXJYwFvTrES885C19D7qu-3QaBDW0P" 
              />
            </div>
          </div>
        </div>
      </header>

      <main className="pt-20 px-4 pb-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start py-6">
          {/* Left Column: Order Details & Methods */}
          <div className="lg:col-span-7 space-y-6">
            <section>
              <h1 className="text-[32px] font-bold text-[#191c1e] mb-1">Checkout</h1>
              <p className="text-[16px] text-[#5d3f3c]">Review your order and complete the payment.</p>
            </section>

            {/* Order Summary Card */}
            <div className="bg-white rounded-2xl p-6 border border-[#eceef0] shadow-sm">
              <div className="flex items-start gap-6">
                <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                  <img 
                    alt="Event" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6uEwB9HqgFIrZ7TNgd8elVMrkVqiPSUmZYXlqnWMoxHsqTbn7UvplIeb-Coct49qN-pXcZSdir8DLyO2wivuZmYooKoi-OqNDpeRWjOdPRd3POe2vJgYaWua6673j346y2BDkYL35wQMlKJDEHmoo-1nJ0AQtRj-qyWvkQ0gXEW94jHfM4ZbS3ByfEOGCVHDyXIvEE-RT3p3SGUPwTl9L7_Q4V9nM3j_r875zS9HLDj3fJLjtXy0IX_E-zaAEoFjV2qkvaZpP5y1S" 
                  />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded-full bg-[#ffdad6] text-[#93000d] text-[10px] font-bold mb-2 uppercase">Career Summit 2024</span>
                      <h2 className="text-[20px] font-bold leading-tight text-[#191c1e] mb-1">Youth Catalyst Leadership Workshop</h2>
                      <div className="flex items-center text-[#5d3f3c] gap-2">
                        <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                        <span className="text-[14px] font-medium">October 24, 14:00</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[20px] font-bold text-[#ba0013]">₺450,00</p>
                      <p className="text-[12px] text-[#5d3f3c]">Qty: 1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="space-y-4">
              <h3 className="text-[12px] font-bold text-[#5d3f3c] uppercase tracking-widest px-1">Select Payment Method</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className="relative flex items-center p-6 bg-white border-2 border-[#ba0013] rounded-2xl cursor-pointer transition-all">
                  <input readOnly checked className="hidden" name="payment_method" type="radio"/>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-[#ffdad6] rounded-xl text-[#ba0013]">
                      <span className="material-symbols-outlined">credit_card</span>
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-[#191c1e]">Credit / Debit Card</p>
                      <p className="text-[12px] text-[#5d3f3c]">Visa, Mastercard, Amex</p>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <span className="material-symbols-outlined text-[#ba0013]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  </div>
                </label>
                <label className="relative flex items-center p-6 bg-white border-2 border-transparent hover:border-[#eceef0] rounded-2xl cursor-pointer transition-all">
                  <input className="hidden" name="payment_method" type="radio"/>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-[#eceef0] rounded-xl text-[#5d3f3c]">
                      <span className="material-symbols-outlined">account_balance_wallet</span>
                    </div>
                    <div>
                      <p className="text-[14px] font-bold text-[#191c1e]">Digital Wallet</p>
                      <p className="text-[12px] text-[#5d3f3c]">Apple Pay, Google Pay</p>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <div className="w-5 h-5 rounded-full border-2 border-[#d8dadc]"></div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column: Payment Form & Checkout */}
          <div className="lg:col-span-5 space-y-6 sticky top-24">
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#eceef0] shadow-xl">
              <h3 className="text-[24px] font-bold text-[#191c1e] mb-6">Payment Details</h3>
              
              {/* Saved Cards */}
              <div className="mb-6 flex gap-3 overflow-x-auto pb-2 hide-scrollbar">
                <button className="flex-shrink-0 flex items-center gap-3 px-4 py-2 bg-[#eceef0] rounded-xl border-2 border-transparent hover:border-[#ba0013] transition-all text-left">
                  <div className="w-8 h-5 bg-navy-900 rounded-sm flex items-center justify-center overflow-hidden">
                    <img alt="Visa" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmA6jHCIBki4CPr20jc4c-20OOxlGwKeOyAE3c7hcBIEsXVaEYKLxmHXehTfV6iownHWmzWuloe_lkCrEmPIs4k16RBfzgmr2oQP8TjfrVJUZM4kqTDC_zWg6sg0jTpc9rXyANz_jiF9qrDsnTuLBBrJbEuKEg9v6DdpjM3C9-xjMiIhMoyTDTMPUFlnrSCa84RKb1MXzcZt63D2kjRxurSJsxq6gCBg-Xk6_WEN_DwLJw6elZjb66HcRQUC0CxJnOoB2uc2xyxwG4"/>
                  </div>
                  <span className="text-[12px] font-bold text-[#191c1e]">•••• 4242</span>
                </button>
                <button className="flex-shrink-0 flex items-center gap-2 px-4 py-2 bg-white border-2 border-[#eceef0] rounded-xl hover:border-[#ba0013] transition-all">
                  <span className="material-symbols-outlined text-[18px]">add</span>
                  <span className="text-[12px] font-bold text-[#191c1e]">New Card</span>
                </button>
              </div>

              {/* Form Input */}
              <div className="space-y-4">
                <div>
                  <label className="block text-[14px] font-bold text-[#191c1e] mb-2">Cardholder Name</label>
                  <input className="w-full px-4 py-3 rounded-xl border border-[#eceef0] focus:border-[#ba0013] outline-none transition-all" placeholder="John Doe" type="text"/>
                </div>
                <div>
                  <label className="block text-[14px] font-bold text-[#191c1e] mb-2">Card Number</label>
                  <div className="relative">
                    <input className="w-full px-4 py-3 rounded-xl border border-[#eceef0] focus:border-[#ba0013] outline-none transition-all pr-12" placeholder="0000 0000 0000 0000" type="text"/>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                      <span className="material-symbols-outlined">lock</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[14px] font-bold text-[#191c1e] mb-2">Expiry Date</label>
                    <input className="w-full px-4 py-3 rounded-xl border border-[#eceef0] focus:border-[#ba0013] outline-none transition-all text-center" placeholder="MM / YY" type="text"/>
                  </div>
                  <div>
                    <label className="block text-[14px] font-bold text-[#191c1e] mb-2">CVV</label>
                    <input className="w-full px-4 py-3 rounded-xl border border-[#eceef0] focus:border-[#ba0013] outline-none transition-all text-center" placeholder="•••" type="password"/>
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="mt-8 pt-6 border-t border-[#f2f4f6] space-y-3">
                <div className="flex justify-between text-[16px] text-[#5d3f3c]">
                  <span>Subtotal</span>
                  <span>₺450,00</span>
                </div>
                <div className="flex justify-between text-[16px] text-[#5d3f3c]">
                  <span>Service Fee</span>
                  <span>₺12,50</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-[20px] font-bold text-[#191c1e]">Total Amount</span>
                  <div className="text-right">
                    <p className="text-[24px] font-bold text-[#ba0013]">₺462,50</p>
                    <p className="text-[12px] text-[#5d3f3c]">Including taxes</p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button 
                className="w-full mt-8 py-4 bg-[#ba0013] text-white rounded-xl text-[18px] font-bold hover:bg-[#e31e24] active:scale-[0.98] transition-all shadow-lg shadow-[#ba0013]/20 uppercase tracking-wide"
                onClick={() => {
                  alert("Payment Successful!");
                  navigate('/my-tickets');
                }}
              >
                Ödemeyi Tamamla
              </button>
              
              <div className="mt-6 flex items-center justify-center gap-2 text-[#5d3f3c]">
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
                <span className="text-[12px] font-medium">Secure 256-bit SSL encrypted payment</span>
              </div>
            </div>
            
            <div className="p-4 text-center">
              <p className="text-[12px] text-[#5d3f3c] mb-1">Need help with your purchase?</p>
              <button className="text-[#ba0013] font-bold text-[14px] hover:underline decoration-2 underline-offset-4">Contact Support</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Payment;
