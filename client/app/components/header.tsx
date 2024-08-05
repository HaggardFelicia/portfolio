import Link from 'next/link'
import React from 'react'
import { getPages } from "@/sanity/sanity-utils";

/* creating header for all pages */
export default async function PageHeader() {
    const pages = await getPages();

  return (    
    <header className="header xpadding ypadding">
          {/* header logo that takes you to home page */}
          <Link href="/" className="responsive-logo-link">Felicia</Link>

          {/* mapping over the pages */}
          <div className="links-container">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="header-links">
                {page.title}
              </Link>
            ))}
          </div>
        </header>
  )
}
