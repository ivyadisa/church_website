export default function Hero() {
  const churchMapLink =
    "https://www.google.com/maps/place/1%C2%B015'37.7%22S+36%C2%B053'09.3%22E/@-1.2604689,36.883328,17z";

  return (
    <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-r from-blue-900 to-indigo-800 text-white">
      
      <h1 className="text-5xl font-bold leading-tight">
        The Mountain of Breakthrough Church
      </h1>

      <p className="mt-4 text-lg max-w-2xl">
        A place of Prayer, Deliverance, Worship, and Breakthrough in Christ Jesus.
      </p>

      <p className="mt-2 text-sm opacity-80">
        Runda Kariobangi, Nairobi, Kenya
      </p>

      {/* Buttons */}
      <div className="mt-8 flex gap-4 flex-wrap justify-center">
        
        <a
          href={churchMapLink}
          target="_blank"
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

      {/* Floating glow effect */}
      <div className="absolute w-72 h-72 bg-blue-500 opacity-20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-purple-500 opacity-20 blur-3xl rounded-full bottom-10 right-10"></div>

    </section>
  );
}