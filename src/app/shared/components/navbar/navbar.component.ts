import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  
  user:any
  constructor(private service:AuthService) { 
    this.service.user.subscribe((res:any) => {
      console.log(res);
      this.user = res.type ?  res : null
      console.log(this.user);

    })

  }
  ngOnInit(): void {
  }


  logout() {
    const model = {}
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    this.service.user.next(model)
  }
}
