export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Heraldo Filipino Website Redesign',
    description:
      'A modern and minimalist redesign of the Heraldo Filipino website.',
    logo: '/logos/hf.png',
    link: 'https://heraldofilipino.org',
    slug: 'heraldo',
  },
  {
    title: 'IoT-Based Bus Tracking and Passenger Monitoring System',
    description:
      'A real-time tracking and monitoring system for public transportation using IoT technologies.',
    logo: '/logos/iot.svg',
    link: 'https://jjs-dlsud-2025.vercel.app/',
    slug: 'iot-bus-tracking',
  },
];
