'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Request() {
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        projectDescription: '',
        budget: '',
        timeline: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Request submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
                    Request a Component
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-2 text-lg leading-8 text-gray-400"
                >
                    Tell us about your project and requirements
                </motion.p>
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="mx-auto mt-16 max-w-xl"
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="companyName" className="block text-sm font-semibold leading-6 text-white">
                                Company Name
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="companyName"
                                    id="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="contactPerson" className="block text-sm font-semibold leading-6 text-white">
                                Contact Person
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="contactPerson"
                                    id="contactPerson"
                                    value={formData.contactPerson}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                            <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-white">
                                Phone Number
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="projectDescription" className="block text-sm font-semibold leading-6 text-white">
                            Project Description
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                name="projectDescription"
                                id="projectDescription"
                                rows={4}
                                value={formData.projectDescription}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                                placeholder="Describe your project requirements..."
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        <div>
                            <label htmlFor="budget" className="block text-sm font-semibold leading-6 text-white">
                                Budget Range
                            </label>
                            <div className="mt-2.5">
                                <select
                                    name="budget"
                                    id="budget"
                                    value={formData.budget}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                                >
                                    <option value="">Select budget range</option>
                                    <option value="0-5000">$0 - $5,000</option>
                                    <option value="5000-10000">$5,000 - $10,000</option>
                                    <option value="10000-20000">$10,000 - $20,000</option>
                                    <option value="20000+">$20,000+</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="timeline" className="block text-sm font-semibold leading-6 text-white">
                                Expected Timeline
                            </label>
                            <div className="mt-2.5">
                                <select
                                    name="timeline"
                                    id="timeline"
                                    value={formData.timeline}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                                >
                                    <option value="">Select timeline</option>
                                    <option value="1-2-weeks">1-2 weeks</option>
                                    <option value="2-4-weeks">2-4 weeks</option>
                                    <option value="1-2-months">1-2 months</option>
                                    <option value="2+-months">2+ months</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full rounded-md bg-green-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
                        >
                            Submit Request
                        </button>
                    </div>
                </form>
            </motion.div>
        </div>
    );
}
