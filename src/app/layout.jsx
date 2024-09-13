import { Inter } from "next/font/google";
import "./globals.css";
import Header2 from "./components/Header2";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import Header from "./components/Navbar";
import { SidebarProvider } from "./providers";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CHK App",
  description: "Your one stop movie app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
    <SidebarProvider>
      <Header2/>
      <Header/>
      <div className="min-h-screen">
        {children}
      </div>
      <Footer />
    </SidebarProvider>
  </body>
</html>


    
  );
  }
