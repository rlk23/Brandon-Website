export default function Services() {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-lg text-center max-w-2xl mb-10">
          Explore our range of services designed to modernize seismic data management and streamline your operations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-md p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Tape Migrations</h2>
            <p className="text-sm text-gray-700">
              Securely transfer your legacy tape data to modern, scalable cloud storage platforms like AWS, Azure, and GCP.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Non-Tape Migrations</h2>
            <p className="text-sm text-gray-700">
              Modernize on-premise data storage with custom cloud-based solutions tailored to your needs.
            </p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6 text-center">
            <h2 className="text-2xl font-semibold mb-4">Data Solutions</h2>
            <p className="text-sm text-gray-700">
              Benefit from enhanced agility, cost savings, and security with our innovative data management solutions.
            </p>
          </div>
        </div>
      </div>
    );
  }
  