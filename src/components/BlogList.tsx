'use client';
import { useEffect, useState } from 'react';
import { filterPublishedPosts } from '../utils/filterPosts';
import type { CollectionEntry } from '../content/blog';
import type React from 'react';

interface Props {
  initialPosts: CollectionEntry<'blog'>[];
}

export default function BlogList({ initialPosts }: Props) {
  const [posts, setPosts] = useState<CollectionEntry<'blog'>[]>([]);

  useEffect(() => {
    const filteredAndSortedPosts = filterPublishedPosts(initialPosts);
    setPosts(filteredAndSortedPosts);
  }, [initialPosts]);

  return (
    <div className="space-y-0">
      {posts.length > 0 ? (
        <div className="space-y-16">
          {posts.map((post) => (
            <article key={post.slug} className="group">
              <a href={`/blog/${post.slug}`} className="block space-y-6">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-refuge-muted">
                  <span>{post.data.category}</span>
                  <span className="w-6 h-px bg-refuge-accent/20"></span>
                  <time dateTime={post.data.publishDate.toISOString()}>
                    {new Date(post.data.publishDate).toLocaleDateString('es-ES', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                </div>

                <div className="space-y-4">
                  <h2 className="text-3xl md:text-5xl font-serif text-refuge-dark group-hover:text-refuge-accent transition-colors tracking-tight leading-tight">
                    {post.data.title}
                  </h2>
                  <p className="text-lg text-refuge-text font-light leading-relaxed max-w-2xl italic serif opacity-80">
                    {post.data.description}
                  </p>
                </div>

                <div className="pt-2">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-refuge-muted border-b border-transparent group-hover:border-refuge-accent pb-1 transition-all">
                    leer reflexión
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      ) : (
        <div className="py-24 text-center border border-dashed border-refuge-surface rounded-refuge">
          <p className="text-refuge-muted italic serif">El silencio aún habita este espacio.</p>
        </div>
      )}
    </div>
  );
}

