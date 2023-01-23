const multer = require("multer");
const imageFilter = (req, file, cb) => {
    if (!file.originalname.match(/\.(png|jpg|jpeg|PNG|JPG|JPEG)$/)) {
        // upload only png and jpg format
        return cb(new Error("Only images allowed"));
      }
      cb(undefined, true);
};

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(require.main?.path)
        console.log("hi1");
        cb(null, require.main?.path + "/resources/static/assets/uploads/");
    },
    filename: (req, file, cb) => {
        console.log(file.originalname);
        cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
    },
});
var uploadFile = multer({ storage: storage,fileFilter: imageFilter });

module.exports = uploadFile;
