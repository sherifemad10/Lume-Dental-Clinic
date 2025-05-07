const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <span className="text-sm font-medium uppercase tracking-wider text-gray-500">
            Why Choose Us
          </span>
        </div>
        <h2 className="text-center text-3xl font-bold mb-10">
          Discover Why Lume Dental Clinic is Your Best Choice
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-dental-blue w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              {/* Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">
              Advanced Dental Technology
            </h3>
            <p className="text-gray-600 text-center">
              Our clinic is equipped with{" "}
              <strong>state-of-the-art dental technology</strong> to ensure
              accurate diagnostics and the most effective treatments for every
              patient.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-dental-blue w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              {/* Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M16.97 14.44C18.34 14.67 19.85 14.43 20.91 13.72C22.32 12.78 22.32 11.24 20.91 10.3C19.84 9.59 18.31 9.35 16.94 9.59"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M5.97 7.16C6.03 7.15 6.1 7.15 6.16 7.16C7.54 7.11 8.64 5.98 8.64 4.58C8.64 3.15 7.49 2 6.06 2C4.63 2 3.48 3.16 3.48 4.58C3.49 5.98 4.59 7.11 5.97 7.16Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M7 14.44C5.63 14.67 4.12 14.43 3.06 13.72C1.65 12.78 1.65 11.24 3.06 10.3C4.13 9.59 5.66 9.35 7.03 9.59"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.33 13.45 9.33 12.05C9.33 10.62 10.48 9.47 11.91 9.47C13.34 9.47 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">
              Experienced & Caring Professionals
            </h3>
            <p className="text-gray-600 text-center">
              Our <strong>highly experienced dentists</strong> combine medical
              expertise with a gentle approach, ensuring your comfort during
              every visit.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-dental-blue w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              {/* Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M15.9965 11H16.0054M11.9955 11H12.0045M7.99451 11H8.00349"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">
              Pain-Free Dental Procedures
            </h3>
            <p className="text-gray-600 text-center">
              We prioritize your comfort by offering{" "}
              <strong>pain-free dental treatments</strong> with modern sedation
              and numbing techniques for a relaxed experience.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="bg-dental-blue w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
              {/* Icon */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                  stroke="white"
                  strokeWidth="1.5"
                />
                <path
                  d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
                  stroke="white"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-center">
              Comprehensive Dental Services
            </h3>
            <p className="text-gray-600 text-center">
              From regular cleanings to{" "}
              <strong>cosmetic and restorative dentistry</strong>, Lume Dental
              Clinic offers a full range of dental services under one roof.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
