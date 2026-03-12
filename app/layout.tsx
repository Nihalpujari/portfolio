import "./globals.css";
import AnimatedBackground from "@/components/AnimatedBackground";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}