import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Customer } from "./customer";
import { CustomerDetails } from "./customerdetails";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getCustomerList(): Observable<Customer[]> {
    return this.http.get<Customer[]>("https://api.github.com/users");
  }

  public getCustomerDetails(id: string): Observable<CustomerDetails> {
    return this.http.get<CustomerDetails>(
      "https://api.github.com/users/" + id + "/repos"
    );
  }
}
