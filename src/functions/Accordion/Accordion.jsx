import { useState } from "react";
import "./Accordion.css";
import DOMPurify from "dompurify";

//DOMPurify is used to santize HTML code from the json strings

const Accordion = ({ table }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  function handleClick(index) {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }
  return (
    <div className="Accordion">
      {table.map((element, index) => {
        return (
          <div key={index}>
            <button className="panel" onClick={() => handleClick(index)}>
              <h3>{DOMPurify.sanitize(element.question)}</h3>
            </button>
            {activeIndex == index && (
              <div
                className="popup"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(element.answer),
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default Accordion;
