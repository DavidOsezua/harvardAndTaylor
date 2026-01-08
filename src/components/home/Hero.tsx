import LogoWhite from "../svgComponent/LogoWhite";

const Hero = () => {
  return (
    <section className="relative h-[523px] md:h-[623px] w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/heroimage.webp"
          alt="City skyline"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content */}
      <div className="relative max-w-[1000px] space-y-4 md:space-y-6 mx-auto z-10 flex flex-col justify-center  h-full px-6 ">
        {/* Logo */}

        <LogoWhite className="max-w-[106px] md:max-w-[240px]" />

        {/* Title */}
        <h1
          className="font-serif text-2xl md:text-3xl  max-w-2xl"
          style={{
            background: "linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          A Principal-Led UK Single-Family Office
        </h1>

        {/* Description */}
        <p className="text-white font-sans text-base md:text-lg  max-w-2xl leading-relaxed">
          Focused on the long-term stewardship, protection, and growth of family
          capital through selective investment in UK real assets.
        </p>

        {/* CTA Button */}
        <div>
          <button
            className="px-8 py-3 rounded-lg text-white font-sans text-base hover:opacity-90 transition-opacity"
            style={{
              background:
                "linear-gradient(180deg, var(--color-primary-gold) 0%, var(--color-secondary-gold) 100%)",
              boxShadow: "0px 8px 8px -8px var(--color-shadow-gold)",
            }}
          >
            Submit a Discreet Opportunity
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
