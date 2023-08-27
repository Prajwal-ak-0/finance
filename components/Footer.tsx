"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPhone as faPhoneSolid } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const makestyle = {
  color: "black",
  fontSize: "12px",
  lineHeight: "1.33337",
  fontWeight: 600,
  letterSpacing: "-.01em",
  fontFamily:
    '"SF Pro Text", "Myriad Set Pro", "SF Pro Icons", "Apple Legacy Chevron", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  marginRight: "30px",
  paddingRight: "30px",
  marginBottom: "0.8em",
  outline: "none",
};
const Footer = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [selectedRating, setSelectedRating] = useState(0);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };
  return (
    <footer
      className="border-t"
      style={{ borderWidth: "0px", backgroundColor: "#f3f3f3" }}
    >
      <div className="mx-auto py-10 ">
        <div
          style={{ borderBottom: "1px solid #969191", paddingBottom: "10px", marginLeft:"100px",marginRight:"100px" }}
        >
          <p
            className=""
            style={{
              fontSize: "12px",
              lineHeight: "1.4",
              fontWeight: 400,
              letterSpacing: "",
              fontFamily:
                '"SF Pro Text", "Myriad Set Pro", "SF Pro Icons", "Apple Legacy Chevron", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
            }}
          >
            Welcome to our charming shop, where every corner holds a treasure
            waiting to be found.Step inside and immerse yourself in a world of
            unique products and delightful surprises. Our shelves are stocked
            with carefully curated items that cater to your diverse tastes and
            preferences.
            <br />
            Our friendly staff is here to assist you in your shopping journey.
            Join us today and shopping in a whole new way! Don not miss out on
            our exclusive in-store promotions, designed to more rewarding Feel
            the joy of discovering that perfect something for yourself or a
            loved one.
            <br />
            . Feel the joy of discovering perfect item You have been searching
            for or stumbling a hidden gem you never knew you needed. With new
            arrivals every week, each visit promises new opportunities to find
            something special. Visit us at your convenience your friends
            shopping very joyful.
            <br />
            Step into our inviting boutique, a haven for those who appreciate
            quality and style. Our collection showcases a symphony of handpicked
            items. Explore the fusion of traditional craftsmanship and modern
            design that fills our shelves. Our shop is more than a place to buy
            things
            <br />
            it is a place to ignite your imagination and connect. Our dedicated
            team is here to guide you through our thoughtfully arranged
            displays, ensuring you find exactly what you are seeking. Wein
            offering a diverse range of items that cater to various tastes and
            preferences.
            <br />
            Our shop is none for making it a joy for you to shop for yourself or
            find the perfect gift for a loved one. With every visit, you are not
            just a customer – you are a valued guest in our retail family. Come
            experience shopping the way it should be – personal, enchanting, and
            memorable.
            <br />
            Discover the heart and soul of shopping as you step into our
            boutique emporium. Nestled in the heart of the city, our shop
            beckons with its inviting ambiance and carefully curated selection.
            Each item has been chosen with intention, reflecting our passion for
            sourcing the extraordinary.
          </p>
        </div>
        <div
          className="text-center text-neutral-500 align-middle"
          style={{ paddingTop: "15px" }}
        >
          <ul
            className="flex justify-center"
            style={{ ...makestyle, listStyleType: "none", padding: 0 }}
          >
            <li style={{ ...makestyle, color: "#696970", marginRight: "20px" }}>
              Home
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li
                  style={{
                    color: "#969191",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  Cigratte
                </li>
                <li style={{ color: "#969191", paddingBottom: "10px" }}>
                  Beverages
                </li>
                <li style={{ color: "#969191", paddingBottom: "10px" }}>
                  Snacks
                </li>
              </ul>
            </li>
            <li
              style={{
                ...makestyle,
                color: "#696970",
                marginLeft: "10px",
                paddingLeft: "100px",
              }}
            >
              About
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li
                  style={{
                    color: "#969191",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  Sub-Item 1
                </li>
                <li style={{ color: "#969191", paddingBottom: "10px" }}>
                  Sub-Item 2
                </li>
                <li style={{ color: "#969191", paddingBottom: "10px" }}>
                  Sub-Item 3
                </li>
              </ul>
            </li>
            <li
              style={{
                ...makestyle,
                color: "#696970",
                marginRight: "20px",
                paddingLeft: "100px",
              }}
            >
              Services
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li
                  style={{
                    color: "#969191",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  Maggi
                </li>
                <li style={{ color: "#969191", paddingBottom: "10px" }}>
                  Samosa&pufs
                </li>
                <li style={{ color: "#969191", paddingBottom: "10px" }}>
                  Kabab
                </li>
              </ul>
            </li>
            <li
              style={{ ...makestyle, color: "#696970", paddingLeft: "100px" }}
            >
              Contact
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                <li
                  style={{
                    color: "#969191",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    paddingLeft: "20px",
                  }}
                >
                  {" "}
                  <a
                    href="https://www.instagram.com/Jnanesh ps"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{
                        width: "18px",
                        height: "18px",
                        color: "black",
                        marginRight: "10px",
                      }}
                    />
                  </a>
                </li>
                <li
                  style={{
                    color: "#969191",
                    paddingBottom: "10px",
                    paddingLeft: "20px",
                  }}
                >
                  <a
                    href="https://www.facebook.com/your_facebook_page_here"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{
                        width: "18px",
                        height: "18px",
                        color: "black",
                        marginRight: "10px",
                      }}
                    />
                  </a>
                </li>
                <li
                  style={{
                    color: "#969191",
                    paddingBottom: "10px",
                    paddingLeft: "20px",
                  }}
                >
                  <a href="tel:9019008540">
                    <FontAwesomeIcon
                      icon={faPhoneSolid}
                      style={{
                        width: "18px",
                        height: "18px",
                        color: "black",
                        marginRight: "10px",
                      }}
                    />
                  </a>
                </li>
                <li
                  style={{
                    color: "#969191",
                    paddingBottom: "10px",
                    paddingLeft: "20px",
                  }}
                >
                  <a href="mailto:jnaneshps5@gmail.com">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      style={{
                        fontSize: "18px",
                        color: "black",
                        marginRight: "10px",
                      }}
                    />
                  </a>
                </li>
                <li
                  style={{
                    color: "#969191",
                    paddingBottom: "10px",
                    paddingLeft: "20px",
                  }}
                >
                  <a
                    href="https://twitter.com/your_twitter_username_here"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      style={{
                        width: "18px",
                        height: "18px",
                        color: "black",
                        marginRight: "10px",
                      }}
                    />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div style={{ marginTop: "20px" }}>
            <h3
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              Give us your feedback
            </h3>
            <p style={{ fontSize: "14px", marginBottom: "10px" }}>
              We value your opinion! Rate your experience with us.
            </p>
            <div>
              {[1, 2, 3, 4, 5].map((rating) => (
                <span
                  key={rating}
                  style={{
                    cursor: "pointer",
                    fontSize: "20px",
                    marginRight: "5px",
                  }}
                  onClick={() => {
                    setSelectedRating(rating);
                    togglePopup();
                  }}
                >
                  <FontAwesomeIcon
                    icon={faStar}
                    color={rating <= selectedRating ? "gold" : "gray"}
                  />
                </span>
              ))}
            </div>
          </div>
          {isPopupVisible && (
            <div
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "white",
                padding: "20px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
                zIndex: 1000,
              }}
            >
              <h4>Feedback Form</h4>
              <textarea
                rows={4}
                cols={50}
                placeholder="Enter your feedback"
              ></textarea>
              <button onClick={togglePopup}>Submit</button>
            </div>
          )}
          <div
            className="text-center text-neutral-500"
            style={{ paddingTop: "10px" }}
          >
            Copyright © 2023.All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
