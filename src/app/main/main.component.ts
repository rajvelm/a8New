import { Component } from '@angular/core';
import { MenuItems } from './menu-items';


@Component({
	selector: 'm2-layout',
	templateUrl: './main-material.html',
	styleUrls: ['./main-material.scss']
})
 
export class MainComponent   {
	 
	sidebarClosed          : boolean = false;
	_opened                : boolean = true;
	_closeOnClickOutside   : boolean = false;

	constructor(public menuItems: MenuItems ) { }

	closeOnClickOutside(){
		if(this._opened){
			this.sidebarClosed = false;
		}
		else{
			this.sidebarClosed =  true;
		}
		return this._closeOnClickOutside;
	}

	 
}