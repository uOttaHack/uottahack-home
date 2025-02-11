import ougda from "../../images/hosts/ougda.png";
import nsbe from "../../images/hosts/nsbe.png";
import ieee from "../../images/hosts/ieee.png";
import acm from "../../images/hosts/acm.png";
import ceo from "../../images/hosts/ceo.png";
import sdc from "../../images/hosts/sdc.png";
import swe from "../../images/hosts/swe.png";
import "./Hosts.css";

function Hosts() {
  const hostImages = [swe, nsbe, ougda, ceo, sdc, acm, ieee];

  return (
    <div className="Hosts">
      {hostImages.map((element, index) => {
        return <img src={element} className="Img" key={index} />;
      })}
    </div>
  );
}

export default Hosts;
