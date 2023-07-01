import "./globals.css";
import Background from "./components/Background";

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
      <body className="relative">
        <Background />
        {children}
      </body>
    </html>
  );
}
