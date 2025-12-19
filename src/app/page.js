import { getHomePage } from "@/lib/api/wordpress";
import { renderSection } from "@/lib/acf/mapSections";

export default async function Page() {
  const acf = await getHomePage();


  return (
    <>
      {acf.banner_section?.map((section, i) =>
        renderSection(section, "banner", i)
      )}
      {acf.about_section?.map((section, i) =>
        renderSection(section, "about", i)
      )}
      {acf.national_recognized_section?.map((section, i) =>
        renderSection(section, "nationalRecognition", i)
      )}
      {acf.certificate_section?.map((section, i) =>
        renderSection(section, "certification", i)
      )}
      {acf.path_success_section?.map((section, i) =>
        renderSection(section, "success", i)
      )}
    </>
  );
};

