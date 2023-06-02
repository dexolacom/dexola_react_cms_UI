"use client";
import "../../src/app/globals.css";

import ContactButton from "../../components/ContactUs/ContactUs";
import HeaderSmall from "../../components/HeaderSmall/headerSmall";
import Footer from "../footer/footer";
import RandD from "./RandD";

export default function HowWork() {
  return (
    <>
      <ContactButton />
      <HeaderSmall isWhite={true} />
      <RandD />
      <Footer />
    </>
  );
}
