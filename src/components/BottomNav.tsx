import React from 'react';
import { NavLink } from 'react-router-dom';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { useTranslation } from '../hooks/useTranslation';

export const BottomNav: React.FC = () => {
  const { t } = useTranslation();

  const navItems = [
    { path: '/', label: t('nav.home'), icon: 'home' },
    { path: '/career', label: t('nav.career'), icon: 'work' },
    { path: '/events', label: t('nav.events'), icon: 'event' },
    { path: '/insights', label: t('nav.insights'), icon: 'article' },
    { path: '/profile', label: t('nav.profile'), icon: 'person' }
  ];

  const triggerHaptic = async () => {
    try {
      await Haptics.impact({ style: ImpactStyle.Light });
    } catch (e) {
      // Ignored for web preview
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 px-6 pb-6 pt-3 bg-white/95 backdrop-blur-md border-t border-neutral-100 rounded-t-[2.5rem] shadow-[0_-8px_32px_rgba(0,0,0,0.06)] pb-safe">
      <div className="flex justify-between items-center max-w-lg mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={triggerHaptic}
            className={({ isActive }) => `
              flex flex-col items-center justify-center w-16 h-14 transition-all duration-300 relative tap-highlight-transparent
              ${isActive ? "text-[#ba0013]" : "text-[#565e74]"}
            `}
          >
            {({ isActive }) => (
              <>
                <div className={`
                  p-2 rounded-2xl transition-all duration-300 flex items-center justify-center
                  ${isActive ? "bg-[#ba0013]/10 scale-110" : "bg-transparent scale-100"}
                `}>
                  {item.path === '/' ? (
                    <img 
                      src="/hashtag-fixed.png" 
                      alt="Home" 
                      className={`w-6 h-6 object-contain ${isActive ? "" : "grayscale opacity-70"}`} 
                    />
                  ) : (
                    <span 
                      className="material-symbols-outlined text-[24px]" 
                      style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                    >
                      {item.icon}
                    </span>
                  )}
                </div>
                <span className={`
                  text-[10px] mt-1 font-bold uppercase tracking-widest transition-all duration-300
                  ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
                `}>
                  {item.label}
                </span>
                {isActive && (
                  <div className="absolute -bottom-1 w-1 h-1 bg-[#ba0013] rounded-full" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default BottomNav;
