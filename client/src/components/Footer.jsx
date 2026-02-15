import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Bedre’s Company</h3>
          <p>Innovating technology solutions worldwide.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/industries" className="hover:text-white">Industries</Link></li>
            <li><Link to="/careers" className="hover:text-white">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p>Email: info@bedrescompany.com</p>
          <p>Phone: +91 86########</p>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-400">
        &copy; 2026 Bedre’s Company. All rights reserved.
      </div>

    </footer>
  );
}
