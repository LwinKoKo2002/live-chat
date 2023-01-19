import { auth } from "@/firebase/config";
let signOut = async()=>{
        try {
                await auth.signOut();
                console.log("successfully logout");
              } catch (error) {
                console.log(error.message);
              }
}
let useSignOut = ()=>{
        return {signOut};
}
export default useSignOut;