import { SERVICES } from "@/components/services/data";
import { PROJECTS } from "@/components/projects/data";

const BASE_URL = "https://odpco.com";

export default function sitemap() {
  const staticPages = [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
    },
  ];

  const servicePages = SERVICES.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const projectPages = PROJECTS.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...servicePages, ...projectPages];
}