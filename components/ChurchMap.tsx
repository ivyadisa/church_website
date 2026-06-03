export default function ChurchMap() {
  const mapEmbedUrl =
    "https://www.google.com/maps?q=-1.2604901,36.8853443&output=embed";

  const googleMapsLink =
    "https://www.google.com/maps/place/1%C2%B015'37.8%22S+36%C2%B053'07.2%22E/@-1.2604901,36.8827694,17z/data=!3m1!4b1!4m4!3m3!8m2!3d-1.2604901!4d36.8853443";

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
          title="Church Location"
        ></iframe>
      </div>

      {/* Button below map */}
      <div className="text-center mt-6">
        <a
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Open in Google Maps
        </a>
      </div>
    </section>
  );
}