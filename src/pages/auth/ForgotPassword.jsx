import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { FaLock } from "react-icons/fa";

import useAuth from "../../hooks/useAuth";

const ForgotPassword = () => {

    const { resetPassword } = useAuth();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {

        try {

            await resetPassword(data.email);

            toast.success(
                "If an account exists for this email, a password reset link has been sent."
            );

        } catch (error) {

            switch (error.code) {

                case "auth/invalid-email":
                    toast.error("Please enter a valid email.");
                    break;

                case "auth/too-many-requests":
                    toast.error("Too many requests. Try again later.");
                    break;

                default:
                    toast.error("Unable to send reset email.");
            }

        }

    };

    return (

        <section className="min-h-screen bg-slate-100 flex items-center justify-center px-4">

            <div className="bg-white w-full max-w-md rounded-3xl shadow-xl p-8">

                <div className="text-center">

                    <div className="w-20 h-20 mx-auto rounded-full bg-blue-600 flex items-center justify-center text-white text-3xl">

                        <FaLock />

                    </div>

                    <h1 className="text-3xl font-bold mt-5">

                        Forgot Password

                    </h1>

                    <p className="text-slate-500 mt-3">

                        Enter your registered email address.
                        We'll send you a password reset link.

                    </p>

                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-8 space-y-5"
                >

                    <div>

                        <label className="font-medium">

                            Email

                        </label>

                        <input

                            type="email"

                            placeholder="Enter your email"

                            className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:border-blue-600"

                            {...register("email", {

                                required: "Email is required"

                            })}

                        />

                        {

                            errors.email &&

                            <p className="text-red-500 text-sm mt-1">

                                {errors.email.message}

                            </p>

                        }

                    </div>

                    <button

                        type="submit"

                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold"

                    >

                        Send Reset Link

                    </button>

                </form>

                <div className="text-center mt-6">

                    <Link

                        to="/login"

                        className="text-blue-600 font-semibold"

                    >

                        ← Back to Login

                    </Link>

                </div>

            </div>

        </section>

    );

};

export default ForgotPassword;