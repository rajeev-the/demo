import React from "react";
import Navbar from "../Components/Navbar";
import navbarimg from '/img/logo-light.png'
import Fottter from "../Components/Fottter";

const PrivacyPolicy = () => {
  return (

    <>
    <Navbar/>
    <div style={{
        marginTop:"100px"
    }} className="container py-5 ">
      <h1 className="mb-4">Privacy Policy</h1>
      <p className="text-muted">Last Updated: [19/05/2025]</p>

      <p>
        At <strong>Machino International Pvt. Ltd.</strong>, we value your privacy and are committed
        to protecting your personal information. This Privacy Policy outlines how we collect, use,
        disclose, and safeguard your information when you visit our website and interact with our services.
      </p>

      <h4 className="mt-5">1. Information We Collect</h4>
      <p>We may collect the following types of information:</p>
      <ul>
        <li><strong>Personal Information:</strong> Name, Email, Phone, Address, Company</li>
        <li><strong>Non-Personal Information:</strong> Browser type, IP address, Device info, Cookies</li>
      </ul>

      <h4 className="mt-4">2. How We Use Your Information</h4>
      <ul>
        <li>To provide and maintain our services</li>
        <li>To improve user experience</li>
        <li>To respond to inquiries and support requests</li>
        <li>To send updates and promotional materials (with consent)</li>
        <li>To analyze trends and optimize performance</li>
      </ul>

      <h4 className="mt-4">3. Sharing Your Information</h4>
      <p>
        We do <strong>not</strong> sell or rent your personal data. We may share your data only with:
      </p>
      <ul>
        <li>Trusted service providers</li>
        <li>Government or legal entities as required by law</li>
        <li>Business partners in the case of mergers or acquisitions</li>
      </ul>

      <h4 className="mt-4">4. Data Security</h4>
      <p>
        We use appropriate security measures to protect your data. However, please note that no
        method of transmission over the Internet is 100% secure.
      </p>

      <h4 className="mt-4">5. Cookies and Tracking</h4>
      <p>
        Our website uses cookies to improve your browsing experience. You can disable cookies in
        your browser settings, but some features of the site may not function properly.
      </p>

      <h4 className="mt-4">6. Your Rights</h4>
      <p>
        You may have the right to access, update, or delete your personal data. To make a request,
        please contact us using the details below.
      </p>

      <h4 className="mt-4">7. Third-Party Links</h4>
      <p>
        Our website may contain links to third-party sites. We are not responsible for the privacy
        policies or practices of these external sites.
      </p>

      <h4 className="mt-4">8. Changes to This Policy</h4>
      <p>
        We may update this Privacy Policy occasionally. Any changes will be posted on this page with
        an updated date.
      </p>

      <h4 className="mt-4">9. Contact Us</h4>
      <p><strong>Machino International Pvt. Ltd.</strong></p>
      <p>📍ON - 261, Sector -1, Bawana Industrial Area New Delhi - 110039, India</p>
      <p>📧 support@machinoindia.com</p>
  
    </div>

    <Fottter img={navbarimg}/>
    </>
  );
};

export default PrivacyPolicy;
