import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Follow us on social media:</p>
      <div className="social-links">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg"
            alt="Facebook"
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.freepik.com/256/124/124021.png?semt=ais_hybrid"
            alt="Twitter"
          />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.freepik.com/premium-vector/instagram-vector-logo-icon-social-media-logotype_901408-390.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721088000&semt=ais_user"
            alt="Instagram"
          />
        </a>
      </div>
      <p>&copy; 2024 Pizza Shop. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
