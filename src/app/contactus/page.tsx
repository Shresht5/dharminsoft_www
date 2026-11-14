import Section from "@/components/container/Section";
import TopInfo from "@/components/section/TopInfo";
import H from "@/components/text/H";
import Footer from "@/components/section/Footer";
import SubFooter from "@/components/section/SubFooter";
import NavBar from "@/components/section/NavBar";
import Contactus from "@/components/section/contactus/Contactus";

export default function ContactUs() {
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

      <Section colour="--colour-back">
        <Contactus />
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
