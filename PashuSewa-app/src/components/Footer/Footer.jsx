import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../../images/Pashu_Sewa_Logo.png'
const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div className="text-center md:text-left">
          <img src={logo} alt="Pashu Sewa Logo" className="mx-auto md:mx-0 w-20 h-20" />
          <h1 className='text-gray-800 text-lg font-bold'>PASHU SEWA</h1>
          <p className="mt-4">
            We provide comprehensive care and support for injured and abandoned animals. 
            Help us create a better world for these voiceless beings.
          </p>
          
        </div>

        {/* Links Section */}
        <div className="text-center md:text-left">
          <h2 className="font-bold text-lg mb-4">Other Pages</h2>
          <ul className="space-y-2">
            <a href='/'><li>Home</li></a>
            <a href='/about'><li>About Us</li></a>
            <a href='/report'><li>Services</li></a>
            <a href='/contact'><li>Contact Us</li></a>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="text-center md:text-left">
          <h2 className="font-bold text-lg mb-4">Contact Us</h2>
          <p>Our support team is available 24/7 to answer your queries.</p>
          <p className="mt-2">📞 +91-934685531 | +91-7982794454</p>
          <p>📧 techyarindam@gmail.com</p>
          <p>🏠 Shahdara, Delhi - 110032, India</p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start mt-4 space-x-4">
            <FaFacebook className="text-2xl cursor-pointer hover:text-blue-500" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-blue-400" />
            <FaYoutube className="text-2xl cursor-pointer hover:text-red-500" />
            <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-700" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-pink-500" />
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white mt-8 pt-4 text-center">
        &copy; 2025 Pashu Sewa. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
