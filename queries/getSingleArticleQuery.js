import { get, onValue, ref } from "firebase/database";
import { db } from "../config/firebase";

const getSingleArticleQuery = async (category, id) => {
  if (category === "all") {
    console.log(category, id);
    const articlesRef = ref(db, "products");

    const snap = await get(articlesRef);
    const articles = snap.val();
    const arrays = Object?.values(articles);
    const all = arrays.flat();

    const article = all.find(i => i.id === id);
    // console.log(article);

    return article;
  } else {
    const articleRef = ref(db, "products/" + category);

    console.log(`cat: ${category}, id: ${id}`);
    const snap = await get(articleRef);
    const articles = snap.val();

    const article = articles.find(i => i.id === id);
    console.log("article iz query", article);
    // if (!user) {
    //   const user2 = await get(userRef).then(snapshot => {
    //     const value = snapshot.val();
    //     return value;
    //   });

    //   return user2;
    // }

    return article;
  }
};

export { getSingleArticleQuery };
