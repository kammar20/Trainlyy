import { FeaturedExercisesData } from '../data/ExerciseData';

export default function FeaturedSection() {
  return (
    <section className="bg-neutral-200 py-20 px-2">
      <main className="max-w-[1300px] mx-auto">
        <h2 className="text-neutral-900 text-center text-2xl font-medium lg:font-semibold lg:text-4xl mb-3">
          Featured Exercises
        </h2>
        <p className="text-neutral-700 text-center mb-8 lg:text-lg  mx-auto">
          Popular exercises curated by fitness experts
        </p>

        {/* card container */}
        <div className="flex flex-col gap-5 md:flex-row md:flex-wrap md:justify-center">
          {FeaturedExercisesData.map((data) => (
            // card
            <div
              key={data.id}
              className="w-[100%] md:w-[40%] xl:w-[20%] bg-white rounded-xl overflow-hidden"
            >
              {/* img */}
              <div>
                <img src={data.imgSrc} alt="" className="w-full" />
              </div>
              {/* content */}
              <div className="px-3 py-5">
                <h3 className="text-neutral-900 text-lg lg:text-xl font-medium mb-2">
                  {data.ExerciseName}
                </h3>
                <p className=" text-sm lg:text-base text-neutral-700 mb-2">
                  Target :
                  {data.TargetMuscle.map((muscle, i) => (
                    <span key={i}> {muscle} </span>
                  ))}
                </p>
                <p className="lg:text-lg text-blue-700 font-medium">
                  {data.ExerciseType}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}
