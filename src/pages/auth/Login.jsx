import { useState } from "react";
import {
    Link,
    useLocation,
    useNavigate,
} from "react-router-dom";

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import {
    FaGoogle,
    FaUserGraduate,
    FaEye,
    FaEyeSlash,
} from "react-icons/fa";

import useAuth from "../../hooks/useAuth";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const {
        loginUser,
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
        try {
            await loginUser(data.email, data.password);

            toast.success("Login Successful");

            navigate(from, {
                replace: true,
            });

        } catch (error) {
            console.error(error);

            switch (error.code) {
                case "auth/invalid-credential":
                    toast.error("Invalid email or password.");
                    break;

                case "auth/user-disabled":
                    toast.error("This account has been disabled.");
                    break;

                case "auth/too-many-requests":
                    toast.error("Too many attempts. Please try again later.");
                    break;

                default:
                    toast.error("Login failed. Please try again.");
            }
        }
    };

    const handleGoogleLogin = async () => {

        try {

            await googleLogin();

            toast.success("Google Login Successful");

            navigate(from, {
                replace: true,
            });

        }

        catch (error) {

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
                        Welcome Back
                    </h1>

                    <p className="text-slate-500 mt-2">
                        Login to your CSE Express account.
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
                            autoComplete="email"
                            placeholder="Enter your email"
                            className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
                            {...register("email", {
                                required: "Email is required",
                            })}
                        />

                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}

                    </div>

                    <div>

                        <label className="font-medium">
                            Password
                        </label>

                        <div className="relative">

                            <input
                                type={showPassword ? "text" : "password"}
                                autoComplete="current-password"
                                placeholder="Enter your password"
                                className="w-full mt-2 border rounded-xl px-4 py-3 outline-none focus:border-blue-600"
                                {...register("password", {
                                    required: "Password is required",
                                })}
                            />

                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-6"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>

                        </div>

                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}

                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed text-white py-3 rounded-xl font-semibold transition"
                    >
                        {loading ? "Logging in..." : "Login"}
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
                    className="w-full border py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-slate-100 disabled:bg-slate-100 disabled:cursor-not-allowed transition"
                >
                    <FaGoogle className="text-red-500" />
                    {loading ? "Please wait..." : "Continue with Google"}
                </button>

                <div className="flex justify-between mt-6 text-sm">

                    <Link
                        to="/register"
                        className="text-blue-600 font-semibold"
                    >
                        Create Account
                    </Link>

                    <Link

                        to="/forgot-password"

                        className="text-blue-600 hover:underline"

                    >

                        Forgot Password?

                    </Link>

                </div>

            </div>

        </section>
    );
};

export default Login;