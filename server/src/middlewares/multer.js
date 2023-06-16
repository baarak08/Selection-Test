const multer = require("multer");
const { nanoid } = require("nanoid");
const path = require("path");

const storageConfig = (destinationFolder, prefix) =>
  multer.diskStorage({
    destination: (req, file, cb) => {
      let destination;
      if (destinationFolder === "uploads") {
        destination = path.join(__dirname, "../../public/uploads");
      } else if (destinationFolder === "avatar") {
        destination = path.join(__dirname, "../../public/avatar");
      } else {
        destination = path.join(__dirname, "../../public");
      }
      cb(null, destination);
    },
    filename: (req, file, cb) => {
      const fileExtension = file.mimetype.split("/")[1];
      const filename = `${prefix}_${nanoid()}.${fileExtension}`;
      cb(null, filename);
    },
  });

const fileUploader = (destinationFolder, prefix) =>
  multer({
    storage: storageConfig(destinationFolder, prefix),
    fileFilter: (req, file, cb) => {
      if (file.mimetype.split("/")[0] !== "image") {
        return cb(null, false);
      }
      cb(null, true);
    },
  });

module.exports = { fileUploader };
