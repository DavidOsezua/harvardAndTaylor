const InvestmentFocus = () => {
  const investmentAreas = [
    {
      title: "Strategic Land",
      description: "Selective acquisition of land with long-term development potential and complexity.",
    },
    {
      title: "Commercial Property",
      description: "Value-oriented positions in mispriced or underperforming commercial real estate.",
    },
    {
      title: "Residential Development",
      description: "Direct investment in residential projects with clear value creation pathways.",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 px-6"
      style={{
        background: 'linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs md:text-sm font-sans text-white/80 mb-4 tracking-widest uppercase">
            Investment Focus
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white">
            UK Real Assets
          </h2>
        </div>

        {/* Investment Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {investmentAreas.map((area, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl md:text-2xl font-serif text-black mb-4">
                {area.title}
              </h3>
              <p className="text-sm md:text-base font-sans text-gray-700 leading-relaxed">
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
