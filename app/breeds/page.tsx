import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

const breedData = [
  {
    name: "Tabby cat",
    imageUrl: "https://i.imgur.com/9tI01tJ.png",
  },
  {
    name: "British short hair cat",
    imageUrl: "https://i.imgur.com/IpeqGBk.png",
  },
  {
    name: "Black cat",
    imageUrl: "https://i.imgur.com/LoAx2g2.png",
  },
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
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {breedData.map((breed) => (
            <div
              key={breed.name}
              className="bg-white overflow-hidden shadow rounded-lg hover:shadow-xl transition duration-300 ease-in-out"
            >
              <Link
                href={{
                  pathname: `/breeds/${breed.name}`,
                  query: {
                    name: breed.name,
                    imageUrl: breed.imageUrl,
                  },
                }}
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-gray-500 rounded-md p-3">
                      <Image
                        className="mt-4 rounded-lg shadow-lg"
                        src={breed.imageUrl}
                        alt="Breed Image"
                        width={60}
                        height={100}
                      />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        {breed.name}
                      </dt>
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
