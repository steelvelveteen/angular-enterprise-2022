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
    icon: 'pe-7s-graph',
  },
  {
    label: 'Profile',
    routerLink: '/admin/profile',
    icon: 'pe-7s-user',
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
    icon: 'pe-7s-graph3',
  },
  {
    label: 'Management',
    routerLink: 'usermanagement',
    icon: 'pe-7s-users',
  },
  {
    label: 'Settings',
    routerLink: 'settings',
    icon: 'pe-7s-config',
  },
];
