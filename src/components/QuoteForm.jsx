import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const QuoteForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    material: "",
    quantity: "",
    message: "",
  });

  // INPUT CHANGE HANDLER
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // FORM SUBMIT HANDLER
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_zg8p6me",
        "template_uxajjqe",
        formData,
        "NbzXo8A5sCZ6Tvni6"
      )
      .then(
        () => {
          alert("Quote Request Submitted Successfully!");

          setFormData({
            name: "",
            phone: "",
            material: "",
            quantity: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);

          alert("Something went wrong!");
        }
      );
  };

  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8">

        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Request a Quote
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg border dark:bg-gray-700 dark:text-white"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg border dark:bg-gray-700 dark:text-white"
          />

          <input
            type="text"
            name="material"
            placeholder="Material Required"
            value={formData.material}
            onChange={handleChange}
            required
            className="w-full p-4 rounded-lg border dark:bg-gray-700 dark:text-white"
          />

          <input
            type="text"
            name="quantity"
            placeholder="Quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-4 rounded-lg border dark:bg-gray-700 dark:text-white"
          />

          <textarea
            name="message"
            placeholder="Additional Details"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-lg border dark:bg-gray-700 dark:text-white"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-lg font-semibold transition duration-300"
          >
            Submit Quote Request
          </button>

        </form>
      </div>
    </section>
  );
};

export default QuoteForm;