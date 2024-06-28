import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/data.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isArticlesDropdownOpen = false;

  constructor(public authService: UserService, private router: Router) {}

  toggleArticlesDropdown() {
    this.isArticlesDropdownOpen = !this.isArticlesDropdownOpen;
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
