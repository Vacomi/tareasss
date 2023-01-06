import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-reactive',
  templateUrl: './contact-reactive.component.html',
  styleUrls: ['./contact-reactive.component.css']
})
export class ContactReactiveComponent implements OnInit {

  contactForm!: FormGroup;
  // myField = new FormControl();

  constructor(private readonly fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.initForm();

    this.onPathValue();
    this.onSetValue();
  }

  // 
  onPathValue():void {
    this.contactForm.patchValue({name: 'Mickey Mouse'});
  }

  onSetValue():void {
    this.contactForm.setValue({comment: 'hey causa!'});
  }

  onSubmit(): void {
    console.log('Form');
  }
  initForm(): FormGroup{
    return this.fb.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      age: ['', [Validators.required]],
      departament: [''],
      comment: ['', [Validators.required]]
    })
  }
}
