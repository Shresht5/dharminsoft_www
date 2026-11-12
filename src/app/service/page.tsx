import Section from "@/components/container/Section";
import TopInfo from "@/components/section/TopInfo";
import P from "@/components/text/P";
import H from "@/components/text/H";
import Navbar from "@/components/section/NavBar";
import Footer from "@/components/section/Footer";
import SubFooter from "@/components/section/SubFooter";

export default function Services() {
    return (
        <div>
            {/* header */}
            <Section colour="--colour-front">  {/*reuseable container*/}
                <TopInfo />   {/* //top info email,phone,socialmedia */}
            </Section>

            <Section colour="--colour-back">
                <Navbar />
            </Section>

            <Section colour="--colour-blue">
                <H>services</H>
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
