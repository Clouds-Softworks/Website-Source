import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

const BlogSection = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    const { data, error } = await supabase
      .from('posts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching posts:', error);
    } else {
      setPosts(data || []);
    }
  }

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Not implemented yet</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Come back later!
        </p>
      </div>
      <div className="grid gap-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-gray-800/50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
            <p className="text-gray-400 text-sm mb-4">
              {new Date(post.created_at).toLocaleDateString()}
            </p>
            <p className="text-gray-300">{post.content}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;