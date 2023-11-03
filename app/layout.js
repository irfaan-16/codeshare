import Appbar from "./components/Navbar";
import Providers from "./components/Providers";
import "./globals.css";
import { Inter } from "next/font/google";
import connect from "./lib/db/database";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
export const metadata = {
  title: "Codeshare",
  description: "A platform where people can share code.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ToastContainer />
          <Appbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
