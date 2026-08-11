"use client";

import { useEffect, useState } from "react";
import { SiteSidebar } from "@/components/site-sidebar";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    const storedValue = window.localStorage.getItem("chenweb-sidebar-collapsed");
    setIsCollapsed(storedValue === "true");
  }, []);

  function handleToggle() {
    setIsCollapsed((current) => {
      const next = !current;
      window.localStorage.setItem("chenweb-sidebar-collapsed", String(next));
      return next;
    });
  }

  return (
    <div className={isCollapsed ? "site-shell site-shell-collapsed" : "site-shell"}>
      <SiteSidebar isCollapsed={isCollapsed} onToggle={handleToggle} />
      <div className="site-content">{children}</div>
    </div>
  );
}
