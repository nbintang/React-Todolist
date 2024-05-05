export default function Dates() {
  const now = new Date();
  const dateList = now.toString().slice(0, 15);
  const dateTime = now.toLocaleTimeString("id-ID");
  const dates = `${dateList} at ${dateTime.replaceAll(".", ":")}`;


  return dates
}