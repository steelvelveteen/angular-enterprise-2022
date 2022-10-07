export interface RouteInfo {
  label: string;
  routerLink?: string;
  icon: string;
  children?: RouteInfo[];
}

export const ROUTES: RouteInfo[] = [
  {
    label: 'Dashboard',
    routerLink: '/admin/home',
    icon: 'pe-7s-graph',
  },
  {
    label: 'Profile',
    icon: 'pe-7s-user',
    children: [
      {
        label: 'Your profile',
        routerLink: '/admin/profile',
        icon: 'PR',
      },
      {
        label: 'Edit',
        routerLink: '/admin/edit',
        icon: 'ED',
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
    icon: 'pe-7s-users',
    children: [
      {
        label: "User's Profile",
        routerLink: 'admin/usermanage/view',
        icon: 'MG',
      },
      {
        label: "User's Edit",
        routerLink: 'admin/usermanage/edit',
        icon: 'RF',
      },
    ],
  },
  {
    label: 'Settings',
    routerLink: '/admin/settings',
    icon: 'pe-7s-config',
  },
];
