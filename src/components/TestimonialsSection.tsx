
import React from 'react';
import { Star } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  rating: number;
  comment: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Jeremy Curry",
    rating: 5,
    comment: "I've always been anxious about visiting the dentist, but when I walked into Lume Dental, I felt at ease. The staff was incredibly welcoming, and Dr. Beatrice Cox took the time to explain everything in detail. The treatment was completely painless!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  },
  {
    id: 2,
    name: "Helena Erickson",
    rating: 5,
    comment: "I had been putting off my dental check-up for years due to bad past experiences. A friend recommended Lume Dental, and I'm so glad they did! Dr. Fletcher Morse was kind, patient, and extremely gentle. I needed a filling, and it was done quickly and painlessly.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80"
  },
  {
    id: 3,
    name: "Marcus Bennett",
    rating: 5,
    comment: "After going to Lume Dental, I'm no longer conscientious about smiling in photos! The team at Lume Dental transformed my smile through their careful treatments. They're gentle, professional, and truly care about patient comfort.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-dental-blue-light">
      <div className="container-padding mx-auto">
        <div className="text-center mb-6">
          <span className="text-sm font-medium uppercase tracking-wider text-gray-500">TESTIMONIALS</span>
        </div>
        <h2 className="section-title text-center">What Our Patients Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card-with-shadow p-6">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">{testimonial.rating}.0</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 line-clamp-4">{testimonial.comment}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-white rounded-xl p-4 px-6 shadow-md">
            <h4 className="font-semibold mb-2">Smiles That Speak for Themselves</h4>
            <p className="text-gray-600 text-sm">
              Here's what our happy patients have to say about their experience with us
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
