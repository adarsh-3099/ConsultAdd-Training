import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CompoService } from 'src/app/compo.service';
import { UserService } from 'src/app/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = "Currency Converter";
  myStr = "I Love Chicken";
  myBool = true;

  @Input() color: string|undefined;
  @Output() onYell = new EventEmitter();

  ninjas : object[] = [];
  posts : object[] = [];
  // onClick(e){
  //   this.onYell.emit(e)
  // }

  userList:any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  this.getUser();
  }
 getUser(){
  this.userService.getData().subscribe((res:any)=>{
    if(res){
      console.log(res);
      this.userList=res;
    }
  },
  error =>{
    console.log(error);
  })
 }


}
