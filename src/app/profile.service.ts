import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './user';
import {environment} from '../environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {
  reponame: string='';
	username = 'limobrian';
	client_id = '6228816eae502586b23a';
	client_secret = '02d3234aeae94509c9b75c42d35813c59e53dc9e';
  token_key:string = 'fa2e3db99d8c17e5bba023a0c8986898a523e8dd' ;

  constructor(private _http:HttpClient) { 
  	console.log('Github service Init...');
  }

  getUser(){
  	return this._http.get('https://api.github.com/users/'+this.username+'?access_token='+this.token_key)
  		.map(res => res);
  }

   getRepos(){
  	return this._http.get('https://api.github.com/users/'+this.username+'/repos?access_token='+this.token_key)
  		.map(res => res);
  }

  updateUsername(username:string){
    this.username=username;
  }

  updateReponame(reponame:string){
    this.reponame=reponame;
  }
  
  searchRepos(){
    return this._http.get('https://api.github.com/search/repositories?q='+this.reponame)
    .map(res => res);
  }
}
 