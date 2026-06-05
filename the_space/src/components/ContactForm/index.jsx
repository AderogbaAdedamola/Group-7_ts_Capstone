

export default function ContactForm() {
  return (
    <div>
      <h1>Have Questions About Planetary Science?</h1> 
<p>Interested in learning more about space,astronomy,or how planetary data is collected and analyzed?</p>
<p>Reach out and we'll get back to you</p>
<form>
  <fieldset>
    <label for="fname">Full Name*</label><br />
    <input type="text" id="fname" name="fname" placeholder="Full Name" maxLength={20} minLength={10} title="please fill in your full name min of 10 character and max of 20 character"required>
    </input><br />
    <label for="email">Email*</label><br />
    <input type="email" id="email" name="email" placeholder="example@example.com" title="Please fill on your email"required>
    </input><br />
    <label for="tel">Phone Number*</label><br />
    <input type="tel" id="tel" name="tel" placeholder="Please enter a vaild phone number" title="Please fill in your phone number"required>
    </input><br />
    <div>                    
      <label for="message">Message*</label><br />
      <textarea id="message" name="message" placeholder="Enter your message" maxLength={100} required></textarea>
      <p>100 characters</p>
    </div>
    <div>
      <p id="successMessage"></p>
      <button>
        Submit
      </button>
    </div>
  </fieldset>
</form>
    </div>
  )
}
