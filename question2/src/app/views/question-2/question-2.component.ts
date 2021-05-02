import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ViewChild, ChangeDetectorRef, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Subject, forkJoin } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionTwoService } from './question-2.service';



@Component({
	selector: 'question-2',
	templateUrl: './question-2.component.html',
	styleUrls: ['./question-2.component.scss']
})
export class QuestionTwoComponent implements OnInit, OnDestroy, AfterViewInit {

	private destroy$ = new Subject<any>();
	inputForm: FormGroup;
	rawRows = [];
	rows = [];

	constructor(
		private questionTwoService: QuestionTwoService,
		private cdRef: ChangeDetectorRef,
		private router: Router,
		private _formBuilder: FormBuilder,
		private activatedRoute: ActivatedRoute,


	) {

		this.destroy$ = new Subject();
	}


	ngOnInit() {
		this.inputForm = this.createInputForm();
		this.bindOnChange();
		this.questionTwoService.getData().subscribe((res: any[]) => {
			console.log(res);
			this.rows = res;
			this.rawRows = res;
		});
	}

	ngAfterViewInit(): void {

	}

	private createInputForm(): FormGroup {
		return this._formBuilder.group({
			text: [],
		});
	}

	private bindOnChange() {
		this.inputForm.controls["text"].valueChanges.subscribe(changes => {
			this.rows = this.rawRows.filter(d => d.includes(changes));
		});
	}



	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}
}

