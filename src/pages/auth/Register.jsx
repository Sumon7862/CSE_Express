import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import db from "../../firebase/firestore";

import {
    doc,
    serverTimestamp,
    setDoc,
} from "firebase/firestore";

import {
    FaGoogle,
    FaUserGraduate,
    FaEye,
    FaEyeSlash,
} from "react-icons/fa";

import useAuth from "../../hooks/useAuth";


const Register = () => {
    const navigate = useNavigate();

    const {
        createUser,
        updateUserProfile,
        googleLogin,
        loading,
    } = useAuth();

    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {

        if (data.password !== data.confirmPassword) {

            return toast.error("Passwords do not match");

        }

        try {

            const result = await createUser(
                data.email,
                data.password
            );

            await updateUserProfile(
                data.name,
                ""
            );

            await setDoc(
                doc(db, "users", result.user.uid),
                {
                    uid: result.user.uid,

                    name: data.name,

                    email: data.email,

                    photoURL: "",

                    role: "student",

                    purchasedSemesters: [],

                    paymentStatus: "none",

                    isBlocked: false,

                    createdAt: serverTimestamp(),

                    lastLogin: serverTimestamp(),
                }
            );

            toast.success("Account created successfully!");

            navigate("/");

        }

        catch (error) {

            toast.error(error.message);

        }

    };

    const handleGoogleLogin = async () => {

        try {

            await googleLogin();

            toast.success("Google Login Successful");

            navigate("/");

        } catch (error) {

            switch (error.code) {

                case "auth/popup-closed-by-user":
                    toast.error("Google login cancelled.");
                    break;

                case "auth/popup-blocked":
                    toast.error("Popup blocked by browser.");
                    break;

                default:
                    toast.error("Google login failed.");
            }

        }

    };

    return (
        <section className="min-h-screen bg-slate-100 flex items-center justify-center py-12 px-4">
            <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">

                <div className="text-center">

                    <div className="w-20 h-20 mx-auto rounded-full bg-blue-600 text-white flex items-center justify-center text-3xl">
                        <FaUserGraduate />
                    </div>

                    <h1 className="text-3xl font-bold mt-6">
                        Create Account
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Join CSE Express and access semester-wise study materials.
                    </p>

                </div>

                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="mt-8 space-y-5"
                >

                    <div>
                        <label className="font-medium">
                            Full Name
                        </label>

                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full mt-2 border rounded-xl px-4 py-3"
                            {...register("name", {
                                required: "Name is required",
                            })}
                        />

                        {
                            errors.name &&
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name.message}
                            </p>
                        }
                    </div>

                    <div>
                        <label className="font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full mt-2 border rounded-xl px-4 py-3"
                            {...register("email", {
                                required: "Email is required",
                            })}
                        />

                        {
                            errors.email &&
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        }
                    </div>

                    <div>
                        <label className="font-medium">
                            Password
                        </label>

                        <div className="relative">

                            <input

                                type={showPassword ? "text" : "password"}

                                placeholder="Password"

                                className="w-full mt-2 border rounded-xl px-4 py-3"

                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: "Password must be at least 6 characters",
                                    },
                                    pattern: {
                                        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/,
                                        message:
                                            "Use at least one uppercase, one lowercase and one number",
                                    },
                                })}

                            />

                            <button

                                type="button"

                                onClick={() => setShowPassword(!showPassword)}

                                className="absolute right-4 top-6"

                            >

                                {
                                    showPassword
                                        ?
                                        <FaEyeSlash />
                                        :
                                        <FaEye />
                                }

                            </button>

                        </div>

                        {
                            errors.password &&
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        }
                    </div>

                    <div>
                        <label className="font-medium">
                            Confirm Password
                        </label>

                        <input

                            type={showPassword ? "text" : "password"}

                            placeholder="Confirm Password"

                            className="w-full mt-2 border rounded-xl px-4 py-3"

                            {...register("confirmPassword", {

                                required: "Confirm your password"

                            })}

                        />

                        {
                            errors.confirmPassword &&
                            <p className="text-red-500 text-sm mt-1">
                                {errors.confirmPassword.message}
                            </p>
                        }
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
                    >
                        Create Account
                    </button>

                </form>

                <div className="my-6 flex items-center">
                    <div className="flex-1 border-t"></div>
                    <span className="px-3 text-slate-500 text-sm">
                        OR
                    </span>
                    <div className="flex-1 border-t"></div>
                </div>

                <button

                    type="button"

                    onClick={handleGoogleLogin}

                    disabled={loading}

                    className="w-full border py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-100 disabled:bg-slate-100 transition"

                >

                    <FaGoogle className="text-red-500" />

                    {
                        loading
                            ?
                            "Please wait..."
                            :
                            "Continue with Google"
                    }

                </button>

                <p className="text-center mt-6 text-slate-600">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-blue-600 font-semibold"
                    >
                        Login
                    </Link>
                </p>

            </div>
        </section>
    );
};

export default Register;