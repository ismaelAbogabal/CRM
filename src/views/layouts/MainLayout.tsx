import * as fs from "fs";
import path from "path";
import React from "react";

export default function MainLayout({ children }: any) {
  const manifest = fs.readFileSync(
    path.resolve(__dirname, "manifest.json"),
    "utf8"
  );
  const css = JSON.parse(manifest)["main.css"];

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href={css} />
        <title>CRM | Best crm on the world</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
