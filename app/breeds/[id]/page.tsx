"use client";
import { NextPage } from "next";
import { useParams } from "next/navigation";

interface BreedDetailsProps {
  params: {
    id: string;
  };
}

const BreedDetails: NextPage = () => {
  const params = useParams();
  const id = params.id;
  console.log(id);
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900">{id}</h1>
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            <div className="flex flex-col justify-center items-center">
              <img
                className="mt-4 rounded-lg shadow-lg"
                src="https://images.dog.ceo/breeds/borzoi/n02090622_7135.jpg"
                alt="Breed Image"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-bold text-gray-900">
                Additional Information
              </h2>
              <div className="mt-4">
                <p className="text-lg font-medium text-gray-900">Breed: {id}</p>
                <p className="text-lg font-medium text-gray-900">
                  Origin: Afghanistan
                </p>
                <p className="text-lg font-medium text-gray-900">
                  Temperament: Aloof, Clownish, Dignified, Independent, Happy
                </p>
                <p className="text-lg font-medium text-gray-900">
                  Height: Male: 68–74 cm, Female: 63–69 cm
                </p>
                <p className="text-lg font-medium text-gray-900">
                  Weight: Male: 25–34 kg, Female: 20–29 kg
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
