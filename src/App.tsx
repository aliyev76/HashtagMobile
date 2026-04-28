import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { App as CapacitorApp } from '@capacitor/app';
import { StatusBar, Style } from '@capacitor/status-bar';
import { supabase } from './lib/supabase';
import { BottomNav } from './components/BottomNav';
import Auth from './pages/Auth';
import Dashboard from './pages/Dashboard';
import Career from './pages/Career';
import JobDetail from './pages/JobDetail';
import CVBuilder from './pages/CVBuilder';
import Events from './pages/Events';
import EventDetail from './pages/EventDetail';
import MyTickets from './pages/MyTickets';
import Profile from './pages/Profile';
import Payment from './pages/Payment';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';

const MobileLayout = () => {
  return (
    <div className="min-h-screen bg-[#f7f9fb] pb-safe">
      <Outlet />
      <BottomNav />
    </div>
  );
};

const ProtectedRoute = ({ children, session, loading }: { children: React.ReactNode, session: any, loading: boolean }) => {
  if (loading) return null; // Or a loading spinner
  if (!session) return <Navigate to="/auth" replace />;
  return <>{children}</>;
};

function App() {
  const [session, setSession] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initApp = async () => {
      try {
        await StatusBar.setStyle({ style: Style.Light });
        await StatusBar.setBackgroundColor({ color: '#f7f9fb' });
      } catch (e) {
        // Ignored on web
      }
    };
    initApp();

    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    const backButtonListener = CapacitorApp.addListener('backButton', ({ canGoBack }) => {
      if (!canGoBack) {
        CapacitorApp.exitApp();
      } else {
        window.history.back();
      }
    });

    return () => {
      subscription.unsubscribe();
      backButtonListener.then(listener => listener.remove());
    };
  }, []);

  if (loading) return null;

  return (
    <BrowserRouter>
      <Routes>
        {/* Auth Route */}
        <Route path="/auth" element={!session ? <Auth /> : <Navigate to="/" replace />} />
        
        {/* Protected Routes */}
        <Route element={<ProtectedRoute session={session} loading={loading}><Outlet /></ProtectedRoute>}>
          {/* Full screen routes (No BottomNav) */}
          <Route path="/cv-builder" element={<CVBuilder />} />
          <Route path="/job/:id" element={<JobDetail />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/insight/:id" element={<InsightDetail />} />
          <Route path="/my-tickets" element={<MyTickets />} />
          <Route path="/payment" element={<Payment />} />
          
          {/* Tab layout routes (With BottomNav) */}
          <Route element={<MobileLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/career" element={<Career />} />
            <Route path="/events" element={<Events />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
