import { NextPage } from "next";
import Image from "next/image";

interface BreedDetailsProps {
  searchParams: {
    name: string;
    imageUrl: string;
  };
}

const BreedDetails: NextPage<BreedDetailsProps> = ({
  searchParams,
}: BreedDetailsProps) => {
  console.log(searchParams.name);
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900">
            {searchParams.name}
          </h1>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col justify-center items-center">
              <Image
                className="mt-4 rounded-lg shadow-lg"
                src={searchParams.imageUrl}
                alt="Breed Image"
                width={400}
                height={400}
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-bold text-gray-900">
                Detailed information
              </h2>
              <div className="mt-4">
                <p className="text-lg font-medium text-gray-900">
                  Breed: {searchParams.name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreedDetails;
