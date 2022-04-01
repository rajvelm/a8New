import { Component, OnInit, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import PerfectScrollbar from 'perfect-scrollbar';
import { TranslateService } from '@ngx-translate/core';

@Component({
   selector: 'ms-dashboard',
   templateUrl:'./dashboard-component.html',
   styleUrls: ['./dashboard-component.scss'],
   encapsulation: ViewEncapsulation.None
})

export class DashboardComponent implements OnInit {


   constructor( private pageTitleService: PageTitleService,
                public translate: TranslateService) {
   }

   ngOnInit() {
      this.translate.get('Home').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });

   }
}














