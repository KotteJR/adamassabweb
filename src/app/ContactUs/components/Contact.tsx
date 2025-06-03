"use client";
import React, { useState, useEffect } from 'react';
import { Mail, MessageSquare, MapPin, Phone, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('dLX5rKssaDknwe6tr');
  }, []);

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
    agreePolicy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [buttonState, setButtonState] = useState<'default' | 'success'>('default');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    setFormData(prev => ({
      ...prev,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      if (!formData.first_name || !formData.last_name || !formData.email || !formData.message) {
        throw new Error('Please fill in all required fields');
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error('Please enter a valid email address');
      }

      console.log('Attempting to send email with data:', {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        message: formData.message,
      });

      const templateParams = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        message: formData.message,
      };

      const result = await emailjs.send(
        'service_v1e1268',
        'template_3zcola4',
        templateParams,
        'dLX5rKssaDknwe6tr'
      );

      console.log('Message sent successfully:', result);

      setButtonState('success');
      setTimeout(() => setButtonState('default'), 2000);
      setFormData({
        first_name: '',
        last_name: '',
        email: '',
        message: '',
        agreePolicy: false,
      });
    } catch (error) {
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Our team is ready to assist.",
      contact: "hello@adamass.se",
      actionText: "Send an email",
      href: "mailto:hello@adamass.se",
    },
    {
      icon: MessageSquare,
      title: "Live Chat Support",
      description: "Reach out for quick help.",
      actionText: "Coming Soon",
      href: "#",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Drop by our office for a chat.",
      contact: "Fridhemsvägen 2, 217 74 Malmö, Sweden",
      actionText: "Get directions",
      href: "#",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "We are available Mon-Fri, 8am-5pm.",
      contact: "+46 706 264 085",
      actionText: "Call now",
      href: "tel:+46706264085",
    },
  ];

  return (
    <div data-bg="dark" className="relative min-h-screen bg-black text-white flex flex-col overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 w-full h-full z-0" style={{ pointerEvents: 'none' }}>
        <div className="absolute inset-0 w-full h-full bg-[url('/backgrounds/image7.png')] bg-cover bg-center opacity-80 scale-130" />
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
      </div>
      <div className="flex-1 flex items-center justify-center pt-30 pb-16 relative z-10">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <p className="text-sm sm:text-base text-blue-400 uppercase tracking-wider font-semibold mb-2 sm:mb-3">
              Reach Us
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5">
              Speak with Our Friendly Team
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 max-w-2xl md:max-w-3xl mx-auto">
              Whether you have a question about our services, need support, or simply want to connect — we are here to help. Drop us a message and our team will get back to you shortly.
            </p>
          </div>

          {/* Main Content: Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 lg:items-stretch">
            
            {/* Left Column: Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-gray-900/80 p-6 rounded-lg shadow-xl flex flex-col h-full">
                  <div className="mb-4 md:mb-5">
                    <method.icon size={28} className="text-blue-400 md:hidden" />
                    <method.icon size={32} className="text-blue-400 hidden md:inline-block" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 md:mb-2 text-gray-100">{method.title}</h3>
                  <p className="text-sm md:text-base text-gray-400 mb-2 md:mb-2 flex-grow">{method.description}</p>
                  <p className="text-blue-300 font-medium text-sm md:text-base mb-2 md:mb-2 break-words">{method.contact}</p>
                  <a 
                    href={method.href} 
                    className="text-sm md:text-base text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-150 mt-auto inline-flex items-center group"
                  >
                    {method.actionText} <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-gray-900/80 p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl h-full">
              <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                  <div>
                    <label htmlFor="first_name" className="block text-sm md:text-base font-medium text-gray-300 mb-1.5">First Name <span className="text-red-400">*</span></label>
                    <input type="text" name="first_name" id="first_name" required value={formData.first_name} onChange={handleChange} className="w-full bg-[#121520] border border-[#2D3344] rounded-md py-2.5 sm:py-3 px-4 text-white text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400" placeholder="Enter first name" />
                  </div>
                  <div>
                    <label htmlFor="last_name" className="block text-sm md:text-base font-medium text-gray-300 mb-1.5">Last Name <span className="text-red-400">*</span></label>
                    <input type="text" name="last_name" id="last_name" required value={formData.last_name} onChange={handleChange} className="w-full bg-[#121520] border border-[#2D3344] rounded-md py-2.5 sm:py-3 px-4 text-white text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400" placeholder="Enter last name"/>
                  </div>
                </div>
                  <div>
                    <label htmlFor="email" className="block text-sm md:text-base font-medium text-gray-300 mb-1.5">Email Address <span className="text-red-400">*</span></label>
                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full bg-[#121520] border border-[#2D3344] rounded-md py-2.5 sm:py-3 px-4 text-white text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400" placeholder="you@example.com"/>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm md:text-base font-medium text-gray-300 mb-1.5">Your Message <span className="text-red-400">*</span></label>
                    <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full bg-[#121520] border border-[#2D3344] rounded-md py-2.5 sm:py-3 px-4 text-white text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none placeholder-gray-400" placeholder="How can we help you?"></textarea>
                </div>
                <div className="pt-2">
                  <button 
                    type="submit" 
                    className={`w-full 
                      ${buttonState === 'success' 
                        ? 'bg-green-600 hover:bg-green-700 shadow-[0_0_16px_4px_rgba(34,197,94,0.4)]' 
                        : 'bg-blue-600 hover:bg-blue-700 shadow-md'} 
                      text-white font-semibold py-3 sm:py-3.5 px-6 rounded-md 
                      transition-colors duration-200 focus:outline-none 
                      focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
                      focus:ring-offset-[#1C202F] disabled:opacity-60 disabled:cursor-not-allowed`}
                    disabled={isSubmitting}
                  >
                    {buttonState === 'success' ? 'Message Sent' : isSubmitting ? 'Sending...' : 'Submit Message'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 