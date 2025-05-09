import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container mx-auto text-center py-10">
      <h1 className="text-4xl font-bold mb-4">Welcome to SongVault</h1>
      <p className="text-lg text-gray-700 mb-6">
        Create, edit, and export your musical compositions with ease.
      </p>
      <Link
        to="/create"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
      >
        Get Started
      </Link>
    </div>
  );
};

export default Home;