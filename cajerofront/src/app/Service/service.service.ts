import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Persona, saldoFin } from '../Modelo/Persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient){ }

 servidor = "http://localhost:8090/api"
    getPersonas():Observable<any>{
      let url =`${this.servidor}/usuarios`
      return this.http.get(url);
  }


  getById(id : any):Observable<any>{
    let url =`${this.servidor}/usuarios`
    return this.http.get(`${url}/${id}`);

  }
  add(Persona :Persona ):Observable<any>{
    let url =`${this.servidor}/usuarios`
    return this.http.post<Persona>(url,Persona)
  }
  
  update(id:any,saldoFin:saldoFin):Observable<any>{
    let url =`${this.servidor}/usuarios`
   return  this.http.patch(`${url}/${id}`,saldoFin);
  }

  delete(id :any):Observable<any>{
    let url =`${this.servidor}/usuarios`
    return this.http.delete(`${url}/${id}`);

  }
}
