import Section from "@/components/container/Section";
import TopInfo from "@/components/section/TopInfo";
import Footer from "@/components/section/Footer";
import SubFooter from "@/components/section/SubFooter";
import NavBar from "@/components/section/NavBar";
import Marquee from "@/components/section/Marquee";
import Stats from "@/components/section/Stats";
import Main from "@/components/section/Main";
import ContactS from "@/components/section/ContactS";
import Process from "@/components/section/Process";
import Products from "@/components/section/Products";

export default function Home() {
  return (
    <div>
      {/* header */}
      <Section colour="--colour-front">  {/*reuseable container*/}
        <TopInfo />   {/* //top info email,phone,socialmedia */}
      </Section>

      <Section colour="--colour-back">
        <NavBar />
      </Section>

      {/*Main Section*/}
      <Section colour="--colour-back">
        <Main />
      </Section>

      <Section colour="--colour-front">
        <Marquee data={["Inventory Software", "ERP", "Websites", "Mobile Apps", "Desktop Software", "Online Stores", "Graphic Design", "Management Software", "Restaurant Software",]} />
      </Section>

      <Section colour="--colour-back">
        <Stats />
      </Section>

      <Section colour="--colour-back">
        <Products />
      </Section>

      <Section colour="--colour-back">
        <Process />
      </Section>

      <Section colour="--colour-front">
        <Marquee data={["KRM", "LUXLOOM", "Frame Craft Studio", "Lotaxy", "Vedyak Health Care"]} />
      </Section>

      <Section colour="--colour-back">
        <ContactS />
      </Section>

      {/* footer */}
      <Section colour="--colour-gray" className="text-[var(--colour-back)]">
        <Footer />
      </Section>

      <Section colour="--colour-back" >
        <SubFooter />
      </Section>

    </div >
  );
}
