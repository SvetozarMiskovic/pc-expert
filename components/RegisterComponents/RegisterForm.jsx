import React from "react";
import Link from "next/link";
function RegisterForm() {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="register-component">
      <div className="register-header-component">
        <h3>Registrujte se</h3>
        <div className="register-header-content">
          <p>
            Registracijom i prijavom ostvarujete mogućnost da pratite svoju
            narudžbu i da imate uvid u svoje prethodne narudžbe i kupovine!
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Ime</label>
        <input autoComplete="off" type="text" id="name" />
        <label htmlFor="lastname">Prezime</label>
        <input autoComplete="off" type="text" id="lastname" />
        <label htmlFor="address">Adresa</label>
        <input autoComplete="off" type="text" id="address" />
        <label htmlFor="address">Broj telefona</label>
        <input autoComplete="off" type="number" id="number" />
        <label htmlFor="email">E-mail</label>
        <input
          autoComplete="off"
          type="email"
          id="email"
          placeholder="primjer@email.com"
        />
        <label htmlFor="password">Lozinka</label>
        <input autoComplete="off" type="password" id="password" />

        <label htmlFor="confirm">Potvrdi lozinku</label>
        <input autoComplete="off" type="password" id="confirm" />

        <input type="submit" value="Registruj se" />
      </form>

      <div className="login-section">
        <div className="login-content">
          <p>
            Već imate nalog?{" "}
            <Link href="/login" className="register-link">
              Prijavite se!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterForm;
