import React from 'react';

const Contacts = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <p>
              <strong>Address:</strong> 123 Dental Street, City, Country
            </p>
            <p>
              <strong>Phone:</strong> (123) 456-7890
            </p>
            <p>
              <strong>Email:</strong> info@lumesmile.com
            </p>
            <p>
              <strong>Working Hours:</strong><br />
              Monday - Friday: 9:00 AM - 6:00 PM<br />
              Saturday: 9:00 AM - 2:00 PM<br />
              Sunday: Closed
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Book Your Appointment</h2>
          <p className="mb-4">
            Ready to transform your smile? Contact us today to schedule your appointment.
            Our friendly staff is here to help you with any questions you may have.
          </p>
          <button
            className="bg-dental-blue text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors"
            onClick={() => window.location.href = 'tel:1234567890'}
          >
            Call Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacts; 