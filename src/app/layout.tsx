import "./globals.css";
import Background from "./components/Background";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "Jesse Watson Portfolio",
  description: "Software Engineer portfolio of Jesse Watson",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="">
      <body className="w-full bg-theme-bg outline-2 border-2">
        <Background />
        {children}
      </body>
    </html>
  );
}
