const AboutContent = () => {
  return (
    <section className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12 lg:gap-16">
          {/* Left Sidebar */}
          <div className="space-y-12">
            {/* Established */}
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-500 mb-3 font-medium">
                ESTABLISHED
              </p>
              <h3
                className="font-serif text-2xl md:text-3xl font-normal"
                style={{
                  background: "linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                London, UK
              </h3>
            </div>

            <div className="border-t border-gray-300"></div>

            {/* Focus */}
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-500 mb-3 font-medium">
                FOCUS
              </p>
              <h3
                className="font-serif text-2xl md:text-3xl font-normal"
                style={{
                  background: "linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                UK Real Assets
              </h3>
            </div>

            <div className="border-t border-gray-300"></div>

            {/* Structure */}
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-500 mb-3 font-medium">
                STRUCTURE
              </p>
              <h3
                className="font-serif text-2xl md:text-3xl font-normal"
                style={{
                  background: "linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Single-Family Office
              </h3>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <div>
              <p className="text-base md:text-lg leading-relaxed text-grey-primary mb-6">
                Harvard & Taylor is a privately held UK single-family office dedicated to the long-term
                stewardship, protection, and growth of family capital.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-grey-primary">
                We operate as a principal-led investment office, deploying capital directly into UK real
                assets with a focus on complexity, mispricing, and long-term value creation. Our approach
                is characterised by patience, discipline, and a preference for positions where we can
                exercise meaningful oversight and contribute genuine insight.
              </p>
            </div>

            {/* Investment Philosophy */}
            <div>
              <h2
                className="font-serif text-3xl md:text-4xl font-normal mb-6"
                style={{
                  background: "linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Investment Philosophy
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-grey-primary mb-6">
                Our investment philosophy prioritises capital preservation alongside measured, risk-aware
                growth. We seek opportunities that others may overlook due to complexity, illiquidity, or
                extended time horizons—situations where patient capital and hands-on involvement create
                genuine advantage.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-grey-primary">
                We do not raise or manage external capital. This independence allows us to remain entirely
                focused on the long-term interests of the family, free from the pressures of external
                stakeholders or short-term performance metrics.
              </p>
            </div>

            {/* Capital Deployment */}
            <div>
              <h2
                className="font-serif text-3xl md:text-4xl font-normal mb-6"
                style={{
                  background: "linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Capital Deployment
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-grey-primary mb-6">
                Capital is deployed through direct investment rather than fund structures, allowing for
                greater control, alignment, and flexibility. We maintain a concentrated portfolio,
                preferring deep conviction in fewer positions over broad diversification.
              </p>
              <p className="text-base md:text-lg leading-relaxed text-grey-primary">
                Each investment decision is made with a generational perspective, evaluated against
                rigorous criteria and held to exacting standards of governance and risk management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;