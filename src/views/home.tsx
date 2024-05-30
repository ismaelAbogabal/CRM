import React from "react";

import MainLayout from "./layouts/MainLayout";

import client from "./home.client.js";

export default function Home() {
  return (
    <MainLayout>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold" id="aha">
          Hello, Tailwind CSS!
        </h1>
      </div>
      <script src={client} defer></script>
    </MainLayout>
  );
}

// document.getElementById("aha").innerText = "Hello, React!";
