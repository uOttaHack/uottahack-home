import "./CardTable.css";
const CardTable = ({ table }) => {
  return (
    <div className="CardTable">
      {table.map((element, index) => {
        // The if conditional determines if organizer has a personal url link
        if (element.href.trim() === "") {
          return (
            <div className="card" key={index}>
              {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}

              <div className="header">{element.header}</div>
              <div className="paragraph">{element.meta}</div>
            </div>
          );
        } else {
          return (
            <a
              href={element.href}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <div className="cardLink">
                {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}

                <div className="header">{element.header}</div>
                <div className="paragraph">{element.meta}</div>
              </div>
            </a>
          );
        }
      })}
    </div>
  );
};
export default CardTable;

<a href="" target="_blank" rel="noopener noreferrer">
  <div className="card">
    {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}

    <div className="header">John Doe</div>
    <div className="paragraph">Architect & Engineer</div>
  </div>
</a>;
