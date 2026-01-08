import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    opportunitySummary: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <div>
          <p className="text-xs tracking-widest uppercase text-gray-500 mb-4 font-medium">
            ENQUIRIES
          </p>
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal mb-6"
            style={{
              background: "linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Contact
          </h1>
          <p className="text-base md:text-lg max-w-150 leading-relaxed text-gray-700">
            We review a limited number of discreet, well-considered investment
            opportunities each year.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-12 lg:gap-16">
          {/* Left Sidebar - Information */}
          <div className="space-y-12">
            {/* Enquiries Header */}

            {/* Expectations */}
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-500 mb-3 font-medium">
                EXPECTATIONS
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                We receive many enquiries and respond selectively to those that
                align with our investment criteria. Please ensure your
                opportunity meets our published parameters before making
                contact.
              </p>
            </div>

            <div className="border-t border-gray-300"></div>

            {/* Response */}
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-500 mb-3 font-medium">
                RESPONSE
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                If your enquiry is of interest, we will respond within a
                reasonable timeframe. We do not engage with unsolicited
                marketing or high-volume deal flow.
              </p>
            </div>

            <div className="border-t border-gray-300"></div>

            {/* Location */}
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-500 mb-3 font-medium">
                LOCATION
              </p>
              <p className="text-base leading-relaxed text-gray-700">
                London, United Kingdom
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs tracking-widest uppercase text-gray-500 mb-3 font-medium"
                  >
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="w-full px-0 py-2 border-b border-gray-300 focus:border-gray-600 outline-none transition-colors bg-transparent text-gray-900 placeholder:text-gray-400"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs tracking-widest uppercase text-gray-500 mb-3 font-medium"
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="w-full px-0 py-2 border-b border-gray-300 focus:border-gray-600 outline-none transition-colors bg-transparent text-gray-900 placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Organisation Field */}
              <div>
                <label
                  htmlFor="organisation"
                  className="block text-xs tracking-widest uppercase text-gray-500 mb-3 font-medium"
                >
                  ORGANISATION
                </label>
                <input
                  type="text"
                  id="organisation"
                  name="organisation"
                  value={formData.organisation}
                  onChange={handleChange}
                  placeholder="Your organisation (if applicable)"
                  className="w-full px-0 py-2 border-b border-gray-300 focus:border-gray-600 outline-none transition-colors bg-transparent text-gray-900 placeholder:text-gray-400"
                />
              </div>

              {/* Opportunity Summary Field */}
              <div>
                <label
                  htmlFor="opportunitySummary"
                  className="block text-xs tracking-widest uppercase text-gray-500 mb-3 font-medium"
                >
                  OPPORTUNITY SUMMARY
                </label>
                <textarea
                  id="opportunitySummary"
                  name="opportunitySummary"
                  value={formData.opportunitySummary}
                  onChange={handleChange}
                  placeholder="Please provide a brief summary of the investment opportunity..."
                  required
                  rows={6}
                  className="w-full px-0 py-2 border-b border-gray-300 focus:border-gray-600 outline-none transition-colors bg-transparent text-gray-900 placeholder:text-gray-400 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="px-10 py-3 text-white font-medium tracking-wide uppercase text-sm rounded-sm transition-all duration-300 hover:opacity-90"
                  style={{
                    background:
                      "linear-gradient(180deg, #CCAE74 0%, #9B7936 100%)",
                  }}
                >
                  Submit Enquiry
                </button>
              </div>

              {/* Disclaimer Text */}
              <p className="text-sm text-gray-500 leading-relaxed pt-4">
                By submitting this form, you confirm that you have reviewed our
                investment criteria and believe your opportunity to be aligned
                with our parameters.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
