import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';

export default function Contact() {
  return (
    <div className="bg-white min-h-screen pt-24 pb-24">
      {/* Header */}
      <div className="bg-[#0F172A] py-20 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <ImagePlaceholder src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" className="w-full h-full object-cover" alt="Contact Background" fallbackText="Contact" />
        </div>
        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 uppercase tracking-widest text-[#D4AF37]">Contact Us</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Get in touch with our expert team for consultation, bookings, or support.</p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3">
            <h2 className="text-3xl font-heading font-bold mb-8 text-[#0F172A]">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#D4AF37] transition-colors">
                <MapPin className="text-[#D4AF37] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-2">EliteModz Headquarters</h4>
                  <p className="text-gray-600 leading-relaxed">Sector 44,<br/>Gurugram, Haryana 122003<br/>India</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#D4AF37] transition-colors">
                <Phone className="text-[#D4AF37] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-2">Phone</h4>
                  <p className="text-gray-600 leading-relaxed">+91 98765 43210<br/>+91 124 456 7890</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#D4AF37] transition-colors">
                <Mail className="text-[#D4AF37] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-2">Email</h4>
                  <p className="text-gray-600 leading-relaxed">support@elitemodz.in<br/>business@elitemodz.in</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-[#D4AF37] transition-colors">
                <Clock className="text-[#D4AF37] shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-2">Working Hours</h4>
                  <p className="text-gray-600 leading-relaxed">Mon - Sat: 9:00 AM - 8:00 PM<br/>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-heading font-bold mb-8">Send Us A Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input type="text" className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-[#D4AF37] transition-colors bg-transparent" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input type="tel" className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-[#D4AF37] transition-colors bg-transparent" placeholder="+91 90000 00000" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <input type="email" className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-[#D4AF37] transition-colors bg-transparent" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Model</label>
                      <input type="text" className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-[#D4AF37] transition-colors bg-transparent" placeholder="Hyundai Creta 2024" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Required (Optional)</label>
                    <select className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-[#D4AF37] transition-colors bg-transparent text-gray-500">
                      <option>General Inquiry</option>
                      <option>Book Detailing</option>
                      <option>Product Installation</option>
                      <option>Wholesale</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Message</label>
                    <textarea rows={4} className="w-full border-b-2 border-gray-200 py-2 focus:outline-none focus:border-[#D4AF37] transition-colors bg-transparent resize-none" placeholder="Tell us how we can help..."></textarea>
                  </div>
                  <Button type="button" size="lg" className="w-full sm:w-auto uppercase tracking-widest px-12">Send Message</Button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-24 h-96 bg-gray-200 rounded-3xl overflow-hidden relative grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112173.84444583162!2d76.99615569424754!3d28.42289650426574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5fe8e5c64b1e!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1703058864455!5m2!1sen!2sin" 
            className="w-full h-full border-0" 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
