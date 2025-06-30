export function getISTStatus(): {
  hour: number;
  minute: string;
  day: string;
  color: string;
} {
  const now = new Date();
  const utcHour = now.getUTCHours();
  const utcMinute = now.getUTCMinutes();

  // Convert to IST
  let istHour = utcHour + 5;
  let istMinute = utcMinute + 30;

  if (istMinute >= 60) {
    istMinute -= 60;
    istHour += 1;
  }

  istHour = istHour % 24;

  // Determine day in IST
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let istDayIndex = now.getUTCDay();

  if (utcHour * 60 + utcMinute + 330 >= 1440) {
    istDayIndex = (istDayIndex + 1) % 7;
  }

  const day = days[istDayIndex];

  let color = "bg-gray-400";
  if (istHour >= 9 && istHour < 20) {
    color = "bg-green-500";
  } else if (istHour >= 20 && istHour < 24) {
    color = "bg-orange-400";
  }

  const minuteStr = istMinute.toString().padStart(2, "0");

  return { hour: istHour, minute: minuteStr, day, color };
}
