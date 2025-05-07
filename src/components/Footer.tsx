

const Footer = () => {
  return (
    <footer id="contacts" className="bg-white pt-16 pb-8">
      <div className="container-padding mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M12 14C14.7614 14 17 11.7614 17 9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9C7 11.7614 9.23858 14 12 14Z" fill="#D3E4FD"/>
                <path d="M15.2939 12.0048C14.3021 13.1971 12.7244 13.9987 10.9768 13.9987C7.79293 13.9987 5.21429 11.5404 5.21429 8.49987C5.21429 5.45934 7.79293 3.00098 10.9768 3.00098C12.7244 3.00098 14.3021 3.80253 15.2939 4.99486C16.2856 3.80253 17.8633 3.00098 19.6108 3.00098C22.7947 3.00098 25.3733 5.45934 25.3733 8.49987C25.3733 11.5404 22.7947 13.9987 19.6108 13.9987C17.8633 13.9987 16.2856 13.1971 15.2939 12.0048Z" fill="#D3E4FD"/>
                <path d="M5 16.5C5 13.4624 7.46243 11 10.5 11H13.5C16.5376 11 19 13.4624 19 16.5V18C19 19.1046 18.1046 20 17 20H7C5.89543 20 5 19.1046 5 18V16.5Z" fill="#D3E4FD"/>
              </svg>
              <span className="font-bold text-lg">Lume Dental</span>
            </div>
            <p className="text-gray-600 mb-4">
              Providing top-quality dental care with a gentle touch since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/sherif.emad.301637" aria-label="Facebook" className="text-gray-600 hover:text-black">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-black">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-black">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28004 9.09 5.11004 7.38 3.00004 4.79C2.63004 5.42 2.42004 6.16 2.42004 6.94C2.42004 8.43 3.17004 9.75 4.33004 10.5C3.62004 10.5 2.96004 10.3 2.38004 10V10.03C2.38004 12.11 3.86004 13.85 5.82004 14.24C5.19077 14.4122 4.53013 14.4362 3.89004 14.31C4.16165 15.1625 4.69358 15.9084 5.41106 16.4429C6.12854 16.9775 6.99549 17.2737 7.89004 17.29C6.37367 18.4904 4.49404 19.1393 2.56004 19.13C2.22004 19.13 1.88004 19.11 1.54004 19.07C3.44004 20.29 5.70004 21 8.12004 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">Home</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-black">About Us</a></li>
              <li><a href="#services" className="text-gray-600 hover:text-black">Services</a></li>
              <li><a href="#doctors" className="text-gray-600 hover:text-black">Doctors</a></li>
              <li><a href="#testimonials" className="text-gray-600 hover:text-black">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-black">General Dentistry</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Cosmetic Dentistry</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Dental Implants</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Orthodontics</a></li>
              <li><a href="#" className="text-gray-600 hover:text-black">Pediatric Dentistry</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <address className="not-italic">
              <div className="mb-2 text-gray-600">
                <strong>Address:</strong> 123 Dental Ave, New York, NY 10001
              </div>
              <div className="mb-2 text-gray-600">
                <strong>Phone:</strong> <a href="tel:+12125551234" className="hover:text-black">+1 (212) 555-1234</a>
              </div>
              <div className="mb-2 text-gray-600">
                <strong>Email:</strong> <a href="mailto:info@lumedental.com" className="hover:text-black">sherifemadd@gmail.com</a>
              </div>
              <div className="text-gray-600">
                <strong>Working Hours:</strong><br />
                Monday - Thursday: 9AM - 9PM<br />
                Saturday - Sunday: 10AM - 6PM
              </div>
            </address>
          </div>
        </div>
        
        <hr className="my-8 border-gray-200" />
        
        <div className="text-center text-gray-600">
          <p>© {new Date().getFullYear()} Lume Dental Clinic. All Rights Reserved. Design by <a href="https://www.linkedin.com/in/sherifemad/" className="text-black hover:underline">Sherif Emad</a>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
