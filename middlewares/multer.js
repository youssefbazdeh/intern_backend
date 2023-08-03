import multer from "multer";
import path from "path"; 


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      // Set the destination folder for uploaded files
      cb(null, "uploads");
    },
    filename: (req, file, cb) => {
      // Rename the file to avoid conflicts
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const extname = path.extname(file.originalname);
      cb(null, file.fieldname + "-" + uniqueSuffix + extname);
    },
  });

  const upload = multer({ storage });

  export default upload ;