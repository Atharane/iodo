import React from "react";

function Navbar() {
  return (
    <nav className="drop-shadow-2xl font-medium flex items-center mx-4 my-4 justify-center">
      <img
        className="w-8 self-end mx-2"
        src="images/letter-a.png"
        alt="brand logo"
      />
      <p className="text mx-2">Skellorbit</p>.
      <p className="text mx-2">version 1.0.0.0</p>.
      {/* get date in June 12, 2019 format */}
      <p className="text mx-2">
        {new Date().toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        })}
      </p>
      .{/* get time in 9:25 AM format */}
      <p className="text mx-2">
        {new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        })}
      </p>
    </nav>
  );
}

export default Navbar;

// https://avatars.dicebear.com/api/croodles/57547.png
