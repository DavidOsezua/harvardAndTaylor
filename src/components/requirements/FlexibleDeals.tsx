const FlexibleDeals = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        {/* Header */}
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-serif text-grey-dark">
            Flexible Deal Structures
          </h2>

          <p className="mt-5 text-base md:text-lg leading-relaxed text-grey-primary">
            We collaborate transparently with vendors and agents to find the
            right structure for every unique site. Our goal is to unlock value
            through creative and bespoke agreements
          </p>
        </div>

        {/* Items */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-y-14 md:gap-y-16 md:gap-x-20">
          {[
            {
              num: "01",
              title: "UK Real Assets",
              text:
                "Direct investment in UK-based real estate, land, and property-related opportunities.",
            },
            {
              num: "02",
              title: "Complexity & Mispricing",
              text:
                "Situations involving structural complexity, distress, or market mispricing where patient capital creates advantage.",
            },
            {
              num: "03",
              title: "Long-Term Horizon",
              text:
                "Multi-year or generational time horizons. We are not seeking quick exits or speculative positions.",
            },
            {
              num: "04",
              title: "Value Creation Potential",
              text:
                "Clear pathways to value enhancement through repositioning, development, or operational improvement.",
            },
          ].map(({ num, title, text }) => (
            <div key={num} className="flex gap-5">
              <span className="font-serif text-base text-primary-gold">
                {num}
              </span>

              <div>
                <h3 className="text-lg md:text-xl font-serif text-grey-dark">
                  {title}
                </h3>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-grey-primary">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlexibleDeals;
