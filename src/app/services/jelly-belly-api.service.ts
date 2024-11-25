import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {JellyBean, JellyBellyApiResponse} from "../common/interfaceJellybelly";

@Injectable({
  providedIn: 'root'
})
export class JellyBellyApiService {
private http : HttpClient = inject(HttpClient);
apiUrl = 'https://jellybellywikiapi.onrender.com/api/beans';
pageUrl = '&pageSize=10';

constructor() { }
  getBeans(page: number) : Observable<JellyBellyApiResponse> {
  return this.http.get<JellyBellyApiResponse>(this.apiUrl+'?pageIndex='+page+this.pageUrl);
  }

  getBeanById(id : number) : Observable<JellyBean> {
    return this.http.get<JellyBean>(this.apiUrl+'/'+id);
  }

}
