import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  username: string | null = '';
  postsCount: number = 0;
  commentsCount: number = 0;
  lastSeenPostTime: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    this.fetchUserData();
  }

  fetchUserData() {
    this.postsCount = 10;
    this.commentsCount = 25;
    this.lastSeenPostTime = '2024-08-20 12:45 PM';
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}
