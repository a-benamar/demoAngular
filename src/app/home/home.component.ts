import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pageTitle :string = "AngularDemo"

  profil = {
  firstName:"abdel",
  lastName:"ben",
  country : "frensh"
}

linkImage = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
titleStyle = "display:block"

number = 1

inc(){
  this.number++
}

dec(){
  this.number--
}

show(){
  this.titleStyle="display:block; color:red"
}

hidden(){
  this.titleStyle="display:none"
  };


  constructor() { }

  ngOnInit(): void {
  }

}
