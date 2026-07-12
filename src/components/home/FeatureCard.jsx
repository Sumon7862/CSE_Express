import { motion } from "framer-motion";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-xl"
    >
      <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-3xl">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 text-slate-500 leading-7">
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;