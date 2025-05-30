import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen bg-black relative font-sans">
      {/* Fixed elements */}
      <div className="fixed inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent pointer-events-none"></div>
      
      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main className="relative">
          <FloatingElements />
          <Hero />
          <Features />
          <WaitlistForm />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
