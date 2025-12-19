"use client"

import React from 'react'
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const HomePageSection = ({data }) => {
    return (
        <div className='max-w-8xl mx-auto px-4 min-h-[90vh] flex items-center pt-24'>
            <div className="grid md:grid-cols-2 gap-12 items-center">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="text-center lg:text-left"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#2b5e5e] ">
                        {data.title}
                    </h1>

                    <p className="mt-6 text-lg sm:text-xl text-[#527a7a] max-w-2xl">
                        {data.content}
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        {
                            data.button_1_text && (
                                <Button
                                    size="lg"
                                    className="bg-[#0f4b4a] cursor-pointer hover:bg-[#0f4b4a]/90 text-white rounded-xl px-8 "
                                >
                                    <Link href={data.button_1_link || '#'}>
                                        {data.button_1_text}
                                    </Link>
                                </Button>
                            )

                        }
                        {
                            data.button_2_text && (
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-[#0f4b4a] cursor-pointer text-[#0f4b4a] hover:bg-[#0f4b4a]/5 rounded-xl px-8"
                                >
                                    <Link href={data.button_2_link || '#'}>
                                        {data.button_2_text}
                                    </Link>
                                </Button>
                            )}
                    </div>

                    {/* Stats */}
                    <div className="mt-10 border-t border-gray-300 pt-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className='grid grid-cols-3 gap-8'
                            transition={{ delay: 0.4, duration: 0.6 }}
                        >
                            
                            {data.counter_column?.map((item, i) => (
                                <div key={i}>
                                    <h1 className="text-4xl font-bold text-[#0f4b4a]">
                                        {item.number}
                                    </h1>
                                    <p className="text-[#0f4b4a]/70 mt-1">
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                        </motion.div>


                    </div>
                </motion.div>

                {/* Right Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="relative"
                >
                    <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl">
                        <Image

                            src={data.image.url}
                            fill
                            alt={data.image.alt || 'Hero Image'}
                            className="object-cover z-0"
                            sizes="(min-width: 1024px) 500px, 90vw"
                            priority
                        />
                        {/* Optional overlay gradient */}
                        <div className="absolute inset-0 bg-linear-to-br from-[#2b5e5e]/25 to-[#f59e0b]/20" />
                        <div className="absolute inset-0 bg-black/5" />


                    </div>



                </motion.div>

            </div>
        </div>
    )
}

export default HomePageSection