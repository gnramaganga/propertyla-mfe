"use client";

import Link from "next/link";

interface Crumb {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: Crumb[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="breadcrumb">
      {items.map((item, index) => (
        <span key={index} className="crumb">
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span className="active">{item.label}</span>
          )}

          {index < items.length - 1 && <span className="separator"> / </span>}
        </span>
      ))}

      <style jsx>{`
        .breadcrumb {
          margin: 15px 0;
          font-size: 14px;
        }
        .crumb a {
          color: #0070f3;
          text-decoration: none;
        }
        .crumb a:hover {
          text-decoration: underline;
        }
        .active {
          color: #555;
          font-weight: 600;
        }
        .separator {
          margin: 0 5px;
          color: #999;
        }
      `}</style>
    </nav>
  );
}
