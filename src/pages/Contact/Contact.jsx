import styles from "./Contact.module.css";
import ContactForm from "../../features/pages/Contact/ContactForm/ContactForm";
import ConatctImg from '../../assets/images/contact-1.png'
import React from 'react';
export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className="custom_container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 items-center">
          <div className="order-1">
            <ContactForm />
          </div>
          <div className="mb-5 lg:mb-0 order-0 md:order-2">
            <img className={`w-full`} src={ConatctImg} alt="ConatctImg" />
          </div>
        </div>
      </div>
    </div>
  );
}
