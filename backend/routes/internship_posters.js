import express from 'express';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// For __dirname replacement in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// ========== MULTER CONFIG ==========
const uploadDir = path.join(__dirname, '..', 'uploads', 'posters');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    fs.readdir(uploadDir, (err, files) => {
      if (err) {
        cb(err);
      } else {
        const imageFiles = files.filter(name => /^image\d+\.[a-zA-Z]+$/.test(name));
        const nextNumber = imageFiles.length + 1;
        const newFilename = `image${nextNumber}${ext}`;
        cb(null, newFilename);
      }
    });
  }
});

const upload = multer({ storage });

// ========== UPLOAD ==========
router.post('/upload/poster', upload.single('poster'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'No file uploaded' });
  }

  const fileUrl = `${req.protocol}://${req.get('host')}/uploads/posters/${req.file.filename}`;

  res.status(200).json({
    success: true,
    message: 'Poster uploaded successfully',
    fileName: req.file.filename,
    fileUrl
  });
});

// ========== RETRIEVE ==========
router.get('/posters', (req, res) => {
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      console.error('Error reading posters folder:', err);
      return res.status(500).json({ success: false, message: 'Could not read posters folder' });
    }

    const imageFiles = files
      .filter(name => /^image\d+\.[a-zA-Z]+$/.test(name))
      .sort((a, b) => {
        const numA = parseInt(a.match(/\d+/));
        const numB = parseInt(b.match(/\d+/));
        return numA - numB;
      });

    const fileList = imageFiles.map(filename => ({
      fileName: filename,
      url: `${req.protocol}://${req.get('host')}/uploads/posters/${filename}`
    }));

    res.status(200).json({
      success: true,
      count: fileList.length,
      posters: fileList
    });
  });
});

// ========== DELETE ==========
router.delete('/posters/:filename', (req, res) => {
  const { filename } = req.params;
  const filePath = path.join(uploadDir, filename);

  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
      return res.status(404).json({ success: false, message: 'Poster not found or already deleted' });
    }

    res.status(200).json({
      success: true,
      message: `Poster '${filename}' deleted successfully`
    });
  });
});

export default router;
