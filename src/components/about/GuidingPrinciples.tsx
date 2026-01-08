const GuidingPrinciples = () => {
  const principles = [
    {
      id: 1,
      title: "Discretion",
      description:
        "We operate with the utmost confidentiality, maintaining privacy in all dealings and relationships.",
    },
    {
      id: 2,
      title: "Discipline",
      description:
        "Rigorous analysis and patient execution guide every decision, regardless of market conditions or external pressures.",
    },
    {
      id: 3,
      title: "Stewardship",
      description:
        "We are custodians of family capital, with an obligation to preserve and grow wealth across generations.",
    },
  ];

  return (
    <section className="bg-[#f8f6f3] py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-widest uppercase text-gray-600 mb-4 font-medium">
            GUIDING PRINCIPLES
          </p>
          <h2
            className="font-serif text-[30px] md:text-5xl lg:text-6xl font-normal leading-tight"
            style={{
              background: "linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Discretion, Discipline, Stewardship
          </h2>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {principles.map((principle) => (
            <div key={principle.id} className="text-center">
              <h3
                className="font-serif text-2xl md:text-3xl font-normal mb-4"
                style={{
                  background:
                    "linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {principle.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuidingPrinciples;
