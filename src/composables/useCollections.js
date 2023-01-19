import { db } from "@/firebase/config";

let useCollections =(collection)=>{
       let addDoc=async (doc)=>{
       try {
        await db.collection(collection).add(doc);
       } catch (error) {
        console.log(error.message);
       }
       }
       return {addDoc};
};
export default useCollections;