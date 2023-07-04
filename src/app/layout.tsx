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
    <html lang="en">
      <body className="relative w-screen bg-theme-bg">
        <Background />
        {children}
      </body>
    </html>
  );
}
