import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TitlePage({ title, icon }) {
  return (
    <>
      <div className=" mx-5 flex justify-center items-center p-2 border-b border-dashed border-gray-500 md:border-0">
        <div className="pr-4 text-2xl">
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className="">
          <h2 className="text-2xl font-bold text-gray-600">{title}</h2>
        </div>
      </div>
      <div className=" hidden md:block text-center mb-6 font-bold text-4xl">
        -------------------
      </div>
    </>
  );
}
