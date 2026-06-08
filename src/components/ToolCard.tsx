import React from 'react';
import { Heart } from 'lucide-react';
import * as Icons from 'lucide-react';
import { Link } from 'react-router-dom';
import { Tool } from '../types';
import { cn } from '../lib/utils';
import { useFavorites } from '../hooks/useFavorites';

interface ToolCardProps {
  tool: Tool;
  key?: React.Key | string | number;
}

export function ToolCard({ tool }: ToolCardProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const IconComponent = (Icons as any)[tool.icon] || Icons.Wrench;
  const isFav = isFavorite(tool.id);

  let pillColors = 'text-amber-600 bg-amber-50';
  if (tool.category.includes('feed')) pillColors = 'text-blue-600 bg-blue-50';
  if (tool.category.includes('swarm')) pillColors = 'text-emerald-600 bg-emerald-50';
  if (tool.category.includes('cost')) pillColors = 'text-purple-600 bg-purple-50';
  if (tool.category.includes('queen')) pillColors = 'text-pink-600 bg-pink-50';
  if (tool.category.includes('harvest')) pillColors = 'text-orange-600 bg-orange-50';
  if (tool.category.includes('season')) pillColors = 'text-teal-600 bg-teal-50';

  return (
    <div className="glass-card tool-card p-5 rounded-xl shadow-sm flex flex-col h-full relative overflow-hidden text-slate-900">
      <div className="flex justify-between items-start mb-3 relative z-10">
        <span className={cn("text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded inline-flex items-center gap-1", pillColors)}>
          {tool.category.replace('-', ' ')}
        </span>
        
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleFavorite(tool.id);
          }}
          className={cn(
            "p-2 -mr-2 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500",
            isFav ? "heart-active" : "text-slate-300 hover:text-red-500"
          )}
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart className={cn("w-6 h-6", isFav && "fill-current")} />
        </button>
      </div>

      <div className="relative z-10 flex-grow">
        <h3 className="font-bold text-lg mb-1">
          {tool.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed mb-4">
          {tool.description}
        </p>
      </div>

      <div className="relative z-10 mt-auto flex justify-between items-center bg-transparent border-t-0 p-0">
        <span className="text-sm font-semibold text-slate-700 truncate mr-2">Outcome: <span className="text-blue-600">{tool.primaryOutcome}</span></span>
        <Link 
          to={`/tool/${tool.id}`}
          className="bg-amber-400 hover:bg-amber-500 text-slate-900 text-xs font-bold py-2 px-4 rounded-md transition-colors shrink-0 inline-flex items-center justify-center min-h-[36px]"
        >
          Open Tool
        </Link>
      </div>
    </div>
  );
}
