const Event = require("../models/event");

const getAllEvent = async(req, res) => {
    try{
        const eventBudaya = await Event.find({});
        res.status(200).json({
            status: true,
            message: 'Event berhasil ditampilkan',
            data: eventBudaya
        })
    }catch(err){
        res.status(500).json({
            status: false,
            message: "Internal server error"
        })
    }
}

const createEvent = async(req, res) => {
    try{
        const { judulEvent, gambar, lokasi, harga, tanggalEvent, jamEvent, peserta } = req.body;

        // Validasi semua inputan harus diisi
        if(!judulEvent || !gambar || !lokasi || !harga || !tanggalEvent || !jamEvent || !peserta){
            return res.status(400).json({
                message: "Semua field wajib diisi"
            })
        }

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const tanggal = new Date(tanggalEvent); // tambahkan ini
        if(tanggal < today){
            return res.status(400).json({
                message: "Tanggal event tidak boleh sebelum hari ini"
            })
        }

        const regexJam = /^\d{2}:\d{2}$/;
        if(!regexJam.test(jamEvent)){
            return res.status(400).json({
                message: "Format jam harus HH:MM"
            })
        }

        const [hour] = jamEvent.split(":").map(Number);
        if(hour < 7 || hour > 22){
            return res.status(400).json({
                message: "Jam event harus antara 07.00 sampai 22:00"
            })
        }

        const newEvent = new Event({
            judulEvent,
            gambar,
            harga,
            lokasi,
            tanggalEvent,
            jamEvent,
            peserta
        });

        const simpan = await newEvent.save();

        return res.status(201).json({
            message: "Event berhasil disimpan",
            data: simpan
        })

    }catch(error){
        return res.status(500).json({
            message: "Terjadi kesalahan Internal error",
            error: error.message
        })
    }
}

const detailEvent = async (req, res) => {

    try{
        const idEvent = req.params.id;
        const eventBudaya = await Event.findById(idEvent);

        if(!eventBudaya){
            return res.status(404).json({
                status: false,
                message: "Event tidak ditemukkan"
            })
        }

        res.status(200).json({
            status: true,
            message: "Event berhasil ditampilkan",
            data: eventBudaya
        })
    }catch(error){
        res.status(500).json({
            status: false,
            message: "Internal Server error"
        })
    }

}


module.exports = {getAllEvent, createEvent, detailEvent}