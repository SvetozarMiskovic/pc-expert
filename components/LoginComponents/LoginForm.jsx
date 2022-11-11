import React from "react";
import Link from "next/link";

function LoginForm() {
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <div className="login-component">
      <div className="login-header-component">
        <h3>Prijavite se</h3>
        <div className="login-header-content">
          <p>
            Registracijom i prijavom ostvarujete mogućnost da pratite svoju
            narudžbu i da imate uvid u svoje prethodne narudžbe i kupovine!
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          autoComplete="off"
          type="email"
          id="email"
          placeholder="primjer@email.com"
        />
        <label htmlFor="password">Lozinka</label>
        <input autoComplete="off" type="password" id="password" />

        <input type="submit" value="Prijavi se" />
      </form>

      <div className="register-section">
        <div className="register-content">
          <p>
            Nemate nalog?{" "}
            <Link href="/register" className="register-link">
              Registrujte se!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
