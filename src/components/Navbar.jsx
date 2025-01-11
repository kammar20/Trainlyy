import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [navBorder, setNavBorder] = useState(false);

  function handleClick() {
    setOpenMenu(!openMenu);
  }

  function handleScroll() {
    if (window.scrollY >= 20) {
      setNavBorder(true);
    } else {
      setNavBorder(false);
    }
  }

  // Adding event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${
        navBorder ? 'border-b border-cyan-900' : ''
      } w-full sticky top-0 z-10 bg-black py-5`}
    >
      {/* container */}
      <div className="max-w-[1300px] px-2 mx-auto flex justify-between items-center">
        <h1 className="font-kaushan text-neutral-50 text-2xl md:text-3xl">
          Trainlyy
        </h1>
        <ul className="hidden  md:flex gap-10">
          <li>
            <a
              href="#"
              className="text-neutral-300 hover:text-neutral-100 text-lg transition-all"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-neutral-300 hover:text-neutral-100 text-lg transition-all"
            >
              Search
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-neutral-300 hover:text-neutral-100 text-lg transition-all"
            >
              Categories
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-neutral-300 hover:text-neutral-100 text-lg transition-all"
            >
              Benefits
            </a>
          </li>
        </ul>
        <div className="md:hidden cursor-pointer" onClick={handleClick}>
          {openMenu ? (
            <X color="white" size={27} />
          ) : (
            <Menu color="white" size={27} />
          )}
        </div>
      </div>

      {/* small screen menu */}
      {openMenu && (
        <ul className="md:hidden flex flex-col gap-5 pt-5 px-1 ">
          <li>
            <a
              href="#"
              className="text-neutral-300 hover:text-neutral-100 transition-all"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-neutral-300 hover:text-neutral-100 transition-all"
            >
              Search
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-neutral-300 hover:text-neutral-100 transition-all"
            >
              Categories
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-neutral-300 hover:text-neutral-100 transition-all"
            >
              Benefits
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
