import "./Page.css";
import Section from "../Section/Section";

export default function Page(sections) {
  return (
    <div className="Page">
      {sections &&
        sections.sections.map((section, idx) => {
          return (
            <Section
              sectionName={section.sectionName}
              Subtitle={section.Subtitle}
              key={idx}
            />
          );
        })}
    </div>
  );
}
