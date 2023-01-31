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
import Container from "../components/Container";

const inter = Inter({ subsets: ["latin"] });

export default function Storage() {
  const [file, setFile] = useState<File | null>(null);
  const [fileList, setFileList] = useState<any>([]);
  const { user } = useAuth();

  const fileListRef = ref(storage, `documents/${user.uid}`);

  console.log(fileListRef);

  const uploadFile = () => {
    if (!file) return alert("No file selected");
    const fileRef = ref(storage, `documents/${user.uid}/${file.name}`);
    uploadBytes(fileRef, file).then((snapshot) => {
      alert("File uploaded successfully");
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(snapshot);
        setFileList((prevState: any) => [
          ...prevState,
          { name: snapshot.ref.name, fullPath: snapshot.ref.fullPath, url },
        ]);
      });
    });
  };

  useEffect(() => {
    listAll(fileListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setFileList((prevState: any) => [
            ...prevState,
            { name: item.name, fullPath: item.fullPath, url },
          ]);
        });
      });
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
      <Container logo={true}>
        <div className="flex flex-col items-center justify-center uppercase tracking-widest">
          <h1>Document Storage</h1>
          <p>
            This is where you can store your documents. You can upload,
            download, and delete documents.
          </p>
          <div className="py-8">
            <input
              type="file"
              onChange={(e: any) => setFile(e.target.files[0])}
            />
            <button
              className="my-2 h-10 w-full rounded-full border border-black bg-light-hot py-2 px-4 font-bold text-white shadow-xl shadow-gray-300 hover:border-transparent hover:bg-light-hot hover:opacity-60"
              onClick={uploadFile}
            >
              Upload
            </button>
          </div>
        </div>
        <div>
          <ul className="mt-[-10rem] flex flex-row justify-between">
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
        </div>
      </Container>
    </>
  );
}
