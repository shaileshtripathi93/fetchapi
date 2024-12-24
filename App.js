import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?page=1&results=5&seed=abc") // Fetch 10 users
      .then((response) => response.json())
      .then((data) => setUsers(data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (users.length === 0) return <p>Loading...</p>;

  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen bg-gray-100 gap-6 p-6">
      {users.map((user, index) => (
        <div
          key={index}
          className="max-w-sm w-full p-4 bg-white shadow-lg rounded-lg"
        >
          <div className="flex flex-col items-center">
            {/* Profile Image */}
            <img
              className="w-32 h-32 rounded-full"
              src={user.picture.large}
              alt="User Profile"
            />
            {/* Name */}
            <h2 className="text-xl font-bold mt-4">
              {`${user.name.title} ${user.name.first} ${user.name.last}`}
            </h2>
          </div>

          {/* User Details */}
          <div className="mt-4">
            <div className="text-gray-700 space-y-2">
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Phone:</strong> {user.phone}
              </p>
              <p>
                <strong>Location:</strong> {`${user.location.city}, ${user.location.country}`}
              </p>
              <p>
                <strong>Age:</strong> {user.dob.age} years
              </p>
              <p>
                <strong>Nationality:</strong> {user.nat}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
