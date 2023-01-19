import { auth } from "@/firebase/config";
import { ref } from "vue";

let error = ref("");
let createAccount = async(email,password,displayName)=>{
        try {
                let res = await auth.createUserWithEmailAndPassword(
                  email,
                  password
                );
                if (!res) {
                  throw new Error("can't create account.");
                }
                res.user.updateProfile({ displayName });
                return res;
              } catch (err) {
                error.value = err.message;
              }
}
let useSignUp = ()=>{
        return {error,createAccount};
}
export default useSignUp;