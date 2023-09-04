
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyASYCFHWdI_ujQFiyXehYBWAw_3jIzVvo0",
    authDomain: "blog-fd947.firebaseapp.com",
    projectId: "blog-fd947",
    storageBucket: "blog-fd947.appspot.com",
    messagingSenderId: "399371520588",
    appId: "1:399371520588:web:7c3c881e9d86b21ca742e9",
    measurementId: "G-P75X22S3DT"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };