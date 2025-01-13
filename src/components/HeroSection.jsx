import { Link } from 'react-scroll';
import heroImg from '../assets/heroImg.jpg';
export default function HeroSection() {
  return (
    <section className="bg-black py-5 px-2">
      <main className="max-w-[1300px] mx-auto flex items-center justify-between">
        {/* content */}
        <div className="w-[90%] lg:w-[50%] ">
          <h1 className="text-neutral-50 font-semibold leading-tight tracking-wide mb-5 text-4xl md:text-5xl lg:text-6xl">
            Discover Your <br /> Perfect
            <span className="text-blue-600"> Workout</span> <br /> Routine
          </h1>
          <p className=" text-neutral-300 w-[75%] mb-10 text-lg">
            Search through thousands of exercises and find the perfect workout
            for your fitness goals. Personalized routines for every fitness
            level.
          </p>
          <Link
            to="findExercise"
            smooth={true}
            duration={700}
            offset={-60}
            className="inline-block bg-blue-600 active:bg-blue-800 transition-all text-white text-lg px-5 py-2 rounded-lg cursor-pointer"
          >
            Start Searching
          </Link>
        </div>

        {/* img */}
        <div className="hidden lg:block lg:w-[45%]">
          <img src={heroImg} alt="" className="w-full" />
        </div>
      </main>
    </section>
  );
}
