import { useExercise } from '../context/ExerciseContext';
import Pagination from './Pagination';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DisplayExerciseSection() {
  const { isLoading, isError, currentPageExercise } = useExercise();
  const sectionRef = useRef(null);

  const navigate = useNavigate();

  // navigate to exercise details page
  const handleNavigate = (id) => {
    // Save the current scroll position (so when back to this page it show this section)
    sessionStorage.setItem('scrollPosition', window.scrollY);
    navigate(`/exerciseDetails/${id}`);
  };

  return (
    <section ref={sectionRef} className="py-10 px-2">
      <main className="max-w-[1300px] mx-auto">
        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="w-full bg-gray-200 animate-pulse h-[200px] rounded-lg"
              ></div>
            ))}
          </div>
        )}

        {/* Error State */}
        {isError && (
          <h2 className="text-center text-red-500 md:text-xl">{isError}</h2>
        )}

        {/* No Exercise Found */}
        {!isLoading && !isError && currentPageExercise?.length === 0 && (
          <h2 className="text-center text-blue-500 md:text-xl">
            No Exercise Found. Try Again !
          </h2>
        )}

        {/* success */}
        {currentPageExercise?.length > 0 && (
          <div>
            <h2 className="text-neutral-900 text-lg md:text-2xl font-medium lg:font-semibold lg:text-4xl mb-10">
              All Exercises
            </h2>

            {/* card container */}
            <div className="flex flex-col gap-5 md:flex-row md:flex-wrap md:justify-center">
              {currentPageExercise.map((data) => (
                // single Card
                <div
                  onClick={() => handleNavigate(data.id)}
                  // to={`exerciseDetails/${data.id}`}
                  key={data.id}
                  className="bg-white w-[100%] mx-auto md:w-[30%] xl:w-[20%] rounded-xl border-t-4 border-blue-600 transition-transform transform hover:scale-105 hover:shadow-lg mb-4"
                >
                  <img src={data.gifUrl} alt="" className="w-full" />

                  <h3 className="px-3 py-2 text-lg font-medium text-blue-600">
                    {data.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* pagination */}
        {currentPageExercise?.length > 0 && (
          <div className="flex justify-center items-center py-5">
            <Pagination sectionRef={sectionRef} />
          </div>
        )}
      </main>
    </section>
  );
}
