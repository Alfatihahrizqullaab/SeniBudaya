import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";


export interface AuthResponse{
    succes: boolean;
    message: string;
    data?: {
        id: string;
        name: string;
        password: string;
        createdAt?: string
    }
}

export interface LoginRequest{
    email: string;
    password: string
}

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    private apiUrl = 'http://localhost:3000/user'

    constructor(private http: HttpClient){

    }

    login(data: LoginRequest): Observable<AuthResponse>{
        return this.http.post<AuthResponse>(`${this.apiUrl}/login`, data);
    }

    getToken(): string | null {
        return localStorage.getItem('token')
    }

    getUserData(): any{
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }

    saveUserData(userData: any): void{
        localStorage.setItem('user', JSON.stringify(userData))
        if(userData.token){
            localStorage.setItem('token', userData.token)
        }
    }

    isLoggedIn(): boolean{
        return this.getUserData() !== null;
    }

    logout(): void{
        localStorage.removeItem('user');
        localStorage.removeItem('token')
    }
}
