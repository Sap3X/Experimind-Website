import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getCredentials = () => {
  if (process.env.GOOGLE_CLIENT_EMAIL && process.env.GOOGLE_PRIVATE_KEY) {
    return {
      type: "service_account",
      project_id: process.env.GOOGLE_PROJECT_ID,
      private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.GOOGLE_CLIENT_ID,
      auth_uri: "https://accounts.google.com/o/oauth2/auth",
      token_uri: "https://oauth2.googleapis.com/token",
      auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
      client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${encodeURIComponent(process.env.GOOGLE_CLIENT_EMAIL)}`,
      universe_domain: "googleapis.com",
    };
  }

  throw new Error("Missing required Google credentials in environment variables.");
};

const credentials = getCredentials();

const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ['https://www.googleapis.com/auth/drive.file'],
});

const drive = google.drive({ version: 'v3', auth });

export const uploadFileToDrive = async (filePath, fileName) => {
  try {
    const authClient = await auth.getClient();

    const fileMetadata = {
      name: fileName,
      parents: [process.env.GOOGLE_DRIVE_INTERNSHIP_FOLDER_ID],
    };

    const media = {
      mimeType: 'application/pdf',
      body: fs.createReadStream(filePath),
    };

    const file = await drive.files.create({
      auth: authClient,
      resource: fileMetadata,
      media,
      fields: 'id',
    });

    await drive.permissions.create({
      auth: authClient,
      fileId: file.data.id,
      requestBody: {
        type: 'anyone',
        role: 'reader',
      },
    });

    return `https://drive.google.com/uc?id=${file.data.id}&export=download`;
  } catch (error) {
    console.error('Error uploading to Google Drive:', error);
    throw error;
  }
};
