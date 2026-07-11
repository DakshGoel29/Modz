import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/mockData';
import { Button } from '../components/ui/Button';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';

export default function BlogPost() {
  const { id } = useParams();
  const post = BLOG_POSTS.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className="bg-white min-h-screen pt-32 pb-24 text-center">
        <h1 className="text-4xl font-heading font-bold mb-4">Post Not Found</h1>
        <Link to="/blog">
          <Button>Back to Blog</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-24 pb-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-[#D4AF37] mb-8 transition-colors">
          <ArrowLeft size={20} /> Back to Blog
        </Link>

        <div className="bg-[#F8FAFC] rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          <div className="w-full h-64 md:h-96 relative">
            <ImagePlaceholder src={post.image} alt={post.title} className="w-full h-full object-cover" fallbackText={post.title} />
            <div className="absolute top-4 left-4 bg-[#D4AF37] text-white text-xs font-bold px-3 py-1 uppercase tracking-widest rounded-sm">
              {post.category}
            </div>
          </div>

          <div className="p-8 md:p-12">
            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-6">
              <span className="flex items-center gap-1"><Calendar size={16} /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock size={16} /> {post.readTime}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-heading font-bold text-[#0F172A] mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
              <p className="lead text-xl text-gray-800 font-medium">
                Elevating your vehicle's aesthetic and performance isn't just about adding parts; it's about making a statement that resonates with your personal style. At EliteModz, we understand the pulse of car personalization.
              </p>
              
              <p>
                Investing in premium aftermarket accessories completely transforms the driving experience. Whether you're upgrading your infotainment unit for a smarter commute, outfitting a durable ceramic coating to fight the elements, or enhancing interior comfort with custom-tailored bucket seats, every modification counts toward achieving automotive perfection. 
              </p>

              <h3 className="text-2xl font-bold text-[#0F172A] mt-8 mb-4">Key Takeaways</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Quality auto accessories enhance both durability and aesthetic appeal.</li>
                <li>Installing the right lighting improves safety during night drives.</li>
                <li>Ceramic coating requires professional application for the best long-term results.</li>
              </ul>

              <p>
                Ultimately, understanding what components harmonize best with your car model requires both passion and expertise. Regular maintenance of these upgrades will ensure they stand the test of time, keeping your ride looking fresh and performing flawlessly on every journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
