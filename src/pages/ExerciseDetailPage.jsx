import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  exerciseOptions,
  youtubeOptions,
  fetchData,
} from '../utility/fetchData';

import ExerciseDetail from '../components/ExerciseDetail';
import ExerciseVideos from '../components/ExerciseVideos';
import { ArrowLeft } from 'lucide-react';

export default function ExerciseDetailPage() {
  const [exerciseDetail, setExerciseDetail] = useState(null);
  const [exerciseVideo, setExerciseVideo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // when page load, it show top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const getExerciseDetails = async () => {
      // for exercise
      const exerciseData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseData);

      // for youtube video
      const exerciseVideoData = await fetchData(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseData.name}`,

        youtubeOptions
      );

      setExerciseVideo(exerciseVideoData);
    };
    getExerciseDetails();
  }, []);

  return (
    <>
      <section className="max-w-[1300px] mx-auto py-10 px-2">
        <Link
          to={'/'}
          className="inline-flex items-center gap-2 text-blue-600 mb-10 lg:text-xl font-medium"
        >
          <ArrowLeft /> Go Back
        </Link>
        {exerciseDetail && <ExerciseDetail exerciseDetail={exerciseDetail} />}
        {exerciseVideo && (
          <ExerciseVideos
            exerciseVideo={exerciseVideo}
            name={exerciseDetail.name}
          />
        )}
      </section>
      {/* Footer */}
      <footer className="bg-black pb-3 pt-8 px-2">
        <div className="max-w-[1300px] mx-auto md:flex md:justify-between">
          <p className="text-neutral-400 text-sm mb-5">
            &copy; 2025 Trainlyy. All Right Reserved
          </p>
          <div className="flex flex-col gap-2 md:flex-row md:gap-3">
            <p className="text-neutral-400 text-sm">Term & Condition</p>
            <p className="text-neutral-400 text-sm">Privacy Policy</p>
            <p className="text-neutral-400 text-sm">Cookie Policy</p>
          </div>
        </div>
      </footer>
    </>
  );
}
