import "./Footer.css";
import FooterLogo from "../../images/footerlogo.png";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Body">
        <div className="Logo">
          <img src={FooterLogo} alt="Logo" />
        </div>

        <div className="LogoText">
          <p>Ohio University&apos;s Biggest Hackathon</p>
        </div>

        <div className="Container">
          <div className="Links">
            <a href="https://mlh.io/privacy" target="_blank">
              Privacy Policy
            </a>
            <a
              href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
              target="_blank"
            >
              Code of Conduct
            </a>
            <a
              href="https://github.com/hi-names-nat/blossomhack"
              target="_blank"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
