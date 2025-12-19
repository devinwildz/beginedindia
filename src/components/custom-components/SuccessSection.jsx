"use client";

import React from 'react'
import SectionHead from '../custom-components/sectionHead';
import { motion } from 'framer-motion';


const SuccessSection = ({ data }) => {
    return (
        <div className='py-20 bg-[#e3eecd4d]'>
            <SectionHead badge={data?.title} heading={data?.subtitle} description={data?.content} />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, staggerChildren: 0.1 }}
                className='mt-10'

            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-8xl mx-auto px-4 gap-6 lg:gap-8">
                    {data.box_item?.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className="group"
                        >
                            <div className=" bg-white rounded-3xl shadow-lg p-4 text-center group-hover:shadow-xl h-full flex flex-col items-center justify-center">
                                {/* Icon */}
                                <div style={{ backgroundColor: item?.icon_back_color }} className={`w-16 h-16 mb-4 rounded-2xl flex items-center justify-center mb-6text-white text-4xl `}>
                                    {item.icon?.value}
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-[#2b5e5e] mb-3">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-[#527a7a] leading-relaxed px-2">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>


        </div>
    )
}

export default SuccessSection