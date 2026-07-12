import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaRocket,
} from "react-icons/fa";


const CTASection = () => {

  return (

    <section className="py-24">

      <div className="container">

        <motion.div

          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          viewport={{
            once: true,
          }}

          transition={{
            duration: 0.6,
          }}

          className="relative overflow-hidden rounded-[2.5rem] bg-blue-600 px-8 py-16 lg:px-20"

        >


          {/* Background Shape */}

          <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/10 rounded-full"></div>

          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full"></div>


          <div className="relative z-10 text-center max-w-3xl mx-auto">


            <div className="inline-flex items-center gap-2 bg-white/20 text-white px-5 py-2 rounded-full">

              <FaRocket />

              Start Learning Today

            </div>



            <h2 className="text-4xl lg:text-5xl font-extrabold text-white mt-6 leading-tight">

              Ready to Make Your CSE Preparation Easier?

            </h2>



            <p className="text-blue-100 mt-6 text-lg leading-8">

              Get semester-wise previous questions,
              AI-assisted solutions and organized study
              resources in one place.

            </p>



            <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">


              <Link

                to="/semesters"

                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-slate-100 transition"

              >

                Explore Semesters

                <FaArrowRight />

              </Link>




              <Link

                to="/register"

                className="border border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition"

              >

                Create Account

              </Link>



            </div>


          </div>


        </motion.div>


      </div>


    </section>

  );

};


export default CTASection;