export default function ExerciseVideos({ exerciseVideo, name }) {
  const videoList = exerciseVideo?.contents.slice(0, 4);
  console.log(exerciseVideo);
  return (
    <main className="pt-14">
      <h2 className="text-lg lg:text-2xl font-semibold mb-5">
        Watch <span className="text-red-600">{name}</span> Exercise Videos
      </h2>
      {/* contaioner */}
      {videoList && (
        <div className="lg:flex flex-wrap justify-center gap-5">
          {videoList.map((data, i) => (
            // single Video
            <a
              key={i}
              href={`https://www.youtube.com/watch?v=${data.video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="md:w-[30%] lg:w-[40%] xl:w-[22%] transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <div className="md:w-[50%] lg:w-[100%] mb-8 bg-neutral-50 rounded-lg overflow-hidden">
                <img
                  src={data.video.thumbnails[0].url}
                  alt=""
                  className="w-full mb-5"
                />

                <h2 className="font-medium text-neutral-900 mb-2 px-2">
                  {data.video.title}
                </h2>
                <p className="text-neutral-600 px-2 pb-2">
                  By {data.video.channelName}
                </p>
              </div>
            </a>
          ))}
        </div>
      )}
    </main>
  );
}
