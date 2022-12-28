export default interface RouteInfo {
  label: string;
  routerLink?: string;
  icon: string;
  hasBadge?: boolean;
  children?: RouteInfo[];
}
