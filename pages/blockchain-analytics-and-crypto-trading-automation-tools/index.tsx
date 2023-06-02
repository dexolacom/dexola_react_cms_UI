"use client";

import "../../src/app/globals.css";

import ContactButton from "../../components/ContactUs/ContactUs";
import HeaderSmall from "../../components/HeaderSmall/headerSmall";
import Footer from "../footer/footer";
import AnaliticsTools from "./analiticsTools";

export default function Analitics() {
  return (
    <>
      <ContactButton />
      <HeaderSmall isWhite={true} />
      <AnaliticsTools />
      <Footer />
    </>
  );
}
