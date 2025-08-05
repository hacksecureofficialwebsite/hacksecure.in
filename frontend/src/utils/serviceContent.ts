export const serviceContent: Record<
  string,
  {
    about: string;
    topics: { name: string; category: string }[];
  }
> = {
  cyberinvestigations: {
    about:
      "Investigate and respond to digital incidents that impact your organization’s finances, data integrity, and reputation through structured intelligence-led analysis.",
    topics: [
      { name: "Financial Crime", category: "investigations" },
      { name: "Data theft", category: "investigations" },
      { name: "Reputational damage", category: "investigations" },
    ],
  },
  sessions: {
    about:
      "Engage your teams or students with structured cybersecurity sessions focused on building practical skills, improving threat readiness, and aligning with current industry standards.",
    topics: [
      { name: "Cyber Hygiene", category: "sessions" },
      { name: "Phishing Awareness", category: "sessions" },
      { name: "Get Into Cyber Security", category: "sessions" },
      { name: "Safe Internet Usage", category: "sessions" },
      { name: "Cyber Security Career", category: "sessions" },
      { name: "Women in Cyber Security", category: "sessions" },
    ],
  },
  workshops: {
    about:
      "Our workshops are designed to provide high-impact, practical training experiences designed for universities, colleges, organizations, and communities.",
    topics: [
      // Red Team
      { name: "Red Team", category: "red team" },
      { name: "Intro to EH & Kali Linux", category: "red team" },
      { name: "OWSAP TOP 10", category: "red team" },
      { name: "Network & Wireshark Basics", category: "red team" },
      { name: "Vulnerable Assessment (CTF)", category: "red team" },
      { name: "Social Engineering Tactics", category: "red team" },
      // Blue Team
      { name: "Blue Team", category: "blue team" },
      { name: "Digital Forensics & Incident Response", category: "blue team" },
      { name: "SIEM Tools & Log Analytics", category: "blue team" },
      { name: "Insider Threat Hunting", category: "blue team" },
      { name: "Malware Analysis", category: "blue team" },
      { name: "Defensive Strategies in SOC", category: "blue team" },
      { name: "Cyber Security in Cloud", category: "blue team" },
      // Other Topics
      { name: "Other Topics", category: "other" },
      { name: "IoT Security", category: "other" },
      { name: "Blockchain", category: "other" },
      { name: "AI in Cyber Security", category: "other" },
    ],
  },
  webinars: {
    about:
      "Our webinars are focused on raising cybersecurity awareness, sharing expert knowledge, and delivering strategic insights to audiences across educational institutions, organizations, and communities. Each session is crafted to be informative, interactive, and relevant to today’s Digital Era.",
    topics: [
      { name: "Career in Cyber Security", category: "webinars" },
      {
        name: "Cyber Laws in India & Global Compliances",
        category: "webinars",
      },
      {
        name: "Building the Portfolio as a Cyber Security Student",
        category: "webinars",
      },
      {
        name: "AI vs Hackers: The Future of Cyber Defense",
        category: "webinars",
      },
      {
        name: "Cyber Security for Startups and Small Business",
        category: "webinars",
      },
    ],
  },
};
