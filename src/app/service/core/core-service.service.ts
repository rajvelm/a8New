import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import { Subscription } from 'rxjs';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Injectable({
	providedIn: 'root'
})

export class CoreService {

	public rtlShowStatus : boolean = false;
	constructor( private http : HttpClient,
				 private modalService: NgbModal ) { }
}
