import { BLOG_POSTS } from '../data/mockData';
import { motion } from 'motion/react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

export default function Blog() {
  const blogListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Car Accessories & Modification Guides",
    "description": "Guides on ambient light for car, car projector light installation, best dash cam for car in India, and seat covers.",
    "itemListElement": BLOG_POSTS.map((post, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "url": `https://elitemodz.vercel.app/blog/${post.id}`,
      "name": post.title
    }))
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-24 pb-24">
      <SEO 
        title="Car Accessories Guides & Modification Tips | EliteModz"
        description="Explore guides on ambient light for car, car projector light installation, best dash cam for car in India, and custom styling for Baleno, Brezza & Swift cars."
        canonicalPath="/blog"
        schema={blogListSchema}
      />
      <div className="bg-[#0F172A] relative py-20 mb-12 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold mb-4 uppercase tracking-wider text-[#D4AF37]">
            Car Accessories & Modification Guides
          </h1>
          <p className="text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            In-depth guides on <strong>ambient light for car</strong>, <strong>car projector light</strong>, the <strong>best dash cam for car in India</strong>, <strong>seat cover for car</strong>, and top upgrades for <strong>Baleno</strong>, <strong>Brezza</strong>, <strong>Swift</strong>, and <strong>Wagon R</strong>.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl">
        <Breadcrumbs items={[{ label: 'Blog Guides' }]} className="mb-6" />
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {BLOG_POSTS.map((post, i) => (
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={post.id} 
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col justify-between"
            >
              <div className="w-full h-64 overflow-hidden relative">
                <ImagePlaceholder 
                  src={post.image} 
                  alt={`${post.title} - Car accessories guide`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  fallbackText={post.title} 
                />
                <div className="absolute top-4 left-4 bg-[#D4AF37] text-black text-xs font-bold px-3 py-1 uppercase tracking-wider rounded-md">
                  {post.category}
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3 font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-[#0F172A] mb-3 group-hover:text-[#D4AF37] transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {post.summary}
                  </p>
                </div>
                <Link 
                  to={`/blog/${post.id}`} 
                  className="inline-flex items-center text-[#0F172A] font-bold uppercase tracking-wider text-xs group-hover:text-[#D4AF37] transition-colors w-fit pt-4 border-t border-gray-100"
                >
                  <span>Read Complete Guide</span>
                  <ChevronRight size={16} className="ml-1 group-hover:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
