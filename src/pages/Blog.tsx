import { BLOG_POSTS } from '../data/mockData';
import { motion } from 'motion/react';
import { Calendar, Clock, ChevronRight } from 'lucide-react';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-24 pb-24">
      <div className="bg-[#0F172A] relative py-20 mb-16 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4 uppercase tracking-widest text-[#D4AF37]">Modz Chronicle</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Insights, guides, trends and stories from the automotive customization world.</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {BLOG_POSTS.map((post, i) => (
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              key={post.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col sm:flex-row h-full"
            >
              <div className="w-full sm:w-2/5 overflow-hidden relative">
                <ImagePlaceholder src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 min-h-[250px] sm:min-h-full" fallbackText={post.title} />
                <div className="absolute top-4 left-4 bg-[#D4AF37] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-6 sm:p-8 w-full sm:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-[#0F172A] mb-4 group-hover:text-[#D4AF37] transition-colors leading-tight">{post.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">Explore the essential tips and insights directly from our expert technicians and designers to improve your automotive journey.</p>
                </div>
                <Link to={`/blog/${post.id}`} className="flex items-center text-[#0F172A] font-bold uppercase tracking-wider text-sm mt-auto group-hover:text-[#D4AF37] transition-colors cursor-pointer w-fit">
                  Read Article <ChevronRight size={16} className="ml-1 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-16 text-center">
           <button className="text-[#0F172A] font-bold border-b-2 border-[#D4AF37] pb-1 uppercase tracking-widest hover:text-[#D4AF37] transition-colors">Load More Articles</button>
        </div>
      </div>
    </div>
  );
}
