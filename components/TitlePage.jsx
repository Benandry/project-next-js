import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TitlePage({ title, icon }) {
  return (
    <div className="flex justify-center items-center p-7">
      <div className="px-4 text-2xl">
        <FontAwesomeIcon icon={icon} />
      </div>
      <div className="">
        <h2 className="text-2xl font-bold text-gray-600">{title}</h2>
      </div>
    </div>
  );
}
