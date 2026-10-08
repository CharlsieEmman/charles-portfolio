export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    title: 'IoT-Based Bus Tracking and Passenger Monitoring System',
    description:
      'A real-time tracking and monitoring system for public transportation using IoT technologies.',
    logo: '/logos/iot.svg',
    link: 'https://jjs-dlsud-2025.vercel.app/',
    slug: 'iot-bus-tracking',
    tags: ['C++', 'IoT', 'ESP32', 'Embedded Systems'],
  },
  {
    title: 'Heraldo Filipino Website Redesign',
    description:
      'A modern and minimalist redesign of the Heraldo Filipino website.',
    logo: '/logos/hf.PNG',
    link: 'https://heraldofilipino.org',
    slug: 'heraldo',
    tags: ['Wordpress', 'UI/UX'],
  },
  {
    title: 'Heraldo Filipino Archives',
    description:
      'A collection of archived publications dated as early as 1985 from the Heraldo Filipino.',
    logo: '/logos/hf.PNG',
    link: 'https://heraldofilipino.org/archives',
    slug: 'heraldo-archives',
    tags: ['Wordpress', 'HTML', 'CSS'],
  },
  {
    title: 'Shopee Fraudulent Product Detection',
    description:
      'A system for identifying and flagging fraudulent products in Shopee.',
    logo: '/logos/shopee.png',
    link: 'https://github.com/s1yah/E-commerce-Fraudulent-Product-Detection',
    slug: 'shopee-fraud-detection',
    tags: ['Python', 'Machine Learning', 'NLP', 'Isolation Forest'],
  },
  {
    title: 'Cross-Platform Store Identity Verification System',
    description:
      'A system for verifying the identity of stores across multiple platforms.',
    logo: '/logos/shopee.png',
    link: 'https://github.com/s1yah/Cross-platform-E-commerce-Store-Identity-Verifier',
    slug: 'cross-platform-store-verification',
    tags: ['Python', 'Machine Learning', 'Neural Network', 'Fuzzy Matching'],
  },
];