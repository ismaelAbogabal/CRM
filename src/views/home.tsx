import React from "react";
import "../index.css";

import MainLayout from "./layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Hello, Tailwind CSS!</h1>
      </div>
    </MainLayout>
  );
}
