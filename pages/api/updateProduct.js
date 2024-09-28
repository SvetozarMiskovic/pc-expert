import { verify } from "jsonwebtoken";
import { db } from "../../config/prismaClient";
import { updateArticleQuery } from "../../queries/updateArticleQuery";

export default async function handler(req, res) {
  const id = req.body?.id;
  const category = req.body?.category;
  const role = req.body?.role;
  const payload = req.body?.data;
  const token = req.cookies?.authToken;
  const toDelete = req.body?.toDelete;
  console.log(id, category, role, payload, toDelete);

  if (toDelete?.length !== 0) {
    // const r = toDelete?.forEach(async (imgID) => {
    //   const imageRef = ref(storage, `/${category}/${id}/${imgID}`);

    //   return await deleteObject(imageRef)
    //     .then((result) => {
    //       return result;
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // });
    console.log("Obrisato", r);
  }
  await updateArticleQuery(id, category, payload);
  res.send({ msg: `Uspješno uređen artikl! ID - ${id}` });
  // const translateCategory = cat => {
  //   switch (cat) {
  //     case "laptop":
  //       return "laptopi";
  //     case "monitor":
  //       return "monitori";
  //     case "tv":
  //       return "televizori";
  //     case "phone":
  //       return "telefoni";
  //     case "component":
  //       return "komponente";
  //     case "preifery":
  //       return "periferija";
  //     case "computer":
  //       return "racunari";
  //     case "mining":
  //       return "mining";
  //   }
  // };

  // if (jwt) {
  //   const isValid = verify(jwt, process.env.JWT_SECRET);
  //   const db_name = translateCategory(category);

  //   if (isValid) {
  //     const product = await db[db_name].update({
  //       where: {
  //         id: id,
  //       },
  //       data: {
  //         ...payload,
  //       },
  //     });

  //     res.json({
  //       msg: `Uspjesno uredjen artikl - ${id}`,
  //       product: product,
  //     });
  //   }
  // }
}
