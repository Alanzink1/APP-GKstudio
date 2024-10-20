import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from '../../navigation/navigation.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  isHome: boolean= false;

  constructor(
    public navigationService: NavigationService, 
    private router: Router) { }

  ngOnInit() {
    this.isHome = this.router.url === '/home';
  }

}
