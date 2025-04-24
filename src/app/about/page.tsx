import Link from 'next/link';
import { Button } from '@/components/ui/button';
import TeamSection from '@/components/TeamSection';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="hero-section py-20 md:py-32 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://ext.same-assets.com/450133506/2979250428.jpeg')`,
        }}
      >
        <div className="container mx-auto px-4 hero-content text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About</h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Established in 2007</h2>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Explore the globe with Mahi Tours and Travels, where every
                  expedition is meticulously crafted with passion and expertise.
                  With years of industry experience, we specialize in curating
                  bespoke adventures tailored to your desires. From remote
                  escapes to vibrant cultural experiences, we strive to surpass
                  expectations, ensuring each voyage is seamless and
                  unforgettable.
                </p>
                <p className="text-gray-700">
                  At Mahi Tours and Travels, our dedicated team of travel
                  aficionados is committed to providing unmatched service,
                  personalized recommendations, and insider insights to enrich
                  your journey. Whether you crave serenity on secluded shores or
                  excitement in bustling metropolises, let us guide you on your
                  next extraordinary escapade. Your adventure begins here with
                  Mahi Tours and Travels.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact">
                  <Button size="lg">Contact Us</Button>
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://ext.same-assets.com/641552178/4154183048.jpeg"
                alt="About Mahi Tours and Travels"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Guides",
                description:
                  "Our knowledgeable guides provide authentic insights into local culture and history.",
              },
              {
                title: "Personalized Service",
                description:
                  "We tailor each journey to match your preferences, interests, and pace.",
              },
              {
                title: "Quality Accommodations",
                description:
                  "Stay in handpicked hotels and guesthouses that offer comfort and local character.",
              },
              {
                title: "Authentic Experiences",
                description:
                  "Immerse yourself in genuine cultural encounters beyond typical tourist activities.",
              },
              {
                title: "Responsible Travel",
                description:
                  "We respect local communities and environments through sustainable practices.",
              },
              {
                title: "24/7 Support",
                description:
                  "Our team is always available to assist you throughout your journey.",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection></TeamSection>

      {/* CTA Section */}
      <section
        className="py-16 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.8), rgba(59, 130, 246, 0.8)), url('https://ext.same-assets.com/641552178/1469909280.jpeg')`,
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Contact us today to start planning your next adventure. Our team is
            ready to craft an unforgettable experience just for you.
          </p>
          <Link href="/contact">
            <Button
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white/20"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
