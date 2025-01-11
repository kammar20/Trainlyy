import { Search } from 'lucide-react';

export default function SearchBox() {
  return (
    <div className="flex justify-center gap-3 mb-2">
      <input
        type="text"
        placeholder="Search exercises..."
        className="w-[100%] md:w-[70%] md:text-lg px-3 py-1 lg:py-2 border-2 border-neutral-400 outline-none focus:border-blue-600 rounded-md"
      />
      <button className="flex items-center gap-2 bg-blue-600 text-white px-3 lg:px-5 py-1 lg:py-2  rounded-md">
        <Search size={15} /> <span>Search</span>
      </button>
    </div>
  );
}
