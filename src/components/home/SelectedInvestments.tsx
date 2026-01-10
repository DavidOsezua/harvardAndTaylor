import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { slideFromLeft, slideFromRight } from "../../utils/animations";

const SelectedInvestments = () => {
  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            className="order-1"
            variants={slideFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className=" overflow-hidden shadow-lg">
              <img
                src="/selectedinvestment.webp"
                alt="Building development illustration"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="order-2"
            variants={slideFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-sm md:text-base font-sans text-gray-600 mb-4 tracking-wider uppercase">
              Selected Investments
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
              Considered Deployment
            </h2>

            <p className="text-black font-sans text-base md:text-lg leading-relaxed mb-8">
              We maintain a concentrated portfolio of carefully selected
              positions, each representing a conviction- driven allocation where
              we can contribute meaningful insight and oversight.
            </p>

            {/* CTA Button */}
            <NavLink to={"/projects"}>
              <button
                className="px-8 py-3 w-full md:max-w-73.25 cursor-pointer  font-sans text-base transition-opacity hover:opacity-80 relative bg-white"
                style={{
                  border: "2px solid transparent",
                  backgroundImage:
                    "linear-gradient(white, white), linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              >
                <span
                  style={{
                    background:
                      "linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  VIEW SELECTED INVESTMENTS
                </span>
              </button>
            </NavLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SelectedInvestments;
