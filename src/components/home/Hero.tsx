import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import LogoWhite from "../svgComponent/LogoWhite";
import { staggerContainer, slideFromBottom } from "../../utils/animations";

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
      <motion.div
        className="relative max-w-250 space-y-4 md:space-y-6 mx-auto z-10 flex flex-col pt-8 justify-center h-full px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Logo */}
        <motion.div variants={slideFromBottom}>
          <LogoWhite className="max-w-26.5 md:max-w-60" />
        </motion.div>

        {/* Title */}
        <motion.h1
          className="font-serif text-2xl md:text-3xl max-w-2xl"
          style={{
            background: "linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          variants={slideFromBottom}
        >
          A Principal-Led UK Single-Family Office
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-white font-sans text-base md:text-lg max-w-2xl leading-relaxed"
          variants={slideFromBottom}
        >
          Focused on the long-term stewardship, protection, and growth of family
          capital through selective investment in UK real assets.
        </motion.p>

        {/* CTA Button */}
        <motion.div variants={slideFromBottom}>
          <NavLink to={"/contact"}>
            <button
              className="px-8 py-3 rounded-lg cursor-pointer text-white font-sans text-base hover:opacity-90 transition-opacity"
              style={{
                background:
                  "linear-gradient(180deg, var(--color-primary-gold) 0%, var(--color-secondary-gold) 100%)",
                boxShadow: "0px 8px 8px -8px var(--color-shadow-gold)",
              }}
            >
              Submit a Discreet Opportunity
            </button>
          </NavLink>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
