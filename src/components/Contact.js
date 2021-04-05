import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>
        I love meeting new people! Feel free to contact me or leave a comment!
      </p>
      <div className="button">
        <Link to="/comment">Add a Comment</Link>
      </div>
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
