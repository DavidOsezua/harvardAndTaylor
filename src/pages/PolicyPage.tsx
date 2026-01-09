import Banner from "../components/Banner";
import PolicyContent from "../components/policy/PolicyContent";

const PolicyPage = () => {
  return (
    <div>
      <Banner label={""} title={"Privacy Policy"} />
      <PolicyContent />
    </div>
  );
};

export default PolicyPage;
