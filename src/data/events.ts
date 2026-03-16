export interface GymEvent {
  id: string;
  title: string;
  date: string;
  dateRange?: string;
  time?: string;
  description: string;
  ageRange?: string;
  highlight?: boolean;
}

export const events: GymEvent[] = [
  {
    id: "annual-performance",
    title: "Annual Performance",
    date: "May 16, 2026",
    description:
      "Our flagship annual showcase where students of all levels demonstrate the skills they've worked so hard to develop. Family and friends are welcome to cheer on their gymnasts!",
    highlight: true,
  },
  {
    id: "summer-camp",
    title: "Summer Camp",
    date: "June 8 – July 31, 2026",
    dateRange: "June 8 – July 31",
    time: "Monday–Friday, 8:30 am – 3:00 pm",
    ageRange: "Ages 4–10",
    description:
      "Six weeks of fun-filled gymnastics camp! Kids enjoy daily gymnastics training, games, crafts, and activities in a safe and energetic environment.",
    highlight: true,
  },
  {
    id: "national-gymnastics-day",
    title: "National Gymnastics Day",
    date: "September 20, 2026",
    time: "11:00 am – 12:00 pm",
    description:
      "Celebrate National Gymnastics Day with us! Open to current students and prospective families. Come experience the gym, try some skills, and meet our coaches.",
  },
  {
    id: "halloween-party",
    title: "Halloween Party & Sleepover",
    date: "October 2026",
    description:
      "Our beloved annual Halloween event! Costumes encouraged. Kids enjoy a night of gymnastics, games, and spooky fun — followed by a gym sleepover for those who want to stay.",
    highlight: true,
  },
];
