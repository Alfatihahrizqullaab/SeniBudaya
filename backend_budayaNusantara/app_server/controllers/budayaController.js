const Budaya = require("../models/budaya");

// mendapatkan seluruh data budaya
const getAllBudaya = async(req, res) => {
    try{
        const budaya = await Budaya.find({});
        res.status(200).json({
            status:true,
            message: 'Budaya berhasil ditampilkan',
            data: budaya
        })
    }catch(err){
        res.status(500).json({
            status: false,
            message: "Budaya gagal ditampilkan"
        })
    }
}

const createBudaya = async (req, res) => {
    try{

        // console.log("REQ BODY:", req.body);
        // console.log("REQ FILE:", req.file);

        const { judul, tipe, deskripsi } = req.body;

        if (!req.file) {
        return res.status(400).json({
            status: false,
            message: "Gambar wajib diupload",
        });
        }

        if(!judul || !tipe || !deskripsi) {
            return res.status(400).json({
                status: false,
                message: "Semua field wajib di isi"
            })
        }

        const newBudaya = await Budaya.create({
            judul, 
            tipe,
            gambar: req.file.filename,
            deskripsi
        })

        res.status(201).json({
            status: true,
            message: "Budaya berhasil ditambahakan",
            data: newBudaya
        })
    }catch(err){
        console.error("CREATE ERROR", err)
        return res.status(500).json({
            status: true,
            message: "Internal Server Error",
            error: err.message
        })
    }
}

const getBudayaById = async (req, res) => {
    try{
        const idBudaya = req.params.id;
        const budaya = await Budaya.findById(idBudaya);

        if(!budaya){
            return res.status(400).json({
                status: false,
                message: "budaya tidak ditemukan"
            })
        }else{
            res.status(200).json({
                status: true,
                message: "Budaya berhasil ditampilkan",
                data: budaya
            })
        }

    }catch(err){
        res.status(500).json({
            status: false,
            message: "Internal Server ERROR"
        })
    }
}

module.exports = { getAllBudaya, createBudaya, getBudayaById };