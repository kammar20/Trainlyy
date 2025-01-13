import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [navBorder, setNavBorder] = useState(false);

  function handleClick() {
    setOpenMenu(!openMenu);
  }

  function handleScroll() {
    if (window.scrollY >= 30) {
      setNavBorder(true);
    } else {
      setNavBorder(false);
    }
  }

  // Adding event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`${openMenu ? 'border-b' : ''} ${
        navBorder ? 'border-b ' : ''
      }  w-full sticky top-0 z-10 bg-black py-5 border-cyan-900`}
    >
      {/* Big Screen */}
      <div className="max-w-[1300px] px-2 mx-auto flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          offset={-100}
          duration={700}
          className="font-kaushan text-neutral-50 cursor-pointer text-2xl md:text-3xl"
        >
          Trainlyy
        </Link>
        <ul className="hidden  md:flex gap-10">
          <li>
            <Link
              to="hero"
              smooth={true}
              offset={-100}
              duration={700}
              className="text-neutral-300 hover:text-neutral-100 text-lg transition-all cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="findExercise"
              smooth={true}
              offset={-60}
              duration={700}
              className="text-neutral-300 hover:text-neutral-100 text-lg transition-all cursor-pointer"
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              to="categories"
              smooth={true}
              offset={-50}
              duration={700}
              className="text-neutral-300 hover:text-neutral-100 text-lg transition-all cursor-pointer"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              to="howItWorks"
              smooth={true}
              offset={-50}
              duration={700}
              className="text-neutral-300 hover:text-neutral-100 text-lg transition-all cursor-pointer"
            >
              How it works
            </Link>
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
            <Link
              to="hero"
              smooth={true}
              offset={-300}
              duration={700}
              onClick={handleClick} // Close the menu on click
              className="text-neutral-300 hover:text-neutral-100 transition-all cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="findExercise"
              smooth={true}
              offset={-230}
              duration={700}
              onClick={handleClick}
              className="text-neutral-300 hover:text-neutral-100 transition-all cursor-pointer"
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              to="categories"
              smooth={true}
              offset={-220}
              duration={700}
              onClick={handleClick}
              className="text-neutral-300 hover:text-neutral-100 transition-all cursor-pointer"
            >
              Categories
            </Link>
          </li>
          <li>
            <Link
              to="howItWorks"
              smooth={true}
              offset={-220}
              duration={700}
              onClick={handleClick}
              className="text-neutral-300 hover:text-neutral-100 transition-all cursor-pointer"
            >
              How it works
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
