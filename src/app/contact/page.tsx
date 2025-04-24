"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { toast } from 'sonner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.subject) {
      toast.error('Please fill all required fields');
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast.success('Your message has been sent successfully!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="hero-section py-20 md:py-32 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://ext.same-assets.com/4256380120/3990201279.jpeg')`,
        }}
      >
        <div className="container mx-auto px-4 hero-content text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>

              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <FaPhone size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Numbers</h3>
                    <p className="text-gray-600">
                      General Inquiries +91 8423567734 / +91 9198742110
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    <FaEnvelope size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Email</h3>
                    <a
                      href="mailto:mahitoursandtravels2110@gmail.com"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      mahitoursandtravels2110@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Link
                    href="https://wa.me/+919198742110"
                    className="bg-primary/10 p-3 rounded-full text-primary"
                  >
                    <FaWhatsapp size={24} />
                  </Link>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Chat With Us</h3>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Location</h3>
                  <p className="text-gray-600 mb-4">
                    <strong>Pillar no. 49, Parade kothi, Varanasi Cantt</strong>
                    <br />
                    <strong> Near Roadways</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    mahitoursandtravels2110@gmail.com
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your message (optional)
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="h-96 w-full bg-gray-300">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.3416726144133!2d82.98650567455732!3d25.326313377628065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2de115fef8b9%3A0xe6a97fe86673bc03!2s49%2C%20Parade%20Kothi%20Rd%2C%20Pared%20Kothi%2C%20Vijay%20Nagar%20Colony%2C%20Chetganj%2C%20Varanasi%2C%20Uttar%20Pradesh%20221002!5e0!3m2!1sen!2sin!4v1745454087148!5m2!1sen!2sin" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
