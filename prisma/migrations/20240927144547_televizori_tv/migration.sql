/*
  Warnings:

  - You are about to drop the `televizori` table. If the table is not empty, all the data it contains will be lost.
  - The primary key for the `korisnici` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_korisnika` on the `narudzbe` table. All the data in the column will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "televizori";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "tv" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cijena" DECIMAL,
    "garancija" TEXT,
    "model" TEXT,
    "proizvodjac" TEXT,
    "velicina_ekrana" TEXT,
    "tip_ekrana" TEXT,
    "rezolucija" TEXT,
    "smart" TEXT,
    "lan" TEXT,
    "wifi" TEXT,
    "hdmi" TEXT,
    "vga" TEXT,
    "scart" TEXT,
    "detalji" TEXT,
    "naslov" TEXT,
    "akcija" DECIMAL
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_korisnici" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "ime_i_prezime" TEXT,
    "email" TEXT,
    "broj_telefona" INTEGER,
    "postanski_broj" INTEGER,
    "adresa" TEXT,
    "ulica" TEXT,
    "lozinka" TEXT,
    "grad" TEXT,
    "role" TEXT
);
INSERT INTO "new_korisnici" ("adresa", "broj_telefona", "email", "grad", "id", "ime_i_prezime", "lozinka", "postanski_broj", "role", "ulica") SELECT "adresa", "broj_telefona", "email", "grad", "id", "ime_i_prezime", "lozinka", "postanski_broj", "role", "ulica" FROM "korisnici";
DROP TABLE "korisnici";
ALTER TABLE "new_korisnici" RENAME TO "korisnici";
CREATE UNIQUE INDEX "korisnici_email_key" ON "korisnici"("email");
CREATE TABLE "new_narudzbe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "datum_narudzbe" TEXT,
    "datum_isporuke" TEXT,
    "poslano" TEXT,
    "ukupna_cijena" DECIMAL,
    "artikli" TEXT,
    "ime_i_prezime" TEXT,
    "email" TEXT,
    "broj_telefona" TEXT,
    "ulica" TEXT,
    "napomena" TEXT,
    "postanski_broj" TEXT,
    "adresa" TEXT,
    "adresa_2" TEXT,
    "grad" TEXT,
    CONSTRAINT "narudzbe_id_fkey" FOREIGN KEY ("id") REFERENCES "korisnici" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_narudzbe" ("adresa", "adresa_2", "artikli", "broj_telefona", "datum_isporuke", "datum_narudzbe", "email", "grad", "id", "ime_i_prezime", "napomena", "poslano", "postanski_broj", "ukupna_cijena", "ulica") SELECT "adresa", "adresa_2", "artikli", "broj_telefona", "datum_isporuke", "datum_narudzbe", "email", "grad", "id", "ime_i_prezime", "napomena", "poslano", "postanski_broj", "ukupna_cijena", "ulica" FROM "narudzbe";
DROP TABLE "narudzbe";
ALTER TABLE "new_narudzbe" RENAME TO "narudzbe";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
