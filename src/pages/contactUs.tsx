"use client";
import Link from "next/link";

export default function ContactUs() {
  return (
    <main className="relative min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="relative h-screen bg-cover bg-center" style={{ backgroundImage: 'url("/datacenter.jpg")' }}>
        {/* Transparent Header */}
        <nav className="absolute top-0 left-0 w-full z-50 flex justify-end items-center px-6 py-4">
          <ul className="flex space-x-6 text-white font-semibold text-lg">
            <li>
              <Link href="/" className="px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 rounded-md transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 rounded-md transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 rounded-md transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contactUs" className="px-4 py-2 hover:bg-gray-700 hover:bg-opacity-50 rounded-md transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="py-12 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Get in touch.</h2>
          <p className="text-gray-600 mb-8">
            Fill in your contact details in the form below, and one of our experienced advisors will be in touch shortly to help you.
          </p>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name *"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
            <input
              type="text"
              placeholder="Last Name *"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
            <input
              type="text"
              placeholder="Company Name"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input
              type="text"
              placeholder="Role/Position"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <input
              type="email"
              placeholder="Email Address *"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
            <input
              type="text"
              placeholder="Phone Number * (Including Country Code)"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
            <div className="md:col-span-2">
              <select
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
                defaultValue=""
              >
                <option value="" disabled>
                  How did you hear about us?
                </option>
                <option>Google Search</option>
                <option>Referral</option>
                <option>Social Media</option>
                <option>Other</option>
              </select>
            </div>
            <textarea
              placeholder="How can we help you?"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 col-span-1 md:col-span-2"
              rows={4}
            ></textarea>
            <button
              type="submit"
              className="p-3 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors col-span-1 md:col-span-2"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="bg-gray-900 text-white py-12 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Locations */}
          <div>
            <h3 className="font-bold mb-2">Dallas, US (North America HQ)</h3>
            <p>1950 N Stemmons Pwy. Suite 2033</p>
            <p>Dallas TX 75207</p>
            <p className="mt-2">Local US Free Call: 855 234 1621</p>
            <p>From Outside USA: +61.1800 951 916</p>
            <p>Email: sales@tapeark.com</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Montreal, Canada</h3>
            <p>6250 Vanden Abeele Street</p>
            <p>St-Laurent QC H45 151</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Exeter, UK</h3>
            <p>Local UK Free Call: 0808 164 1302</p>
            <p>From Europe: +61.1800 951 916</p>
            <p>Email: sales@tapeark.com</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">New Delhi, India</h3>
            <p>2nd Floor, Block B, Vatika Atrium</p>
            <p>Sector 53, Golf Course Road</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Perth, Australia (Global HQ)</h3>
            <p>Level 1, 2 Brook Street</p>
            <p>East Perth WA 6004</p>
            <p className="mt-2">Local AUS Free Call: 1800 951 916</p>
            <p>From Outside AUS: +61.1800 951 916</p>
            <p>Email: sales@tapeark.com</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Los Angeles, US</h3>
            <p>445 N Douglas St. Suite 603689</p>
            <p>El Segundo CA 90245</p>
          </div>
        </div>
      </section>
    </main>
  );
}
