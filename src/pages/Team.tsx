import Banner from "../components/Banner";
import TeamHarvardAndTaylor from "../components/team/TeamHarvardAndTaylor";

const Team = () => {
  return (
    <div className="min-h-screen">
      <Banner
        title="Team"
        subtitle="Harvard & Taylor is a principal-led office, with investment decisions made directly by the family principals."
        label="Leadership"
      />

      <TeamHarvardAndTaylor />
    </div>
  );
};

export default Team;
