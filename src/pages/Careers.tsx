import { Button } from '../components/ui/Button';
import { Briefcase, ArrowRight } from 'lucide-react';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Link } from 'react-router-dom';

export default function Careers() {
  const positions = [
    { title: "Automotive Lighting & Electronics Research Contributor", type: "Contributor", location: "Remote (India)", dept: "Technical Guides" },
    { title: "Custom Seat Cover & Interior Fitment Researcher", type: "Contributor", location: "Remote (India)", dept: "Craftsmanship" },
    { title: "Automotive Catalog & SEO Specialist", type: "Intern / Project", location: "Remote (India)", dept: "Digital Marketing" },
    { title: "Automotive Accessories Content & Product Writer", type: "Contributor", location: "Remote (India)", dept: "Editorial" },
    { title: "Vehicle Fitment Community Advisor", type: "Volunteer / Contributor", location: "Remote (India)", dept: "Community Support" },
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-24">
      <SEO 
        title="Careers at EliteModz: Car Accessories Project India"
        description="Explore contributor roles at EliteModz. Join our student showcase for ambient light for car, seat covers, dash cams & automotive content writing."
        canonicalPath="/careers"
      />
      <div className="bg-[#0F172A] relative py-20 mb-12 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <ImagePlaceholder src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Careers Background" fallbackText="Careers" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-6 text-[#D4AF37] uppercase tracking-wider">Join The Project</h1>
          <p className="text-lg md:text-xl text-gray-300">We collaborate with passionate automotive researchers, digital marketers, and enthusiasts who love vehicle personalization.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <Breadcrumbs items={[{ label: 'Careers' }]} className="mb-6" />
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6 text-[#0F172A]">Why Collaborate With Us?</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
              At EliteModz, you participate in India's academic showcase researching ambient light for car, car projector light, dash cams, custom seat covers, and vehicle-specific accessories.
            </p>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div> Hands-on practical experience in SEO & content marketing
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div> In-depth research into modern automotive aftermarket electronics
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div> Collaborative, remote-first environment for students and writers
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div> Portfolio credit and case-study documentation experience
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 rounded-3xl p-8 flex items-center justify-center">
            <ImagePlaceholder src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" alt="Team working" className="rounded-2xl shadow-lg" fallbackText="Team" />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-heading font-bold mb-10 text-[#0F172A] flex items-center gap-3">
            <Briefcase className="text-[#D4AF37]" size={32} /> Open Contributor Roles
          </h2>
          <div className="space-y-4">
            {positions.map((pos, i) => (
              <div key={i} className="group flex flex-col md:flex-row justify-between items-center p-6 bg-white border border-gray-100 rounded-2xl hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300">
                <div className="w-full md:w-auto mb-4 md:mb-0">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] mb-1">{pos.dept}</div>
                  <h3 className="text-xl font-heading font-bold text-[#0F172A] mb-2">{pos.title}</h3>
                  <div className="flex gap-4 text-sm text-gray-500">
                    <span>{pos.type}</span>
                    <span>&bull;</span>
                    <span>{pos.location}</span>
                  </div>
                </div>
                <Link to="/contact">
                  <Button variant="outline" className="w-full md:w-auto group-hover:bg-[#0F172A] group-hover:text-white group-hover:border-[#0F172A] transition-all uppercase tracking-widest text-xs">
                    Inquire <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
