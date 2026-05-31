export default function ServiceSchedule() {
  return (
    <section id="services" className="py-20 px-6 bg-gray-50">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Weekly Service Schedule
        </h2>
        <p className="text-gray-600 mt-2">
          Join us in worship, prayer, and deliverance
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {/* Sunday */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800">Sunday Services</h3>
          <ul className="mt-3 text-gray-700 space-y-2">
            <li>First Service: 8:00 AM – 10:00 AM</li>
            <li>Second Service: 10:00 AM – 1:00 PM</li>
          </ul>
        </div>

        {/* Wednesday */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800">Wednesday</h3>
          <ul className="mt-3 text-gray-700 space-y-2">
            <li>One-on-One: 8:00 AM – 12:00 PM</li>
            <li>Deliverance: 12:30 PM – 4:00 PM</li>
          </ul>
        </div>

        {/* Friday */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800">Friday Kesha</h3>
          <ul className="mt-3 text-gray-700 space-y-2">
            <li>Overnight Prayer: 8:00 PM – 5:00 AM</li>
          </ul>
        </div>

        {/* Saturday */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-bold text-blue-800">Saturday</h3>
          <ul className="mt-3 text-gray-700 space-y-2">
            <li>Youth Practice</li>
            <li>Praise & Worship Practice</li>
          </ul>
        </div>

      </div>
    </section>
  );
}