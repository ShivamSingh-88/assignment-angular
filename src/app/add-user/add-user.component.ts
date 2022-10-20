import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PasswordValidator } from '../shared/password.validator';
import { RegistrationService } from '../registration.service';
import { v4 as uuidv4 } from 'uuid';
import { IEmployee } from '../model/employee';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {

  HighlightRow!: Number;
  ClickedRow: any;
  employees!: Array<IEmployee>;
  employee!: IEmployee;

  title = 'Form Data';
  constructor(private fb: FormBuilder, private _registrationService: RegistrationService, private router: Router) {
    this.ClickedRow = function (index: Number) {
      this.HighlightRow = index;
    }
    // console.log(this.router?.getCurrentNavigation()?.extras?.state?.data)
    this.registrationForm.patchValue(this.router?.getCurrentNavigation()?.extras?.state?.data || {});
  }

  ngOnInit(): void {
    this._registrationService.getAllUser().subscribe(data => this.employees = data)
  }
  // const validator:AbstractControlOptions={validators: MustMatch('password', 'confirmPassword') };
  registrationForm = this.fb.group({
    id: uuidv4(),
    firstName: ['', [Validators.required, Validators.minLength(3),
    Validators.maxLength(50)]],
    lastName: [''],
    userName: ['', Validators.required],
    password: ['', [Validators.required, Validators.pattern('^[a-zA-Z_0-9]*'), Validators.minLength(8)]],
    confirmPassword: ['', Validators.required],
    dob: ['', Validators.required],
    gender: ['', Validators.required],
  },
    { validator: PasswordValidator }
  );

  addUser() {
    const data = this.registrationForm.value;
    this._registrationService.register(data).subscribe(
      () => {
         window.location.reload();

        alert('Submitted Successfully');

      }
    );
    this.updateUser();
  }

  deleteUser(id: string) {
    // alert("This record will be deleted")
    this._registrationService.deleteUser(id).subscribe(
      data => {
        this.employees = this.employees.filter(con => con.id !== id)
      }
    )
  }
  getUser(id: string) {
    this._registrationService.getUser(id).subscribe(data => this.registrationForm.patchValue(data),
    );
  }
  updateUser() {
    this._registrationService.updateUser(this.registrationForm.controls.id.value, this.registrationForm.value).subscribe((data: any) => {
      let con1 = this.employees.filter(con => con.id == this.registrationForm.controls.id.value)[0]
      let pos = this.employees.indexOf(con1);
      this.employees[pos] = data
      this.reset()
    })
  }

  reloadCurrentPage() {
    window.location.reload();
  }

  reset() {
    this.registrationForm.reset();
    this.registrationForm.controls.id.setValue(1);
  }

  canExit() {
    if (this.registrationForm) {
      return confirm('You have unsaved changes. Do you really want to discard these changes?');
    }
    else {
      return true;
    }
  }

}
