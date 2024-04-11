import { News } from "../News";
import { AboutMove } from "../aboutMove";
import { FAQMove } from "../faqMove";
import { Footer } from "../footer";
import { GlobalMove } from "../globalMove";
import { IEOMove } from "../ieoMove";
import { NewsMove } from "../newsMove";
import ParticlesBackground from "../particle";
import { RoadMove } from "../roadMove";
import { SectionTop } from "../sectionTop";
import { Navbar } from "./navbar";


export default function Home(){
    return(
        <body>
            <Navbar/>
            <ParticlesBackground/>
            <SectionTop />
            <AboutMove />
            <IEOMove />
            <NewsMove />
            <GlobalMove />
            <RoadMove />
            <News />
            <FAQMove />
            <Footer />
        </body>
    )
}