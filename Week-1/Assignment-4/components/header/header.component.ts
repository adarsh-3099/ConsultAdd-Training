import { Component, OnInit, Input, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { CompoService } from 'src/app/compo.service';
import { UserService } from 'src/app/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // title = "Currency Converter";
  // myStr = "I Love Chicken";
  // myBool = true;

  @Input() color: string|undefined;
  @Output() onYell = new EventEmitter();
  @Output() type=new EventEmitter<any>();
  // ninjas : object[] = [];
  // posts : object[] = [];
  // onClick(e){
  //   this.onYell.emit(e)
  // }

  bdayList:any=[];
  constructor(private userService:UserService) { }

  @Input() sortType:any;

  ngOnChanges(changes: SimpleChanges): void {
    console.log("--",this.sortType);
    if(this.bdayList.length >0){
      this.bdayList.sort((a:any, b:any): any =>{
       return this.sortType == 'name' ? a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1 : b.age - a.age;
      });
    }
  }


  ngOnInit(): void {
  this.getUser();
  }
  setType(event:any){
    console.log(event.target.value);
    this.type.emit(event.target.value);
   }
 
 getUser(){
  this.userService.getDetails().subscribe((res:any)=>{
    if(res){
      console.log(res);
      this.bdayList=res;
    }
  },
  error =>{
    console.log(error);
  })
 }


}
