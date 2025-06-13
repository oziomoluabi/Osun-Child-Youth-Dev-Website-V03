import { Inter, Fira_Code } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
});

export const metadata = {
  title: 'Osun Child & Youth Development Insights',
  description: 'Data-driven analysis of Education, Health, Employment, and Welfare for children and youth in Osun State, Nigeria.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body className="font-sans antialiased">
        <Header />
        <main className="relative z-10 pt-24 pb-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
