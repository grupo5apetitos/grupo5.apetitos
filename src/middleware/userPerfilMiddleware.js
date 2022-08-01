const multer = require('multer');
const path = require('path');

// Configuracion de Multer --------------------------------------- //
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../../public/images/users'));
    }, 
    filename: (req, file, cb) => {
        newFilename = 'users-'+ Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
});

// Constante para indicarle a multer donde vamos aguardar los archivos
const upload = multer({ storage: storage });

module.exports = upload;