import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Cosmetic Dentistry",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80",
    alt: "Cosmetic Dentistry Treatment",
    features: ["Teeth Whitening", "Veneers", "Smile Makeovers"]
  },
  {
    title: "Implants & Prosthetics",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&auto=format&fit=crop&w=1068&q=80",
    alt: "Dental Implants and Prosthetics",
    features: ["Dental Implants", "Dentures"]
  },
  {
    title: "Restorative Care",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
    alt: "Restorative Dental Procedures",
    features: ["Fillings", "Crowns & Bridges", "Root Canal Therapy"]
  }
];

const CheckIcon = () => (
  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 11L12 14L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ServiceCard = ({ title, image, alt, features }: { title: string; image: string; alt: string; features: string[] }) => (
  <div className="card-with-shadow overflow-hidden rounded-lg bg-white">
    <div className="relative h-48">
      <img src={image} alt={alt} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2 mb-6">
        {features.map((item, idx) => (
          <li key={idx} className="flex items-center text-gray-700">
            <CheckIcon />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Button variant="outline" className="w-full flex items-center justify-between">
        <span>Explore more</span>
        <ArrowRight size={16} />
      </Button>
    </div>
  </div>
);

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-dental-blue-light">
      <div className="container-padding mx-auto">
        <div className="text-center mb-6">
          <span className="text-sm font-medium uppercase tracking-wider text-gray-500">Our Services</span>
        </div>
        <h2 className="section-title text-center">Dental Services for Every Need</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
          <p className="text-gray-600 text-center lg:text-left">
            From preventive care to advanced cosmetic and restorative treatments, 
            we provide a full range of dental services tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="btn-primary">
            Explore All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
