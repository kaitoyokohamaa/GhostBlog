import { parseISO, format } from "date-fns";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time className="text-gray-600 text-xs md:text-sm" dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}
