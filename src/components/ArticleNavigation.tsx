import { Link } from 'react-router-dom';
import { ArrowLeft, Home, BookOpen } from 'lucide-react';

export const ArticleNavigation = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 mb-8">
      <Link
        to="/blog"
        className="inline-flex items-center justify-center sm:justify-start gap-2 px-4 py-3 bg-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold text-sm sm:text-base"
      >
        <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
        Tous les Articles
      </Link>

      <Link
        to="/"
        className="inline-flex items-center justify-center sm:justify-start gap-2 px-4 py-3 bg-vinted text-white border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all font-space-grotesk font-bold text-sm sm:text-base"
      >
        <Home className="w-4 h-4 sm:w-5 sm:h-5" />
        Accueil
      </Link>
    </div>
  );
};
