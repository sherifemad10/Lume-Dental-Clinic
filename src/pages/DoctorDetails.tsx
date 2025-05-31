import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BookAppointmentForm from '@/components/BookAppointmentForm';

// Import doctor data
const doctors = [
  {
    id: 1,
    name: "Dr. Sherif Emad",
    role: "Surgeon",
    category: "surgeon",
    image: "/sherif.png",
    bio: "Dr. Sherif Emad is a highly skilled dentist with over 10 years of experience in general and cosmetic dentistry. She specializes in preventive care and smile makeovers, ensuring every patient receives personalized attention.",
    education: "DDS - University of California, San Francisco",
    specialties: ["Oral Surgery", "Dental Implants", "Wisdom Teeth Extraction"],
    availableDays: [1, 3, 5] // Monday, Wednesday, Friday
  },
  {
    id: 2,
    name: "Dr. Sara Mohammed",
    role: "Surgeon",
    category: "surgeon",
    image: "/Meio.jpg",
    bio: "Dr. Sara Mohammed is a renowned dental surgeon specializing in complex oral surgeries and implant procedures. With his extensive training and gentle approach, he helps patients regain full dental function with minimal discomfort.",
    education: "DMD - Harvard School of Dental Medicine",
    specialties: ["Oral Surgery", "Dental Implants", "Wisdom Teeth Extraction"],
    availableDays: [2, 4, 6] // Tuesday, Thursday, Saturday
  },
  {
    id: 3,
    name: "Dr. Aian Musa",
    role: "Dentist",
    category: "dentist",
    image: "/Aian.jpeg",
    bio: "Dr. Aian Musa brings a wealth of knowledge in modern dental techniques. He focuses on providing comfortable, effective treatments while educating patients on maintaining optimal oral health.",
    education: "DDS - New York University College of Dentistry",
    specialties: ["Family Dentistry", "Root Canal Therapy", "Dental Crowns"],
    availableDays: [1, 2, 3, 4, 5] // Monday to Friday
  },
  {
    id: 4,
    name: "Dr. Aseel Ali",
    role: "Orthodontist",
    category: "orthodontist",
    image: "/Aseel.jpg",
    bio: "Dr. Aseel Ali is a certified orthodontist with expertise in various teeth straightening methods. She is passionate about helping patients achieve beautiful, confident smiles through personalized orthodontic treatment plans.",
    education: "DMD, MS in Orthodontics - University of Pennsylvania",
    specialties: ["Braces", "Invisalign", "Orthodontic Retainers"],
    availableDays: [0, 6] // Sunday and Saturday
  },
];

const DoctorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctorId = parseInt(id as string);
  const doctor = doctors.find(doc => doc.id === doctorId);
  
  if (!doctor) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <h1 className="text-2xl font-semibold mb-4">Doctor not found</h1>
          <Button onClick={() => navigate('/')}>Back to Homepage</Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container-padding mx-auto py-16 flex-1">
        <Button 
          variant="outline" 
          onClick={() => navigate(-1)}
          className="mb-8"
        >
          ← Back
        </Button>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden mb-6">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-auto object-cover aspect-[3/4]"
              />
            </div>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button className="w-full mt-4 bg-dental-blue text-black hover:bg-dental-blue-dark">
                  Book an Appointment
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:max-w-md">
                <SheetHeader>
                  <SheetTitle>Book an Appointment with {doctor.name}</SheetTitle>
                </SheetHeader>
                <BookAppointmentForm doctorId={doctor.id} doctorName={doctor.name} />
              </SheetContent>
            </Sheet>
          </div>
          
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-2">{doctor.name}</h1>
            <p className="text-lg text-gray-600 mb-6">{doctor.role}</p>
            
            <Card className="mb-6">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-3">About</h2>
                <p className="text-gray-700">{doctor.bio}</p>
              </CardContent>
            </Card>
            
            <Card className="mb-6">
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-3">Education</h2>
                <p className="text-gray-700">{doctor.education}</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-3">Specialties</h2>
                <ul className="list-disc pl-5">
                  {doctor.specialties.map((specialty, index) => (
                    <li key={index} className="text-gray-700 mb-1">{specialty}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default DoctorDetails;
