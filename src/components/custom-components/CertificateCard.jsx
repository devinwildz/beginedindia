"use client";
import { CircleCheckBig } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

const CertificateCard = ({
    ImageUrl,
    ImageAlt,
    Imgbadge,
    badgeText,
    title,
    subtitle,
    description,
    BtnText,
    BtnLink,
    features = [],
    imagePosition = "left",
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden mt-14 max-w-8xl mx-auto px-4 "
        >
            <div
                className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-10 `}
            >
                {/* IMAGE */}
                <div className={`relative h-75 sm:h-105 lg:h-full overflow-hidden ${imagePosition === "right" ? "lg:order-2" : "lg:order-1"
                    }`}>
                    <motion.div
                        transition={{ duration: 0.6 }}
                    >
                        <div className="rounded-3xl aspect-4/3 relative overflow-hidden group">
                            <Image
                                src={ImageUrl}
                                fill
                                alt={ImageAlt || "certificate image"}
                                className="object-cover group-hover:scale-110 duration-500 transition-transform"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-linear-to-br from-black/20 to-transparent" />
                        </div>
                    </motion.div>

                    {/* BADGES */}
                    <div className="absolute top-6 left-6 flex gap-2">
                        {Imgbadge && (
                            <Badge className="bg-white shadow-md text-sm px-4 py-2 font-bold text-[#2b5e5e]">
                                {Imgbadge}
                            </Badge>
                        )}
                    </div>
                </div>

                {/* CONTENT */}
                <div className={` ${imagePosition === "right" ? "lg:order-1 " : "lg:order-2 "
                    }`}>

                    <Badge className="inline-block px-4 text-sm py-2 bg-[#2b5e5e1a] text-[#2b5e5e] mb-3">
                        {badgeText}
                    </Badge>

                    <h3 className="text-3xl md:text-5xl font-bold text-[#2b5e5e] mb-2">
                        {title}
                    </h3>

                    <h4 className="text-2xl text-[#527a7a] font-semibold mb-2">
                        {subtitle}
                    </h4>

                    <p className="text-[#527a7a] leading-relaxed mb-6">
                        {description}
                    </p>

                    {/* FEATURES */}
                    {features.length > 0 && (
                        <ul className="space-y-3">
                            {features.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex text-md items-center gap-2 text-[#2b5e5e]"
                                >

                                    <CircleCheckBig size={16} />

                                    {item.add_feature}
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* BUTTON */}
                    <Button className="px-8 cursor-pointer py-5 mt-8 bg-[#2b5e5e] rounded-xl text-white font-medium hover:bg-[#1e4444] transition-all">
                        <Link
                            href={BtnLink || "#"}
                            className="inline-block "
                        >
                            {BtnText}
                        </Link>
                    </Button>
                </div>
            </div>
        </motion.div>
    );
};

export default CertificateCard;
