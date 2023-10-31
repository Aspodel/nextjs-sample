import { NextPage } from "next";
import Link from "next/link";

const breedData = [
  "dog",
  "cat",
  "bird",
  "fish",
  "rabbit",
  "hamster",
  "turtle",
  "horse",
  "iguana",
  "chicken",
  "goat",
  "pig",
  "snake",
  "lizard",
  "cow",
  "duck",
  "rat",
  "mouse",
];

const BreedsPage: NextPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Breeds Page</h1>
          <Link href="/breeds/wiki-petaverse">
            <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded">
              Petaverse Wiki
            </button>
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4">
          {breedData.map((breed) => (
            <div
              key={breed}
              className="bg-white overflow-hidden shadow rounded-lg"
            >
              <Link href={`/breeds/${breed}`}>
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-gray-500 rounded-md p-3">
                      <svg
                        className="h-6 w-6 text-white"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dt className="text-sm leading-5 font-medium text-gray-500 truncate">
                        {breed}
                      </dt>
                    </div>
                    <div className="ml-4 flex-shrink-0">
                      <div className="font-medium text-indigo-600 hover:text-indigo-500">
                        Learn more
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreedsPage;
