import { useExercise } from '../context/ExerciseContext';

export default function Pagination({ sectionRef }) {
  const { allExercise, exerciesPerPage, currentPage, setCurrentPage } =
    useExercise();

  const totalExercise = allExercise?.length;
  const totalPages = Math.ceil(totalExercise / exerciesPerPage);
  const maxVisibleButtons = 3;
  const startPage = Math.max(
    1,
    currentPage - Math.floor(maxVisibleButtons / 2)
  );
  const endPage = Math.min(totalPages, startPage + maxVisibleButtons - 1);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  //   On Btn Click
  function handlePageChange(page) {
    setCurrentPage(page);

    sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <div className="flex justify-center items-center gap-5">
      {/* <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(1)}
        className="border px-3 py-2"
      >
        First
      </button> */}

      <button
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
        className={`${
          currentPage === 1 ? 'cursor-not-allowed' : 'cursor-pointer'
        } border-2  px-3 py-1 active:bg-blue-600 transition-all`}
      >
        Prev
      </button>

      {pages.map((page) => (
        <button
          key={page}
          className={`border-2 px-3 py-1 ${
            page === currentPage ? 'bg-blue-500' : ''
          }`}
          onClick={() => handlePageChange(page)}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
        className={`${
          currentPage === totalPages ? 'cursor-not-allowed' : 'cursor-pointer'
        } border-2 px-3 py-1 active:bg-blue-500 transition-all`}
      >
        Next
      </button>
      {/* 
      <button
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(totalPages)}
        className="border px-3 py-2"
      >
        Last
      </button> */}
    </div>
  );
}
