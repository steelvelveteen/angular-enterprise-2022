export interface NavBtnLink {
  label: string;
  routerLink: string;
  icon: string;
}

export const NavData: NavBtnLink[] = [
  {
    label: 'dashboard',
    routerLink: '/admin/home',
    icon: 'home',
  },
  {
    label: 'Profile',
    routerLink: '/admin/profile',
    icon: 'home',
  },
  {
    label: 'Statistics',
    routerLink: 'stats',
    icon: 'query_stats',
  },
  {
    label: 'User Management',
    routerLink: 'usermanagement',
    icon: 'manage_accounts',
  },
  {
    label: 'Settings',
    routerLink: 'settings',
    icon: 'settings_suggest',
  },
];
