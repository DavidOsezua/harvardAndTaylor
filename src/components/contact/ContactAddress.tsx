import OpeningHours from "../svgComponent/OpeningHours";
import OurOffice from "../svgComponent/OurOffice";

const ContactAddress = () => {
  return (
    <section className="px-6 pb-10">
      <div className="mx-auto max-w-6xl md:grid grid-cols-2 items-center gap-12 ">
        <div className="space-y-4   md:space-y-4">
          <h2 className="font-bold text-[24px] md:text-[36px]">Visit Us</h2>

          <p className="md:text-[20px]">
            Stop by at our office for personaalised assistance and expert
            guidiance on your real estate journey
          </p>

          {/* Office address and Open hours */}
          <div className="space-y-6">
            {/* Office address */}
            <div className="flex  gap-4">
              <div className="">
                <OurOffice />
              </div>

              <div>
                <p className="font-bold">Our Office</p>
                <p>
                  153a Rye Lane,
                  <br /> London, <br />
                  Peckham. SE15 4TL
                </p>
              </div>
            </div>

            {/* Open Hours */}
            <div className="">
              <div className="flex gap-4 items-center">
                <OpeningHours />
                <p className="font-bold">Opening Hours</p>
              </div>
              <div>
                <div>
                  <div className="flex justify-between items-center py-4 border-b border-b-black/16">
                    <p>Monday-Friday</p>
                    <p>8:00am - 8:00pm</p>
                  </div>

                  <div className="flex justify-between items-center py-4 border-b border-b-black/16">
                    <p>Saturday</p>
                    <p>9:00am - 7:00pm</p>
                  </div>

                  <div className="flex justify-between items-center py-4 border-b border-b-black/16">
                    <p>Saturday</p>
                    <p>9:00am - 9:00pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-0">
          <img src="/map.webp" alt="map" />
        </div>
      </div>
    </section>
  );
};

export default ContactAddress;
