import Header from "./components/common/Header";
import Section from "./components/common/Section";
import tmpbg1 from "./assets/images/temp-bg1.webp";
import Intro from "./components/sections/Intro";
import Timer from "./components/sections/Timer";
import Data  from  "./data/data.json"
import BrideAndGroom from "./components/sections/BrideAndGroom";
import timelinebg from "./assets/images/timelinebgtpm.webp"
import Plan from "./components/sections/Plan";
import Contact from "./components/sections/Contact";
import WhenAndWhere from "./components/sections/WhenAndWhere";
import Footer from "./components/common/Footer";

function App() {
  return (
    <>
      <Header />
      <Section sectionId="home" backgroundImageUrl={tmpbg1} overlay>
        <Intro names={Data.names} />
      </Section>
      <Section sectionId="timer">
        <Timer />
      </Section>
      <Section sectionId="bride-groom">
        <BrideAndGroom groom={Data.groom} bride={Data.bride} />
      </Section>
      <Section sectionId="plan"  backgroundImageUrl={timelinebg}>
        <Plan planEntries={Data.planEntries}/>
      </Section>
      <Section sectionId="contact">
        <Contact contactInformation={Data.contactInformation}/>
      </Section>
      <Section sectionId="when-and-where" secondary>
        <WhenAndWhere ceremony={Data.events.ceremony} reception={Data.events.reception} />
      </Section>
      <Footer numbers={Data.numbers}/>
    </>
  );
}

export default App;
