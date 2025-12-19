// components/Footer.jsx
import React from 'react';
import { FaFacebookF,FaInstagram ,FaLinkedin ,FaYoutube  } from "react-icons/fa";

import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#2b5e5e] text-white">
            <div className="max-w-8xl mx-auto px-6 lg:pt-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

                    {/* Column 1: Logo + Description */}
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-bold mb-4">
                            Begin Ed India®
                        </h2>
                        <p className="text-md text-white/80 leading-relaxed mb-6 max-w-xs">
                            Empowering lactation professionals across India with world-class education and certification.
                        </p>

                        <div className="space-y-3 text-sm text-white/90">
                            <div className="flex items-center gap-3">
                                <Mail size={16} />
                                <span className='text-md'>info@beginedindia.com</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Phone size={16} />
                                <span className='text-md'>+91 (123) 456-7890</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Courses */}
                    <div>
                        <h3 className="text-xl font-semibold mb-5">Courses</h3>
                        <ul className="space-y-3 text-md text-white/80">
                            <li><a href="#" className="hover:text-white transition">Course Library</a></li>
                            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
                            <li><a href="#" className="hover:text-white transition">IBCLC Pathways</a></li>
                            <li><a href="#" className="hover:text-white transition">Certification Info</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h3 className="text-xl font-semibold mb-5">Resources</h3>
                        <ul className="space-y-3 text-md text-white/80">
                            <li><a href="#" className="hover:text-white transition">Booklets</a></li>
                            <li><a href="#" className="hover:text-white transition">Manuals</a></li>
                            <li><a href="#" className="hover:text-white transition">Info Sheets</a></li>
                            <li><a href="#" className="hover:text-white transition">Research Papers</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Community */}
                    <div>
                        <h3 className="text-xl font-semibold mb-5">Community</h3>
                        <ul className="space-y-3 text-md text-white/80">
                            <li><a href="#" className="hover:text-white transition">Student Login</a></li>
                            <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                            <li><a href="#" className="hover:text-white transition">Join ALPI</a></li>
                            <li><a href="#" className="hover:text-white transition">Graduate Network</a></li>
                        </ul>
                    </div>

                    {/* Column 5: About */}
                    <div>
                        <h3 className="text-xl font-semibold mb-5">About</h3>
                        <ul className="space-y-3 text-md text-white/80">
                            <li><a href="#" className="hover:text-white transition">Our Team</a></li>
                            <li><a href="#" className="hover:text-white transition">Partners</a></li>
                            <li><a href="#" className="hover:text-white transition">Projects</a></li>
                            <li><a href="#" className="hover:text-white transition">Testimonials</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section: Social + Copyright */}
                <div className="mt-12 pt-8 ">
                    <div className=" border-b border-white/20 ">
                        {/* Social Icons */}
                        <div className="flex gap-4 justify-center items-center mb-6">
                            <a href="#" className="w-12 h-12 hover:scale-110 duration-150 transition rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20">
                                <FaFacebookF className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-12 h-12 hover:scale-110 duration-150 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                               <FaInstagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-12 h-12 hover:scale-110 duration-150 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                                <FaLinkedin className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-12 h-12 hover:scale-110 duration-150 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition">
                                <FaYoutube className="w-5 h-5" />
                            </a>
                        </div>


                    </div>
                    {/* Copyright & Accreditation */}
                    <div className="text-center text-sm text-white/70 py-10">
                        <p>© 2025 Begin Ed India. All rights reserved. | <Link href="#" className=" hover:text-white">Privacy Policy</Link> | <Link href="#" className=" hover:text-white">Terms of Service</Link></p>
                        <p className="mt-2">Internationally recognized lactation education • Accredited by LEAARC & IBLCE</p>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;