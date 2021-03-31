const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit
        maximus, molestie est a, tempor magna.
      </p>
      <form>
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="email" name="email" id="email" placeholder="Email" />
        <input type="text" name="phone" id="phone" placeholder="Phone" />
        <input type="text" name="message" id="message" placeholder="Message" />
        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
};

export default Contact;
