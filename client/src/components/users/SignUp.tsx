import { SignUp } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link
              to={"/sign-in"}
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              sign in if you already have an account
            </Link>
          </p>
        </div>
        <SignUp
          path="/sign-up"
          routing="path"
          signInUrl="/sign-in"
          forceRedirectUrl={"/dashboard"}
          appearance={{
            elements: {
              rootBox: "w-full",
              card: "bg-white shadow-md rounded-lg p-6",
              headerTitle: "text-2xl font-bold text-center text-gray-800 mb-4",
              headerSubtitle: "text-center text-gray-600 mb-6",
              formButtonPrimary:
                "w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
              formFieldLabel: "block text-sm font-medium text-gray-700 mb-1",
              formFieldInput:
                "appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",
              footerAction: "mt-4 text-center",
              footerActionLink:
                "font-medium text-indigo-600 hover:text-indigo-500",
              identityPreviewEditButton:
                "text-indigo-600 hover:text-indigo-500",
            },
          }}
        />
      </div>
    </div>
  );
}
