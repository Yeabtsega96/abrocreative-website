import { FiSend } from "react-icons/fi";
import "./style/contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [detail, setDetail] = useState("");

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!name || !email || !phone || !budget) {
    toast.error("Please fill all required fields");
    return;
  }

  const templateParams = { name, email, phone, budget, detail };

  try {
    setIsSubmitting(true);
    setError("");

    await emailjs.send(
      "service_jc2qgmr",
      "template_l1abzjc",
      templateParams,
      "8Du2sJ934ex4yqh6s"
    );

    toast.success("Message sent successfully!", { duration: 3000 });

    setName("");
    setEmail("");
    setPhone("");
    setBudget("");
    setDetail("");
  } catch (err) {
    console.error(err);
    setError(err.message || "Unknown error");

    toast.error("Failed to send message.", {
      duration: 3000,
    });
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="contact-form-card">
      <form onSubmit={handleSubmit}>

        <div>cc
          <label htmlFor="name">Full Name <span>*</span></label>
          <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            required
            autoComplete="name"
          />
        </div>

        <div>
          <label htmlFor="email">Email Address <span>*</span></label>
          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@gmail.com"
            required
            autoComplete="email"
          />
        </div>

        <div>
          <label htmlFor="phone">Phone Number <span>*</span></label>
          <input
            id="phone"
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Your phone number"
            required
            autoComplete="tel"
          />
        </div>

        <div>
          <label htmlFor="budget">Budget Range <span>*</span></label>
          <select
            id="budget"
            name="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            required
          >
            <option value="">Select budget range</option>
            <option value="starter">Starter (8,000)</option>
            <option value="growth">Growth (17,000)</option>
            <option value="premium">Premium (28,000)</option>
            <option value="custom">Custom / Not sure</option>
          </select>
        </div>

        <div>
          <label htmlFor="detail">
            Project Detail <span className="optional">(optional)</span>
          </label>

          <textarea
            id="detail"
            name="detail"
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
            placeholder="Tell us about your business and what you need"
          />
        </div>

        <button type="submit" className="send-message-btn" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
          <FiSend className="send-icon" />
        </button>

      </form>
    </div>
  );
};

export default ContactForm;