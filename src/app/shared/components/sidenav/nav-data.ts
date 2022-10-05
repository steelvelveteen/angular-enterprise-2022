export interface NavBtnLink {
  label: string;
  routerLink: string;
  icon: string;
  children?: NavBtnLink[];
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
    children: [
      {
        label: 'Edit profile',
        routerLink: 'admin/profile/edit',
        icon: 'edit',
      },
    ],
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
