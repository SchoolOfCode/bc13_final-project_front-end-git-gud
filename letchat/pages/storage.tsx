import Head from "next/head";
import { Inter } from "@next/font/google";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import { storage } from "../firebase/firebaseApp";
import {
  ref,
  uploadBytes,
  listAll,
  deleteObject,
  getDownloadURL,
} from "firebase/storage";

const inter = Inter({ subsets: ["latin"] });

export default function Storage() {
  const [file, setFile] = useState<File | null>(null);
  const [fileList, setFileList] = useState<any>([]);
  const { user } = useAuth();

  const uploadFile = () => {
    if (!file) return alert("No file selected");
    const fileRef = ref(storage, `documents/${user.uid}/${file.name}`);
    uploadBytes(fileRef, file).then((snapshot) => {
      alert("File uploaded successfully");
      getDownloadURL(snapshot.ref).then((url) => {
        setFileList((prevState: any) => [
          ...prevState,
          { name: snapshot.ref.name, fullPath: snapshot.ref.fullPath, url },
        ]);
      });
    });
  };

  useEffect(() => {
    listAll(ref(storage, `documents/${user.uid}`)).then((res) => {
      res.items.forEach((item) =>
        getDownloadURL(item).then((url) => {
          setFileList((prevState: any) => [
            ...prevState,
            { name: item.name, fullPath: item.fullPath, url },
          ]);
        })
      );
    });
  }, []);

  const deleteFile = (file: any) => {
    deleteObject(ref(storage, file.fullPath)).then(() => {
      alert("File deleted successfully");
      setFileList((prevState: any) =>
        prevState.filter((item: any) => item.fullPath !== file.fullPath)
      );
    });
  };

  return (
    <>
      <Head>
        <title>LetChat | Document Storage</title>
        <meta
          name="description"
          content="Streamlined communication between tenants and landlords."
        />
        <meta name="author" content="Git Gud" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Document Storage</h1>
        <p>
          This is where you can store your documents. You can upload, download,
          and delete documents.
        </p>
        <div>
          <input
            type="file"
            onChange={(e: any) => setFile(e.target.files[0])}
          />
          <button onClick={uploadFile}>Upload</button>
        </div>
        <ul>
          {fileList.map((file: any) => (
            <li key={file.name}>
              <a href={file.url} target="_blank" rel="noreferrer">
                {file.name}
              </a>
              <br />
              <button onClick={() => deleteFile(file)}>Delete</button>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
