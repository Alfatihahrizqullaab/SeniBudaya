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
        const newBudaya = new Budaya({
            id: req.body.id,
            judul: req.body.judul,
            tipe: req.body.tipe,
            gambar: req.body.gambar,
            deskripsi: req.body.deskripsi
        })
        const budaya = await newBudaya.save();
        res.status(200).json({
            status:true,
            message: "Budaya berhasil ditambahkan",
            data: budaya
        })
    }catch(err){
        res.status(500).json({
            status: true,
            message: "Internal Server Error"
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
                message: "Budaya berhasil ditampilkan"
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