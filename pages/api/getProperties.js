import { getAllPropertiesQuery } from "../../queries/getAllPropertiesQuery";

export default async function handler(req, res) {
  // const d = await getAllProducts();
  const val = await getAllPropertiesQuery();
  // console.log("isto produkti samo iz api", val);
  //   console.log("iz api", val, req.body);
  // console.log("Products iz API", val);
  res.send({ data: val });
}
