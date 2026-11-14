import Section from "@/components/container/Section";
import TopInfo from "@/components/section/TopInfo";
import Footer from "@/components/section/Footer";
import SubFooter from "@/components/section/SubFooter";
import NavBar from "@/components/section/NavBar";
import Marquee from "@/components/section/Marquee";
import MainProducts from "@/components/section/Products/MainProducts";
import ProProducts from "@/components/section/Products/ProProducts";

export default function Home() {
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
        <MainProducts />
      </Section>

      <Section colour="--colour-front">
        <Marquee
          data={[
            "Inventory Software",
            "ERP",
            "Websites",
            "Mobile Apps",
            "Desktop Software",
            "Online Stores",
            "Graphic Design",
            "Management Software",
            "Restaurant Software",
          ]}
        />
      </Section>

      <Section colour="--colour-back">
        <ProProducts />
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
