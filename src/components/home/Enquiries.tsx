const Enquiries = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header */}
        <p className="text-xs md:text-sm font-sans text-gray-600 mb-4 tracking-widest uppercase">
          Enquiries
        </p>

        {/* Title */}
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8"
          style={{
            background: 'linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Discreet Opportunities
        </h2>

        {/* Description */}
        <p className="text-black font-sans text-base md:text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
          We review a limited number of well-considered investment opportunities each year. If you believe you have an aligned opportunity, we welcome a confidential discussion.
        </p>

        {/* CTA Button */}
        <button
          className="px-10 py-4 font-sans text-base transition-opacity hover:opacity-90"
          style={{
            backgroundColor: '#F5F5F5',
            color: '#000',
            border: 'none',
          }}
        >
          GET IN TOUCH
        </button>
      </div>
    </section>
  );
};

export default Enquiries;
