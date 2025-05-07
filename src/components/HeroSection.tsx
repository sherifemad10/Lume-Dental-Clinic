import  { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const dayName = currentTime.toLocaleDateString('en-US', { weekday: 'long' });
  const timeString = currentTime.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });

  return (
    <section className="pt-28 pb-16">
      <div className="container-padding mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold leading-tight">
            Your Perfect Smile Starts with Lume Dental
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Advanced dental care with a gentle touch. Book your appointment today.
          </p>
          <Link to="/contacts">
          <div className="mt-8">
          

            <Button className="btn-primary flex items-center gap-2 text-lg p-5">
              Book an Appointment
              <ArrowRight size={18} />
            </Button>
            
          </div>
          </Link>

          <div className="mt-12 bg-white rounded-2xl p-6 max-w-md">
            <h3 className="font-medium mb-4">Working Hours</h3>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday – Thursday</span>
                <span className="font-medium">9 AM - 9 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday, Sunday</span>
                <span className="font-medium">10 AM - 6 PM</span>
              </div>
              <div className="flex justify-between mt-2 pt-2 border-t">
                <span className="text-blue-600">Today {dayName},</span>
                <span className="font-medium">{timeString}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden aspect-[4/5] shadow-xl">
            <img
              src="./hero.jpeg"
              alt="Smiling woman with toothbrush"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
