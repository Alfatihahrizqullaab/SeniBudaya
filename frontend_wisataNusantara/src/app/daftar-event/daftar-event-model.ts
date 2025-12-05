import { eventInterface } from "../event/event-model";

export interface DaftarEventInterface{
    Nik: string;
    fullname: string;
    usia: number;
    tanggalLahir: Date;
    tempatTinggal: string;
    event: eventInterface | string; 
}