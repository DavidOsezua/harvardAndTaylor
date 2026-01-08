import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu } from "lucide-react";
import MobileNav from "./MobileNav";
import LogoGrey from "./svgComponent/LogoGrey";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Requirements", path: "/requirements" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 backdrop-blur-[71.8px]">
        <div className="bg-navbar-bg bg-opacity-12">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/">
                <LogoGrey />
              </Link>

              {/* Navigation Links */}
              <div className="flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    style={{ color: 'var(--color-primary-gold)' }}
                    className="hover:opacity-80 transition-opacity duration-200 font-sans text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-[71.8px]">
        <div className="bg-[#FEF4E1] bg-opacity-12">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link to="/">
                <LogoGrey />
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-black p-2"
                aria-label="Toggle menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
};

export default Navbar;
