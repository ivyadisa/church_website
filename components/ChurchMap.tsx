export default function ChurchMap() {
  const mapEmbedUrl =
    "https://www.google.com/maps?q=1%C2%B015'37.7\"S+36%C2%B053'09.3\"E&output=embed";

  return (
    <section className="py-20 px-6 bg-white">
      
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800">
          Find Us Here
        </h2>
        <p className="text-gray-600 mt-2">
          The Mountain of Breakthrough Church, Rounder Kariobangi, Nairobi
        </p>
      </div>

      <div className="max-w-5xl mx-auto rounded-xl overflow-hidden shadow-lg">
        <iframe
          src={mapEmbedUrl}
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </div>

      {/* Button below map */}
      <div className="text-center mt-6">
        <a
          href="https://www.google.com/maps/place/1%C2%B015'37.7%22S+36%C2%B053'09.3%22E"
          target="_blank"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Open in Google Maps
        </a>
      </div>

    </section>
  );
}