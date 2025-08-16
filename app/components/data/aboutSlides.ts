export type AboutSlide = {
  key: string;
  label: string; // Short label for tab/dot tooltip
  title: string; // Heading badge text
  body: string; // Main paragraph
};

export const aboutSlides: AboutSlide[] = [
  {
    key: "story",
    label: "Our Story",
    title: "Our Story",
    body: "We are a specialized staffing firm dedicated to connecting top-tier talent with leading organizations in the IT and Healthcare & Pharmaceutical sectors. With deep industry knowledge and an extensive network of professionals, we understand the specific skills, certifications, and cultural fit required for success in these demanding fields.",
  },
  {
    key: "vision",
    label: "Vision",
    title: "Our Vision",
    body: "To empower organizations and professionals by creating meaningful connections that drive innovation, improve patient outcomes, and advance technological solutions.",
  },
  {
    key: "why",
    label: "Why Choose Us",
    title: "Why Choose Us",
    body: "Industry Expertise: Deep understanding of IT and healthcare/pharma sectors\nQuality Focus: Rigorous screening and qualification processes\nSpeed to Market: Efficient placement timelines without compromising quality\nLong-term Partnerships: Building lasting relationships with clients and candidates\nCompliance Knowledge: Understanding of industry regulations and requirements",
  },
];
