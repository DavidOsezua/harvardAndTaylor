const InvestmentFocus = () => {
  const investmentAreas = [
    {
      title: "Strategic Land",
      description:
        "Selective acquisition of land with long-term development potential and complexity.",
    },
    {
      title: "Commercial Property",
      description:
        "Value-oriented positions in mispriced or underperforming commercial real estate.",
    },
    {
      title: "Residential Development",
      description:
        "Direct investment in residential projects with clear value creation pathways.",
    },
  ];

  return (
    <section className="py-10 md:py-16 px-6 bg-gold-light">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] tracking-[0.3em] text-grey-primary uppercase mb-4">
            Investment Focus
          </p>

          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold"
            style={{
              background: "linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            UK Real Assets
          </h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
          {investmentAreas.map((area, index) => (
            <div
              key={index}
              className={`px-6 md:px-10  ${
                index !== investmentAreas.length - 1
                  ? "md:border-r md:border-r-primary-gold"
                  : ""
              }`}
            >
              <h3 className="text-lg md:text-xl font-serif mb-4 text-grey-dark">
                {area.title}
              </h3>

              <p className="text-sm leading-relaxed max-w-xs mx-auto text-grey-dark">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentFocus;
