
import '../styles/global.css';
import '../styles/edit.css';
import '../styles/info.css';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
