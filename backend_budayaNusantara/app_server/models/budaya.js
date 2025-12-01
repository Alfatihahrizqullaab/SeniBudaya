const mongoose = require("mongoose");

const budayaSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    judul: {
        type: String,
        required: [true, "Judul harus wajib diisi"]
    },
    tipe: {
        type: String,
        required: [true, "Tipe harus wajib diisi"]
    },
    deskripsi: {
        type: String,
        required: [true, "Deskripsi penjelasan harus diisi"]
    },
    gambar: {
        type: String,
        required: [true, "Gambar harus wajib diisi"]
    }
}, {
    timestamps: true
});

const Anggota = mongoose.model("Budaya", budayaSchema);
module.exports = Anggota;