import { motion } from "framer-motion";
import { staggerContainer, slideFromBottom } from "../utils/animations";

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
        <motion.div
          className="relative z-10  px-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            className="text-xs md:text-sm font-sans mb-4 tracking-widest uppercase"
            style={{ color: "#838995" }}
            variants={slideFromBottom}
          >
            {label}
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4"
            style={{
              background: "linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
            variants={slideFromBottom}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p
              className="text-white font-sans   max-w-136 leading-relaxed"
              variants={slideFromBottom}
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
