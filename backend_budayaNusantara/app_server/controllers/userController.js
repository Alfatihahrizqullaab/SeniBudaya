const User = require('../models/user');
const jwt = require('jsonwebtoken');

const register = async(req, res) => {
    try{
        const { name, email, password} = req.body;

        // Validasi input user
        if(!name || !email || !password){
            return res.status(400).json({
                success: false,
                message: "Semua field harus diisi"
            })
        }

        // validasi nama minimal 2 karakter 
        if(name.trim().length < 2){
            return res.status(400).json({
                success: false,
                message: "Nama minimal 2 karakter"
            });
        }

        // Validasi email format
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({
                success: false,
                message: "Format email tidak valid"
            })
        }

        // Validasi password minimal 6 karakter
        if(password.length < 6){
            return res.status(400).json({
                success: false,
                message: "Password minimal 6 karakter"
            });
        }

        // Cek email sudah terdaftar
        const existingUser = await User.findOne({email: email.toLowerCase()});
        if(existingUser){
            return res.status(409).json({
                success: false,
                message: "Email sudah terdaftar"
            })
        }

        // Buat user baru
        const newUser = new User({
            name: name.trim(),
            email: email.toLowerCase().trim(),
            password: password
        });

        // simpan ke database
        await newUser.save();

        const token = jwt.sign(
            { id: newUser._id, email: newUser.email}, "kunci_rahasia_budayaNusantara", // gunakkan env variabel di production
            { expiresIn: "1h" } // Token kadaluarsa dalam 1 jam
        )

        // Response sukses (jangan kirim password)
        res.status(200).json({
            success: true,
            message: "Registrasi berhasil! Silahkan login",
            data: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                createdAt: newUser.createdAt,
                token: token
            }
        })
    }catch(error){
        console.error("Reigster Error: ", error);

        // Handle mongoose validation errors
        if(error.name === "ValidationError"){
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({
                success: false,
                message: messages.join(", ")
            })
        }

        // Handle duplicate key error (email sudah ada)
        if(error.code === 11000){
            return res.status(409).json({
                success: false,
                message: "Email sudah terdaftar"
            });
        }

        res.status(500).json({
        success: false,
        message: "Terjadi kesalahan pada server",
        error: error.message
        });
    }
}

const login = async(req, res) => {
    try{
        const { email, password } = req.body;

        // Validasi input
        if (!email || !password){
            return res.status(400).json({
                success: false,
                message: "Email dan Password harus diisi"
            })
        }

        // Cari user berdasarkan email
        const user = await User.findOne({email: email.toLowerCase()});
        if(!user){
            return res.status(401).json({
                success: false,
                message: "Email atau password salah"
            })
        }

        // Validasi password
        const isPasswordValid = await user.comparePassword(password);
        if(!isPasswordValid){
            return res.status(401).json({
                success: false,
                message: "Email atau password salah"
            });
        }

        const token = jwt.sign(
            {id: user._id, email: user.email},"kunci_rahasia_budayaNusantara",
            { expiresIn: "1h"}
        )

        // response sukses
        res.status(200).json({
            success: true,
            message: "Login berhasil",
            data: {
                id: user._id,
                name: user.name,
                email: user.email,
                token: token
            }
        })
    }catch(error){
        console.error("Login error", error);
        res.status(500).json({
            success: false,
            message: "Terjadi kesalahan pada server",
            error: error.message
        })
    }
}

module.exports = {login, register};