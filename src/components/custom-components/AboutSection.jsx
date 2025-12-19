"use client";

import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import { MapPin } from 'lucide-react';

const AboutSection = ({ data }) => {
    return (
        <div className='py-24 bg-gray-50'>
            <div className='max-w-8xl mx-auto px-4 text-center'>
                <div className='grid md:grid-cols-2 gap-12 items-center '>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="relative"
                    >
                        <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-2xl">
                            <Image
                                src={data.image.url}
                                fill
                                alt={data.image.alt || 'about Image'}
                                className="object-cover z-0"
                                sizes="(min-width: 1024px) 500px, 90vw"
                                priority
                            />
                            {/* Optional overlay gradient */}
                            <div className="absolute inset-0 bg-linear-to-br from-[#2b5e5e]/25 to-[#f59e0b]/20" />

                        </div>
                        <div className='absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs'>
                            <div className='flex items-center gap-4 mb-2'>
                                <div className='w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center'>
                                    <MapPin color='#2b5e5e' />
                                </div>
                                <div>
                                    <h3 className="text-3xl text-left font-bold text-[#2b5e5e]">{data.image_title}</h3>
                                    <p className="text-sm text-[#527a7a]">{data.image_content}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                        className="text-center lg:text-left"
                    >

                        <Badge className=" px-4 py-2 bg-[#c0e7c733] text-[#2b5e5e] rounded-full text-md mb-4">{data.subtitle}</Badge>

                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#2b5e5e] ">
                            {data.title}
                        </h2>
                        <p className="mt-6 text-lg sm:text-xl text-[#527a7a] max-w-2xl">
                            {data.content}
                        </p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className='grid grid-cols-2 gap-8 mt-8 '
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            {data.feature_item?.map((item, i) => (
                                <div
                                    key={i}
                                    className="flex gap-4 items-start text-left"
                                >
                                    {/* Icon */}
                                    <div className="text-[#2b5e5e] text-3xl shrink-0">
                                        <span className={`dashicons ${item.icon?.value}`} />
                                    </div>

                                    {/* Content */}
                                    <div>
                                        <h4 className="text-lg font-semibold text-[#2b5e5e]">
                                            {item.title}
                                        </h4>
                                        <p className="mt-1 text-[#527a7a] ">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}


                        </motion.div>

                    </motion.div>

                </div>
            </div>
        </div>
    )
}

export default AboutSection