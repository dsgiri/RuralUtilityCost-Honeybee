import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Favorites } from './pages/Favorites';
import { About, Contact, Legal, License } from './pages/SharedPages';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-slate-50 honeycomb-pattern">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/license" element={<License />} />
            {/* Fallback route for mock external links like /plan, /forecast */}
            <Route path="*" element={
              <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Master Site Page</h2>
                <p className="text-gray-500">This link would direct to the main Rural Utility Cost ecosystem page.</p>
              </div>
            } />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
