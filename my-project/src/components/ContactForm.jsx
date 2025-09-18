import React from "react";

export default function ContactForm() {
  return (
    <div className="p-10 bg-gray-900">
      <form className="space-y-6 text-white">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="firstName" className="text-sm font-medium">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              defaultValue="RandomFirst"
              required
              className="w-full p-3 rounded bg-black border border-gray-700 text-white"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="lastName" className="text-sm font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              defaultValue="Randomlast"
              className="w-full p-3 rounded bg-black border border-gray-700 text-white"
            />
          </div>
        </div>

    
        <div className="flex flex-col space-y-2">
          <label htmlFor="company" className="text-sm font-medium">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Company Name"
            defaultValue="RandomCompany"
            className="w-full p-3 rounded bg-black border border-gray-700 text-white"
          />
        </div>

     
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            defaultValue="Random@gmail.com"
            required
            className="w-full p-3 rounded bg-black border border-gray-700 text-white"
          />
        </div>

     
        <div className="flex flex-col space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            defaultValue="(+995) 555-55-55-55"
            className="w-full p-3 rounded bg-black border border-gray-700 text-white"
          />
        </div>

     
        <div className="flex flex-col space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell us what we can help you with"
            className="w-full p-3 rounded bg-black border border-gray-700 text-white"
            rows="4"
          ></textarea>
        </div>

        <div className="flex items-start gap-2">
          <input type="checkbox" id="privacy" name="privacy" className="mt-1" />
          <label htmlFor="privacy" className="text-sm text-gray-400">
            I'd like to receive more information about company. I understand and
            agree to the{" "}
            <span className="text-blue-500 underline cursor-pointer">
              Privacy Policy
            </span>
          </label>
        </div>

  
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded text-white font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
