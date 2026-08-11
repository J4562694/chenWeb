"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/lib/site-content";

type SiteSidebarProps = {
  isCollapsed: boolean;
  onToggle: () => void;
};

export function SiteSidebar({ isCollapsed, onToggle }: SiteSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className={isCollapsed ? "site-sidebar site-sidebar-collapsed" : "site-sidebar"}>
      <div className="sidebar-brand">
        <div className="sidebar-brand-header">
          {!isCollapsed ? <h1 className="sidebar-brand-name">ChenWeb</h1> : null}
          <button
            type="button"
            className="sidebar-toggle"
            onClick={onToggle}
            aria-label={isCollapsed ? "展開左側選單" : "收合左側選單"}
            aria-expanded={!isCollapsed}
          >
            {isCollapsed ? "›" : "‹"}
          </button>
        </div>
        {!isCollapsed ? (
          <p className="sidebar-brand-subtitle">Personal portfolio</p>
        ) : (
          <h1 className="sidebar-brand-mark">CW</h1>
        )}
      </div>

      <div className="sidebar-menu-shell">
        <nav className="sidebar-nav" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "nav-link nav-link-active" : "nav-link"}
                aria-label={item.label}
              >
                <span className="nav-indicator" aria-hidden="true" />
                <span className="nav-label">{item.label}</span>
                {!isCollapsed ? <span className="nav-note">{item.note}</span> : null}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
