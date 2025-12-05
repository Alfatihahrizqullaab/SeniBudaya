import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs";
import { DaftarEventInterface } from "../daftar-event/daftar-event-model";
import { eventInterface } from "../event/event-model";

@Injectable({
    providedIn: 'root'
})
export class DaftarEventService{
    private apiUrl = 'http://localhost:3000/daftarEvent'

    constructor(private http:HttpClient){}

    // daftarEvent
    getAllDaftarEvent(): Observable<DaftarEventInterface>{
        return this.http.get<any>(this.apiUrl).pipe(
            map(res => res.data)
        )
    }
    // detailDaftarEvent
    detailDaftarEvent(id: string): Observable<DaftarEventInterface>{
        return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
            map(res => res.data)
        )
    }
    // daftarEvent
    daftarEvent(data: any): Observable<DaftarEventInterface>{
        return this.http.post<any>(`${this.apiUrl}/`, data).pipe(
            map(res => res.data)
        );
    }
}