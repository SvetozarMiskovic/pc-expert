import React from "react";
import { verify } from "jsonwebtoken";
import NewPasswordComponent from "../../components/LoginComponents/NewPasswordComponent";

function Token({ res }) {
  return (
    <div className="new-pw-page">
      <NewPasswordComponent data={res} />
    </div>
  );
}

export default Token;

export async function getServerSideProps(ctx) {
  const res = verify(ctx?.params?.token, process.env.JWT_SECRET, err => {
    if (err) {
      return {
        err: "Vremenski period od 30 minuta je istekao! Vratite se, unesite email i pritisnite 'Resetuj lozinku'",
      };
    }

    return "Token verifikovan";
  });

  return {
    props: { res },
  };
}
