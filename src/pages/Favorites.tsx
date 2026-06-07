import { TOOLS } from '../data/tools';
import { ToolCard } from '../components/ToolCard';
import { useFavorites } from '../hooks/useFavorites';
import { Heart, Hexagon } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Favorites() {
  const { favorites, isLoaded } = useFavorites();

  if (!isLoaded) return null;

  const favoriteTools = TOOLS.filter((tool) => favorites.includes(tool.id));

  return (
    <div className="bg-transparent min-h-screen pb-12 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-white text-amber-500 rounded-xl shadow-sm border border-slate-200">
            <Heart className="w-6 h-6 stroke-current" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">My Favorites</h1>
            <p className="text-slate-500 text-sm mt-1">Quick access to your saved apiary tools and calculators.</p>
          </div>
        </div>

        {favoriteTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-12 text-center max-w-2xl mx-auto mt-12 shadow-sm">
            <div className="w-16 h-16 bg-slate-50 text-slate-300 rounded-full flex items-center justify-center mx-auto mb-6 border border-slate-200">
              <Heart className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No tools favorited yet</h3>
            <p className="text-slate-500 text-sm mb-8 max-w-md mx-auto">
              You haven't saved any tools to your favorites. Browse the Honeybee hub and click the heart icon to save tools for quick access.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center justify-center px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-sm font-semibold rounded-lg text-white transition-colors"
            >
              Browse Tools
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
