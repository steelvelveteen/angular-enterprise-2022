export interface UserNav {
  label: string;
  routerLink?: string;
  icon: string;
}

export const USERNAV: UserNav[] = [
  {
    label: 'Profile',
    routerLink: '',
    icon: 'PR',
  },
  {
    label: 'Edit Profile',
    routerLink: '',
    icon: 'ED',
  },
  {
    label: 'Settings',
    routerLink: '',
    icon: 'S',
  },
];
