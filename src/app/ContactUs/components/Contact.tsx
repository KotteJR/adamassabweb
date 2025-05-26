"use client";
import React, { useState } from 'react';
import { Mail, MessageSquare, MapPin, Phone, ArrowRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    agreePolicy: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    setFormData(prev => ({
      ...prev,
      [name]: isCheckbox ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log('Form data submitted:', formData);
    // Implement actual form submission logic here
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
      contact: "Coming Soon",
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
      description: "We&apos;re available Mon-Fri, 8am-5pm.",
      contact: "+46 706 264 085",
      actionText: "Call now",
      href: "tel:+46706264085",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex items-center justify-center pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-10 sm:mb-12 md:mb-14">
            <p className="text-sm sm:text-base text-blue-400 uppercase tracking-wider font-semibold mb-2 sm:mb-3">
              Reach Us
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-5">
              Speak with Our Friendly Team
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl md:max-w-3xl mx-auto">
              Whether you have a question about our services, need support, or simply want to connect — we&apos;re here to help. Drop us a message and our team will get back to you shortly.
            </p>
          </div>

          {/* Main Content: Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 lg:items-stretch">
            
            {/* Left Column: Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="bg-[#1C202F] p-6 rounded-lg shadow-xl flex flex-col h-full">
                  <div className="mb-4 md:mb-5">
                    <method.icon size={28} className="text-blue-400 md:hidden" />
                    <method.icon size={32} className="text-blue-400 hidden md:inline-block" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 md:mb-3 text-gray-100">{method.title}</h3>
                  <p className="text-sm md:text-base text-gray-400 mb-3 md:mb-4 flex-grow">{method.description}</p>
                  <p className="text-blue-300 font-medium text-sm md:text-base mb-4 md:mb-5 break-words">{method.contact}</p>
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
            <div className="bg-[#1C202F] p-6 sm:p-8 md:p-10 rounded-lg shadow-2xl h-full">
              <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm md:text-base font-medium text-gray-300 mb-1.5">First Name <span className="text-red-400">*</span></label>
                    <input type="text" name="firstName" id="firstName" required value={formData.firstName} onChange={handleChange} className="w-full bg-[#121520] border border-[#2D3344] rounded-md py-2.5 sm:py-3 px-4 text-white text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400" placeholder="Enter first name" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm md:text-base font-medium text-gray-300 mb-1.5">Last Name <span className="text-red-400">*</span></label>
                    <input type="text" name="lastName" id="lastName" required value={formData.lastName} onChange={handleChange} className="w-full bg-[#121520] border border-[#2D3344] rounded-md py-2.5 sm:py-3 px-4 text-white text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400" placeholder="Enter last name"/>
                  </div>
                </div>
                <div className="flex-grow space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm md:text-base font-medium text-gray-300 mb-1.5">Email Address <span className="text-red-400">*</span></label>
                    <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full bg-[#121520] border border-[#2D3344] rounded-md py-2.5 sm:py-3 px-4 text-white text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none placeholder-gray-400" placeholder="you@example.com"/>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm md:text-base font-medium text-gray-300 mb-1.5">Your Message <span className="text-red-400">*</span></label>
                    <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full bg-[#121520] border border-[#2D3344] rounded-md py-2.5 sm:py-3 px-4 text-white text-sm sm:text-base focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none placeholder-gray-400" placeholder="How can we help you?"></textarea>
                  </div>
                </div>
                <div className="pt-2">
                  <div className="flex items-center">
                    <input id="agreePolicy" name="agreePolicy" type="checkbox" checked={formData.agreePolicy} onChange={handleChange} className="h-4 w-4 text-blue-600 bg-[#121520] border-[#2D3344] rounded focus:ring-blue-500 focus:ring-offset-[#1C202F]" />
                    <label htmlFor="agreePolicy" className="ml-2.5 block text-sm text-gray-400">
                      I agree to the <a href="#" className="font-medium text-blue-400 hover:text-blue-300 underline">privacy policy</a>.
                    </label>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 sm:py-3.5 px-6 rounded-md shadow-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#1C202F] disabled:opacity-60 disabled:cursor-not-allowed"
                    disabled={!formData.agreePolicy} 
                  >
                    Submit Message
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