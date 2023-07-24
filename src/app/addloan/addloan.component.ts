import { Component,OnInit,ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanService } from '../_services/loan.service';



@Component({
  selector: 'app-addloan',
  templateUrl: './addloan.component.html',
  styleUrls: ['./addloan.component.scss']
})
export class AddloanComponent implements OnInit {
  addLoanForm: loanForm = new loanForm();
  @ViewChild("loanForm")
  loanForm!: NgForm;
  isSubmitted: boolean = false;
  constructor(private router: Router,private Loans : LoanService) { }
  ngOnInit(): void {  }

  AddLoan() : void {
    this.isSubmitted = true;
    console.log("hi");
    this.Loans.AddLoan(this.addLoanForm)
    .subscribe(
      data => {
        console.log(data);
        this.router.navigate(["dashboard"]);
      },
      error => {
        alert("Invalid credentials");
      });
  }
}

export class loanForm {
  Name = 0;
  LoanNumber = 0;
  LoanAmount= 0;
  LoanTerm: string = "";
  BorrowerInfo: string = "";
  PropertyInfo : string="";
  Status=0;
  Loanfees=0;
  OriginationDate="";
  OriginalAccount="";
  LienInfo="";
  LoanDocuments="";
}