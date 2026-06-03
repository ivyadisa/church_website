export default function Hero() {
  const churchMapLink = "https://www.google.com/maps/place/1%C2%B015'37.8%22S+36%C2%B053'07.2%22E/@-1.2604901,36.8827694,765m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d-1.2604901!4d36.8853443?hl=en&entry=ttu&g_ep=EgoyMDI2MDUzMS4wIKXMDSoASAFQAw%3D%3D";

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center py-24 px-6 text-white min-h-screen bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold">
          The Mountain of Breakthrough Church
        </h1>

        <p className="mt-4 text-lg md:text-xl">
          A place of Prayer, Deliverance, Worship, and Breakthrough in Christ Jesus.
        </p>

        <p className="mt-2 text-sm opacity-90">
          Runda Kariobangi, Nairobi, Kenya
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={churchMapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-200 transition"
          >
            📍 Get Directions
          </a>

          <a
            href="#services"
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-blue-900 transition"
          >
            View Services
          </a>
        </div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full pointer-events-none"></div>
    </section>
  );
}