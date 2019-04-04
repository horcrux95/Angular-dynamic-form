import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class RestHandlerService {
  definition: any;

  constructor(private http: HttpClient) { }

  getProductList(){
    return this.http.get(environment.apiUrl+'/products');
  }

  getDefinationUrl(url){
    return this.http.get(url);
  }

  setDefination(obj){
    this.definition = obj;
  }

  getDefinition(){
    return this.definition;
  }


}
