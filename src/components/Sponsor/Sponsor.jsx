import "./Sponsor.css";
import aiFuturesLogo from "../../images/sponsors/ai_futures.png";
import greenLogo from "../../images/sponsors/OhioIsHome-Green.png";

export default function Sponsor() {
  const sponsorImages = [
    // aiFuturesLogo,
    // greenLogo,
  ];

  return (
    <div className="Container" id="Sponsor">
      {sponsorImages.map((element, index) => {
        return (
          <div style={{ display: "flex", lineHeight: "12px" }} key={index}>
            <img src={element} className="Img" />
          </div>
        );
      })}
      {/* <div style={{ display: 'flex', lineHeight: '12px' }}>
        <img src={greenLogo} className="Img" />
      </div>
      <div style={{ display: 'flex', lineHeight: '12px' }}>
        <img src={aiFuturesLogo} className="Img" />
      </div> */}
    </div>
  );
}
