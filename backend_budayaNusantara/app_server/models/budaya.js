const mongoose = require("mongoose");

const budayaSchema = new mongoose.Schema({
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

const Budaya = mongoose.model("Budaya", budayaSchema);
module.exports = Budaya;