const mongoose = require("mongoose");

const daftarEventSchema = new mongoose.Schema({
    Nik: {
        type: String,
        required: [true, "Nik wajib diisi"],
        match: [/^\d{16}$/, "NIK harus 16 digit angka"],
        unique: true
    },
    fullName: {
        type: String,
        required: [true, "Nama harus diisi"]
    },
    usia: {
        type: Number,
        required: [true, "Usia harus diisi"]
    },
    tanggalLahir: {
        type: Date,
        required: [true, "Tanggal Lahir harus diisi"]
    },
    tempatTinggal: {
        type: String,
        required: [true, "tempat tinggal harus diisi"]
    },
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: true
    }
});

const daftarEvent = mongoose.model("DaftarEvent", daftarEventSchema)
module.exports = daftarEvent;