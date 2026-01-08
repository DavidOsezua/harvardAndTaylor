interface ProjectCardProps {
  title: string;
  location: string;
  description: string;
  image: string;
  imageAlt?: string;
  buttonText?: string;
  buttonLink?: string;
  reversed?: boolean;
}

const ProjectCard = ({
  title,
  location,
  description,
  image,
  imageAlt = "Project image",
  buttonText,
  buttonLink,
  reversed = false,
}: ProjectCardProps) => {
  return (
    <section className=" py-8 md:py-10 px-6">
      <div className="max-w-7xl mx-auto bg-project-bg p-4 md:p-8 rounded-xl">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
            reversed ? "" : ""
          }`}
        >
          {/* Image Section */}
          <div className={reversed ? "lg:order-2" : "lg:order-1"}>
            <div className="w-full aspect-4/3 overflow-hidden">
              <img
                src={image}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className={reversed ? "lg:order-1" : "lg:order-2"}>
            <h2 className="font-serif text-[22px] font-bold md:text-4xl lg:text-5xl  mb-4 text-gray-900">
              {title}
            </h2>
            <p className="text-sm text-gray-600 mb-6">{location}</p>
            <p className="text-sm md:text-base leading-relaxed text-gray-700 mb-8">
              {description}
            </p>

            {buttonText && (
              <a
                href={buttonLink || "#"}
                className="inline-block px-8 py-3 w-full text-center md:max-w-39.75 text-white font-medium rounded-sm transition-all duration-300 hover:opacity-90"
                style={{
                  background:
                    "linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
                }}
              >
                {buttonText}
              </a>
            )}

            {!buttonText && !buttonLink && (
              <div className="inline-block px-6 py-2 w-full text-center md:max-w-39.75 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-sm">
                Coming Soon
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
