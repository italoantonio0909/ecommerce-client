import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signIn',
  templateUrl: './signIn.component.html',
})
export class SignInComponent implements OnInit {
  constructor() {}

  isLoading: boolean = false;

  ngOnInit(): void {}
}
