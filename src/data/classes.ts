export type ClassCategory =
  | "toddler"
  | "girls"
  | "ninja"
  | "tumbling"
  | "team";

export interface GymClass {
  id: string;
  name: string;
  ageRange: string;
  duration: string;
  price: number | string;
  priceLabel?: string;
  category: ClassCategory;
  description: string;
  highlights?: string[];
}

export const classes: GymClass[] = [
  {
    id: "playgroup",
    name: "Playgroup",
    ageRange: "Walking – 5",
    duration: "Flexible",
    price: 40,
    category: "toddler",
    description:
      "A fun, low-key open gym experience for our youngest athletes. Parents stay and play alongside their little ones as they explore gymnastics equipment in a safe, supervised environment.",
    highlights: ["Parent-supervised", "Open gym format", "Builds confidence"],
  },
  {
    id: "little-tots",
    name: "Little Tots",
    ageRange: "3–4",
    duration: "45 min",
    price: 84,
    category: "toddler",
    description:
      "Structured classes designed specifically for 3 and 4 year olds. Kids develop body awareness, coordination, and listening skills through fun gymnastics activities.",
    highlights: ["Structured curriculum", "Social skills", "Motor development"],
  },
  {
    id: "girls-beginning",
    name: "Girls Beginning",
    ageRange: "5+",
    duration: "55 min",
    price: 88,
    category: "girls",
    description:
      "Perfect entry point for girls new to gymnastics. Students learn fundamental skills on floor, beam, bars, and vault in a supportive, encouraging environment.",
    highlights: ["All 4 events", "Fundamentals focus", "Small class sizes"],
  },
  {
    id: "girls-intermediate",
    name: "Girls Intermediate",
    ageRange: "6+",
    duration: "75 min",
    price: 100,
    category: "girls",
    description:
      "For girls who have mastered beginning skills and are ready to advance. Students work on more complex skills across all four gymnastics events.",
    highlights: ["Advanced skills", "Longer training time", "Competition prep"],
  },
  {
    id: "girls-advanced",
    name: "Girls Advanced",
    ageRange: "6+",
    duration: "90 min",
    price: 120,
    category: "girls",
    description:
      "Our most advanced recreational class. Athletes develop high-level gymnastics skills and work toward optional routines under the guidance of experienced coaches.",
    highlights: ["High-level skills", "Routine development", "Coach mentorship"],
  },
  {
    id: "ninja-academy",
    name: "Ninja Academy",
    ageRange: "3+",
    duration: "55 min",
    price: 88,
    category: "ninja",
    description:
      "Inspired by obstacle course racing and ninja warrior, this high-energy class builds strength, agility, and confidence through challenging but achievable obstacle courses.",
    highlights: ["Obstacle courses", "Strength training", "Co-ed classes"],
  },
  {
    id: "tumbling",
    name: "Tumbling",
    ageRange: "6+",
    duration: "55 min",
    price: 88,
    category: "tumbling",
    description:
      "Focused floor tumbling class ideal for cheerleaders, dancers, and athletes who want to develop strong tumbling skills. Cartwheels to back handsprings and beyond.",
    highlights: ["Floor skills", "Great for cheer/dance", "Progression-based"],
  },
  {
    id: "competitive-team",
    name: "Competitive Team",
    ageRange: "Varies",
    duration: "Varies",
    price: "Contact us",
    category: "team",
    description:
      "Crossfire's competitive gymnastics team trains athletes who are ready to compete at local and regional meets. Tryouts required. Multiple levels available for the right athletes.",
    highlights: ["USAG sanctioned", "Regional competition", "Elite coaching"],
  },
];

export const categoryLabels: Record<ClassCategory | "all", string> = {
  all: "All",
  toddler: "Toddlers",
  girls: "Girls",
  ninja: "Ninja",
  tumbling: "Tumbling",
  team: "Team",
};
