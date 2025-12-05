import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs";
import { eventInterface } from "../event/event-model";



@Injectable({
    providedIn: 'root'
})
export class EventService{
    private apiUrl = 'http://localhost:3000/event'

    constructor(private http: HttpClient){}

    // Get allEvent
    getAllEvent(): Observable<eventInterface[]>{
        return this.http.get<any>(this.apiUrl).pipe(
            map(res => res.data)
        )
    }
    // Get detailEvent
    detailEvent(id: string): Observable<eventInterface>{
        return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
            map(res => res.data)
        )
    }
    // post createEven
    createEvent(data: FormData): Observable<eventInterface>{
        return this.http.post<eventInterface>(`${this.apiUrl}/`, data);
    }
}