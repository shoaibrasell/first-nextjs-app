import React from "react";

export const metadata = {
  title: "About Page",
  description: "This is About Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}