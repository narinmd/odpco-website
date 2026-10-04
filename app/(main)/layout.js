import "../globals.css";
import { Suspense } from "react";
import { Footer } from "@/components/footer/Footer";
import NavigationMenu from "@/components/navigation/NavigationMenu";

export const metadata = {
  metadataBase: new URL("https://www.odpco.com"),
  title: {
    default: "IT Services | Orange Data Processing",
    template: "%s | Orange Data Processing",
  },
  description:
    "ODPCO provides IT solutions in computer networks, data centers, hardware and software. Visit us and trust comfortably.",

  icons: {
    icon: "/favicon.png",
  },

  openGraph: {
    title: "ODPCO | Orange Data Processing Company",
    description: "Enterprise IT & Network Solutions",
    images: ["/images/og-default.png"],
    siteName: "ODPCO",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <Suspense fallback={<div className="h-16 bg-white w-full"></div>}>
        <NavigationMenu />
      </Suspense>

      {children}

      <Footer />
    </>
  );
}
