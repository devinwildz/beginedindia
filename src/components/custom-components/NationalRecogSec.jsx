"use client";
import React from 'react'
import SectionHead from '../custom-components/sectionHead';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const NationalRecogSec = ({ data }) => {
    return (
        <div className='py-20'>
            <SectionHead icon={<Shield size={40} />} heading={data?.title} description={data?.content} />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, staggerChildren: 0.1 }}
                className='mt-10'

            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-6xl mx-auto gap-6 lg:gap-8">
                    {data.box_item?.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="group"
                        >
                            <div className=" bg-white rounded-3xl shadow-lg p-6 text-center transition-all duration-500 ease-outgroup-hover:shadow-2xl group-hover:-translate-y-4 group-hover:scale-105 border-2 border-[#e0ebeb] group-hover:border-[#2b5e5e]  h-full flex flex-col items-center justify-center">
                                {/* Icon */}
                                <div className="w-16 h-16 mb-4 rounded-2xl bg-[#2b5e5e] flex items-center justify-center mb-6text-white text-4xl group-hover:bg-[#1e4444] transition-colors duration-300">
                                    {item.icon?.value}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-[#2b5e5e] mb-3">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-xs text-[#527a7a] leading-relaxed px-2">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            <div className='max-w-4xl mx-auto bg-gray-100 p-8 rounded-3xl mt-15'>
                <div className='flex justify-center gap-2.5 '>
                    <div className=' text-[#2b5e5e] '>
                        <Shield size={30} />
                    </div>
                    <div>
                        <h2 className='text-2xl mb-3 font-bold text-[#2b5e5e]'>{data.cta_title}</h2>
                        <p className=' text-[#2b5e5e]'>{data.cta_description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NationalRecogSec