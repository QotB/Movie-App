import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';

import { User } from './user.model';
import { HeaderComponent } from '../header/header.component';

@Injectable({ providedIn: 'root' })
export class AuthService {

    u! :User ;
    isAuth = false;
    user = new BehaviorSubject<User>(this.u);

    private users: User[] = [
        {
            "email":"admin@gmail.com",
            "pass":"123456"
        }
    ];
    
  constructor(private http: HttpClient, private router: Router) {
  }

  login(email: string, password: string)
  {
    for(let item of this.users)
    {
        if(item.email == email && item.pass == password){
            this.u = new User(item.email,item.pass);
            this.isAuth = true;
            return 1 ;
        }
    }
    return 0;
  }

  signup(email: string, password: string)
  {
    let flag:boolean = false;
    for(let item of this.users)
    {
        if(item.email == email && item.pass == password){
            flag = true;
            break;
        }
    }
    if(!flag)
    {
        let newUser = {
            "email":email,
            "pass":password
        }
        this.users.push(newUser);
        return 1;
    }
    else 
    {
        return 0;
    }
  }

 
}
