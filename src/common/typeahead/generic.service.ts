import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/users')
  }

}
