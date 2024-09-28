// import { ref, get, query, equalTo } from "firebase/database";
// import { db } from "../config/firebase";
// import { createId } from "@paralleldrive/cuid2";

const userExistsQuery = async (email) => {
  // //   const userId = createId();
  // const usersRef = ref(db, "users/");
  // const usersList = await get(usersRef);
  // const users = usersList?.val();

  // const arr = [];

  // if (users) {
  //   Object?.keys(users)?.forEach(user => {
  //     arr.push({ ...users[user] });
  //   });

  //   const isDuplicate = arr?.find(item => item.email === email);

  //   return isDuplicate ? isDuplicate : false;
  // }

  console.log("odje jel postoji juzer kveri kveri");
};

export { userExistsQuery };
