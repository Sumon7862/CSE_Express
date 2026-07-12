import {
  FaFilePdf,
  FaBookOpen,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";

import StatCard from "./StatCard";

const Statistics = () => {

  const stats = [
    {
      id: 1,
      icon: <FaFilePdf />,
      number: "1200+",
      label: "Question & Solution PDFs",
    },
    {
      id: 2,
      icon: <FaBookOpen />,
      number: "80+",
      label: "CSE Subjects",
    },
    {
      id: 3,
      icon: <FaGraduationCap />,
      number: "8",
      label: "Semesters",
    },
    {
      id: 4,
      icon: <FaUsers />,
      number: "5000+",
      label: "Students",
    },
  ];

  return (
    <section className="py-24 bg-slate-50">

      <div className="container">

        <div className="text-center">

          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Statistics
          </span>

          <h2 className="text-4xl font-bold mt-4 text-slate-900">
            Trusted by CSE Students
          </h2>

          <p className="mt-4 text-slate-500 max-w-2xl mx-auto">
            Organized semester-wise study resources, previous year
            questions and AI-assisted solutions.
          </p>

        </div>

        <div className="grid gap-6 mt-14 sm:grid-cols-2 lg:grid-cols-4">

          {stats.map((item) => (
            <StatCard
              key={item.id}
              icon={item.icon}
              number={item.number}
              label={item.label}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Statistics;