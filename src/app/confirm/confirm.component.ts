import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    $(document).ready(function () {
  
      $('ul > li')
              .click(function (e) {
          $('ul > li')
              .removeClass('active');
          $(this).addClass('active');
      });
  });
  }
  activeTab = 'search';
  activeTab1='result'
  search(activeTab:any){
  this.activeTab = activeTab;
  }
  
  tab='result'
  search1(data:any){
  this.activeTab=data
  }
  confirm(activeTab:any){
  this.activeTab=activeTab
  }
  result(activeTab:any){
    this.activeTab = activeTab;
  }
  previous(Data:any){
    this.activeTab=Data
  }
  
}
