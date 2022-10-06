export interface NavBtnLink {
  label: string;
  routerLink: string;
  icon: string;
  title: string;
  children?: NavBtnLink[];
}

export const NavData: NavBtnLink[] = [
  {
    label: 'dashboard',
    routerLink: '/admin/home',
    icon: 'pe-7s-graph',
    title: 'Admin Dashboard',
  },
  {
    label: 'Profile',
    routerLink: '/admin/profile',
    icon: 'pe-7s-user',
    title: 'Admin Profile',
    children: [
      {
        label: 'Edit profile',
        routerLink: 'admin/profile/edit',
        icon: 'edit',
        title: 'Admin Edit Profile',
      },
    ],
  },
  {
    label: 'Statistics',
    routerLink: 'stats',
    icon: 'pe-7s-graph3',
    title: 'Admin Statistics',
  },
  {
    label: 'Management',
    routerLink: 'usermanagement',
    icon: 'pe-7s-users',
    title: 'User Management',
  },
  {
    label: 'Settings',
    routerLink: 'settings',
    icon: 'pe-7s-config',
    title: 'Admin Settings',
  },
];
