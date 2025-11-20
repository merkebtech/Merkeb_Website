import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [statusType, setStatusType] = useState(""); // optional, for success/error styling

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload

    emailjs
      .sendForm(
        "service_7w34n3n", // from EmailJS dashboard
        "template_wledv1g", // from your template
        formRef.current, // your form element (using ref avoids e.target issues)
        "3UYf7_2Lsdb1_rRnd" // your public key from EmailJS
      )
      .then(() => {
        setStatusMessage("Message sent successfully!"); // set message on body
        setStatusType("success");
        setFormData({ name: "", email: "", subject: "", message: "" }); // reset form
      })
      .catch(() => {
        setStatusMessage("Failed to send the message. Please try again later.");
        setStatusType("error");
      });
  };

  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Blue Background Header Section */}
      <div className="bg-white text-blue-900 py-8 mb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
          <h1
            className="text-5xl md:text-5xl font-semibold mb-6"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Check our Contact
          </h1>
          <p className="text-blue-950 mt-8 text-lg md:text-2xl max-w-3xl mx-auto ">
            Have a question or want to work together? Feel free to reach out to
            us. We're here to help and always open to discussing new projects.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div>
            <h1 className="text-4xl md:text-5xl  text-blue-900 font-semibold text-blue-900mb-6">
              Get in touch
            </h1>

            <h3 className="text-lg font-medium text-blue-950 mb-2">
              Let's start a conversation
            </h3>

            <p className="text-blue-950 mb-4 leading-relaxed font-medium">
              Have a question or want to work together? Feel free to reach out
              to us. We're here to help and always open to discussing new
              projects, creative ideas, or opportunities to be part of your
              vision.
            </p>

            <p className="text-blue-950mb-8 leading-relaxed font-medium">
              Connect with us on social media to stay updated with our latest
              work and news.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61583313303819"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded hover:bg-blue-700 hover:border-blue-700 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/merkeb_tech"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded hover:bg-pink-600 hover:border-pink-600 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/merkeb-tech/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-gray-400 rounded hover:bg-blue-700 hover:border-blue-700 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-400 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-700 transition-all"
                  placeholder="Name"
                />
              </div>

              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-400 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-700 transition-all"
                  placeholder="Email"
                />
              </div>

              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-400 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-700 transition-all"
                  placeholder="Subject"
                />
              </div>

              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-400 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-700 transition-all resize-none"
                  placeholder="Message"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 hover:bg-purple-800 text-white font-semibold py-3 px-6 transition-all duration-200"
              >
                Send Message
              </button>
            </form>

            {/* Status message box */}
            {statusMessage && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "10px",
                  color: statusType === "success" ? "green" : "red",
                  border: `1px solid ${
                    statusType === "success" ? "green" : "red"
                  }`,
                  borderRadius: "5px",
                }}
              >
                {statusMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
