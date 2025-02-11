import organizer from "./organizers.json";
import CardTable from "../../functions/CardTable/CardTable";

// const options = [
//   { key: 1, text: "2023/2024", value: 1 },
//   { key: 2, text: "2022/2023", value: 2 },
// ];

export default function Organizer() {
  return (
    <div className="Organizer">
      <CardTable table={organizer} />
    </div>
  );
}
