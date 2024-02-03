import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { database } from "../../firebase";
import Foo from "./form";

export default function app(){

    const[data, setData] = useState({});
    const collectionRef = collection(database, 'cello');

    const handleSubmit = () => {
        console.log(123);
        addDoc(collectionRef, 
            {
                name : data.name,  
                email: data.email,
                phone: data.phone, 
                message: data.message 
    })
         .then((doc) =>{
             console.log("Document written with ID: ", doc.id);
             alert('Your Message has been sent!')
         })
         .catch((error) => {
             console.error("Error adding document: ", error);
         });
     };
     


    
     
    
};