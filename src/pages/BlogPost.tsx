import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/mockData';
import { Button } from '../components/ui/Button';
import { ArrowLeft, Calendar, Clock, CheckCircle2, Shield, Sparkles, HelpCircle, ChevronRight, BookOpen } from 'lucide-react';
import { ImagePlaceholder } from '../components/ui/ImagePlaceholder';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';

const RELATED_FAQS: Record<number, { q: string; a: string }[]> = {
  1: [
    {
      q: "Which car accessories are popular in India?",
      a: "Popular choices include ambient lights, custom-stitched seat covers, floor mats, magnetic sunshades, steering wheel covers, and compact dash cams."
    },
    {
      q: "How do I know if an accessory is compatible with my car?",
      a: "Check that it is made for your car's make, model and variant. Model-specific accessories fit more precisely and look neater than universal ones."
    }
  ],
  2: [
    {
      q: "Do ambient lights and dash cams drain the car battery?",
      a: "Properly installed LED accessories and dash cams use very little power. Smart hardwire kits include voltage cutoff modules so ignition turns them off safely."
    },
    {
      q: "Does installing aftermarket wiring affect my car warranty?",
      a: "Plug-and-play or non-cut wiring using fuse taps is generally safe. Always avoid cutting factory harness cables to preserve warranty coverage."
    }
  ],
  3: [
    {
      q: "Are ambient lights legal in India?",
      a: "Interior ambient lighting is widely used. Restrictions mainly apply to exterior lighting, flashing lights, and red/blue lights visible from outside."
    },
    {
      q: "What are the benefits of installing ambient lights in a car?",
      a: "Ambient lights make the cabin feel more premium, create a relaxing mood for night drives, and let you personalise the cabin with RGB colours."
    }
  ],
  4: [
    {
      q: "Are seat covers safe with side airbags?",
      a: "Good seat covers are made with airbag-compatible stitching so airbags deploy freely. Always ensure covers are marked airbag-safe if your car has side airbags."
    },
    {
      q: "How do I clean and maintain car seat covers?",
      a: "For leatherette, wipe gently with a damp microfibre cloth and mild soap. For fabric covers, vacuum regularly and avoid harsh chemical solvents."
    }
  ]
};

const POST_CONTENTS: Record<number, { intro: string; sections: { heading: string; body: string }[]; tips: string[] }> = {
  1: {
    intro: "The Maruti Baleno and Maruti Brezza are two of the highest-selling passenger vehicles across India. Whether you commute through Delhi NCR traffic or embark on weekend road trips, outfitting your vehicle with dedicated Baleno car accessories and Brezza car accessories unlocks both premium luxury and road-tested protection.",
    sections: [
      {
        heading: "Essential Baleno Car Accessories for 2026",
        body: "For Baleno owners, prioritizing cabin comfort and lighting delivers the most noticeable elevation. A custom 64-color ambient light for car kit instantly elevates the hatchback's minimalist dashboard. Pair this with laser-cut magnetic sun shades for car to block harsh solar radiation through the large glass area, and tailored seat covers for car that prevent seat wear while offering superior lumbar support."
      },
      {
        heading: "Must-Have Brezza Car Accessories for Urban SUVs",
        body: "The Brezza demands rugged exterior car accessories that amplify its muscular stance. Adding front skid garnishes, side claddings, and precision car projector lights significantly improves highway performance. Additionally, installing the best dash cam for car in India ensures your SUV has 24/7 parking mode and loop recording for unpredictable city roads."
      },
      {
        heading: "Warranty-Safe Plug and Play Upgrades",
        body: "When customizing new vehicles, always insist on zero-wire-cut installation. High-quality Baleno car accessories and Brezza car accessories use OEM coupler harnesses and fuse taps, leaving your standard manufacturer warranty completely untouched."
      }
    ],
    tips: [
      "Select custom-measured seat covers designed specifically for Baleno and Brezza split-folding seats.",
      "Ensure ambient light kits use concealed acrylic fibers rather than exposed neon tubes.",
      "Use heavy-duty magnetic sun shades for car with zipper access for toll booths."
    ]
  },
  2: {
    intro: "With traffic congestion and varied highway conditions, dash cameras have shifted from optional gadgets to indispensable automotive safety gear. Finding the best dash cam for car in India requires understanding high heat resistance, optical sensors, and night vision capabilities.",
    sections: [
      {
        heading: "Why Supercapacitors Are Vital for Indian Summers",
        body: "Standard lithium-ion battery dash cams frequently fail or swell when cars sit in 45°C summer heat in cities like Delhi, Ahmedabad, or Chennai. The best dash cam for car in India incorporates a high-temperature supercapacitor that withstands internal cabin temperatures exceeding 75°C without risk of swelling or failure."
      },
      {
        heading: "True 4K Resolution & Sony Starvis Night Vision",
        body: "Capturing clear license plates in low-light conditions requires premium optical sensors. Models powered by Sony Starvis sensors provide high dynamic range (HDR) exposure balance, mitigating headlight glare from oncoming high beams and recording sharp 4K UHD video."
      },
      {
        heading: "Concealed Hardwire Kit for 24/7 Parking Surveillance",
        body: "To safeguard against hit-and-runs or vandalism while parked, connect your dash camera to an intelligent hardwire kit. The device monitors shocks via built-in G-sensors and includes low-voltage battery cutoff so your vehicle's starter battery never drains."
      }
    ],
    tips: [
      "Always pick a dual-channel camera covering both front and rear perspectives.",
      "Use high-endurance Class 10 U3 micro-SD cards engineered for continuous overwrite.",
      "Opt for Wi-Fi enabled mobile applications for instant video downloads during insurance claims."
    ]
  },
  3: {
    intro: "Lighting upgrades do not just create an alluring cockpit ambience—they significantly increase road safety during night drives. Here is everything you should understand about ambient light for car and optical car projector light modifications.",
    sections: [
      {
        heading: "64-Color RGB Symphony Ambient Light for Car",
        body: "Modern ambient light for car systems utilize micro-thin acrylic optic fibers embedded smoothly along dashboard crevices and door cards. Controllable via smartphone applications or dedicated remotes, they offer millions of colors, dynamic gradient flow, and music synchronization that rivals six-figure luxury vehicles."
      },
      {
        heading: "Upgrading to a Dedicated Car Projector Light",
        body: "Standard halogen reflector setups cast a diffuse, uneven glow with limited throw. A high-efficiency Bi-LED car projector light utilizes convex optical glass and an electromagnetic cutoff shutter to focus 120W of illumination directly onto the asphalt without blinding other drivers."
      },
      {
        heading: "Essential Car Light Accessories for Maximum Road Presence",
        body: "Beyond headlights and cockpit lighting, sequential dynamic matrix indicator strips and LED daytime running lights enhance your car's visibility during fog, monsoon downpours, and dusk driving."
      }
    ],
    tips: [
      "Never splice stock headlamp wiring; use plug-and-play relay harnesses.",
      "Align projector beam cutoffs properly on a vertical wall before driving.",
      "Choose ambient lights with sub-controller modules for independent door wiring."
    ]
  },
  4: {
    intro: "Maintaining a pristine, cool cabin in daily commuters like the Maruti Swift and Maruti Wagon R is simple when you equip the right interior essentials. Tailor-fit seat covers and magnetic sun shades are the two most cost-effective upgrades you can make.",
    sections: [
      {
        heading: "Precision-Fit Seat Cover for Car: Comfort Meets Durability",
        body: "Generic universal covers slip, wrinkle, and look sloppy within months. A customized seat cover for car crafted specifically for Swift car accessories or Wagon R car accessories uses 3D laser patterns to guarantee bucket-fit precision, reinforced double stitching, and breathable perforation to prevent back sweat."
      },
      {
        heading: "Magnetic Sun Shades for Car: Beat the Scorching Summer Heat",
        body: "Window tints that violate RTO regulations can result in steep fines. Magnetic sun shades for car provide the ideal legal solution: they clip securely onto the inner metal window frame, block 99% of UV rays, reduce cabin heat by up to 10°C, and can be detached in seconds."
      },
      {
        heading: "Elevating the Ambience with the Best Car Perfume",
        body: "Complete your vehicle's interior upgrade with the best car perfume. Solar-rotating diffusers disperse pure botanical essential oils, counteracting traffic exhaust fumes and damp odors without harsh synthetic alcohol scents."
      }
    ],
    tips: [
      "Ensure front sun shades include half-cut windows for side-mirror visibility.",
      "Select high-density polyurethane leather for easy wipe-down cleaning with microfiber cloths.",
      "Add durable exterior car accessories like bumper corner protectors to prevent parking scratches."
    ]
  }
};

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

  const articleContent = POST_CONTENTS[post.id] || POST_CONTENTS[1];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": "2026-01-15",
    "dateModified": "2026-03-01",
    "mainEntityOfPage": `https://elitemodz.vercel.app/blog/${post.id}`,
    "keywords": post.targetKeyword,
    "author": {
      "@type": "Organization",
      "name": "EliteModz"
    },
    "publisher": {
      "@type": "Organization",
      "name": "EliteModz",
      "url": "https://elitemodz.vercel.app/"
    },
    "description": post.summary
  };

  const relatedFaqs = RELATED_FAQS[post.id] || RELATED_FAQS[1];

  return (
    <div className="bg-white min-h-screen pt-24 pb-24">
      <SEO 
        title={`${post.title} | EliteModz`}
        description={post.summary}
        keywords={post.targetKeyword}
        canonicalPath={`/blog/${post.id}`}
        schema={articleSchema}
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <Breadcrumbs 
          items={[
            { label: 'Blog Guides', href: '/blog' },
            { label: post.title }
          ]} 
          className="mb-4"
        />

        <div className="bg-[#F8FAFC] rounded-3xl overflow-hidden shadow-sm border border-gray-100">
          <div className="w-full h-72 md:h-[420px] relative">
            <ImagePlaceholder 
              src={post.image} 
              alt={`${post.title} - Guide`} 
              className="w-full h-full object-cover" 
              fallbackText={post.title} 
            />
            <div className="absolute top-6 left-6 bg-[#D4AF37] text-black text-xs font-bold px-3.5 py-1.5 uppercase tracking-wider rounded-md shadow-md">
              {post.category}
            </div>
          </div>

          <div className="p-8 md:p-14">
            <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-6 font-semibold uppercase tracking-wider">
              <span className="flex items-center gap-1.5"><Calendar size={15} /> {post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={15} /> {post.readTime}</span>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-heading font-extrabold text-[#0F172A] mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="lead text-lg md:text-xl text-gray-800 font-medium leading-relaxed">
                {articleContent.intro}
              </p>
              
              {articleContent.sections.map((sec, idx) => (
                <div key={idx} className="pt-6">
                  <h2 className="text-xl md:text-2xl font-heading font-bold text-[#0F172A] mb-3">
                    {sec.heading}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {sec.body}
                  </p>
                </div>
              ))}

              <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-200 mt-10 shadow-sm">
                <h3 className="text-lg md:text-xl font-heading font-bold text-[#0F172A] mb-4 flex items-center gap-2">
                  <Sparkles size={20} className="text-[#D4AF37]" /> Expert Recommendations
                </h3>
                <ul className="space-y-3">
                  {articleContent.tips.map((tip, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related FAQs Topic Cluster */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 mt-10">
                <div className="flex items-center justify-between gap-4 mb-4">
                  <h3 className="text-lg md:text-xl font-heading font-bold text-[#0F172A] flex items-center gap-2">
                    <HelpCircle size={20} className="text-[#D4AF37]" /> Related Automotive Questions
                  </h3>
                  <Link to="/faq" className="text-xs font-bold text-[#D4AF37] hover:underline flex items-center gap-1">
                    All FAQs <ChevronRight size={14} />
                  </Link>
                </div>
                <div className="space-y-4">
                  {relatedFaqs.map((faq, fIdx) => (
                    <div key={fIdx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs">
                      <h4 className="text-sm md:text-base font-bold text-gray-900 mb-1">
                        {faq.q}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Safe Educational Showcase CTA */}
              <div className="mt-12 p-8 bg-[#0F172A] text-white rounded-2xl text-center">
                <h3 className="text-xl font-heading font-bold mb-2">Explore the Accessories Showcase</h3>
                <p className="text-gray-300 text-sm max-w-xl mx-auto mb-6">
                  Browse our visual catalog of ambient lights, dash cams, projector headlights, and custom-tailored seat covers for inspiration.
                </p>
                <Link to="/shop">
                  <Button className="bg-[#D4AF37] text-black hover:bg-white text-xs font-bold uppercase tracking-wider px-8">
                    View Showcase Catalog
                  </Button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
