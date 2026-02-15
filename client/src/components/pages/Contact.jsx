import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="pt-28 bg-gray-50 dark:bg-slate-900 min-h-screen">
        <section className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-dark dark:text-white text-center">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <form className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow space-y-4">
              <input type="text" placeholder="Name" className="w-full p-3 border rounded bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white"/>
              <input type="email" placeholder="Email" className="w-full p-3 border rounded bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white"/>
              <textarea placeholder="Message" rows="5" className="w-full p-3 border rounded bg-gray-50 dark:bg-slate-700 text-gray-900 dark:text-white"/>
              <button type="submit" className="px-6 py-3 bg-blue-700 text-white rounded hover:opacity-90 transition">Send Message</button>
            </form>

            {/* Contact Info & Map */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Email</h3>
                <p>info@bedrescompany.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Phone</h3>
                <p>+91 9876543210</p>
              </div>
              <div className="w-full h-64 rounded overflow-hidden shadow">
                <iframe
                  className="w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1168540695!2d72.74109936622078!3d19.08219783994157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c63c0e4c7f03%3A0x1d6f05a2ecb23687!2sMumbai!5e0!3m2!1sen!2sin!4v1670000000000!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Bedre's Company Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
