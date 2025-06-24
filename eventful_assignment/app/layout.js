import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "Artistly - Performing Artist Booking Platform",
  description:
    "Connect event planners with talented performing artists. Book singers, dancers, speakers, and DJs for your next event.",
  keywords: "artist booking, event planning, performers, entertainment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
