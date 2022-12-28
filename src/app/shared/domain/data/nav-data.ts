import RouteInfo from '../interfaces/route-info';

export const ROUTES: RouteInfo[] = [
  {
    label: 'Dashboard',
    routerLink: '/admin/home',
    icon: 'pe-7s-display1',
  },
  {
    label: 'Services',
    icon: 'pe-7s-helm',
    children: [
      {
        label: 'Accounts',
        routerLink: '/admin/accounts',
        icon: 'pe-7s-users',
      },
      {
        label: 'Resources',
        routerLink: '/admin/resources',
        icon: 'pe-7s-headphones',
      },
      {
        label: 'Payments',
        routerLink: '/admin/payments',
        icon: 'pe-7s-piggy',
      },
      {
        label: 'Help',
        routerLink: '/admin/help',
        icon: 'pe-7s-help1',
      },
    ],
  },
  {
    label: 'Statistics',
    routerLink: '/admin/stats',
    icon: 'pe-7s-graph',
  },
  {
    label: 'Management',
    icon: 'pe-7s-config',
    children: [
      {
        label: "User's Profile",
        routerLink: 'admin/usermanage/view',
        icon: 'pe-7s-user',
      },
      {
        label: "User's Edit",
        routerLink: 'admin/usermanage/edit',
        icon: 'pe-7s-edit',
      },
    ],
  },
  {
    label: 'Configuration',
    routerLink: '/admin/configuration',
    icon: 'pe-7s-tools',
  },
];
