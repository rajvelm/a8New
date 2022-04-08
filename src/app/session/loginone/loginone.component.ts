import { Component, OnInit ,ViewEncapsulation } from '@angular/core';
import { Router} from "@angular/router";
import { TranslateService } from '@ngx-translate/core';

import { AuthService } from '../../service/auth/auth.service';

@Component({
   selector: 'ms-loginone-session',
   templateUrl:'./loginone-component.html',
   styleUrls: ['./loginone-component.scss'],
   encapsulation: ViewEncapsulation.None,
})

export class LoginoneComponent {

   email    : string ="demo@example.com";
   password : string ="0123456789";
   name     :string  ="administraor";

   constructor( private router: Router,
                private authService : AuthService,
                public translate: TranslateService) { }

   // when email and password is correct, user logged in.
   logIn(value){
      this.authService.loginUser(value);
   }

   signIn(){
     console.log("1211212");
      this.router.navigate(['/horizontal'])
   }
	
}



