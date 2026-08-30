import "./globals.css";
import ChatWidget from "./components/ChatWidget";

export const metadata = {
  title: "GAV & Associates, Inc. | Metro Detroit Premier Architecture Firm",
  description:
    "Since 1998 GAV & Associates has created exciting, functional, efficient building designs for the good of the client and society as a whole.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
