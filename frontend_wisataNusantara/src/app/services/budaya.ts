import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BudayaData } from '../card-budaya/budaya_model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BudayaService {
  private apiUrl = 'http://localhost:3000/budaya'

  constructor(private http: HttpClient){}

  getAllBudaya(): Observable<BudayaData[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(res => res.data)
    );
  }

  getBudayaById(id: string): Observable<BudayaData> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map(res => res.data)
    );
  }

  createBudaya(data: FormData): Observable<any>{
    return this.http.post<BudayaData>(`${this.apiUrl}/tambah-budaya`, data);
  }
}
