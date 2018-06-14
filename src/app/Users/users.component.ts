import { UserService } from './user.service';
import { Component, OnInit } from "@angular/core";

@Component({

    templateUrl:'./users.component.html',
    selector: 'app-users',
    styleUrls: ['users.component.css']
})
export class UsersComponent implements OnInit{
    title = 'Users';
    users = [];
    constructor(private service: UserService){
               }
    ngOnInit(){
        this.users = this.service.getUsers();
    }
}