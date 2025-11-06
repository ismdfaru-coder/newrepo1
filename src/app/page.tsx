
'use client';

import { useDataStore } from '@/hooks/use-data-store.tsx';
import PublicLayout from './(public)/layout';
import { ArticleCard } from '@/components/article-card';

export default function Home() {
  const { articles, isInitialized } = useDataStore();

  if (!isInitialized) {
    return <PublicLayout><div className="p-8 text-center">Loading articles...</div></PublicLayout>;
  }

  return (
    <PublicLayout>
      <div className="p-4 sm:p-6 md:p-8">
        <div className="max-w-7xl mx-auto">
          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map(article => (
                    <ArticleCard key={article.id} article={article} />
                ))}
            </div>
          ) : (
            <div className="text-center py-20">
                <h2 className="text-2xl font-semibold font-headline">No articles found.</h2>
                <p className="text-muted-foreground mt-2">Please go to the admin panel to create your first article.</p>
            </div>
          )}
        </div>
      </div>
    </PublicLayout>
  );
}
