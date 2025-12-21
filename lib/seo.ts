const rawDeploymentUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.soumayaelmaghlachi.dev/";
const deploymentUrl = rawDeploymentUrl.startsWith("http")
  ? rawDeploymentUrl
  : `https://${rawDeploymentUrl}`;

export const siteUrl = deploymentUrl.endsWith("/")
  ? deploymentUrl.slice(0, -1)
  : deploymentUrl;

export const siteTitle =
  "Soumaya Elmaghlachi | Full-Stack Developer & WordPress / Shopify Expert";

export const siteDescription =
  "Full-stack software engineer with 5+ years experience in Next.js, WordPress, Shopify, and custom plugins. View real projects, code, and case studies.";

export const siteName = "Soumaya Elmaghlachi Portfolio";

export const siteKeywords = [
  "Soumaya Elmaghlachi",
  "full-stack developer",
  "Next.js engineer",
  "Shopify expert",
  "WordPress developer",
  "React portfolio",
  "TypeScript",
  "freelance web developer",
  "frontend and backend",
  "ecommerce developer",
];

export const personName = "Soumaya Elmaghlachi";
export const personRole = "Full-Stack Software Engineer & Freelance Web Developer";

export const highlightedSkills = [
  "Next.js",
  "React",
  "Node.js",
  "Shopify",
  "WordPress",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
];
