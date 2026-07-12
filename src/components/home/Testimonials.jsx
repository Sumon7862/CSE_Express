import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {

  const reviews = [
    {
      id: 1,
      name: "Rahim Ahmed",
      university: "NIST",
      rating: 5,
      review:
        "Semester-wise organization is excellent. It saved me a lot of time before exams.",
    },
    {
      id: 2,
      name: "Sabbir Hasan",
      university: "Daffodil International University",
      rating: 5,
      review:
        "The AI-assisted solutions are easy to understand and very helpful.",
    },
    {
      id: 3,
      name: "Nusrat Jahan",
      university: "Green University",
      rating: 5,
      review:
        "One of the best resources for previous year CSE questions.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">

      <div className="container">

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[4px] text-blue-600 font-semibold">
            Student Reviews
          </span>

          <h2 className="text-4xl font-bold mt-4">
            Loved by CSE Students
          </h2>

          <p className="mt-5 text-slate-500 leading-8">
            Students from different universities use CSE Express
            to prepare smarter with organized study materials.
          </p>

        </div>

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">

          {reviews.map((review) => (
            <TestimonialCard
              key={review.id}
              review={review}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;