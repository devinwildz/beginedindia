import { ArrowBigRight, Divide } from 'lucide-react'
import { Badge } from '../ui/badge'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const sectionHead = ({ heading, description, icon, badge, buttonText, link }) => {
    return (
        <div>
            {badge && (
                <div className='flex justify-center'>
                    <Badge className="mb-4 bg-[#c0e7c733] text-[#2b5e5e] px-4 py-2 rounded-full text-md ">
                        {badge}
                    </Badge>
                </div>
            )}
            <div className='flex items-center justify-center gap-2.5 '>
                {icon && <div className=' text-[#2b5e5e] mb-3 '>{icon}</div>}
                <h2 className='text-4xl md:text-6xl mb-4 font-bold text-[#2b5e5e]'>{heading}</h2>
            </div>
            <p className='text-xl max-w-2xl mx-auto text-center text-[#2b5e5e]'>{description}</p>
            {
                buttonText && (
                    <Button className="mt-6 bg-white hover:bg-[#0f4b4a]/90 text-[#2b5e5e]  rounded-xl px-8">
                        <Link className='flex' href={link || '#'}>
                            {buttonText}
                            <ArrowBigRight />
                        </Link>
                    </Button>
                )
            }
        </div>
    )
}

export default sectionHead