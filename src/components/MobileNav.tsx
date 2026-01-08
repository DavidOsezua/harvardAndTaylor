import { Link } from "react-router-dom";
import { X } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: Array<{ name: string; path: string }>;
}

const MobileNav = ({ isOpen, onClose, navLinks }: MobileNavProps) => {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden bg-overlay fixed inset-0 z-60 transition-opacity  duration-300 backdrop-blur-xs"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white z-70 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button
              onClick={onClose}
              className="text-black p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col px-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={onClose}
                className="text-black font-sans text-lg py-4 border-b border-gray-200 hover:text-[#CCAE74] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Get Started Button */}
          <div className="mt-auto px-6 mb-8">
            <button
              className="w-full py-3 rounded-lg text-white font-sans text-base hover:opacity-90 transition-opacity"
              style={{
                background: "linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
                boxShadow: "0px 8px 8px -8px rgba(209, 172, 61, 0.3)",
              }}
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
