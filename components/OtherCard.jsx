import StackProgress from "./StackProgress";
import StackTitle from "./StackTitle";

const OtherCard = ({ style }) => {
  return (
    <div
      data-aos={style}
      className="basis-1/3 border rounded-md border-gray-600 p-4 "
    >
      <StackTitle text="Autre Librairie " />
      <div className="flex flex-col justify-center mx-1">
        <StackProgress stack="Jquery" progress="80" />
        <StackProgress stack="AOS" progress="70" />
        <StackProgress stack="Ajax" progress="80" />
        <StackProgress stack="Jquery" progress="80" />
      </div>
      <div className="text-sm font-semibold mt-2">Styles </div>
      <div className="flex flex-col justify-center mx-1">
        <StackProgress stack="Bootstrap" progress="80" />
        <StackProgress stack="Tailwind CSS" progress="70" />
      </div>
    </div>
  );
};

export default OtherCard;
