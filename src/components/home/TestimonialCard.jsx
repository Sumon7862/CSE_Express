import { FaStar } from "react-icons/fa";

const TestimonialCard = ({ review }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition">

      <div className="flex gap-1 text-yellow-400">

        {[...Array(review.rating)].map((_, index) => (
          <FaStar key={index} />
        ))}

      </div>

      <p className="mt-6 leading-8 text-slate-600">
        "{review.review}"
      </p>

      <div className="flex items-center gap-4 mt-8">

        <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-lg">
          {review.name.charAt(0)}
        </div>

        <div>

          <h3 className="font-bold">
            {review.name}
          </h3>

          <p className="text-slate-500 text-sm">
            {review.university}
          </p>

        </div>

      </div>

    </div>
  );
};

export default TestimonialCard;