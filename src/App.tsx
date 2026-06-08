import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { CookieBanner } from './components/CookieBanner';
import { NotFound } from './pages/NotFound';
import { ToolDetail } from './pages/ToolDetail';
import { AnalyticsTracker } from './components/AnalyticsTracker';
import { Portfolio } from './pages/Portfolio';

export default function App() {
  return (
    <BrowserRouter>
      <AnalyticsTracker />
      <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50 honeycomb-pattern">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/tool/:toolId" element={<ToolDetail />} />
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <CookieBanner />
    </BrowserRouter>
  );
}

