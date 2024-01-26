import React, {useState} from 'react'
import { db } from '../../firebase';
import { doc, addDoc, updateDoc, deleteDoc, getDoc, collection, documentId } from 'firebase/firestore';




function Foo() {
    return (
      <>
         <div><form className="flex flex-col pt-[30px] pr-[50px] pb-[50px] pl-[45px] bg-[#000000] relative md1000:w-[65%] md1000:flex md1000:flex-col md1000:mx-auto md1000:mt-14 min800:w-[90%] min620:w-full" 
    id ="collo"
   >
    
     <h3 className="text-[28px] font-bold mb-14 text-[#ebca34]">Leave Us Your Info</h3>
     <span className="bg-[#ebca34] w-[50px] h-[4px] absolute top-[77px]"></span>
     <input
       className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
       placeholder="Full Name *"
       type="text"
       id="name1"
       
      
     ></input>
     <input
       className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
       placeholder="Email Address *"
       type="email"
       id="emailid"
       
    
     ></input>
     <select 
        className="w-full py-[12px] px-[20px] h-[51px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
     id="wad">
       <option>Select Class</option>
       <option>Body Building</option>
       <option>Functional Training</option>
       <option>Weight Loss</option>
       <option>Strengh Training</option>
       <option>Personal Training </option>
       <option>Workout</option>
       <option>Personalized Diet Plans </option>
       <option>Group Hit Classes</option>
       <option>Cycling</option>
       <option>other</option>
  
     </select>
     <textarea
       placeholder="Comment"
       className="w-full py-[12px] px-[20px] h-[140px] text-[14px] border border-solid border-[#e4e4e4] outline-none mb-8"
       id="msgCo"
       
     
     ></textarea>
     <button
       type="submit"
       className="text-white bg-[#ebca34] w-fit py-[15px] px-[30px] font-bold text-[14px] uppercase self-center mt-6"
       id
     >
       submit now
     </button>

   
</form></div>
</>
    );
  }
  
  export default Foo;
