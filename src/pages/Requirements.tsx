import Banner from "../components/Banner";
import FlexibleDeals from "../components/requirements/FlexibleDeals";
import OpportunitiesWeDecline from "../components/requirements/OpportunitiesWeDecline";
import OpportunitySubmission from "../components/requirements/OpportunitySubmission";

const Requirements = () => {
  return (
    <div className="min-h-screen">
      <Banner
        label={"Parameters"}
        title={"Investment Criteria"}
        subtitle="We maintain selective, disciplined parameters for capital deployment. The following criteria guide our evaluation of potential investments."
      />
      <FlexibleDeals />
      <OpportunitiesWeDecline />
      <OpportunitySubmission />
    </div>
  );
};

export default Requirements;
