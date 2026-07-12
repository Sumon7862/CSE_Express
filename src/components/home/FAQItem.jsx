import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const FAQItem = ({ faq }) => {

  const [open, setOpen] = useState(false);

  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
      >

        <h3 className="font-semibold text-lg text-slate-900">
          {faq.question}
        </h3>

        <FaChevronDown
          className={`text-blue-600 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />

      </button>


      <div
        className={`grid transition-all duration-300 ${
          open
            ? "grid-rows-[1fr]"
            : "grid-rows-[0fr]"
        }`}
      >

        <div className="overflow-hidden">

          <p className="px-6 pb-6 text-slate-500 leading-7">
            {faq.answer}
          </p>

        </div>

      </div>


    </div>
  );
};

export default FAQItem;