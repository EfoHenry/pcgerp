import "./globals.css";

export const metadata = {
  title: "PCG ERP",
  description: "Created by the PCGERP Dev. Team",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
