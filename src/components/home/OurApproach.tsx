const OurApproach = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <p className="text-sm md:text-base font-sans text-gray-600 mb-4 tracking-wider uppercase">
              Our Approach
            </p>

            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6"
              style={{
                background: "linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Patient Capital, Disciplined Allocation
            </h2>

            <div className="space-y-6 text-black font-sans text-base md:text-lg leading-relaxed">
              <p>
                We deploy family capital with a long-term perspective,
                prioritising preservation and measured growth over speculative
                returns. Our investment philosophy centres on deep
                understanding, selective deployment, and active stewardship.
              </p>

              <p>
                As a single-family office, we maintain complete independence in
                our decision-making, unencumbered by external capital pressures
                or short-term performance mandates.
              </p>
            </div>
          </div>

          {/* Right Images */}
          <div className="order-2 relative">
            <div className="relative">
              {/* Main large image */}
              <div className="rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="/ourapproach.webp"
                  alt="Modern building architecture"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Smaller overlay image */}
              <div className="absolute bottom-0 right-0 w-3/5 rounded-3xl overflow-hidden shadow-2xl transform translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8">
                <img
                  src="/ourapproach.webp"
                  alt="Building detail"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
