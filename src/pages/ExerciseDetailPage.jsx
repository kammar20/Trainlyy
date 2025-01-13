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
    const getExerciseDetails = async () => {
      const exerciseData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        exerciseOptions
      );
      setExerciseDetail(exerciseData);

      const exerciseVideoData = await fetchData(
        `https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseData.name}`,

        youtubeOptions
      );

      setExerciseVideo(exerciseVideoData);

      // console.log(exerciseVideoData);
    };
    getExerciseDetails();
  }, []);

  return (
    <section className=" max-w-[1300px] mx-auto py-10 px-2">
      <Link to={'/'} className="inline-flex items-center gap-2 text-blue-600">
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
  );
}
