export interface eventInterface{
    _id?: string;
    judulEvent: string;
    gambar: string;
    lokasi: string;
    harga: number;
    tanggalEvent: Date;
    jamEvent: string;
    peserta: number;
    pesertaTerdaftar?: number;
}