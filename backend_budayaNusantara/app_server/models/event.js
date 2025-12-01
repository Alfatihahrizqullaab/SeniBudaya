const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    judulEvent: {
        type: String,
        required: [true, "Judul harus diisi"],
    },
    gambar: {
        type: String,
        required: [ true, "Gambar harus diisi" ]
    },
    lokasi: {
        type: String,
        required: [true, "lokasi harus diisi"],
        maxLength: 255 
    },
    harga: {
        type: Number,
        required: true
    },
    tanggalEvent: {
        type: Date,
        required: [true, "Tanggal event harus diisi"]
    },
    jamEvent: {
        type: String,
        required: [true, "Jam event harus diisi"],
        match: [/^\d{2}:\d{2}$/, "Format jam harus HH:MM"]
    },
    peserta: {
        type: Number,
        required: [true, "jumlah peserta harus di isi"],
        max: 100
    }


});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event; 