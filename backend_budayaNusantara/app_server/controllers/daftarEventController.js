const DaftarEventModels = require("../models/daftarEvent");
const Event = require("../models/event");

const daftarEvent = async (req, res) => {
    try{
        const { Nik, fullName, usia, tanggalLahir, tempatTinggal, event } = req.body;

        const cekEvent = await Event.findById(event);
        if(!cekEvent){
            return res.status(404).json({
                success: false,
                message: "Event tidak ditemukan"
            })
        }

        // Hitung jumlah pendaftar saat ini
        const totalPendaftar = await DaftarEventModels.countDocuments({event});

        // Cek kouta penuh
        if(totalPendaftar >= cekEvent.peserta){
            return res.status(400).json({
                success: false,
                message: "Kouta perseta sudah penuh"
            })
        }

        const newDaftarEvent = new DaftarEventModels({
            Nik,
            fullName,
            usia,
            tempatTinggal,
            tanggalLahir,
            event
        });

        const simpan = await newDaftarEvent.save();

        res.status(200).json({
            success: true,
            message: "Pendaftar event berhasil",
            data: simpan
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

const getAllDaftarEvent = async(req, res) => {
    try{
        const pendaftar = await DaftarEventModels.find({}).populate('event');
        res.status(200).json({
            success: true,
            message: "Data berhasil ditampilkan",
            data: pendaftar
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Internal Server error"
        })
    }
}

const detailDaftarEvent = async (req, res) => {
    try{
        const { id } = req.params;

        const daftarEvent = await DaftarEventModels.findById(id).populate("event");

        if (!daftarEvent) {
            return res.status(404).json({
                success: false,
                message: "Data pendaftaran tidak ditemukan!"
            });
        }

        res.status(200).json({
            success: true,
            data: daftarEvent
        })
    }catch(error){
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}


module.exports = { daftarEvent, detailDaftarEvent, getAllDaftarEvent }