import { SignUp } from "@clerk/clerk-react";

export default function Register() {
  return (
    <div className="min-h-screen flex bg-[#111111]">

      <div className="w-1/2 bg-gray-200 flex flex-col justify-between p-16">

        <div>

          <div className="w-12 h-12 border-4 border-orange-500 rounded-md mb-6"></div>

          <h1 className="text-5xl font-bold">
            TransitOps
          </h1>

          <p className="text-gray-600 mt-3">
            Smart Transport Operations Platform
          </p>

          <div className="mt-24">

            <h2 className="text-2xl font-semibold mb-5">
              Create Your Account
            </h2>

            <p className="text-gray-700 leading-8">
              Register once and gain secure access to your transport
              management dashboard.
            </p>

          </div>

        </div>

        <p className="text-gray-500">
          TransitOps © 2026
        </p>

      </div>

      <div className="flex-1 flex justify-center items-center">

        <div className="w-[420px]">

          <h1 className="text-4xl font-bold text-white mb-2">
            Create Account
          </h1>

          <p className="text-gray-400 mb-8">
            Join TransitOps
          </p>

          <SignUp
            appearance={{
              elements: {
                card: "shadow-none bg-transparent",
                rootBox: "w-full",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                footer: "hidden",
                socialButtonsBlockButton:
                  "bg-zinc-900 border border-zinc-700 text-white",
                formButtonPrimary:
                  "bg-orange-600 hover:bg-orange-700",
              },
            }}
            routing="path"
            path="/register"
            signInUrl="/login"
          />

        </div>

      </div>

    </div>
  );
}