// import { HowItWorkSectionData } from '../data/ExerciseData';

import { HowItWorkSectionData } from '../data/ExerciseData';

export default function HowItWorkSection() {
  return (
    <section className="py-20 px-2 bg-black">
      <main className="max-w-[1300px] mx-auto">
        <h2 className="text-neutral-50 text-center text-2xl font-medium lg:font-semibold lg:text-4xl mb-3">
          How It Works
        </h2>
        <p className="text-neutral-200 text-center mb-8 lg:text-lg  mx-auto">
          Find your perfect workout in three simple steps
        </p>

        {/* card container */}
        <div className="flex flex-col gap-8  md:flex-row md:flex-wrap md:justify-center md:gap-6">
          {HowItWorkSectionData.map((data) => (
            // card
            <div
              key={data.id}
              className={`relative w-[100%] md:w-[40%] lg:w-[27%] bg-neutral-900 rounded-xl px-6 py-12 border-2 border-transparent transition-all duration-300 ease-in-out cursor-pointer ${
                data.color === 'blue'
                  ? 'hover:border-blue-400'
                  : data.color === 'green'
                  ? 'hover:border-green-400'
                  : data.color === 'purple'
                  ? 'hover:border-purple-400'
                  : data.color === 'red'
                  ? 'hover:border-red-400'
                  : ''
              }`}
            >
              {/* number */}
              <span
                className={`inline-flex justify-center items-center bg-${data.color}-400 w-10 h-10  rounded-full text-lg font-semibold text-white absolute -top-4 `}
              >
                {data.id}
              </span>
              <div
                className={`inline-block p-3 rounded-xl mb-5 bg-${data.color}-400 `}
              >
                {data.icon}
              </div>
              <h3 className="text-neutral-50 text-lg lg:text-xl font-medium mb-2">
                {data.heading}
              </h3>

              <p className="text-neutral-300 ">{data.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}
