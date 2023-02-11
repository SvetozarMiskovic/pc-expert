import { Divider, Text } from "@chakra-ui/react";
import React from "react";

function Instruction() {
  return (
    <div className="instruction-wrapper">
      <div className="instruction-header">
        <Text fontSize={"3xl"} fontWeight="bold" color={"#0c0c0c"}>
          Kako naručiti?
        </Text>
        {/* <Divider borderColor={"#f89a20"} /> */}
        <Text fontSize={"xl"} color={"#0c0c0c"}>
          Korisnici našeg web shop-a pcexpert.ba, mogu na vrlo jednostavan način
          izvršiti narudžbu željenih proizvoda u slijedećih nekoliko koraka:
        </Text>
      </div>
      <div className="instruction-body">
        <div className="single-instruction-paragraph">
          <Text fontSize={"xl"} fontWeight="bold" color={"#0c0c0c"}>
            1. Odabir proizvoda
          </Text>
          <ul>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Na našem web shop-u pronađite željeni proizvod/e.
              </Text>
            </li>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Odabrani proizvod ili više njih dodajte u korpu klikom na dugme
                „Dodaj u korpu“, a istu ćete naći ispod svakog proizvoda.
              </Text>
            </li>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Klikom na korpu (u gornjem desnom uglu) imate mogućnost
                promijeniti količinu. Ukoliko niste zadovoljni Vašim izborom,
                istu možete isprazniti klikom na „X“. U slučaju da želite dodati
                još artikala u korpu, samo nastavite kupovinu. Navedeni proces
                ponavljate sve dok niste završili sa dodavanjem posljednjeg
                željenog artikla u Vašu korpu.
              </Text>
            </li>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Ukoliko ste završili sa procesom dodavanja proizvoda u Vašu
                korpu, kliknite na dugme „Nastavi s plaćanjem“. Slijedeći korak
                je da potvrdite adresu za isporuku. Ukoliko je adresa za
                isporuku identična onoj u Vašim registracijskim podacima,
                kliknite na ikonu „Dovrši narudžbu“, a ako je to neka druga
                adresa označite kvadratić „Isporuka na drugu adresu“ i unesite
                potrebne podatke.
              </Text>
            </li>
          </ul>
        </div>
        <div className="single-instruction-paragraph">
          <Text fontSize={"xl"} fontWeight="bold">
            2. Registracija/Prijava
          </Text>
          <ul>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Ukoliko nemate svoj nalog na našem web shop-u potrebno je da
                unesete osnovne podatke neophodne za dostavu: Ime i prezime,
                adresu, broj telefona i email. Ukoliko ste već kupovali na našem
                webshopu i imate nalog, dovoljno je da se prijavite pomoći Vaše
                e-mail adrese i lozinke.
              </Text>
            </li>
          </ul>
        </div>
        <div className="single-instruction-paragraph">
          <Text fontSize={"xl"} fontWeight="bold">
            3. Potvrda narudžbe
          </Text>
          <ul>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Potvrdite narudžbu klikom na dugme „Dovrši narudžbu“ i time ste
                završili sa procesom naručivanja na našem web shop-u. Na Vašu
                e-mail adresu stići će Vam potvrda narudžbe, zajedno sa svim
                potrebnim podacima i brojem iste.
              </Text>
            </li>
          </ul>
        </div>

        <Text fontSize={"xl"} color={"#0c0c0c"}>
          Iskreno se nadamo da su Vam ove instrukcije pomogle da uspješno
          izvršite Vašu narudžbu. Ukoliko imate nekih nejasnoća i potrebna Vam
          je pomoć pri naručivanju, molimo Vas budite slobodni da nas
          kontaktirate i naručite putem telefona: 066/777-735 ili email-a:
          info@pcexpert.ba ili prodaja@pcexpert.ba. Naše ljubazno osoblje stoji
          Vam na raspolaganju.
        </Text>
      </div>
    </div>
  );
}

export default Instruction;
