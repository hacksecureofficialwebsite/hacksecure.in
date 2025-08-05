export function getCardData(link: string) {
  const serviceData = [
    {
      title: "Workshops",
      description:
        "Hands-on cybersecurity workshops for schools and businesses.",
      gradient: "linear-gradient(135deg, #c7d2fe, #bfdbfe)", // pastel indigo to pastel blue
    },
    {
      title: "Webinars",
      description: "Expert-led live sessions on cyber threats and defense.",
      gradient: "linear-gradient(135deg, #e9d5ff, #fbcfe8)", // pastel violet to pink
    },
    {
      title: "Cyber Investigations",
      description: "Financial, data, and reputation threat analysis.",
      gradient: "linear-gradient(135deg, #bae6fd, #e0f2fe)", // pastel cyan to baby blue
    },
    {
      title: "Sessions",
      description: "Interactive awareness programs for all age groups.",
      gradient: "linear-gradient(135deg, #bbf7d0, #dcfce7)", // mint green to light green
    },
  ];

  const partnerData = [
    {
      title: "Global",
      description:
        "Global collaborations to share knowledge, conduct training are welcome.",
      gradient: "linear-gradient(135deg, #fde68a, #fecaca)", // soft amber to rose
    },
    {
      title: "Brand Ambassador",
      description:
        "Represent Hack Secure in your campus, promote our initiatives and help others grow in cybersecurity.",
      gradient: "linear-gradient(135deg, #fde68a, #fecaca)", // soft amber to rose
    },
    {
      title: "Academic",
      description:
        "Bridge the gap between industry and academia by collaborating with schools, colleges, and universities to strengthen cybersecurity education.",
      gradient: "linear-gradient(135deg, #fde68a, #fecaca)", // soft amber to rose
    },
    {
      title: "Corporate",
      description:
        "Collaborate with private sector companies to enhance their security posture, share intelligence, and jointly drive innovation.",
      gradient: "linear-gradient(135deg, #a5f3fc, #99f6e4)", // light teal to aqua
    },
    {
      title: "Community",
      description:
        "Collaborate with student communities, tech groups, and cybersecurity collectives.",
      gradient: "linear-gradient(135deg, #ddd6fe, #c7d2fe)", // lavender to soft indigo
    },
    {
      title: "Events & Sponsors",
      description:
        "We collaborate with tech fests, college events, conferences, and cybersecurity summits to deliver high-value content, training.",
      gradient: "linear-gradient(135deg, #fbcfe8, #fecdd3)", // soft pinks
    },
  ];

  switch (link.toLowerCase()) {
    case "services":
      return serviceData;
    case "partners":
      return partnerData;
    default:
      return [];
  }
}
