const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-pink-600">Salon Logo</h1>
      <nav>
        {/* These links will use the Link component from React Router later */}
        <a href="/" className="ml-4 text-gray-600 hover:text-pink-600">Home</a>
        <a href="/team" className="ml-4 text-gray-600 hover:text-pink-600">Team</a>
        <a href="/book" className="ml-4 text-white bg-pink-600 px-3 py-1 rounded-full hover:bg-pink-700">Book</a>
      </nav>
    </header>
  );
};
export default Header;