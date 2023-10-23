import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loginForm : FormGroup;

  submitted = false;
  
  
  constructor(private formBuilder: FormBuilder,) {
    
    
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      mail: ['', Validators.required],
      password: ['', Validators.required],
    });

    
  }
  get f() { return this.loginForm.controls; }

}
