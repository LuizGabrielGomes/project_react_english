import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Project React English",
  description: "Paginas sobre Phrasal verbs em ingles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Head>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );  
}
