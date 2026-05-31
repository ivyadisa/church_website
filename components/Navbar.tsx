export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 shadow-md">
      <h1 className="font-bold">
        Mountain of Breakthrough Church
      </h1>

      <div className="space-x-4">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">Location</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}