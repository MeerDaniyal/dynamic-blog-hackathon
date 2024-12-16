"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const [isSignIn, setIsSignIn] = useState(true); // Toggle between Sign In and Create Account
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [dob, setDob] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation for the form
    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    if (!isSignIn && (!firstName || !lastName || !dob || !gender)) {
      alert("Please fill in all required fields.");
      return;
    }

    // Proceed with sign-in or create account
    if (isSignIn) {
      alert("Signing In...");
      router.push("/dashboard"); // Redirect after sign-in (example)
    } else {
      alert("Creating Account...");
      router.push("/welcome"); // Redirect after account creation (example)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-teal-300 p-8 rounded-lg shadow-md w-full sm:w-96 lg:w-1/3 xl:w-1/2.1 transition-all transform hover:scale-105 hover:shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isSignIn ? "Sign In" : "Create Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* If it's Sign Up form, show Name, DOB, Gender */}
          {!isSignIn && (
            <div className="mb-6">
              <div className="flex gap-4">
                <div className="w-1/2">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    placeholder="First Name"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="dob"
                  className="block text-sm font-medium text-gray-700"
                >
                  Date of Birth
                </label>
                <input
                  type="date"
                  id="dob"
                  className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <div className="flex gap-4">
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      onChange={(e) => setGender(e.target.value)}
                      className="mr-2 transition-all transform hover:scale-105"
                    />
                    Male
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      onChange={(e) => setGender(e.target.value)}
                      className="mr-2 transition-all transform hover:scale-105"
                    />
                    Female
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="gender"
                      value="other"
                      onChange={(e) => setGender(e.target.value)}
                      className="mr-2 transition-all transform hover:scale-105"
                    />
                    Other
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Email and Password Fields */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email or Phone Number
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email or Phone Number"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
          >
            {isSignIn ? "Sign In" : "Create Account"}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={() => setIsSignIn(!isSignIn)}
            className="text-sm text-blue-500 hover:underline transition-all duration-300 transform hover:scale-105"
          >
            {isSignIn ? "Create an Account?" : "Already have an account? Sign In"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
