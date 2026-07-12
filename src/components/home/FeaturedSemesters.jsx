import SemesterCard from "./SemesterCard";

const FeaturedSemesters = () => {

  const semesters = [
    {
      id: 1,
      number: 1,
      subjects: 8,
      pdfs: 120,
    },
    {
      id: 2,
      number: 2,
      subjects: 8,
      pdfs: 118,
    },
    {
      id: 3,
      number: 3,
      subjects: 7,
      pdfs: 135,
    },
    {
      id: 4,
      number: 4,
      subjects: 7,
      pdfs: 140,
    },
    {
      id: 5,
      number: 5,
      subjects: 7,
      pdfs: 132,
    },
    {
      id: 6,
      number: 6,
      subjects: 7,
      pdfs: 128,
    },
    {
      id: 7,
      number: 7,
      subjects: 6,
      pdfs: 96,
    },
    {
      id: 8,
      number: 8,
      subjects: 6,
      pdfs: 92,
    },
  ];

  return (
    <section className="py-24">

      <div className="container">

        <div className="text-center">

          <span className="text-blue-600 uppercase tracking-widest font-semibold">
            Semester Library
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Explore by Semester
          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Select your semester and access previous year questions,
            AI-assisted solutions and organized study materials.
          </p>

        </div>

        <div className="grid gap-7 mt-16 sm:grid-cols-2 lg:grid-cols-4">

          {semesters.map((semester) => (
            <SemesterCard
              key={semester.id}
              semester={semester}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default FeaturedSemesters;