import { CalendarIcon } from "@heroicons/react/20/solid";
import { formatDate } from "../../utilities/formatDate";

type DateType = {
  date: string;
};

const Date = ({ date }: DateType) => {
  return (
    <div className="flex items-center gap-2">
      <CalendarIcon className="h-4 w-4 fill-gray-500" />
      <span className="font-bold text-gray-500">
        Posted on {formatDate(date)}
      </span>
    </div>
  );
};

export default Date;
