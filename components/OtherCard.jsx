import { faBook } from "@fortawesome/free-solid-svg-icons";
import StackProgress from "./StackProgress";
import StackTitle from "./StackTitle";
import {
  faBootstrap,
  faStackExchange,
} from "@fortawesome/free-brands-svg-icons";

const OtherCard = ({ style }) => {
  return (
    <div
      data-aos={style}
      className="basis-1/3 border rounded-md border-gray-600 hover:bg-blue-100 shadow-md shadow-blue-100  p-4  shadow-outline-blue-200"
    >
      <StackTitle text="Autre Librairie " />
      <div className="flex flex-col justify-center mx-1">
        <StackProgress stack="Jquery" progress="80" logo={faBook} />
        <StackProgress stack="AOS" progress="70" logo={faBook} />
        <StackProgress stack="Ajax" progress="80" logo={faBook} />
        <StackProgress stack="Datatable" progress="80" logo={faBook} />
      </div>
      <div className="text-sm font-semibold mt-2">Styles </div>
      <div className="flex flex-col justify-center mx-1">
        <StackProgress stack="Bootstrap" progress="80" logo={faBootstrap} />
        <StackProgress
          stack="Tailwind CSS"
          progress="70"
          logo={faStackExchange}
        />
      </div>
    </div>
  );
};

export default OtherCard;
