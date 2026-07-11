import { Button } from '../components/ui/Button';
import { Briefcase, ArrowRight } from 'lucide-react';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';

export default function Careers() {
  const positions = [
    { title: "Digital Marketing Manager", type: "Full-Time", location: "Gurugram", dept: "Marketing" },
    { title: "SEO Executive", type: "Full-Time", location: "Gurugram", dept: "Marketing" },
    { title: "Content Writer", type: "Full-Time / Remote", location: "Remote", dept: "Marketing" },
    { title: "Automotive Technician", type: "Full-Time", location: "New Delhi", dept: "Operations" },
    { title: "Graphic Designer", type: "Full-Time", location: "Gurugram", dept: "Creative" },
    { title: "Customer Success Executive", type: "Full-Time", location: "Gurugram", dept: "Support" },
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-24">
      <div className="bg-[#0F172A] relative py-24 mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <ImagePlaceholder src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Careers Background" fallbackText="Careers" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center text-white max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-[#D4AF37] uppercase tracking-widest">Join The Crew</h1>
          <p className="text-xl text-gray-300">We are always looking for passionate individuals to help us build the future of automotive customization.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6 text-[#0F172A]">Why Work With Us?</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              At EliteModz, you're not just an employee—you're a part of a fast-growing movement reshaping the automotive luxury market in India. We value creativity, precision, and passion.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div> Competitive Salary & Perks
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div> Health & Employee Welfare Setup
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div> Dynamic Startup Environment
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div> Employee Discounts on Installations
              </li>
            </ul>
          </div>
          <div className="bg-gray-100 rounded-3xl p-8 flex items-center justify-center">
            <ImagePlaceholder src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" alt="Team working" className="rounded-2xl shadow-lg" fallbackText="Team" />
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-heading font-bold mb-10 text-[#0F172A] flex items-center gap-3">
            <Briefcase className="text-[#D4AF37]" size={32} /> Open Positions
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
                <Button variant="outline" className="w-full md:w-auto group-hover:bg-[#0F172A] group-hover:text-white group-hover:border-[#0F172A] transition-all uppercase tracking-widest">
                  Apply Now <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
