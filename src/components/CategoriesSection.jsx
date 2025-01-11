import { useState } from 'react';
import { ExerciseCategoriesData } from '../data/ExerciseData';
import { ChevronRight } from 'lucide-react';

export default function CategoriesSection() {
  const [showMore, setShowMore] = useState(false);

  function handleClick() {
    setShowMore(!showMore);
  }

  return (
    <section className="py-20 px-2">
      <main className="max-w-[1300px] mx-auto">
        <h2 className="text-neutral-900 text-center text-2xl font-medium lg:font-semibold lg:text-4xl mb-3">
          Exercise Categories
        </h2>
        <p className="text-neutral-700 text-center mb-8 lg:text-lg  mx-auto">
          Find exercises based on your fitness goals and preferences
        </p>

        {/* card container */}
        <div className="flex flex-col gap-8 md:flex-row md:flex-wrap md:justify-center md:gap-6 mb-12">
          {ExerciseCategoriesData.slice(
            0,
            showMore ? ExerciseCategoriesData.length : 3
          ).map((data) => (
            // card
            <div
              key={data.id}
              className={`w-[100%] md:w-[40%] lg:w-[28%] bg-neutral-900 rounded-xl px-6 py-12  overflow-hidden  `}
            >
              <div
                key={data.id}
                className={`hover:scale-105 transition-all duration-300 ease-in-out`}
              >
                <div
                  className={`inline-block p-3 rounded-xl mb-5 bg-${data.color}-400  `}
                >
                  {data.icon}
                </div>
                <h3 className="text-neutral-50 text-lg lg:text-xl font-medium mb-2">
                  {data.bodyPartName}
                </h3>

                <p className="text-neutral-300 mb-5">{data.desc}</p>
                {/* link */}
                <p
                  className={`text-${data.color}-400 inline-flex items-center gap-1 cursor-pointer`}
                >
                  Explore exercises <ChevronRight />
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* button */}
        <div className="flex justify-center">
          <button
            onClick={handleClick}
            className=" bg-blue-600 active:bg-blue-800 transition-all text-white text-lg px-5 py-2 rounded-lg cursor-pointer"
          >
            {showMore ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </main>
    </section>
  );
}
