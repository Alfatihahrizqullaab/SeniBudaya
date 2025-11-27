import { BudayaData } from "../card-budaya/budaya_model";

export const BUDAYA_DATA: BudayaData[] = [
    {
        id: 1,
        judul: 'Tari Kecak',
        gambar: 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp',
        tipe: 'Tarian',
        description: 'Tari Kecak adalah tarian tradisional Bali dengan ciri khas suara "cak" berirama.',
        tanggalPost: new Date()
    },
    {
        id: 2,
        judul: 'Wayang Kulit',
        gambar: 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp',
        tipe: 'Pertunjukan',
        description: 'Wayang kulit merupakan seni pertunjukan tradisional Jawa dengan bayangan kulit.',
        tanggalPost: new Date()
    },
    {
        id: 3,
        judul: 'Rumah Adat Gadang',
         gambar: 'https://mdbcdn.b-cdn.net/img/new/slides/041.webp',
        tipe: 'Arsitektur',
        description: 'Rumah Gadang adalah rumah adat Minangkabau dengan bentuk unik melengkung ke atas.',
        tanggalPost: new Date()
    }
];
