interface BannerProps {
  label: string;
  title: string;
  subtitle?: string;
}

const Banner = ({ label, title, subtitle }: BannerProps) => {
  return (
    <section className="relative h-100 w-full ">
      <div className="max-w-300 mx-auto flex items-center h-100 ">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/bannerimage.webp"
            alt="Banner background"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay with opacity */}
          <div className="absolute inset-0 bg-overlayDark backdrop-blur-sm" />
        </div>

        {/* Content */}
        <div className="relative z-10  px-6">
          <p
            className="text-xs md:text-sm font-sans mb-4 tracking-widest uppercase"
            style={{ color: "#838995" }}
          >
            {label}
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4"
            style={{
              background: "linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-white font-sans   max-w-136 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Banner;
