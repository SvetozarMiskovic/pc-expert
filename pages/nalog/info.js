import { verify } from "jsonwebtoken";
import React from "react";
import AccountComponentInfo from "../../components/AccountComponents/AccountInfoComponent";
import AccountLayout from "../../components/AccountComponents/AccountLayout";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import { fetchUser } from "../../hooks/useUser";
// import { db } from "../../config/prismaClient";

function Account({ userObj }) {
  return (
    <div className="account-info-page">
      <AccountLayout>
        <AccountComponentInfo />
      </AccountLayout>
    </div>
  );
}

export default Account;

// export async function getServerSideProps(ctx) {
//   const queryClient = new QueryClient();
//   queryClient.prefetchQuery(["users"], fetchUser);
//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   };
// }
// export async function getServerSideProps(context) {
//   const token = context.req.cookies?.authToken;

//   if (token) {
//     const isGood = verify(token, process.env.JWT_SECRET);

//     const dbResult = await db.korisnici.findFirst({
//       where: {
//         id: isGood.sub,
//       },
//     });

//     const userObj = dbResult[0];
//     userObj ? delete userObj.lozinka : null;

//     return {
//       props: {
//         userObj,
//       },
//     };
//   } else {
//     return {
//       props: {
//         userObj: {},
//       },
//     };
//   }
// }
