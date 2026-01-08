import AboutContent from "../components/about/AboutContent";
import GuidingPrinciples from "../components/about/GuidingPrinciples";
import Banner from "../components/Banner";

const About = () => {
  return (
    <div className="min-h-screen pb-10 ">
      <Banner title="A Private Investment Office" label={"About Us"} />
      <AboutContent />
      <GuidingPrinciples />
    </div>
  );
};

export default About;
