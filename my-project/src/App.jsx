import React from "react";
import ContactInfo from "./components/ContactInfo";
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <div className="bg-black text-white flex items-center justify-center min-h-screen">
      <div className="bg-gray-900 rounded-2xl shadow-lg w-11/12 max-w-6xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}
