import { BenefitsSectionData } from '../data/ExerciseData';

export default function BenefitsSection() {
  return (
    <section className="py-20 px-2">
      <main className="max-w-[1300px] mx-auto">
        <h2 className="text-neutral-900 text-center text-2xl font-medium lg:font-semibold lg:text-4xl mb-3">
          Benefits of Using Our Platform
        </h2>
        <p className="text-neutral-700 text-center mb-8 lg:text-lg  mx-auto">
          Discover why thousands of users choose our exercise platform
        </p>

        {/* card container */}
        <div className="flex flex-col gap-5 md:flex-row md:flex-wrap md:justify-center">
          {BenefitsSectionData.map((data) => (
            // card
            <div
              key={data.id}
              className="w-[100%] md:w-[40%] xl:w-[20%] bg-stone-100 rounded-xl  px-5 py-8 hover:-translate-y-3 transition-transform duration-300 ease-in-out cursor-pointer"
            >
              <div
                className={`inline-block p-2 rounded-xl mb-5 bg-${data.color}-200 `}
              >
                {data.icon}
              </div>
              <h3 className="text-neutral-900 text-lg lg:text-xl font-medium mb-2">
                {data.heading}
              </h3>

              <p className="text-neutral-600">{data.desc}</p>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
}
