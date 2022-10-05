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
    icon: 'home',
  },
  {
    label: 'User Management',
    routerLink: 'usermanagement',
    icon: '',
  },
  {
    label: 'Settings',
    routerLink: 'settings',
    icon: '',
  },
];
