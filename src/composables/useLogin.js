import { ref } from "vue";
import { auth } from "@/firebase/config";
let error = ref("");
let loginAccount = async(email,password)=>{
        try {
                let res = await auth.signInWithEmailAndPassword(
                  email,
                  password
                );
                if (!res) {
                  throw new Error("cant't login account.");
                }
                return res;
              } catch (err) {
                error.value = err.message;
              }
}
let useLogin = ()=>{
        return {error,loginAccount};
}
export default useLogin;