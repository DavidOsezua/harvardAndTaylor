const OpportunitiesWeDecline = () => {
  return (
    <section className="bg-gold-light py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid grid-cols-1 gap-y-14 md:grid-cols-2 md:gap-x-24">
          {/* Left Column */}
          <div className="max-w-xl">
            <span className="text-xs tracking-widest uppercase text-grey-primary">
              Selectivity
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-serif text-primary-gold">
              Opportunities We Decline
            </h2>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-grey-dark">
              We are intentionally selective in the opportunities we pursue.
              This discipline allows us to focus our attention and resources on
              situations where we can add genuine value.
            </p>
          </div>

          {/* Right Column */}
          <ul className="space-y-6">
            {[
              "Opportunities requiring rapid deployment decisions",
              "Highly speculative or early-stage ventures without tangible assets",
              "Situations requiring third-party capital raising",
              "Investments outside the United Kingdom",
              "High-volume or commoditised deal flow",
            ].map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <span className="mt-2 h-px w-4 bg-grey-primary shrink-0" />
                <p className="text-sm md:text-base leading-relaxed text-grey-dark">
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OpportunitiesWeDecline;
