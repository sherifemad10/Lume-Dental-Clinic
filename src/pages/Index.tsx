
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import DoctorsSection from '@/components/DoctorsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';
import BookAppointmentCard from '@/components/BookAppointmentCard';
import AppointmentForm from './AppointmentForm';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <div className="bg-white py-20">
        <div className="container-padding mx-auto">
          <BookAppointmentCard />
        </div>
      </div>
      <DoctorsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
