import { get, onValue, ref } from "firebase/database";
import { db } from "../config/firebase";

const getSingleArticleQuery = async (category, id) => {
  if (category === "all") {
    console.log(category, id);
    const articlesRef = ref(db, "products");

    const snap = await get(articlesRef);
    const articles = snap.val();

    let articlesObject = {};
    Object.keys(articles).map(key => {
      articlesObject[key] = Object?.values(articles?.[key]);
    });

    const arrayOfArrays = Object?.values(articlesObject);
    const article = arrayOfArrays?.flat().find(i => i?.id === id);
    // console.log(article);

    return article;
  } else {
    const articleRef = ref(db, "products/" + category);

    // console.log(`cat: ${category}, id: ${id}`);
    const snap = await get(articleRef);
    const articles = snap.val();

    const array = Object?.values(articles);
    const article = array.find(i => i.id === id);

    return article;
  }
};

export { getSingleArticleQuery };
