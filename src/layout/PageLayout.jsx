import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";

const PageLayout = ({ children }) => {
  return (
    <main className="bg-background text-text min-h-screen">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default PageLayout;
