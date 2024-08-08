import type { Metadata } from "next";
import "../globals.css";
import PageHeader from "../components/header";
import PageFooter from "../components/footer";

// metadata for the site
export const metadata: Metadata = {
  title: "Felicia Haggard's Portfolio",
  description: "Generated by Next + Sanity + Tailwind CSS",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" responsive-page">
        {/* importing page header */}
        <PageHeader/>
        <main className="xpadding ">{children}</main>
        {/* importing page footer */}
        <PageFooter/>
      </body>
    </html>
  );
}