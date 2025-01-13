import { createContext, useContext, useEffect, useState } from 'react';
import { exerciseOptions, fetchData } from '../utility/fetchData';

const exerciseContext = createContext(null);

export const useExercise = () => {
  return useContext(exerciseContext);
};

export const ExerciseProvider = ({ children }) => {
  // Api loading and Error State
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  // For Data
  const [inputValue, setInputValue] = useState('');
  const [currentPageExercise, setCurrentPageExercise] = useState(null);
  const [allExercise, setAllExercise] = useState(null);

  // For Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const exerciesPerPage = 8;

  // full data load for first time
  useEffect(() => {
    setIsLoading(true);
    setIsError(null);
    setAllExercise(null);
    setCurrentPage(1);
    setCurrentPageExercise(null);

    const fetchAllExercise = async () => {
      try {
        const data = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises?limit=1500&offset=0`,
          exerciseOptions
        );

        console.log(data);
        setAllExercise(data);
      } catch (error) {
        setIsError(
          `Failed to fetch exercises. ${error.message} Please try again.`
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllExercise();
  }, []);

  // Compute the exercises for the current page
  useEffect(() => {
    if (allExercise) {
      const lastExerciseIndex = currentPage * exerciesPerPage;
      const firstExerciseIndex = lastExerciseIndex - exerciesPerPage;
      const singlePageExercise = allExercise.slice(
        firstExerciseIndex,
        lastExerciseIndex
      );
      setCurrentPageExercise(singlePageExercise);
    }
  }, [allExercise, currentPage, exerciesPerPage]);

  // when click on search button
  async function handleSearch() {
    // reset value
    setIsLoading(true);
    setIsError(null);
    setAllExercise(null);
    setCurrentPage(1);
    setCurrentPageExercise(null);

    // if input exercise is not valid
    if (!inputValue.trim()) {
      setIsLoading(false);
      setIsError('Please Enter Valid Input !!');
      console.log('err', isError);
      return;
    }

    try {
      const data = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises?limit=1500&offset=0`,
        exerciseOptions
      );
      // input search exercise
      const targetExercise = data.filter(
        (item) =>
          item.bodyPart.toLowerCase().includes(inputValue) ||
          item.equipment.toLowerCase().includes(inputValue) ||
          item.name.toLowerCase().includes(inputValue) ||
          item.target.toLowerCase().includes(inputValue)
      );

      console.log('all data', data);

      setAllExercise(targetExercise);
      setInputValue('');
    } catch (error) {
      setIsError(
        `Failed to fetch exercises. ${error.message} Please try again.`
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <exerciseContext.Provider
      value={{
        inputValue,
        setInputValue,
        handleSearch,
        isLoading,
        isError,
        currentPageExercise,
        allExercise,
        exerciesPerPage,
        currentPage,
        setCurrentPage,
      }}
    >
      {children}
    </exerciseContext.Provider>
  );
};
