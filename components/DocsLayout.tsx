import type { ReactNode } from "react";
import { DocsPageNavigation, DocsSidebar, DocsToc, DocsTransition } from "./DocsSidebar";
import { SiteSearch } from "./SiteChrome";

/** Shared reading layout for the general docs and MCP guides. */
export function DocsLayout({ children }: { children: ReactNode }) {
  return (
    <div className="docs-layout">
      {/* The bar keeps its search for other pages; docs pages get a compact field of their own here. */}
      <div className="docs-search"><SiteSearch className="site-header-search docs-search-field" /></div>
      <aside className="docs-layout-nav"><DocsSidebar /></aside>
      <div className="docs-layout-main">
        <DocsTransition>
          {children}
          <DocsPageNavigation />
        </DocsTransition>
      </div>
      <aside className="docs-layout-toc"><DocsToc /></aside>
    </div>
  );
}
