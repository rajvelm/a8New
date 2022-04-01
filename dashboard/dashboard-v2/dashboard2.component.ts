import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { PageTitleService } from '../../core/page-title/page-title.service';
import PerfectScrollbar from 'perfect-scrollbar';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'ms-dashboard2',
  templateUrl:'./dashboard2-component.html',
  styleUrls: ['./dashboard2-component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DashboardOneComponent implements OnInit  {
   
   constructor(private pageTitleService: PageTitleService,
               public translate: TranslateService) {
   }

   ngOnInit() {
      this.translate.get('Dashboard 2').subscribe((res: string) => {
         this.pageTitleService.setTitle(res);
      });
   }

}
