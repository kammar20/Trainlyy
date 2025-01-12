import { Search } from 'lucide-react';

export default function SearchBox() {
  return (
    <section className="flex items-start justify-center gap-3">
      {/* input group */}
      <div className="w-[70%]">
        <input
          type="text"
          placeholder="Search Exercise..."
          className="w-full border-2 border-neutral-400 outline-none focus:border-blue-600 md:text-lg px-3 py-1 rounded-md mb-2"
        />
        <span className="text-sm md:text-base text-neutral-500">
          eg : chest, barbell, cable
        </span>
      </div>

      {/* button */}
      <button className="flex items-center gap-2 bg-blue-500 px-3 py-1.5 md:px-5 md:py-2 rounded-md text-white">
        <Search size={15} /> <span>Search</span>
      </button>
    </section>
  );
}
