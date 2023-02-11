import { Divider, Text } from "@chakra-ui/react";
import React from "react";

function UsageRules() {
  return (
    <div className="usage-wrapper">
      <div className="usage-header">
        <Text fontSize={"3xl"} fontWeight="bold">
          Pravila privatnosti
        </Text>
        <Text fontSize={"xl"}>
          Ova pravila o privatnosti (Pravila privatnosti) uspostavljaju načine
          na koje PC Expert može da prikuplja i obrađuju Vaše podatke o
          ličnosti.
        </Text>
        {/* <Divider borderColor={"#f89a20"} /> */}
      </div>
      <div className="usage-body">
        <div className="single-usage-paragraph">
          <Text fontSize={"xl"} fontWeight="bold" color={"#0c0c0c"}>
            1. Uvod
          </Text>
          <Text fontSize={"xl"} color={"#0c0c0c"}>
            U tekstu ovih Pravila o privatnosti:
          </Text>
          <ul>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                ‘mi‘, ‘nas‘, ‘naš/a/e‘ označava onaj deo Grupacije sa kojim ste
                uspostavili odnos. Na primjer, dio sa kojim imate poslovni odnos
                ili koji organizuje događaj u kojem učestvujete ili upravlja
                internet stranicom koju koristite. Mi ćemo jasno navesti koji
                dio je u pitanju
              </Text>
            </li>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                ‘stranica/internet stranica‘ podrazumijeva internet stranicu
                koju posjećujete ili sa kojom ste povezani
              </Text>
            </li>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                ‘Vi‘ i ‘Vaš/Vaša/Vaše‘ označava Vas, osobu koja ulazi u
                interakciju sa nama, posluje sa nama, prijavljuje se za naše
                događaje ili usluge ili posjećuje našu stranicu. Time što
                posjećujete neku od naših interet stranica, prijavljujete se za
                neki od naših događaja, sarađujete sa nama, prijavljujete se za
                naše usluge ili na drugi način stupate u interakciju sa nama,
                možemo da prikupimo ili obradimo Vaše podatke o ličnosti. Mi smo
                vrlo posvećeni tome da štitimo i sačuvamo u tajnosti bilo kakve
                informacije koje su na taj način prikupljene, kao i tome da se
                uvijek pridržavamo važećih zakona.
              </Text>
            </li>
          </ul>
        </div>
        <div className="single-usage-paragraph">
          <Text fontSize={"xl"} fontWeight="bold" color={"#0c0c0c"}>
            2. Naši kontakti:
          </Text>

          <ul>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Adresa: Mladena Stojanovića 44, 78240 Čelinac
              </Text>
            </li>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                E-pošta: info@pcexpert.ba & prodaja@pcexpert.ba &
                reklamacije@pcexpert.ba
              </Text>
            </li>
          </ul>
        </div>
        <div className="single-usage-paragraph">
          <Text fontSize={"xl"} fontWeight="bold" color={"#0c0c0c"}>
            3. Podaci koje možemo da prikupljamo
          </Text>
          <ul>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Možemo da prikupljamo i obrađujemo Vaše podatke o ličnosti koje
                ste nam dali, one koje smo prikupili od trećih lica sa kojima
                blisko sarađujemo ili iz javno dostupnih izvora.
              </Text>
            </li>
          </ul>
        </div>
        <div className="single-usage-paragraph">
          <Text fontSize={"xl"} fontWeight="bold" color={"#0c0c0c"}>
            4. Ciljevi obrade
          </Text>
          <Text fontSize={"xl"} color={"#0c0c0c"}>
            Prikupljamo i obrađujemo Vaše podatke o ličnosti za sljedeće svrhe:
          </Text>
          <ul>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Da bismo Vam pružili informacije ili usluge koje ste tražili od
                nas. Ti podaci mogu podrazumijevati Vaše ime, adresu, e-adresu,
                broj telefona i druge relevantne informacije
              </Text>
            </li>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Da bismo bili u kontaktu sa Vama kao našim poslovnim partnerima
                i da biste bili u toku sa našim poslovnim aktivnostima i
                događajima. Ove informacije mogu da uključuju Vaše ime, adresu,
                e-adresu, broj telefona, funkciju, ime kompanije i druge
                relevantne informacije
              </Text>
            </li>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Da bismo ispunili svoje ugovorne obaveze prema Vama. Ti podaci
                mogu da uključuju Vaše ime, adresu, e-adresu, broj telefona,
                funkciju, mjesto rada, ime kompanije, vrstu saradnje sa nama
              </Text>
            </li>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Da bismo poboljšavali naše internet stranice. Te informacije
                mogu da uključuju Vašu IP adresu, geografsku lokaciju,
                informacije o Vašem uređaju, tip pretraživača, izvor sa kog ste
                pristupili stranici, trajanje posjete, operativni sistem, broj
                pregleda stranica, koje stranice ste pregledali i slične
                infomacije. Za više informacije o kolačićima, molimo pogledajte
                član 11 u nastavku
              </Text>
            </li>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Da bismo ispunili ili da bismo se pridržavali zakonskih obaveza
                ili uslova
              </Text>
            </li>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Da bismo Vam slali promotivne poruke koje se odnose na naše
                aktivnosti, uključujući i pozivnice za druge događaje. Te
                informacije mogu da uključuju Vaše ime, adresu, e-adresu, broj
                telefona, funkciju, ime kompanije i druge relevantne informacije
              </Text>
            </li>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Za regrutovanje novih zaposlenih. Ove informacije mogu da
                uključuju Vaše ime, adresu, e-adresu, broj telefona, datum
                rođenja, informacije o Vašem školovanju i radnom iskustvu, CV,
                fotografiju, i druge relevantne informacije
              </Text>
            </li>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Da bismo uspješno i efikasno organizovali naše događaje,
                uključujući i promotivne aktivnosti i objave audio, video i
                fotografske dokumentacije sa događaja. Ove informacije mogu da
                uključuju Vaše ime, funkciju, ime firme, e-adresu, broj
                telefona, kratku biografiju sa slikom (za govornike/izvođače) i
                audio, video i fotografsku dokumentaciju sa događaja.
              </Text>
            </li>
          </ul>
        </div>
        <div className="single-usage-paragraph">
          <Text fontSize={"xl"} fontWeight="bold" color={"#0c0c0c"}>
            5. Pravni osnov obrade podataka o ličnosti
          </Text>
          <Text fontSize={"xl"} color={"#0c0c0c"}>
            Obrađujemo Vaše podatke o ličnosti po sljedećim pravnim osnovima:
          </Text>
          <ul>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Izvršenje ugovora zaključenog sa Vama, u skladu sa članom
                6(1)(b) Opće uredbe o zaštiti podataka o ličnosti (GDPR), na
                primjer kada ste u poslovnom odnosu sa nama ili kad ste se
                prijavili da učestvujete ili da izlažete na nekom događaju; naš
                legitimni interes u skladu sa članom 6(1)(f) GDPR, na primjer
                naša želja da poboljšamo internet stranicu; da vas obavještavamo
                o našim poslovnim aktivnostima i događajima; Vaša saglasnost u
                skladu sa članom 6(1)(a) GDPR, na primjer kad prihvatite
                korišćenje kolačića na internet stranici; ispunjenje zakonske
                obaveze kojoj podležemo u skladu sa članom 6(1)(c) GDPR.
              </Text>
            </li>
          </ul>
        </div>
        <div className="single-usage-paragraph">
          <Text fontSize={"xl"} fontWeight="bold" color={"#0c0c0c"}>
            6. Otkrivanje Vaših podataka o ličnosti
          </Text>
          <Text fontSize={"lg"} color={"#0c0c0c"}>
            Možemo da otkrijemo Vaše podatke o ličnosti:
          </Text>
          <ul>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Našim povezanim frimama
              </Text>
            </li>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Obrađivačima podataka, koji će podatke o ličnosti da obrađuju u
                naše ime u skladu sa našim pisanim instrukcijama i u gore
                navedene svrhe
              </Text>
            </li>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Drugim korisnicima, ukoliko smo obavezni da tako postupimo po
                nalogu suda ili nalogu koji je izdao drugi organ vlasti, ili smo
                obavezani važećim zakonom.
              </Text>
            </li>
          </ul>
        </div>
        <div className="single-usage-paragraph">
          <Text fontSize={"xl"} fontWeight="bold" color={"#0c0c0c"}>
            7. Vrijeme čuvanja
          </Text>
          <ul>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Čuvamo Vaše podatke o ličnosti samo onoliko koliko je osnovano
                potrebno da ispunimo svrhe za koje smo ih prikupili ili dobili,
                ili da bismo ispunili na to primjenjive zakonske uslove. Kad je
                pravni osnov za obradu vaših podataka o ličnosti Vaš pristanak,
                čuvamo ih dok ne povučete pristanak.
              </Text>
            </li>
          </ul>
        </div>
        <div className="single-usage-paragraph">
          <Text fontSize={"xl"} fontWeight="bold" color={"#0c0c0c"}>
            8. Zaštita i obezbjeđenje
          </Text>
          <ul>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Preduzimamo mjere predostrožnosti da zaštitimo Vaše podatke o
                ličnosti od gubljenja, zloupotrebe i neovlaštenog pristupa,
                otkrivanja, izmjene i uništenja. Preduzeli smo odgovarajuće
                tehničke i organizacione mjere da zaštitimo informacione sisteme
                na kojima čuvamo Vaše podatke o ličnosti, i zahtjevamo od naših
                obrađivača podataka da i oni štite Vaše podatke o ličnosti, po
                ugovornoj osnovi.
              </Text>
            </li>
          </ul>
        </div>
        <div className="single-usage-paragraph">
          <Text fontSize={"xl"} fontWeight="bold" color={"#0c0c0c"}>
            9. Vaša prava
          </Text>
          <ul>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Osim izvijesnih izuzetaka i ograničenja predviđenih važećim
                propisima, imate pravo da zahtjevate pristup Vašim podacima o
                ličnosti, da Vaši podaci budu ispravljeni, obrisani ili da
                ograničite gore navedenu obradu, kao i da uložite prigovor na
                obradu i na prijenos podataka. Također imate pravo da ne budete
                predmet odluke koja je bazirana isključivo na automatskoj
                obradi, ukljujući profilisanje, što proizvodi pravne posljedice
                ili utiče na Vas značajno. Kada Vaše podatke obrađujemo na
                osnovu Vašeg pristanka, imate pravo da povučete saglasnost u
                svako doba, bez uticaja na pravni osnov obrade čije je osnov
                pristanak prije povlačenja. Ako želite da iskoristite bilo koje
                od gore navedenih prava ili imate bilo kakvo pitanje o tome,
                molimo da nas kontaktirate slanjem poruke na adresu:
                security@pcexpert.ba. Također imate pravo da uložite žalbu
                organu nadležnom za nadzor.
              </Text>
            </li>
          </ul>
        </div>
        <div className="single-usage-paragraph">
          <Text fontSize={"xl"} fontWeight="bold" color={"#0c0c0c"}>
            10. Kolačići
          </Text>
          <ul>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Koristimo kolačiće da bismo obezbijedili da od naše web stranice
                dobijete maksimum. Pomoću kolačića možemo takođe da prikupljamo
                i informacije o tome kako koristite našu internet stranicu i o
                Vašem ponašanju na internetu. Ta vrsta prikupljenih informacija
                može da uključuje Vaše prethodno odredište, vrstu pretraživača,
                operativni sistem, korišćeni pretraživač, kao i trajanje vaše
                posjete internet stranici. Za više informacija o tome kako
                koristimo kolačiće, molimo Vas da pogledaje naša Pravila o
                kolačićima objavljena pri dnu internet stranice.
              </Text>
            </li>
          </ul>
        </div>
        <div className="single-usage-paragraph">
          <Text fontSize={"xl"} fontWeight="bold" color={"#0c0c0c"}>
            11. Linkovi ka drugim internet stranicama
          </Text>
          <ul>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Internet stranica može da sadrži linkove ka internet stranicama
                trećih lica. Mi ih ne kontrolišemo, nismo ni u kakvoj vezi sa
                njima, ne odobravamo takve internet stranice i ne možemo biti
                odgovorni za bilo kakvu štetu koja proiziđe iz sadržaja tih
                internet stranica. Linkove ka drugim internet stranicama
                postavljamo samo kao pogodnost i preporučujemo da na ovim
                internet stranicama trećih lica pročitate Uslove korišćenja i
                Pravila o privatnosti.
              </Text>
            </li>
          </ul>
        </div>
        <div className="single-usage-paragraph">
          <Text fontSize={"xl"} fontWeight="bold" color={"#0c0c0c"}>
            12. Izmjene ovih Pravila o privatnosti
          </Text>
          <ul>
            <li>
              <Text fontSize={"lg"} color={"#0c0c0c"}>
                Ova Pravila o privatnosti možemo da ažuriramo s vremena na
                vrijeme. Ažurirana Pravila o privatnosti postavljaćemo na
                odgovarajuće internet stranice PC Expert ili ćemo Vam ih na
                zahtjev slati.
              </Text>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UsageRules;
