import {
  Network,
  Server,
  GlobeLock,
  Database,
  EthernetPort,
  HardDrive,
  Cable,
  Shield,
  UserRoundSearch,
  MonitorCheck,
  CheckCheck,
  Spline,
  Bolt,
  FolderCode,
  Terminal,
  BarChart,
} from "lucide-react";

export const SERVICES = [
  {
    id: 1,
    slug: "network-services",
    icon: Network,
    navLink: "Network",
    navDescription: "LAN, MAN & WAN",
    title: "Computer Networks",
    seoTitle: "Computer Network Services",
    shortDescription:
      "Design and set up local and wide area networks based on your business needs",
    description:
      "We design and implement reliable network infrastructure tailored to each organization's requirements. From LAN, MAN and WAN connectivity to network infrastructure, our solutions provide stable communication, efficient resource sharing and a scalable foundation for day-to-day operations.",
    attributes: ["LAN, MAN & WAN", "Network Infrastructure", "Network Design"],
    details: [
      {
        capabilitiesIcon: Network,
        title: "Network Design",
        description:
          "Network architectures designed around your organization's requirements, infrastructure, and future needs.",
      },
      {
        capabilitiesIcon: EthernetPort,
        title: "LAN, MAN & WAN",
        description:
          "Reliable connectivity across offices, sites, and business environments with a focus on stable network performance.",
      },
      {
        capabilitiesIcon: Bolt,
        title: "Network Infrastructure",
        description:
          "Structured network infrastructure designed, and implemented to provide reliable connectivity and support future expansion.",
      },
    ],
  },

  {
    id: 2,
    slug: "hardware-services",
    icon: Server,
    navLink: "Hardware",
    navDescription: "Servers, equipment & cabling",
    title: "IT Hardware Procurement",
    seoTitle: "Hardware Services & Infrastructure Solutions",
    shortDescription:
      "Supply reliable equipment and structured cabling for IT systems",
    description:
      "We supply and deploy IT hardware and infrastructure equipment based on the technical and operational requirements of each project. Our services cover server equipment, essential IT hardware and structured cabling to create an organized and reliable infrastructure.",
    attributes: ["Server Equipment", "IT Hardware", "Structured Cabling"],
    details: [
      {
        capabilitiesIcon: Server,
        title: "Server Equipment",
        description:
          "Server hardware selected and deployed according to workload, performance and infrastructure requirements.",
      },
      {
        capabilitiesIcon: HardDrive,
        title: "IT Hardware",
        description:
          "Reliable computing and peripheral equipment to support business operations and IT environments.",
      },
      {
        capabilitiesIcon: Cable,
        title: "Structured Cabling",
        description:
          "Organized cabling infrastructure designed to provide reliable connectivity and support future expansion.",
      },
    ],
  },

  {
    id: 3,
    slug: "security-network-services",
    icon: GlobeLock,
    navLink: "Security",
    navDescription: "Network protection & monitoring",
    title: "Network Security",
    seoTitle: "Network Security Services",
    shortDescription:
      "Protect your network and systems against threats and unauthorized access",
    description:
      "We provide network security solutions designed to protect critical systems, data, and network infrastructure from threats and unauthorized access. Our approach combines appropriate security controls, access management, and network monitoring based on each organization's environment.",
    attributes: ["Threat Protection", "Access Control", "Network Monitoring"],
    details: [
      {
        capabilitiesIcon: Shield,
        title: "Threat Protection",
        description:
          "Security measures designed to reduce exposure to network threats and protect critical infrastructure.",
      },
      {
        capabilitiesIcon: UserRoundSearch,
        title: "Access Control",
        description:
          "Controlled access to network resources and systems based on organizational security requirements.",
      },
      {
        capabilitiesIcon: MonitorCheck,
        title: "Network Monitoring",
        description:
          "Visibility into network activity and performance to help identify issues and respond to potential security events.",
      },
    ],
  },

  {
    id: 4,
    slug: "data-center-services",
    icon: Database,
    navLink: "Data Center",
    navDescription: "Infrastructure & server solutions",
    title: "Data Center",
    seoTitle: "Data Center Solutions",
    shortDescription:
      "Design and implement modern data centers, ready for operation from day one",
    description:
      "We design and implement data center infrastructure with a focus on reliability, security and operational readiness. Our solutions bring together the essential infrastructure, server systems and supporting components required to build a stable and efficient data center environment.",
    attributes: [
      "Infrastructure Design",
      "Server Systems",
      "Operational Readiness",
    ],
    details: [
      {
        capabilitiesIcon: Spline,
        title: "Infrastructure Design",
        description:
          "Data center infrastructure planned around reliability, scalability, security and the operational needs of each project.",
      },
      {
        capabilitiesIcon: Server,
        title: "Server Systems",
        description:
          "Server infrastructure designed and deployed to support the computing and processing requirements of the environment.",
      },
      {
        capabilitiesIcon: CheckCheck,
        title: "Operational Readiness",
        description:
          "Infrastructure prepared for reliable operation, with the essential systems and components in place from day one.",
      },
    ],
  },

  {
    id: 5,
    slug: "software-ai-services",
    icon: FolderCode,
    navLink: "Software",
    navDescription: "Software development and AI solutions",
    title: "Software & AI",
    seoTitle: "Software & AI Solutions",
    shortDescription:
      "Develop custom enterprise software, optimize complex databases, and build powerful business intelligence solutions tailored to your needs",
    description:
      "We specialize in developing enterprise software and managing high-performance database environments. By combining Java development and web development with enterprise Database (SQL Server & Oracel) management, we build systems designed for reliability",
    attributes: ["Custome Software", "AI Solutions", "Database Management"],
    details: [
      {
        capabilitiesIcon: Terminal,
        title: "Enterprise Software Development",
        description:
          "Design, develop, and maintain secure web-based applications using structured technologies.",
      },
      {
        capabilitiesIcon: Database,
        title: "Database Management & Optimization",
        description: "Comprehensive administration for Database",
      },
      {
        capabilitiesIcon: BarChart,
        title: "Data Engineering",
        description: "Scalable data warehouses and analytics systems.",
      },
    ],
  },
];
