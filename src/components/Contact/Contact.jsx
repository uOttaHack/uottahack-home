import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact" id="Contact">
      <p>
        We&apos;re always excited to partner with others both on campus and
        professionally. Reach out to us if you&apos;d like to join us on our
        quest!
      </p>

      <br />
      <h3>
        Interested in sponsoring our hackathon, becoming a partner or looking
        for a promotion? Have any other inquiries for us?
      </h3>
      <h3>Please contact us!</h3>
      <a href="mailto:blossomhackou@gmail.com">
        <button className="scroll-button">
          <span className="text">Message us at</span>
          <span className="text-hidden">blossomhackou@gmail.com</span>
        </button>
      </a>
    </div>
  );
}
