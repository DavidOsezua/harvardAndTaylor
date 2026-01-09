import Banner from "../components/Banner";
import ContactAddress from "../components/contact/ContactAddress";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Banner label={"ENQUIRIES"} title={"Contact"} subtitle="We review a limited number of discreet, well-considered investment opportunities each year." />
      <ContactForm />
      <ContactAddress />
    </div>
  );
};

export default Contact;
