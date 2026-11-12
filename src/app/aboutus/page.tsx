import Section from "@/components/container/Section";
import TopInfo from "@/components/section/TopInfo";
import H from "@/components/text/H";
import Footer from "@/components/section/Footer";
import SubFooter from "@/components/section/SubFooter";
import NavBar from "@/components/section/NavBar";

export default function AboutUs() {
    return (
        <div>
            {/* header */}
            <Section colour="--colour-front">  {/*reuseable container*/}
                <TopInfo />   {/* //top info email,phone,socialmedia */}
            </Section>

            <Section colour="--colour-back">
                <NavBar />
            </Section>

            <Section colour="--colour-blue">
                <H>AboutUs</H>
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
