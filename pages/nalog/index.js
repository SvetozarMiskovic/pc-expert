import { verify } from "jsonwebtoken";
import React from "react";
import AccountComponent from "../../components/AccountComponents/AccountComponent";
import { db } from "../../config/prismaClient";

function Account({ userObj }) {
  return (
    <div className="account-page">
      <AccountComponent userObj={userObj} />
    </div>
  );
}

export default Account;

export async function getServerSideProps(context) {
  const token = context.req.cookies?.authToken;

  if (token) {
    const isGood = verify(token, process.env.JWT_SECRET);

    const dbResult = await db.korisnici.findMany({
      where: {
        id: isGood.sub,
      },
    });

    const userObj = dbResult[0];
    delete userObj.lozinka;

    return {
      props: {
        userObj,
      },
    };
  }
  return {
    props: {
      userObj: {},
    },
  };
}
