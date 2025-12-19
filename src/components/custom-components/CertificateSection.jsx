import SectionHead from '../custom-components/sectionHead';
import CertificateCard from './CertificateCard';

import React from 'react'

const CertificateSection = ({ data }) => {
    return (
        <div className='py-20'>
            <SectionHead badge={data?.title} heading={data?.subtitle} description={data?.content} />

            {data.left_right_image_with_content?.map((item, i) => (
                <CertificateCard
                    key={i}
                    ImageUrl={item.image?.url}
                    ImageAlt={item.image?.alt}
                    Imgbadge={item.image_title}   
                    badgeText={item.subtitle}     
                    title={item.title}            
                    subtitle={item.title_2}  
                    description={item.description}
                    BtnText={item.button_text}
                    BtnLink={item.button_link}
                    features={item.feature_list}
                    imagePosition={item.select_image_position}
                />
            ))}

        </div>
    )
}

export default CertificateSection