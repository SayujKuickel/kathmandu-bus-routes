import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

const Contact = () => {
  return (
    <main className="bg-background text-text min-h-screen">
      <Header />

      <div className=" container-small mx-auto px-5 my-8 h-screen rounded-2xl">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScK5KYuMGoyg-t-FNYI85wHtpCcYiwb67RLtX86kPiRY1c39Q/viewform?embedded=true"
          width="100%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>

      <Footer />
    </main>
  );
};

export default Contact;
