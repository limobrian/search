import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any;

  constructor(private _profileService:ProfileService) {
  	console.log('Github component Init... ');

  	this._profileService.getUser().subscribe(user=>{
  		this.user = user;
  	})
  }

  ngOnInit() {
  }

}
