import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("popxUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-600">
        No user data found. Please sign up first.
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold text-gray-900 mb-2">
          Account Settings
        </h2>

        <div className="flex items-center gap-4 mb-6">
          <img
            src="https://i.pravatar.cc/80?u=popx"
            alt="Profile"
            className="w-16 h-16 rounded-full border border-gray-300"
          />
          <div>
            <p className="text-base font-semibold text-gray-800">
              {user.fullName}
            </p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr. Sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>
      </div>
    </div>
  );
}
