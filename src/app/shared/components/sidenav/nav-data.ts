export interface RouteInfo {
  label: string;
  routerLink: string;
  icon: string;
  title: string;
  children?: RouteInfo[];
}

export const ROUTES: RouteInfo[] = [
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
    routerLink: 'usermanage',
    icon: 'pe-7s-users',
    title: 'User Management',
    children: [
      {
        label: "User's Profile",
        routerLink: 'admin/usermanage/view',
        icon: '',
        title: 'Admin User Manage',
      },
      {
        label: "User's Edit",
        routerLink: 'admin/usermanage/edit',
        icon: '',
        title: 'Admin User Edit',
      },
    ],
  },
  {
    label: 'Settings',
    routerLink: 'settings',
    icon: 'pe-7s-config',
    title: 'Admin Settings',
  },
];
