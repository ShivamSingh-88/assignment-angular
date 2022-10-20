import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEmployee } from '../model/employee';
import { RegistrationService } from '../registration.service';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
// export class ListUserComponent implements OnInit {
//   employees!: Array<IEmployee>;
//   employee!: IEmployee;
//   HighlightRow!: Number;
//   ClickedRow: any;
//   constructor(private _registrationService: RegistrationService, private router: Router) {
//     this.ClickedRow = function (index: Number) {
//       this.HighlightRow = index;
//   }
// }

//   ngOnInit(): void {
//     this._registrationService.getAllUser().subscribe(data => this.employees = data)
//   }

//   deleteUser(id: string) {
//     this._registrationService.deleteUser(id).subscribe(data => {
//       this.employees = this.employees.filter(con => con.id !== id)
//     })
//   }

//   getUser(id: string) {
//     this._registrationService.getUser(id).subscribe(data => {
//       this.router.navigate(['/Add-User'], { state: { data: data } });
//     });
//   }
// }

export class ListUserComponent{
  title="component";
}
