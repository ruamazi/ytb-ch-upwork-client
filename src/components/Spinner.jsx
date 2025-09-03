import React from "react";

const Spinner = ({ size = "medium", color = "blue", className = "" }) => {
 const sizeClasses = {
  small: "w-4 h-4",
  medium: "w-8 h-8",
  large: "w-12 h-12",
  xlarge: "w-16 h-16",
 };

 const colorClasses = {
  blue: "border-blue-500",
  gray: "border-gray-500",
  white: "border-white",
  red: "border-red-500",
  green: "border-green-500",
  yellow: "border-yellow-500",
 };

 return (
  <div className="flex justify-center items-center my-5">
   <div
    className={`inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent ${sizeClasses[size]} ${colorClasses[color]} ${className}`}
   />
  </div>
 );
};

export default Spinner;
