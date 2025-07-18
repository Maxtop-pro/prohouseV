import React, {useState} from "react";
import HeroSection from "../components/home/HeroSection";
import ClientTestimonials from "../components/ClientTestimonials";
import ProjectsSection from "../components/home/ProjectsSection";
import AboutUs from "../components/AboutUs";
import RequestCallback from "../components/RequestCallback";
import Modal from "../components/Modal";

function Home() {
  const [showModal, setShowModal] = useState(true);
  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      {showModal && <Modal onClose={handleCloseModal} />}
      <HeroSection />
      <ClientTestimonials />
      <ProjectsSection />
      <AboutUs />
      <RequestCallback />
    </div>
  );
}

export default Home;
