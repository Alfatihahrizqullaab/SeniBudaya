const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Nama harus diiisi"],
        minlength: [2, "Nama minimal 2 karakter"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email harus diisi"],
        unique: true,
        lowercase: true,
        trim: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Format email tidak valid"]
    },
    password: {
        type: String,
        required: [true, "Password harus diisi"],
        minlength: [6, "Password minimal 6 karakter"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

// Hash password sebelum disimpan
userSchema.pre("save", async function(){
    if(!this.isModified("password")){
        return;
    }

    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt);
        next();
    }catch(err){
        return err;
    }
})

// Method untuk compare password
userSchema.methods.comparePassword = async function(candidatePassword){
    try{
        return await bcrypt.compare(candidatePassword, this.password);
    }catch(err){
        throw err;
    }
}

// Update timestamp saat document di update
userSchema.pre("findOneAndUpdate", function(next){
    this.set({updatedAt: Date.now() });
    next();
})

const User = mongoose.model("User", userSchema);
module.exports = User;