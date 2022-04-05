import { NgModule} from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SidebarModule } from 'ng-sidebar';
import { M2AppComponent} from './app.component';
import { RoutingModule } from "./app-routing.module";
import { MainComponent }   from './main/main.component';
import { MenuItems } from './main/menu-items';
 
@NgModule({
	imports: [
		BrowserModule,
		SidebarModule.forRoot(),
		RoutingModule,
		RouterModule
    ],
	declarations: [
		M2AppComponent, 
		MainComponent		 
	],
	bootstrap: [M2AppComponent],
	providers:[
		MenuItems
	]
})
export class M2AppModule { }
