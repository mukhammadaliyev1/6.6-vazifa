import React from "react";
import Navbar from "./components/Navbar";
import MyFormData from "./components/MyFormdata";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
      <main className="grow ">
        <MyFormData />
      </main>
      <Footer />
    </>
  );
}

export default App;
