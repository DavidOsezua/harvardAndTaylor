const TeamHarvardAndTaylor = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="lg:flex lg:justify-between gap-12 items-start">
          {/* Left Column - Image and Title */}
          <div>
            <div className="mb-6">
              <img
                src="/teamimg1.webp"
                alt="The Principal"
                className="max-w-[] h-117.25 object-cover"
              />
            </div>
            <h3
              className="text-2xl md:text-3xl font-serif mb-2"
              style={{
                background: "linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              The Principal
            </h3>
            <p className="text-sm md:text-base font-sans text-gray-600">
              Managing Director
            </p>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 flex-1">
            <p className="text-black font-sans text-base md:text-lg leading-relaxed">
              Harvard & Taylor operates as a principal-led investment office,
              with all capital allocation decisions made directly by the family.
              This structure ensures complete alignment between decision-making
              authority and capital ownership.
            </p>

            <p className="text-black font-sans text-base md:text-lg leading-relaxed">
              The office is supported by a network of long-standing external
              advisers across legal, tax, and specialist property disciplines.
              These relationships have been built over many years and provide
              access to institutional-grade expertise whilst maintaining the
              nimbleness and discretion of a private family office.
            </p>

            <p className="text-black font-sans text-base md:text-lg leading-relaxed">
              We do not maintain a large in-house team. Instead, we assemble
              bespoke advisory groups for each investment, drawing on
              specialists whose expertise aligns with the specific requirements
              of the opportunity.
            </p>

            {/* Divider Line */}
            <div className="border-t border-gray-300 my-8"></div>

            {/* Bottom Section - Three Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-xs font-sans text-gray-500 uppercase tracking-wider mb-2">
                  Focus
                </p>
                <p className="text-base font-sans text-black">UK Real Assets</p>
              </div>
              <div>
                <p className="text-xs font-sans text-gray-500 uppercase tracking-wider mb-2">
                  Approach
                </p>
                <p className="text-base font-sans text-black">
                  Direct Investment
                </p>
              </div>
              <div>
                <p className="text-xs font-sans text-gray-500 uppercase tracking-wider mb-2">
                  Horizon
                </p>
                <p className="text-base font-sans text-black">Generational</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHarvardAndTaylor;
