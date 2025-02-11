import "./About.css";
import { useLocation } from "react-router";

export default function About() {
  const location = useLocation();
  return (
    <div className="About" id="About">
      {location.pathname === "/" && (
        <div>
          <p>
            The first and best hackathon hosted at Ohio University hosted at
            Ohio University by OU Cybersecurity Club, OUGDA, NSBE, Software Dev
            Club, ACM, IEEE, and CEO. This event is open to students of all
            backgrounds. Our mission is to provide students with technical and
            professional opportunities outside of the confines of the classroom.
          </p>
          <h3>Connect with Ohio University&apos;s Tech Community</h3>
          <p>
            Meet other students who are interested in technology, game design,
            engineering, and cyber security in an open atmosphere for learning
            and developing.
          </p>
          <h3>Accelerate Your Career</h3>
          <p>
            Attend events like our flagship hackathon and have the opportunity
            to collaborate with students from all around as well as meet our
            sponsors.
          </p>
          <h3>BobcatCTF</h3>
          <p>
            At the same time as our hackathon, we will be hosting a Capture the
            Flag event with its own prizes!
          </p>
        </div>
      )}
      {location.pathname === "/sponsorship" && (
        <div>
          <p>
            BlossomHack began as a way to increase awareness and attendance of
            events put on by EECS student organizations. Founders Alex Williams,
            Justin Garvey, and Natalie Soltis of the National Society of Black
            Engineers (NSBE), Association of Computing Machinery (ACM), and Ohio
            University Game Developers Association (OUGDA) created the idea to
            combine their club&apos;s annual events and after adding Drew
            Mullett and Isabel Alvarez of the Institute for Electrical and
            Electronic Engineers (IEEE) and Society of Women Engineers (SWE),
            the team was able to produce BlossomHack 2023. The event had a total
            of 67 attendees with an over $12,000 prize pool, pushing dozens of
            students to explore outside their comfort zone and learn new skills.
          </p>

          <p>
            Currently, our mission for BlossomHack 2024 is to increase the
            capacity for our hardware hacking section and give attendees a
            greater chance to expand their comfort zone through side events to
            introduce more computing concepts.
          </p>
        </div>
      )}
    </div>
  );
}
