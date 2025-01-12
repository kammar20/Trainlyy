import SearchBox from './SearchBox';

export default function FindExerciseSection() {
  return (
    <section className="py-16 px-2 ">
      <main className="max-w-[1300px] mx-auto">
        <h2 className="text-neutral-900 text-center text-2xl font-medium lg:font-semibold lg:text-4xl mb-3">
          Find Your Perfect Exercise
        </h2>

        <p className="text-neutral-700 text-center mb-8 lg:text-lg  mx-auto">
          Search from our extensive database of exercises by name, target
          muscle, or equipment
        </p>

        {/* Search Box */}
        <div className="w-full md:w-[85%] lg:w-[65%]  mx-auto px-3 py-5 md:py-10 rounded-lg shadow-2xl">
          <SearchBox />
        </div>
      </main>
    </section>
  );
}
