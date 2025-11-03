// import { useState, useEffect } from "react";

import About from "./About";
import CTA from "./CTA";
import Hero from "./Hero";
import Products from "./Product";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <CTA />
    </>
  );
}
