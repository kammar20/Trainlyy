import { Link } from 'react-router-dom';
import errorImg from '../assets/error.svg';

export default function Error404Page() {
  return (
    <section className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <img
        src={errorImg}
        alt=""
        className="w-full sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px]"
      />
      <h1 className="font-pixelify text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        Page Not Found
      </h1>
      <Link
        to="/"
        className="bg-blue-600 rounded-full px-4 sm:px-5 py-2 text-lg sm:text-xl text-white"
      >
        Back To Home
      </Link>
    </section>
  );
}
