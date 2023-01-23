const { responseHandler } = require("../../utilities");
const { responseMessages } = require("../../utilities/messages");

exports.uploadLogo = async (req, res) => {
  try {
    let path = "/resources/static/assets/uploads/" + req.file.filename;
    responseHandler.successResponse(
        res,
        path,
        responseMessages.fileUpload
      );
  } catch (error) {}
};
