import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, User } from 'lucide-react';
import { Haptics, ImpactStyle } from '@capacitor/haptics';

export const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleAction = async (e: React.FormEvent) => {
    e.preventDefault();
    try { await Haptics.impact({ style: ImpactStyle.Medium }); } catch {}
    // Placeholder logic
  };

  const toggleMode = async () => {
    try { await Haptics.impact({ style: ImpactStyle.Light }); } catch {}
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)] px-6 pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-[-100px] right-[-100px] w-64 h-64 bg-[var(--color-primary)] opacity-10 rounded-full blur-3xl mix-blend-multiply" />
      <div className="absolute bottom-[-100px] left-[-100px] w-64 h-64 bg-[var(--color-secondary)] opacity-10 rounded-full blur-3xl mix-blend-multiply" />
      
      <div className="flex-1 flex flex-col justify-center relative z-10">
        <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--color-secondary)] mb-3">
            {isLogin ? 'Hoş Geldin' : 'Kariyerine Başla'}
            <span className="text-[var(--color-primary)]">.</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            {isLogin ? "Kariyer yolculuğuna kaldığın yerden devam et." : "Hashtag ile eşsiz bir ekosisteme katıl."}
          </p>
        </div>

        <form onSubmit={handleAction} className="space-y-6">
          {!isLogin && (
            <div className="space-y-1.5 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-75">
              <label className="text-sm font-semibold text-[var(--color-secondary)] ml-1">Ad Soyad</label>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-white h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
                />
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
          )}

          <div className="space-y-1.5 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100">
            <label className="text-sm font-semibold text-[var(--color-secondary)] ml-1">E-posta</label>
            <div className="relative">
              <input 
                type="email" 
                placeholder="name@example.com" 
                className="w-full bg-white h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
              />
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <div className="space-y-1.5 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-150">
            <label className="text-sm font-semibold text-[var(--color-secondary)] ml-1">Şifre</label>
            <div className="relative">
              <input 
                type="password" 
                placeholder="••••••••" 
                className="w-full bg-white h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:outline-none focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all"
              />
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          {isLogin && (
            <div className="flex justify-end animate-in fade-in duration-500 delay-200">
              <span className="text-sm text-[var(--color-primary)] font-semibold mb-2">Şifremi unuttum</span>
            </div>
          )}

          <button 
            type="submit" 
            className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-container)] active:scale-[0.98] text-white h-14 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-[0_4px_14px_rgba(186,0,19,0.3)] animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200"
          >
            {isLogin ? 'Giriş Yap' : 'Kayıt Ol'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-8 text-center animate-in fade-in duration-500 delay-300">
          <span className="text-gray-500">
            {isLogin ? "Hesabın yok mu? " : "Zaten hesabın var mı? "}
          </span>
          <button 
            onClick={toggleMode}
            className="text-[var(--color-primary)] font-bold ml-1 active:opacity-70"
          >
            {isLogin ? "Kayıt Ol" : "Giriş Yap"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
