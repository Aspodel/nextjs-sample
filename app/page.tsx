import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Home</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <Link
          href="/breeds"
          className="bg-white rounded-lg shadow-md p-8 cursor-pointer"
        >
          <Image
            src="/icons/view-grid.svg"
            alt="View Grid"
            width={64}
            height={64}
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Breeds</h2>
          <p className="text-gray-500">
            Browse through all breeds in the world.
          </p>
        </Link>
        <Link
          href="/newsfeed"
          className="bg-white rounded-lg shadow-md p-8 cursor-pointer"
        >
          <Image
            src="/icons/newspaper.svg"
            alt="Newspaper"
            width={64}
            height={64}
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Newfeed</h2>
          <p className="text-gray-500">
            Stay up-to-date with the latest news and updates.
          </p>
        </Link>
        <Link
          href="/settings"
          className="bg-white rounded-lg shadow-md p-8 cursor-pointer"
        >
          <Image
            src="/icons/newspaper.svg"
            alt="Newspaper"
            width={64}
            height={64}
            className="mx-auto mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">Settings</h2>
          <p className="text-gray-500">
            Manage your account settings and preferences.
          </p>
        </Link>
      </div>
    </main>
  );
};

export default Home;
