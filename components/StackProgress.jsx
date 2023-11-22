import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StackProgress = ({ stack, progress, logo }) => {
  return (
    <div className="flex flex-col justify-center py-1">
      <div className="text-sm text-gray-500">
        <FontAwesomeIcon icon={logo} className="px-2" />
        {stack}
      </div>
      <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-2.5 rounded-full"
          style={{ width: progress + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default StackProgress;
