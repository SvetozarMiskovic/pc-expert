import React from "react";
import { Divider, Text } from "@chakra-ui/react";
import Image from "next/image";

function OurStory() {
  return (
    <div className="our-story-component">
      <div className="our-story-header">
        <Text fontSize={"4xl"} color={"#0c0c0c"} margin={"2rem 0"}>
          Naša priča
        </Text>
      </div>
      <div className="our-story-body">
        <Text fontSize={"2xl"} lineHeight="1.2" padding={"0.4rem 0"}>
          PC Expert je novoosnovana firma čije je glavna djelatnost maloprodaja
          računara i računalne periferije, sa radom počinjemo početkom 2020
          godine u moglo bi se reći jako izazovnim kako lokalnim tako i
          globalnim uslovima.
        </Text>
        <Text fontSize={"2xl"} lineHeight="1.2" padding={"0.4rem 0"}>
          Međutim, to nas nije spriječilo da svoje ideje pretvorimo u dijela i
          tako danas udovoljimo svim zahtjevima naših cijenjenih kupaca.
        </Text>
        <Text fontSize={"2xl"} lineHeight="1.2" padding={"0.4rem 0"}>
          Iako ne sa tako velikim kapacitetima, PC Expert je firma koja se može
          pohvaliti sa najpovoljnijim maloprodajnim cijenama računarske opreme
          na teritoriji BiH.
        </Text>
        <Text fontSize={"2xl"} lineHeight="1.2" padding={"0.4rem 0"}>
          Veliku zahvalnost smo dužni uputiti našem partneru odnosno kompaniji
          Amazon uz pomoć koje smo u mogućnosti ponuditi širok spektar ponude
          računarske opreme i drugih proizvoda po najjeftinijim cijenama u BiH.
        </Text>
        <Text fontSize={"2xl"} lineHeight="1.2" padding={"0.4rem 0"}>
          Veoma smo ponosni što je jedna od najuticajnijih kompanija na svijetu,
          odnosno kompanija Amazon, ustupila svoje povjerenje upravo nama.
        </Text>
        <Text fontSize={"2xl"} lineHeight="1.2" padding={"0.4rem 0"}>
          Mi ukazano povjerenje pretvaramo u dijela tako što svakim danom
          udovoljavamo zahtjevima kupaca i na taj način otvaramo vrata novim
          izazovima.
        </Text>
        <Text fontSize={"2xl"} lineHeight="1.2" padding={"0.4rem 0"}>
          Radujemo se novim izazovima i obećavamo da ćemo Vaše ukazano
          povjerenje pretvoriti u osmjehe kada Vam dostavljač zakuca na vrata!
        </Text>
        <Text
          fontSize={"2xl"}
          lineHeight="1.2"
          fontWeight="bold"
          padding={"1.5rem 0"}
        >
          Hvala Vam što ste izabrali PC Expert!
        </Text>
        <Text fontSize={"2xl"} lineHeight="1.2" fontWeight="bold">
          S poštovanjem,
        </Text>
        <div className="our-story-logo-holder">
          <Image src="/static/T1.png" width={200} height={200} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default OurStory;
