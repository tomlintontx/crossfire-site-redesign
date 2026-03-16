export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  highlight?: boolean;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Classes", href: "/classes" },
  { label: "Parties & Events", href: "/parties-events" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "News", href: "/news" },
  {
    label: "Parent Portal",
    href: "https://app.iclasspro.com/portal/crossfire",
    external: true,
    highlight: true,
  },
];
