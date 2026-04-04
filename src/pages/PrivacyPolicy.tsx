import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <div className="min-h-screen flex flex-col bg-white">
    <Navbar />
    <main className="flex-1 container mx-auto px-4 py-16 max-w-4xl">
      <div
        className="text-gray-800"
        dangerouslySetInnerHTML={{ __html: PRIVACY_HTML }}
      />
    </main>
    <Footer />
  </div>
  );
};

const PRIVACY_HTML = `
<style>
  [data-custom-class='body'], [data-custom-class='body'] * { background: transparent !important; }
  [data-custom-class='title'], [data-custom-class='title'] * { font-family: Arial !important; font-size: 26px !important; color: #000000 !important; }
  [data-custom-class='subtitle'], [data-custom-class='subtitle'] * { font-family: Arial !important; color: #595959 !important; font-size: 14px !important; }
  [data-custom-class='heading_1'], [data-custom-class='heading_1'] * { font-family: Arial !important; font-size: 19px !important; color: #000000 !important; }
  [data-custom-class='heading_2'], [data-custom-class='heading_2'] * { font-family: Arial !important; font-size: 17px !important; color: #000000 !important; }
  [data-custom-class='body_text'], [data-custom-class='body_text'] * { color: #595959 !important; font-size: 14px !important; font-family: Arial !important; }
  [data-custom-class='link'], [data-custom-class='link'] * { color: #3030F1 !important; font-size: 14px !important; font-family: Arial !important; word-break: break-word !important; }
  ul { list-style-type: square; }
  ul > li > ul { list-style-type: circle; }
  ul > li > ul > li > ul { list-style-type: square; }
  ol li { font-family: Arial; }
  table { border-collapse: collapse; width: 100%; }
  h1, h2, h3 { margin-top: 1em; margin-bottom: 0.5em; }
</style>

<div data-custom-class="body">
<div><strong><span style="font-size: 26px;"><span data-custom-class="title"><h1>PRIVACY POLICY</h1></span></span></strong></div>
<div><span style="color: rgb(127, 127, 127);"><strong><span style="font-size: 15px;"><span data-custom-class="subtitle">Last updated April 01, 2026</span></span></strong></span></div>
<div><br></div>
<div style="line-height: 1.5;"><span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text">This Privacy Notice for <strong>Reflect His Light LLC</strong> (doing business as <strong>RHL Digital</strong>) ("<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>"), describes how and why we might access, collect, store, use, and/or share ("<strong>process</strong>") your personal information when you use our services ("<strong>Services</strong>"), including when you:</span></span></div>
<ul>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">Visit our website at <a target="_blank" data-custom-class="link" href="https://dynamicdetailssatx.com">https://dynamicdetailssatx.com</a> or any website of ours that links to this Privacy Notice</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Use <strong>Dynamic Details</strong>. Mobile auto detailing service serving San Antonio, TX. We come to you and provide professional car washing and detailing services. Customers submit their name, phone number, and email to request a service quote.</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">Engage with us in other related ways, including any marketing or events</span></li>
</ul>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(127, 127, 127);"><span data-custom-class="body_text"><strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a target="_blank" data-custom-class="link" href="mailto:James@rhldigital.com">James@rhldigital.com</a>.</span></span></div>

<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><strong><span style="font-size: 15px;"><span data-custom-class="heading_1"><h2>SUMMARY OF KEY POINTS</h2></span></span></strong></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong><em>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our <a data-custom-class="link" href="#toc">table of contents</a> below to find the section you are looking for.</em></strong></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about <a data-custom-class="link" href="#personalinfo">personal information you disclose to us</a>.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Do we collect any information from third parties?</strong> We do not collect any information from third parties.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about <a data-custom-class="link" href="#infouse">how we process your information</a>.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about <a data-custom-class="link" href="#whoshare">when and with whom we share your personal information</a>.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about <a data-custom-class="link" href="#infosafe">how we keep your information safe</a>.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about <a data-custom-class="link" href="#privacyrights">your privacy rights</a>.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by <a data-custom-class="link" href="https://app.termly.io/dsar/9380f2b0-1a4b-48d5-8972-02667296d7a0" rel="noopener noreferrer" target="_blank">submitting a data subject access request</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">Want to learn more about what we do with any information we collect? <a data-custom-class="link" href="#toc">Review the Privacy Notice in full</a>.</span></span></div>

<div style="line-height: 1.5;"><br></div>
<div id="toc" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>TABLE OF CONTENTS</h2></span></strong></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#infocollect"><span style="color: rgb(0, 58, 250);">1. WHAT INFORMATION DO WE COLLECT?</span></a></span></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#infouse"><span style="color: rgb(0, 58, 250);">2. HOW DO WE PROCESS YOUR INFORMATION?</span></a></span></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#whoshare"><span style="color: rgb(0, 58, 250);">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</span></a></span></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#ai"><span style="color: rgb(0, 58, 250);">4. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</span></a></span></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#inforetain"><span style="color: rgb(0, 58, 250);">5. HOW LONG DO WE KEEP YOUR INFORMATION?</span></a></span></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#infosafe"><span style="color: rgb(0, 58, 250);">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</span></a></span></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#infominors"><span style="color: rgb(0, 58, 250);">7. DO WE COLLECT INFORMATION FROM MINORS?</span></a></span></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#privacyrights"><span style="color: rgb(0, 58, 250);">8. WHAT ARE YOUR PRIVACY RIGHTS?</span></a></span></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#DNT"><span style="color: rgb(0, 58, 250);">9. CONTROLS FOR DO-NOT-TRACK FEATURES</span></a></span></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#uslaws"><span style="color: rgb(0, 58, 250);">10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</span></a></span></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#policyupdates"><span style="color: rgb(0, 58, 250);">11. DO WE MAKE UPDATES TO THIS NOTICE?</span></a></span></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#contact"><span style="color: rgb(0, 58, 250);">12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</span></a></span></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><a data-custom-class="link" href="#request"><span style="color: rgb(0, 58, 250);">13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</span></a></span></div>

<div style="line-height: 1.5;"><br></div>
<div id="infocollect" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>1. WHAT INFORMATION DO WE COLLECT?</h2></span></strong>
<span data-custom-class="heading_2" id="personalinfo"><strong><h3>Personal information you disclose to us</h3></strong></span>
<span style="color: rgb(89, 89, 89); font-size: 15px;"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We collect personal information that you provide to us.</em></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</span></span></div>
<ul>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">names</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">phone numbers</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);">email addresses</span></li>
</ul>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Sensitive Information.</strong> We do not process sensitive information.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Payment Data.</strong> We may collect data necessary to process your payment if you choose to make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is handled and stored by <strong>Stripe</strong>. You may find their privacy notice link here: <a target="_blank" data-custom-class="link" href="https://stripe.com/privacy">https://stripe.com/privacy</a>.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</span></span></div>

<div style="line-height: 1.5;"><br></div>
<div id="infouse" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</em></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</strong></span></span></div>
<ul>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><strong>To respond to user inquiries/offer support to users.</strong> We may process your information to respond to your inquiries and solve any potential issues you might have with the requested service.</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><strong>To fulfill and manage your orders.</strong> We may process your information to fulfill and manage your orders, payments, returns, and exchanges made through the Services.</span></li>
</ul>

<div style="line-height: 1.5;"><br></div>
<div id="whoshare" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We may share information in specific situations described in this section and/or with the following third parties.</em></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">We may need to share your personal information in the following situations:</span></span></div>
<ul>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</span></li>
</ul>

<div style="line-height: 1.5;"><br></div>
<div id="ai" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>4. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2></span></strong>
<span style="font-size: 15px;"><strong><em><span data-custom-class="body_text">In Short:</span></em></strong><em><span data-custom-class="body_text"> We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</span></em></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Products"). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><strong><span data-custom-class="body_text">Use of AI Technologies</span></strong></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">We provide the AI Products through third-party service providers ("AI Service Providers"), including Anthropic, ElevenLabs, and Groq. As outlined in this Privacy Notice, your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products for purposes outlined in <a data-custom-class="link" href="#whoshare">WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a>. You must not use the AI Products in any way that violates the terms or policies of any AI Service Provider.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><strong><span data-custom-class="body_text">Our AI Products</span></strong></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">Our AI Products are designed for the following functions:</span></span></div>
<ul>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">AI automation</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Natural language processing</span></li>
</ul>
<div style="line-height: 1.5;"><strong><span style="font-size: 15px;"><span data-custom-class="body_text">How We Process Your Data Using AI</span></span></strong></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data's safety.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><strong><span data-custom-class="body_text">How to Opt Out</span></strong></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">We believe in giving you the power to decide how your data is used. To opt out, you can:</span></span></div>
<ul>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Contact us using the contact information provided</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Users may opt out of AI-based processing of their personal information by contacting us at <a target="_blank" data-custom-class="link" href="mailto:james@rhldigital.com">james@rhldigital.com</a> or by replying STOP to any SMS message from our AI receptionist. We will remove their information from our system upon request.</span></li>
</ul>

<div style="line-height: 1.5;"><br></div>
<div id="inforetain" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>5. HOW LONG DO WE KEEP YOUR INFORMATION?</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</em></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</span></span></div>

<div style="line-height: 1.5;"><br></div>
<div id="infosafe" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We aim to protect your personal information through a system of organizational and technical security measures.</em></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</span></span></div>

<div style="line-height: 1.5;"><br></div>
<div id="infominors" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>7. DO WE COLLECT INFORMATION FROM MINORS?</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> We do not knowingly collect data from or market to children under 18 years of age.</em></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent's use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a target="_blank" data-custom-class="link" href="mailto:James@rhldigital.com">James@rhldigital.com</a>.</span></span></div>

<div style="line-height: 1.5;"><br></div>
<div id="privacyrights" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>8. WHAT ARE YOUR PRIVACY RIGHTS?</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</em></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div id="withdrawconsent" style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><u>Withdrawing your consent:</u></strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section <a data-custom-class="link" href="#contact">"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</a> below.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong><u>Opting out of marketing and promotional communications:</u></strong> You can unsubscribe from our marketing and promotional communications at any time by replying "STOP" or "UNSUBSCRIBE" to the SMS messages that we send, or by contacting us using the details provided in the section <a data-custom-class="link" href="#contact">"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</a> below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Information sharing to subcontractors in support services, such as customer service, is permitted. All other use case categories exclude text messaging originator opt-in data and consent; this information will not be shared with third parties.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span data-custom-class="body_text"><span style="font-size: 15px;">If you have questions or comments about your privacy rights, you may email us at <a target="_blank" data-custom-class="link" href="mailto:James@rhldigital.com">James@rhldigital.com</a>.</span></span></div>

<div style="line-height: 1.5;"><br></div>
<div id="DNT" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>9. CONTROLS FOR DO-NOT-TRACK FEATURES</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.</span></span></div>

<div style="line-height: 1.5;"><br></div>
<div id="uslaws" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>10. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong><em>In Short:</em></strong><em> If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.</em></span></span>
<strong><span data-custom-class="heading_2"><h3>Categories of Personal Information We Collect</h3></span></strong>
<span style="font-size: 15px;"><span data-custom-class="body_text">The table below shows the categories of personal information we have collected in the past twelve (12) months.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<table style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th style="width: 34%; border: 1px solid black; padding: 8px; text-align: left;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Category</strong></span></span></th>
      <th style="width: 51%; border: 1px solid black; padding: 8px; text-align: left;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Examples</strong></span></span></th>
      <th style="width: 15%; border: 1px solid black; padding: 8px; text-align: left;"><span style="font-size: 15px;"><span data-custom-class="body_text"><strong>Collected</strong></span></span></th>
    </tr>
  </thead>
  <tbody>
    <tr><td style="border: 1px solid black; padding: 8px;"><span data-custom-class="body_text" style="font-size:15px;">A. Identifiers</span></td><td style="border: 1px solid black; padding: 8px;"><span data-custom-class="body_text" style="font-size:15px;">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</span></td><td style="border: 1px solid black; padding: 8px; text-align: center;"><span data-custom-class="body_text" style="font-size:15px;">NO</span></td></tr>
    <tr><td style="border: 1px solid black; padding: 8px;"><span data-custom-class="body_text" style="font-size:15px;">B. Personal information as defined in the California Customer Records statute</span></td><td style="border: 1px solid black; padding: 8px;"><span data-custom-class="body_text" style="font-size:15px;">Name, contact information, education, employment, employment history, and financial information</span></td><td style="border: 1px solid black; padding: 8px; text-align: center;"><span data-custom-class="body_text" style="font-size:15px;">NO</span></td></tr>
    <tr><td style="border: 1px solid black; padding: 8px;"><span data-custom-class="body_text" style="font-size:15px;">C. Protected classification characteristics under state or federal law</span></td><td style="border: 1px solid black; padding: 8px;"><span data-custom-class="body_text" style="font-size:15px;">Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</span></td><td style="border: 1px solid black; padding: 8px; text-align: center;"><span data-custom-class="body_text" style="font-size:15px;">NO</span></td></tr>
    <tr><td style="border: 1px solid black; padding: 8px;"><span data-custom-class="body_text" style="font-size:15px;">D. Commercial information</span></td><td style="border: 1px solid black; padding: 8px;"><span data-custom-class="body_text" style="font-size:15px;">Transaction information, purchase history, financial details, and payment information</span></td><td style="border: 1px solid black; padding: 8px; text-align: center;"><span data-custom-class="body_text" style="font-size:15px;">NO</span></td></tr>
    <tr><td style="border: 1px solid black; padding: 8px;"><span data-custom-class="body_text" style="font-size:15px;">E. Biometric information</span></td><td style="border: 1px solid black; padding: 8px;"><span data-custom-class="body_text" style="font-size:15px;">Fingerprints and voiceprints</span></td><td style="border: 1px solid black; padding: 8px; text-align: center;"><span data-custom-class="body_text" style="font-size:15px;">NO</span></td></tr>
    <tr><td style="border: 1px solid black; padding: 8px;"><span data-custom-class="body_text" style="font-size:15px;">F. Internet or other similar network activity</span></td><td style="border: 1px solid black; padding: 8px;"><span data-custom-class="body_text" style="font-size:15px;">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</span></td><td style="border: 1px solid black; padding: 8px; text-align: center;"><span data-custom-class="body_text" style="font-size:15px;">NO</span></td></tr>
    <tr><td style="border: 1px solid black; padding: 8px;"><span data-custom-class="body_text" style="font-size:15px;">G. Geolocation data</span></td><td style="border: 1px solid black; padding: 8px;"><span data-custom-class="body_text" style="font-size:15px;">Device location</span></td><td style="border: 1px solid black; padding: 8px; text-align: center;"><span data-custom-class="body_text" style="font-size:15px;">NO</span></td></tr>
    <tr><td style="border: 1px solid black; padding: 8px;"><span data-custom-class="body_text" style="font-size:15px;">H. Audio, electronic, sensory, or similar information</span></td><td style="border: 1px solid black; padding: 8px;"><span data-custom-class="body_text" style="font-size:15px;">Images and audio, video or call recordings created in connection with our business activities</span></td><td style="border: 1px solid black; padding: 8px; text-align: center;"><span data-custom-class="body_text" style="font-size:15px;">NO</span></td></tr>
    <tr><td style="border: 1px solid black; padding: 8px;"><span data-custom-class="body_text" style="font-size:15px;">I. Professional or employment-related information</span></td><td style="border: 1px solid black; padding: 8px;"><span data-custom-class="body_text" style="font-size:15px;">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</span></td><td style="border: 1px solid black; padding: 8px; text-align: center;"><span data-custom-class="body_text" style="font-size:15px;">NO</span></td></tr>
    <tr><td style="border: 1px solid black; padding: 8px;"><span data-custom-class="body_text" style="font-size:15px;">J. Education Information</span></td><td style="border: 1px solid black; padding: 8px;"><span data-custom-class="body_text" style="font-size:15px;">Student records and directory information</span></td><td style="border: 1px solid black; padding: 8px; text-align: center;"><span data-custom-class="body_text" style="font-size:15px;">NO</span></td></tr>
    <tr><td style="border: 1px solid black; padding: 8px;"><span data-custom-class="body_text" style="font-size:15px;">K. Inferences drawn from collected personal information</span></td><td style="border: 1px solid black; padding: 8px;"><span data-custom-class="body_text" style="font-size:15px;">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual's preferences and characteristics</span></td><td style="border: 1px solid black; padding: 8px; text-align: center;"><span data-custom-class="body_text" style="font-size:15px;">NO</span></td></tr>
    <tr><td style="border: 1px solid black; padding: 8px;"><span data-custom-class="body_text" style="font-size:15px;">L. Sensitive personal Information</span></td><td style="border: 1px solid black; padding: 8px;"></td><td style="border: 1px solid black; padding: 8px; text-align: center;"><span data-custom-class="body_text" style="font-size:15px;">NO</span></td></tr>
  </tbody>
</table>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</span></span></div>
<ul>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Receiving help through our customer support channels;</span></li>
  <li data-custom-class="body_text"><span style="font-size: 15px;">Participation in customer surveys or contests; and</span></li>
  <li data-custom-class="body_text"><span style="font-size: 15px;">Facilitation in the delivery of our Services and to respond to your inquiries.</span></li>
</ul>
<div style="line-height: 1.5;"><strong><span style="font-size: 15px;"><span data-custom-class="heading_2"><h3>Sources of Personal Information</h3></span></span></strong>
<span style="font-size: 15px;"><span data-custom-class="body_text">Learn more about the sources of personal information we collect in <a data-custom-class="link" href="#infocollect">"WHAT INFORMATION DO WE COLLECT?"</a></span></span></div>
<div style="line-height: 1.5;"><strong><span data-custom-class="heading_2"><h3>How We Use and Share Personal Information</h3></span></strong>
<span data-custom-class="body_text" style="font-size: 15px;">Learn more about how we use your personal information in the section, <a data-custom-class="link" href="#infouse">"HOW DO WE PROCESS YOUR INFORMATION?"</a></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><strong>Will your information be shared with anyone else?</strong></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information in the section, <a data-custom-class="link" href="#whoshare">"WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"</a></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in the future belonging to website visitors, users, and other consumers.</span></span></div>
<div style="line-height: 1.5;"><strong><span style="font-size: 15px;"><span data-custom-class="heading_2"><h3>Your Rights</h3></span></span></strong>
<span style="font-size: 15px;"><span data-custom-class="body_text">You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:</span></span></div>
<ul>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to know</strong> whether or not we are processing your personal data</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to access</strong> your personal data</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to correct</strong> inaccuracies in your personal data</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to request</strong> the deletion of your personal data</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to obtain a copy</strong> of the personal data you previously shared with us</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to non-discrimination</strong> for exercising your rights</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;"><strong>Right to opt out</strong> of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California's privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</span></li>
</ul>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">Depending upon the state where you live, you may also have the following rights:</span></span></div>
<ul>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota)</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in California, Delaware, and Maryland)</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in Minnesota and Oregon)</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Right to obtain a list of third parties to which we have sold personal data (as permitted by applicable law, including the privacy law in Connecticut)</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Right to review, understand, question, and depending on where you live, correct how personal data has been profiled (as permitted by applicable law, including the privacy law in Connecticut and Minnesota)</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including the privacy law in California)</span></li>
  <li data-custom-class="body_text" style="line-height: 1.5;"><span style="font-size: 15px;">Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including the privacy law in Florida)</span></li>
</ul>
<div style="line-height: 1.5;"><strong><span style="font-size: 15px;"><span data-custom-class="heading_2"><h3>How to Exercise Your Rights</h3></span></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">To exercise these rights, you can contact us by submitting a <a data-custom-class="link" href="https://app.termly.io/dsar/9380f2b0-1a4b-48d5-8972-02667296d7a0" rel="noopener noreferrer" target="_blank">data subject access request</a>, or by referring to the contact details at the bottom of this document.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.</span></span></div>
<div style="line-height: 1.5;"><strong><span style="font-size: 15px;"><span data-custom-class="heading_2"><h3>Request Verification</h3></span></span></strong>
<span style="font-size: 15px;"><span data-custom-class="body_text">Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px;"><span data-custom-class="body_text">If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.</span></span></div>
<div style="line-height: 1.5;"><strong><span style="font-size: 15px;"><span data-custom-class="heading_2"><h3>Appeals</h3></span></span></strong>
<span style="font-size: 15px;"><span data-custom-class="body_text">Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <a target="_blank" data-custom-class="link" href="mailto:James@rhldigital.com">James@rhldigital.com</a>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.</span></span></div>
<div style="line-height: 1.5;"><strong><span style="font-size: 15px;"><span data-custom-class="heading_2"><h3>California "Shine The Light" Law</h3></span></span></strong>
<span style="font-size: 15px;"><span data-custom-class="body_text">California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section <a data-custom-class="link" href="#contact">"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</a></span></span></div>

<div style="line-height: 1.5;"><br></div>
<div id="policyupdates" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>11. DO WE MAKE UPDATES TO THIS NOTICE?</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text"><em><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</em></span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</span></span></div>

<div style="line-height: 1.5;"><br></div>
<div id="contact" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">If you have questions or comments about this notice, you may email us at <a target="_blank" data-custom-class="link" href="mailto:James@rhldigital.com">James@rhldigital.com</a> or contact us by post at:</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div style="line-height: 1.5;"><span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">Reflect His Light LLC<br>3424 Meteor Night<br>Converse, TX 78109<br>United States</span></span></div>

<div style="line-height: 1.5;"><br></div>
<div id="request" style="line-height: 1.5;"><strong><span data-custom-class="heading_1"><h2>13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2></span></strong>
<span style="font-size: 15px; color: rgb(89, 89, 89);"><span data-custom-class="body_text">You have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a <a data-custom-class="link" href="https://app.termly.io/dsar/9380f2b0-1a4b-48d5-8972-02667296d7a0" rel="noopener noreferrer" target="_blank">data subject access request</a>.</span></span></div>
<div style="line-height: 1.5;"><br></div>
<div><span data-custom-class='body_text'>This Privacy Policy was created using Termly's <a href="https://termly.io/products/privacy-policy-generator/" target="_blank" rel="noopener external" data-custom-class='link'>Privacy Policy Generator</a></span></div>
</div>
`;

export default PrivacyPolicy;
