export default function ExerciseDetail({ exerciseDetail }) {
  // console.log(exerciseDetail);
  const { gifUrl, name, target, instructions } = exerciseDetail;

  return (
    <main className="w-full lg:flex justify-center items-center">
      {/* img */}
      <div className="w-[80%] md:w-[40%] lg:w-[35%] mx-auto mb-5">
        <img src={gifUrl} alt="" className="w-full" />
      </div>

      {/* Content */}
      <div className="w-full lg:w-[50%]">
        <h2 className="text-lg capitalize font-semibold text-neutral-900 mb-2 lg:text-xl">
          {name}
        </h2>
        <h3 className="capitalize text-neutral-800 mb-5 lg:text-lg">
          <span className="font-medium ">Target Muscel :</span> {target}
        </h3>
        <p className="underline text-neutral-950 mb-2 lg:text-lg">
          Instructions
        </p>
        <ul className="list-decimal pl-5 flex flex-col gap-3">
          {instructions.map((rule, i) => (
            <li key={i} className="text-neutral-900 lg:text-lg">
              {rule}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
