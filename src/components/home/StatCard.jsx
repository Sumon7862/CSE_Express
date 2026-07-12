import { motion } from "framer-motion";

const StatCard = ({ icon, number, label }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: .25 }}
      className="bg-white rounded-2xl shadow-md border border-slate-100 p-8 text-center"
    >
      <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-100 flex items-center justify-center text-3xl text-blue-600">
        {icon}
      </div>

      <h2 className="text-4xl font-extrabold mt-6 text-slate-900">
        {number}
      </h2>

      <p className="mt-2 text-slate-500">
        {label}
      </p>
    </motion.div>
  );
};

export default StatCard;