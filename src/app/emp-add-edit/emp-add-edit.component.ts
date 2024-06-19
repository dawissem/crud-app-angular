import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../services/employee.service';
import { Dialog, DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-emp-add-edit',
  templateUrl: './emp-add-edit.component.html',
  styleUrls: ['./emp-add-edit.component.scss']
})
export class EmpAddEditComponent {

  empform: FormGroup;


  education: string[] =[
    'Sans bac',
    'bac +1',
    'bac +2',
    'bac+3',
    'bac+5' ,
  ];
constructor(private _fb: FormBuilder , private _empService:EmployeeService , private _dialogRef:DialogRef<EmpAddEditComponent>){
this.empform = this._fb.group({
  Prenom:'',
  Nomfamille: '',
  email: '',
  date: '',
  Genre:'',
  education: '',
  Entreprise: '',
  Experiences: '',
  Salaire: '',
})
}


  onFormSubmit(){
    this._empService.addemployee(this.empform.value).subscribe({
      next:( val: any) =>  {
        alert('Employe est ajoutee');
        this._dialogRef.close();
      },
      error: (err: any) =>  {
        console.error(err);
        
      },
    });

  }
}


