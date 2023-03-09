const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');
const { responseMessages } = require('../../utilities/messages');


var returnMessage = {};
returnMessage.fileSizeLimitExceed = 'Your file size should not exceeed more than 5 MB size.';

var typeOfUpload = ["ppt", "pptx", "bmp", "doc", "docx", "gif", "jpeg", "jpg", "pdf", "rtf", "png", "tif", "tiff", "txt", "xls", "xlsx", "csv"]

aws.config.update({
    accessKeyId: process.env.aws_access_key_id,
    secretAccessKey: process.env.aws_secret_access_key
});

// const spacesEndpoint = new aws.Endpoint(process.env.spacesEndpoint);
const s3 = new aws.S3();

const getUnixTimeStamp = () => {
    return Math.floor(new Date() / 1000)
}

const upload = multer({
    limits: {
        fileSize: 1024 * (1024 * 5),
        files: 1000
    },
    storage: multerS3({
        s3: s3,
        bucket: process.env.bucket,
        acl: process.env.public_read,
        key: function (request, file, cb) {
            console.log(file)
            let newFileName = file.originalname.split(".")[0] + "-" + getUnixTimeStamp() + "." + file.originalname.split(".")[1];
            file.newFileName = newFileName;
            let extension = file.originalname.split('.');
            let extensionName = extension[extension.length - 1].toLowerCase();

            var check = typeOfUpload.find(x => x.toLowerCase() == extensionName.toLowerCase());

            if (check == undefined) {
                var fileFormatNotAllowed = "This file format is not allowed.";
                return cb(fileFormatNotAllowed, false);
            }

            cb(null, file.newFileName);
        }
    })
}).array('upload', 1);

exports.fileUpload = async (req, res) => {
    try {
        console.log(process.env.bucket);
        console.log(process.env.public_read);
        upload(req, res, function (error) {
            if (error) {
                console.log(error);
                responseHandler.errorResponse(res, error, error);
                return false;
            }
            
            const filePath = process.env.filePath;
            responseHandler.successResponse(res, { filePath, file: process.env.bucket.split('/')[1] + "/" + req.files[0].newFileName }, responseMessages.fileUpload)
        });

    } catch (err) {
       
        responseHandler.errorResponse(res, err.message, commonErrorMessage)
    }
}

// exports.bulkUpload = async (req, res) => {
//     try {
//         upload(req, res, function (error) {
//             if (error) {
//                 responseHandler.errorResponse(res, error, error);
//                 return false;
//             }
//             const filePath = process.env.filePath;
//             // const resp = await query(bulkQuery(filePath + process.env.bucket.split('/')[1] + "/" + req.files[0].newFileName));
//             let list = mssqlResponseHandler(resp);
//             responseHandler.successResponse(res, list, responseMessages.fileUpload)
//         });

//     } catch (err) {
//         responseHandler.errorResponse(res, err.message, commonErrorMessage)
//     }
// }