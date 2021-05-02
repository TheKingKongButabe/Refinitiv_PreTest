import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ViewChild, ChangeDetectorRef, ElementRef, AfterViewInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { Subject, forkJoin } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
	selector: 'question-1',
	templateUrl: './question-1.component.html',
	styleUrls: ['./question-1.component.scss']
})
export class QuestionOneComponent implements OnInit, OnDestroy, AfterViewInit {

	private destroy$ = new Subject<any>();
	inputForm: FormGroup;
	typeList = [
		"isPrime",
		"isFibonacci"
	]

	constructor(

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
	}

	ngAfterViewInit(): void {

	}



	private createInputForm(): FormGroup {

		return this._formBuilder.group({
			number: [0],
			type: [this.typeList[0]],
			isCorrect: [false],
		});
	}

	get isCorrect() {
		return this.inputForm.get('isCorrect').value;
	}

	get currentType() {
		return this.inputForm.get('type').value;
	}

	get currentNumber() {
		return this.inputForm.get('number').value;
	}



	isSquare(n) {
		return n > 0 && Math.sqrt(n) % 1 === 0;
	};
	
	//Equation modified from http://www.geeksforgeeks.org/check-number-fibonacci-number/
	checkFibonacci(numberToCheck)
	{
		// numberToCheck is Fibinacci if one of 5*n*n + 4 or 5*n*n - 4 or both
		// is a perferct square
		return this.isSquare(5*numberToCheck*numberToCheck + 4) ||
			   this.isSquare(5*numberToCheck*numberToCheck - 4);
	}
	


	checkIsPrime(num) {
		console.log("prime check");
		for(var i = 2; i < num; i++)
		  if(num % i === 0) return false;
		return num > 1;
	  }

	private bindOnChange() {
		this.inputForm.controls["number"].valueChanges.subscribe(changes => {
			var check = false;
			if (this.currentType == "isPrime") {
				check = this.checkIsPrime(changes);
			}
			else {
				check = this.checkFibonacci(changes);
			}
			this.inputForm.controls['isCorrect'].setValue(check);
		});

		this.inputForm.controls["type"].valueChanges.subscribe(changes => {
			console.log(changes)
			var check = false;
			if (changes == "isPrime") {
				check = this.checkIsPrime(this.currentNumber);
			}
			else {
				check = this.checkFibonacci(this.currentNumber);
			}
			console.log(check);
			this.inputForm.controls['isCorrect'].setValue(check);
		});
	}


	ngOnDestroy() {
		this.destroy$.next();
		this.destroy$.complete();
	}
}

