import NavBar from "@/components/NavBar";

export default function ContactUs() {
  return (
    <main className="relative min-h-screen bg-gray-100">
      {/* Header Section with NavBar */}
      <header className="relative bg-cover bg-center h-80" style={{ backgroundImage: 'url("/datacenter.jpg")' }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        {/* NavBar */}
        <NavBar />
        {/* Header Content */}
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
              placeholder="Phone Number *"
              className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
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

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold mb-2">Dallas, US</h3>
            <p>1950 N.Stemmons Fwy, Suite 2033</p>
            <p>Dallas, TX 75207</p>
            <p>Local US Free Call: 855 234 1621</p>
            <p>Email: sales@company.com</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Exeter, UK</h3>
            <p>Local UK Free Call: 0808 164 1302</p>
            <p>Email: sales@company.com</p>
          </div>
          <div>
            <h3 className="font-bold mb-2">Perth, Australia</h3>
            <p>Level 1, 2 Brook Street</p>
            <p>East Perth, WA 6004</p>
            <p>Local AUS Free Call: 1800 951 916</p>
            <p>Email: sales@company.com</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
