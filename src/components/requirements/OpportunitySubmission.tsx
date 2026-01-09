import { NavLink } from "react-router-dom";

const OpportunitySubmission = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        {/* Title */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-serif"
          style={{
            background: "linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Submit an Opportunity
        </h2>

        {/* Description */}
        <p className="text-black font-sans text-base md:text-lg leading-relaxed  max-w-125 mx-auto">
          If your opportunity aligns with our criteria, we welcome a
          confidential discussion.
        </p>

        {/* CTA Button */}
        <NavLink to={"/contact"}>
          <button
            className="px-8 w-full py-2 md:max-w-41  font-sans text-base transition-opacity hover:opacity-80 relative bg-white"
            style={{
              border: "2px solid transparent",
              backgroundImage:
                "linear-gradient(white, white), linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            <span
              style={{
                background: "linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Contact us
            </span>
          </button>
        </NavLink>
      </div>
    </section>
  );
};

export default OpportunitySubmission;
