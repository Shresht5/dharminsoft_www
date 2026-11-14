import Section from "@/components/container/Section";
import TopInfo from "@/components/section/TopInfo";
import Footer from "@/components/section/Footer";
import SubFooter from "@/components/section/SubFooter";
import NavBar from "@/components/section/NavBar";
import Marquee from "@/components/section/Marquee";
import MainProducts from "@/components/section/Products/MainProducts";
import ProProducts from "@/components/section/Products/ProProducts";
import Services from "@/components/section/services/Services";
import TechStack from "@/components/section/services/TechStacks";
import MainService from "@/components/section/services/MainService";

export default function Service() {
  return (
    <div>
      {/* header */}
      <Section colour="--colour-front">
        {" "}
        {/*reuseable container*/}
        <TopInfo /> {/* //top info email,phone,socialmedia */}
      </Section>

      <Section colour="--colour-back">
        <NavBar />
      </Section>

      {/*Main Section*/}
      <Section colour="--colour-back">
        <MainService />
      </Section>

      <Section colour="--colour-front">
        <Marquee
          data={[
            "Web Development",
            "Mobile Development",
            "Desktop Development",
            "Host & Domain Setup",
            "Custom Solution",
            "Low Rates",
          ]}
        />
      </Section>

      <Section colour="--colour-back">
        <Services />
      </Section>

      <Section colour="--colour-back">
        <TechStack />
      </Section>

      {/* footer */}
      <Section colour="--colour-gray" className="text-[var(--colour-back)]">
        <Footer />
      </Section>

      <Section colour="--colour-back">
        <SubFooter />
      </Section>
    </div>
  );
}
