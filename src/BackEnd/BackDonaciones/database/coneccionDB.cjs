const mongoose = require('mongoose');

const coneccionDB = async() => {
    try {
        await mongoose.connect("mongodb://localhost/generation")
        console.log("se conecto a la base de datos");
    
    }catch (error){
        console.log(error);
        throw new Error("error no se pudo conectar ");

    }
};

module.exports = {coneccionDB}
