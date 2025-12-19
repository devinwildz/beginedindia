import HomePageSection from "@/components/custom-components/HomePageSection";
import AboutSection from "@/components/custom-components/AboutSection";
import NationalRecogSec from "@/components/custom-components/NationalRecogSec";
import CertificateSection from "@/components/custom-components/CertificateSection";
import SuccessSection from "@/components/custom-components/SuccessSection";


export function renderSection(section, type, index) {
    switch (type) {
        case "banner":
            return <HomePageSection key={index} data={section} />;

        case "about":
            return <AboutSection key={index} data={section} />;

        case "nationalRecognition":
            return <NationalRecogSec key={index} data={section} />;

        case "certification":
            return <CertificateSection key={index} data={section} />;

        case "success":
            return <SuccessSection key={index} data={section} />;

        default:
            return null;
    }
}
