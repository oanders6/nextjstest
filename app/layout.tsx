import "@/app/ui/global.css";
import { inter } from "@/app/ui/fonts";

// handles any styling that is shared between multiple pages

// won't re-render -- will persist throughout navigation

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
