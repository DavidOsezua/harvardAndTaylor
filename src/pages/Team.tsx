import Banner from "../components/Banner";
import AdvisoryTeam from "../components/team/AdvisoryTeam";
import TeamHarvardAndTaylor from "../components/team/TeamHarvardAndTaylor";

const Team = () => {
  return (
    <div className="min-h-screen ">
      <Banner
        title="Team"
        subtitle="Harvard & Taylor is a principal-led office, with investment decisions made directly by the family principals."
        label="Leadership"
      />
      <div className="pb-20">
      <TeamHarvardAndTaylor />
      <AdvisoryTeam />
      </div>
    </div>
  );
};

export default Team;
