import { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { Mail, Clock, Sparkles, BookOpen, Car, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { Link } from 'react-router-dom';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact EliteModz",
    "url": "https://elitemodz.vercel.app/contact",
    "description": "Contact EliteModz educational car accessories showcase and inspiration guide in India."
  };

  return (
    <div className="bg-white min-h-screen pt-24 pb-24">
      <SEO 
        title="Contact EliteModz: Car Accessories Showcase & Guide"
        description="Connect with EliteModz for technical questions on ambient light for car, car projector light, dash cams, and custom seat covers in India."
        canonicalPath="/contact"
        schema={contactSchema}
      />
      {/* Header */}
      <div className="bg-[#0F172A] py-20 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <ImagePlaceholder src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="EliteModz Automotive Styling & Technical Showcase" fallbackText="Contact" />
        </div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#D4AF37]/20 border border-[#D4AF37]/50 text-[#D4AF37] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <Sparkles size={14} /> Student Educational Project & Showcase
          </div>
          <h1 className="text-3xl md:text-5xl font-heading font-extrabold mb-4 uppercase tracking-wider text-[#D4AF37]">
            Contact EliteModz Showcase
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base leading-relaxed">
            Get technical guidance and design inspiration for <strong>ambient light for car</strong>, <strong>car projector light</strong>, the <strong>best dash cam for car in India</strong>, <strong>seat cover for car</strong>, or dedicated accessories for <strong>Baleno</strong>, <strong>Brezza</strong>, <strong>Swift</strong>, and <strong>Wagon R</strong>.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} className="mb-6" />
        {/* Prominent Legal & Educational Project Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 rounded-3xl p-6 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-amber-900">
          <div className="flex items-start gap-4">
            <ShieldAlert size={24} className="text-amber-600 shrink-0 mt-1" />
            <div>
              <h3 className="font-heading font-bold text-base mb-1 text-amber-950">
                Notice: Educational Showcase & Digital Marketing Study Project
              </h3>
              <p className="text-xs md:text-sm text-amber-800 leading-relaxed">
                EliteModz is an academic demonstration created for learning search engine optimization, web design, and digital marketing. <strong>We do not operate a commercial physical workshop or retail storefront, and we do not sell products or process payments.</strong> Questions submitted below are answered for study and enthusiast consultation only.
              </p>
            </div>
          </div>
          <Link to="/faq" className="shrink-0 text-xs font-bold text-amber-900 underline hover:text-amber-950">
            Read Student FAQs
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl font-heading font-bold mb-8 text-[#0F172A]">Project Hub</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#D4AF37] transition-colors">
                <Sparkles className="text-[#D4AF37] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-1">Project Nature</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Non-Commercial Student Showcase<br/>Automotive SEO & Web Marketing Case Study<br/>India</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#D4AF37] transition-colors">
                <Mail className="text-[#D4AF37] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-1">Study Contact Email</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">project@elitemodz.example<br/>inquiries@elitemodz.example</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#D4AF37] transition-colors">
                <Car className="text-[#D4AF37] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-1">Supported Vehicles</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Maruti Baleno, Brezza, Swift, Wagon R<br/>Universal Hatchback, Sedan & SUV Guides</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#D4AF37] transition-colors">
                <Clock className="text-[#D4AF37] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-1">Digital Response Time</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Inquiries typically answered within 24-48 hours during academic terms.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-heading font-bold mb-2">Ask A Fitment Or Styling Question</h3>
                <p className="text-sm text-gray-500 mb-8">
                  Submit your vehicle details and styling questions. Our showcase researchers will reply with architectural fitment recommendations.
                </p>

                {submitted ? (
                  <div className="p-8 bg-green-50 rounded-2xl border border-green-200 text-center">
                    <CheckCircle2 size={40} className="text-green-600 mx-auto mb-3" />
                    <h4 className="text-lg font-heading font-bold text-green-900 mb-1">Inquiry Sent Successfully!</h4>
                    <p className="text-xs text-green-800 mb-6">
                      Thank you for interacting with our student showcase. We will review your vehicle compatibility question shortly.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline" size="sm">
                      Send Another Question
                    </Button>
                  </div>
                ) : (
                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Full Name</label>
                        <input required type="text" className="w-full border-b-2 border-gray-200 py-2.5 focus:outline-none focus:border-[#D4AF37] transition-colors bg-transparent text-sm" placeholder="e.g. Rahul Sharma" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Email Address</label>
                        <input required type="email" className="w-full border-b-2 border-gray-200 py-2.5 focus:outline-none focus:border-[#D4AF37] transition-colors bg-transparent text-sm" placeholder="name@domain.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Car Model & Year</label>
                        <input required type="text" className="w-full border-b-2 border-gray-200 py-2.5 focus:outline-none focus:border-[#D4AF37] transition-colors bg-transparent text-sm" placeholder="e.g. Maruti Baleno 2024 / Brezza / Swift / Wagon R" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">State / City In India</label>
                        <input type="text" className="w-full border-b-2 border-gray-200 py-2.5 focus:outline-none focus:border-[#D4AF37] transition-colors bg-transparent text-sm" placeholder="e.g. Delhi, Mumbai, Bengaluru" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Upgrade Category Needed</label>
                      <select className="w-full border-b-2 border-gray-200 py-2.5 focus:outline-none focus:border-[#D4AF37] transition-colors bg-transparent text-sm text-gray-700">
                        <option>Ambient Light for Car (64-Color RGB)</option>
                        <option>Best Dash Cam for Car in India (4K Dual Channel)</option>
                        <option>Car Projector Light & Bi-LED Headlamp Retrofit</option>
                        <option>Custom Seat Cover for Car & Sun Shades Fitting</option>
                        <option>Exterior Car Accessories & Aerodynamic Body Kits</option>
                        <option>Baleno Car Accessories Full Package</option>
                        <option>Brezza Car Accessories Styling Package</option>
                        <option>Swift Car Accessories Sport Package</option>
                        <option>Wagon R Car Accessories Utility Package</option>
                        <option>Student Case Study & General Inquiry</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Message & Fitment Question</label>
                      <textarea required rows={4} className="w-full border-b-2 border-gray-200 py-2.5 focus:outline-none focus:border-[#D4AF37] transition-colors bg-transparent text-sm resize-none" placeholder="Tell us about your questions regarding ambient lighting, seat cover materials, dash cam wiring, or model accessories..."></textarea>
                    </div>
                    <Button type="submit" size="lg" className="w-full sm:w-auto uppercase tracking-wider px-10 text-xs font-bold bg-[#0F172A] hover:bg-[#D4AF37] hover:text-black">
                      Send Fitment Question
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Informational Guidance Cards instead of physical map */}
        <div className="mt-20 grid md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 text-center">
            <BookOpen className="text-[#D4AF37] mx-auto mb-4" size={28} />
            <h4 className="font-heading font-bold text-lg text-[#0F172A] mb-2">Explore Buying Guides</h4>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Learn how to choose the right dash cams, optical projector lights, and custom seat covers in our blog.
            </p>
            <Link to="/blog" className="text-xs font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#D4AF37]">
              Read Articles &rarr;
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 text-center">
            <Car className="text-[#D4AF37] mx-auto mb-4" size={28} />
            <h4 className="font-heading font-bold text-lg text-[#0F172A] mb-2">Model Compatibility</h4>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Browse dedicated upgrades tailored for Maruti Baleno, Maruti Brezza, Maruti Swift, and Maruti Wagon R.
            </p>
            <Link to="/shop" className="text-xs font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#D4AF37]">
              Browse Model Catalog &rarr;
            </Link>
          </div>

          <div className="p-8 rounded-3xl bg-gray-50 border border-gray-200 text-center">
            <Sparkles className="text-[#D4AF37] mx-auto mb-4" size={28} />
            <h4 className="font-heading font-bold text-lg text-[#0F172A] mb-2">Frequent Questions</h4>
            <p className="text-xs text-gray-500 leading-relaxed mb-4">
              Read comprehensive answers about warranty safety, electrical zero-wire-splice rules, and legal standards in India.
            </p>
            <Link to="/faq" className="text-xs font-bold uppercase tracking-wider text-[#0F172A] hover:text-[#D4AF37]">
              View All FAQs &rarr;
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
