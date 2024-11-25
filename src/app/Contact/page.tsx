'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="relative isolate bg-black px-6 py-24 sm:py-32 lg:px-8">
            {/* Animated dots */}
            <div 
                className="absolute h-3 w-3 rounded-full bg-green-500/20"
                style={{
                    left: '10%',
                    top: '20%',
                    animation: 'float 6s ease-in-out infinite'
                }}
            />
            <div 
                className="absolute h-2 w-2 rounded-full bg-green-500/20"
                style={{
                    left: '80%',
                    top: '40%',
                    animation: 'float 8s ease-in-out infinite'
                }}
            />

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) }
                    50% { transform: translateY(-20px) }
                }
            `}</style>

            <div className="mx-auto max-w-2xl text-center">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
                >
                    Contact Us
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-2 text-lg leading-8 text-gray-400"
                >
                    Get in touch with us for any inquiries or support
                </motion.p>
            </div>

            <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2">
                {/* Contact Information */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="space-y-8 text-base leading-7 text-gray-300"
                >
                    <div className="flex items-center space-x-4">
                        <FaEnvelope className="text-green-500 text-xl" />
                        <span>contact@example.com</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaPhone className="text-green-500 text-xl" />
                        <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FaMapMarkerAlt className="text-green-500 text-xl" />
                        <span>123 Business Street, Suite 100<br />City, State 12345</span>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold leading-6 text-white">
                            Name
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="message"
                                id="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-md bg-green-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>
        </div>
    );
}
