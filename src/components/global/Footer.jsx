import React from "react";

const Footer = () => {
  return (
    <footer className="py-4">
      <div className="container mx-auto px-5">
        <p className="flex items-center gap-1 text-center mx-auto w-fit">
          <span>Made with</span>
          <i class="fi fi-rr-heart flex"></i>
          by
          <a
            target="_blank"
            href="https://sayuj.com.np"
            className="text-accent"
          >
            Sayuj Kuickel.
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
