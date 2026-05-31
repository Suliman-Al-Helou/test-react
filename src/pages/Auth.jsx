import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
export default function Auth() {
  const [mode, setMode] = useState("siginUp");
  const [error, setError] = useState("");
  const navgiate = useNavigate();
  const { signUp, user, login, logoute } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    setError(null);
    let result;
    if (mode === "siginUp") {
      result = signUp(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }
    if (result.success) {
      navgiate("/")
    } else {
      setError(result.error);
    }
  }
  return (
    <div className="w-full h-full flex items-center justify-center pb-30">
      <div className="bg-white p-10 mt-40 w-5/6 md:w-4/6 lg:w-1/3 m-auto rounded-md">
        <h1 className="text-center font-bold text-3xl mb-4">
          {mode == "siginUp" ? "Sigin Up" : "Login"}
        </h1>
        {user && (
          <p className="text-center text-green-900 bg-emerald-500 rounded p-1">
            welcome {user.email}
          </p>
        )}
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          {error && (
            <p className="text-red-800 text-center bg-pink-300 rounded-md p-1">
              {error}
            </p>
          )}
          <label>Email</label>
          <input
            type="text"
            placeholder="Email"
            className="border border-gray-300 rounded-md p-2 outline-none"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
          <label>password</label>
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md p-2 outline-none"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password Must Be At Lest 6 Chat",
              },
              maxLength: {
                value: 12,
                message: "Password Must Be At Most 12 Chat",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
          <button
            type="submit"
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-md font-medium transition-colors w-40"
          >
            {mode == "siginUp" ? "Sigin Up" : "Login"}
          </button>
          {mode === "siginUp" ? (
            <p className="text-center text-gray-500">
              Already have an account?{" "}
              <span
                className="hover:text-blue-600 cursor-pointer"
                onClick={() => setMode("login")}
              >
                Login
              </span>
            </p>
          ) : (
            <p className="text-center text-gray-500">
              Dont have an account?{" "}
              <span
                className="hover:text-blue-600 cursor-pointer"
                onClick={() => setMode("siginUp")}
              >
                Sigin Up
              </span>
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
