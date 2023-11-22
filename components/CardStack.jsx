import StackProgress from "./StackProgress";
import StackTitle from "./StackTitle";

const CardStack = ({ title, techno, framework, style }) => {
  return (
    <div
      data-aos={style}
      className="basis-1/3 border rounded-md border-gray-600 p-4 shadow-md shadow-gray-400 shadow-outline-gray-200"
    >
      <StackTitle text={title} />
      <div className="flex flex-col justify-center mx-1">
        <div className="text-sm font-semibold">Frameworks</div>
        <div className="mt-1">
          {framework.map(({ stack_name, progress, logo }, index) => (
            <StackProgress
              key={index}
              stack={stack_name}
              progress={progress}
              logo={logo}
            />
          ))}
        </div>
        <div className="text-sm font-semibold mt-2">
          Langage de programmations
        </div>
        <div className="mt-1">
          {techno.map(({ stack_name, progress, logo }, index) => (
            <StackProgress
              key={index}
              stack={stack_name}
              progress={progress}
              logo={logo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardStack;
