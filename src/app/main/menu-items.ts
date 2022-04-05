import { Injectable } from '@angular/core';

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
  label?:string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  label?:string;
  children?: ChildrenItems[];
}

const MENUITEMS = [
   {
      state: 'dashboard',
      name: 'DASHBOARD',
      type: 'sub',
      icon: 'icon-speedometer icons',
      label: 'New',
      children: [
         { state: 'dashboard-v1', name: 'DASHBOARD 1' },
         { state: 'dashboard-v2', name: 'DASHBOARD 2' },
      ]
   },
   {
      state: 'session',
      name: 'SESSIONS',
      type: 'sub',
      icon: 'icon-login icons',
      label: 'New',
      children: [
      {state: 'loginone', name: 'LOGIN'},
      {state: 'register', name: 'REGISTER'},
      {state: 'forgot-password', name: 'FORGOT'},
      {state: 'coming-soon', name: 'COMING SOON'},
      {state: 'coming-soonV2', name: 'COMING SOON V2', label : 'New'},
      {state: 'undermaintance', name: 'UNDER MAINTENANCE'},
      {state: 'maintanceV2', name: 'MAINTENANCE V2', label : 'New'},
      {state: 'lockscreen', name: 'LOCKSCREEN'},
      {state: 'subscribes', name: 'SUBSCRIBES'},
      {state: 'not-found', name: '404'}
      ]
   }
];

@Injectable()
export class MenuItems {
   getAll(): Menu[] {
      return MENUITEMS;
   }
    
}
