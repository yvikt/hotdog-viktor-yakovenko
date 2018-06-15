import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {

  constructor(
    private http: HttpClient
  ) { }


  getGallery() {
    const url = 'https://formula-test-api.herokuapp.com/menu';
    return this.http.get<any>(url);
  }

}
