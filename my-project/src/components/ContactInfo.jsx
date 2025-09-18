import React from "react";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

function ContactInfo() {
  return (
    <div className="bg-gradient-to-b from-blue-300 to-blue-500 p-10 flex flex-col justify-center text-black">
      <h2 className="text-2xl font-bold mb-6">Get in touch</h2>

      <div className="space-y-6 text-sm">
        <div>
          <p className="font-semibold">Visit us</p>
          <p>Come say hello at our office HQ.</p>
          <p>67 Wisteria Way Croydon South VIC 3136 AU</p>
        </div>

        <div>
          <p className="font-semibold">Chat to us</p>
          <p>Our friendly team is here to help.</p>
          <p className="text-blue-800">hello@paysphere.com</p>
        </div>

        <div>
          <p className="font-semibold">Call us</p>
          <p>Mon-Fri from 8am to 5pm</p>
          <p>(+995) 555-65-65-55</p>
        </div>

        <div>
          <p className="font-semibold">Social media</p>
          <div className="flex gap-3 mt-2">
            <Facebook size={18} />
            <Instagram size={18} />
            <Linkedin size={18} />
            <Twitter size={18} />
            <Youtube size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
