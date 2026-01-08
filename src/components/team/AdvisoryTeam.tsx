interface AdvisoryMember {
  id: number;
  name: string;
  role: string;
  specialty: string;
  image?: string;
}

const AdvisoryTeam: React.FC = () => {
  const advisors: AdvisoryMember[] = [
    // Add advisory team members here
    // Example:
    // {
    //   id: 1,
    //   name: "John Doe",
    //   role: "Legal Advisor",
    //   specialty: "Corporate Law",
    //   image: "/images/advisors/john-doe.jpg"
    // },
  ];

  return (
    <section className="bg-gold py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xs tracking-widest uppercase text-gray-600 mb-4 font-medium">
          EXTERNAL SUPPORT
        </p>
        <h2
          className="font-serif text-4xl md:text-5xl font-normal mb-6 leading-tight"
          style={{
            background: "linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Advisory Network
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto font-light">
          We maintain enduring relationships with trusted advisers across legal,
          financial, and property disciplines—professionals whose judgement and
          discretion have been proven over time.
        </p>

        {advisors.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {advisors.map((advisor) => (
              <div
                key={advisor.id}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {advisor.image && (
                  <div className="w-32 h-32 mx-auto mb-5 rounded-full overflow-hidden">
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="text-center">
                  <h3 className="font-serif text-2xl font-medium text-gray-800 mb-2">
                    {advisor.name}
                  </h3>
                  <p
                    className="text-sm uppercase tracking-wider mb-2 font-medium"
                    style={{
                      background:
                        "linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {advisor.role}
                  </p>
                  <p className="text-base text-gray-600 leading-relaxed">
                    {advisor.specialty}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AdvisoryTeam;
