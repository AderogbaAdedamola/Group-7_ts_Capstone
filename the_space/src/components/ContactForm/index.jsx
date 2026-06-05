import { useState } from 'react';
import './index.css';

export default function ContactForm() {
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const fullname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('tel').value;
    const message = document.getElementById('message').value;

    if (!fullname || !email || !phone || !message) {
      alert('Please fill all fields');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('https://whitebricks.com/tsacademy.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullname, email, phone, message }),
      });

      if (response.ok) {
        setSuccess('Form submitted successfully! 🚀🎉');
        e.target.reset();
        setLoading(false);
      } else {
        alert('Submission failed');
        setLoading(false)
      }
    } catch (error) {
      alert('An error occurred');
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <h2>Have Questions About Planetary Science?</h2>
        <p>Interested in learning more about space, astronomy, or how planetary data is collected and analyzed? Reach out and we'll get back to you.</p>

        <form onSubmit={handleSubmit}>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fname">Full Name<span>*</span></label>
              <input
                type="text"
                id="fname"
                name="fname"
                placeholder="Full name"
                maxLength={20}
                minLength={10}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email<span>*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@example.com"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="tel">Phone Number<span>*</span></label>
              <input
                type="tel"
                id="tel"
                name="tel"
                placeholder="Please enter a valid phone number."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message<span>*</span></label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                maxLength={100}
                required
              ></textarea>
              <p className="char-count">100 characters</p>
            </div>
          </div>

          {success && <p className="success-message">{success}</p>}

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Submitting...' : 'Submit >'}
          </button>

        </form>
      </div>
    </section>
  );
}