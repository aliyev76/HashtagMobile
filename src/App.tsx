import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import { App as CapacitorApp } from '@capacitor/app';
import { StatusBar, Style } from '@capacitor/status-bar';
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

function App() {
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

    const backButtonListener = CapacitorApp.addListener('backButton', ({ canGoBack }) => {
      if (!canGoBack) {
        CapacitorApp.exitApp();
      } else {
        window.history.back();
      }
    });

    return () => {
      backButtonListener.then(listener => listener.remove());
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {/* Full screen routes (No BottomNav) */}
        <Route path="/auth" element={<Auth />} />
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
