import React from "react";

function Home() {
  return (
    <div className="title h-1/4 w-full from-green-100 to-green-50 mb-10 bg-gradient-to-b">
      <h1 className="text-black text-center text-3xl font-black p-10">
        Les patients du cabinet
      </h1>
      <div className="flex justify-center">
        <span className="px-4 py-2 flex items-center text-base rounded-full text-white  bg-primary mb-10">
          <svg
            width="20"
            fill="currentColor"
            height="20"
            className="mr-2"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path>
          </svg>
          Ajouter un patient
        </span>
      </div>
    </div>
  );
}

export default Home;
