
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  // Alternative 3
  apiKey: "AIzaSyA_zxVaZsbxJqZb7suQHO23v6JYqQq5LPc",
  authDomain: "demotest-38563.firebaseapp.com",
  projectId: "demotest-38563",
  storageBucket: "demotest-38563.appspot.com",
  messagingSenderId: "419431237215",
  appId: "1:419431237215:web:46adcdc94c1cba8a883dea"

  // Alternative 2
  // apiKey: "AIzaSyB4VtehDv0zOFsV2Je5vxBU5EdcmpOiBsA",
  // authDomain: "ask4helpdemo.firebaseapp.com",
  // projectId: "ask4helpdemo",
  // storageBucket: "ask4helpdemo.appspot.com",
  // messagingSenderId: "536948525723",
  // appId: "1:536948525723:web:eeff0df4f08d9d846a543e",
  // measurementId: "G-PHYPPBJ403"
  // Alternative 1
  // apiKey: "AIzaSyDp7bIoaicXRd9SnxtgEn0EtT41PG1D4vs",
  // authDomain: "ask4help-ca30d.firebaseapp.com",
  // projectId: "ask4help-ca30d",
  // storageBucket: "ask4help-ca30d.appspot.com",
  // messagingSenderId: "36356695492",
  // appId: "1:36356695492:web:a055484a486e1555773091",
  // measurementId: "G-07Y8FNPWXM"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const db = getFirestore(app);
export default app;
