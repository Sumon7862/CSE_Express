import {
  FaRobot,
  FaFilePdf,
  FaLock,
  FaSearch,
  FaMobileAlt,
  FaCloud,
} from "react-icons/fa";

import FeatureCard from "./FeatureCard";

const PlatformHighlights = () => {
  const features = [
    {
      id: 1,
      icon: <FaFilePdf />,
      title: "10-12 Years Questions",
      description:
        "Organized previous year questions with semester and subject wise categorization.",
    },
    {
      id: 2,
      icon: <FaRobot />,
      title: "AI Assisted Solutions",
      description:
        "Well-structured AI-assisted answers that are reviewed and organized for study.",
    },
    {
      id: 3,
      icon: <FaLock />,
      title: "Semester Access",
      description:
        "Purchase only the semester you need and unlock all available study resources.",
    },
    {
      id: 4,
      icon: <FaSearch />,
      title: "Smart Search",
      description:
        "Quickly find PDFs using subject name, course code or semester.",
    },
    {
      id: 5,
      icon: <FaMobileAlt />,
      title: "Mobile Friendly",
      description:
        "Fully responsive design that works smoothly on mobile, tablet and desktop.",
    },
    {
      id: 6,
      icon: <FaCloud />,
      title: "Cloud Library",
      description:
        "Your purchased resources stay available anytime through your account.",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container">

        <div className="text-center max-w-3xl mx-auto">

          <span className="uppercase tracking-[4px] text-blue-600 font-semibold">
            Platform Highlights
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-slate-900">
            Everything a CSE Student Needs
          </h2>

          <p className="mt-6 text-slate-500 leading-8">
            CSE Express is designed to keep all your semester-wise study
            materials in one organized place, helping you prepare faster
            and smarter.
          </p>

        </div>

        <div className="grid gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default PlatformHighlights;