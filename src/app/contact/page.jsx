// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// export default function Contact() {
//   return (
//     <div className="container">
//       {/* <Navbar /> */}

//       <main>
//         <h2>Contact Us</h2>
//         <p>We would love to hear from you! Please contact us at:</p>
//         <p>Email: flowercollection@example.com</p>
//         <p>Phone: +123 456 7890</p>
//       </main>

//       {/* <Footer /> */}
//     </div>
//   );
// }
"use client"
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process form data here (e.g., send to server or API)
    alert("Thank you for reaching out!");
  };

  return (
    <div className="container">
      {/* <Navbar /> */}

      <main>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </main>

      {/* <Footer /> */}
    </div>
  );
}