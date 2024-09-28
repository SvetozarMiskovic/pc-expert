-- CreateTable
CREATE TABLE "komponente" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cijena" DECIMAL,
    "garancija" TEXT,
    "vrsta" TEXT,
    "detalji" TEXT,
    "proizvodjac" TEXT,
    "naslov" TEXT,
    "akcija" DECIMAL
);

-- CreateTable
CREATE TABLE "korisnici" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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

-- CreateTable
CREATE TABLE "narudzbe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "datum_narudzbe" TEXT,
    "datum_isporuke" TEXT,
    "poslano" TEXT,
    "ukupna_cijena" DECIMAL,
    "artikli" TEXT,
    "id_korisnika" INTEGER,
    "ime_i_prezime" TEXT,
    "email" TEXT,
    "broj_telefona" TEXT,
    "ulica" TEXT,
    "napomena" TEXT,
    "postanski_broj" TEXT,
    "adresa" TEXT,
    "adresa_2" TEXT,
    "grad" TEXT
);

-- CreateTable
CREATE TABLE "laptopi" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "proizvodjac" TEXT,
    "model" TEXT,
    "procesor" TEXT,
    "ram" TEXT,
    "garancija" TEXT,
    "hard_disk" TEXT,
    "cijena" DECIMAL,
    "graficka_kartica" TEXT,
    "tip_procesora" TEXT,
    "os" TEXT,
    "boja" TEXT,
    "tip_hard_diska" TEXT,
    "tip_ram" TEXT,
    "velicina_ekrana" TEXT,
    "detalji" TEXT,
    "brzina_procesora" TEXT,
    "bt" TEXT,
    "webcam" TEXT,
    "mikrofon" TEXT,
    "usb_portovi" TEXT,
    "model_procesora" TEXT,
    "naslov" TEXT,
    "akcija" DECIMAL
);

-- CreateTable
CREATE TABLE "mining" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cijena" DECIMAL,
    "garancija" TEXT,
    "detalji" TEXT,
    "naslov" TEXT,
    "akcija" DECIMAL
);

-- CreateTable
CREATE TABLE "monitori" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "velicina_ekrana" TEXT,
    "rezolucija" TEXT,
    "proizvodjac" TEXT,
    "model" TEXT,
    "vga" TEXT,
    "hdmi" TEXT,
    "dvi" TEXT,
    "display" TEXT,
    "boja" TEXT,
    "tip_ekrana" TEXT,
    "refresh_rate" TEXT,
    "garancija" TEXT,
    "cijena" DECIMAL,
    "detalji" TEXT,
    "naslov" TEXT,
    "akcija" DECIMAL
);

-- CreateTable
CREATE TABLE "periferija" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "vrsta" TEXT,
    "model" TEXT,
    "proizvodjac" TEXT,
    "detalji" TEXT,
    "cijena" DECIMAL,
    "garancija" TEXT,
    "naslov" TEXT,
    "akcija" DECIMAL
);

-- CreateTable
CREATE TABLE "racunari" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "proizvodjac" TEXT,
    "cijena" DECIMAL,
    "garancija" TEXT,
    "detalji" TEXT,
    "procesor" TEXT,
    "tip_procesora" TEXT,
    "brzina_procesora" TEXT,
    "maticna_ploca" TEXT,
    "graficka_kartica" TEXT,
    "ram" TEXT,
    "tip_ram" TEXT,
    "tip_hard_diska" TEXT,
    "hard_disk" TEXT,
    "os" TEXT,
    "memorija_graficke" TEXT,
    "model_procesora" TEXT,
    "model_graficke" TEXT,
    "naslov" TEXT,
    "akcija" DECIMAL
);

-- CreateTable
CREATE TABLE "telefoni" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "proizvodjac" TEXT,
    "cijena" DECIMAL,
    "os" TEXT,
    "velicina_ekrana" TEXT,
    "broj_sim" TEXT,
    "procesor" TEXT,
    "broj_jezgara" TEXT,
    "baterija" TEXT,
    "brzina_procesora" TEXT,
    "model_procesora" TEXT,
    "ram" TEXT,
    "interna_memorija" TEXT,
    "rezolucija_glavne_kamere" TEXT,
    "rezolucija_prednje_kamere" TEXT,
    "bt" TEXT,
    "garancija" TEXT,
    "boja" TEXT,
    "detalji" TEXT,
    "naslov" TEXT,
    "akcija" DECIMAL
);

-- CreateTable
CREATE TABLE "televizori" (
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

-- CreateIndex
CREATE UNIQUE INDEX "korisnici_email_key" ON "korisnici"("email");
