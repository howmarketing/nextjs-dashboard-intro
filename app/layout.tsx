import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

type IComponentLayout = { children: React.ReactNode };
export default function RootLayout({ children }: IComponentLayout) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
