import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { GetContactData } from "@/lib/readContact";
import { SERVICES } from "@/components/services/data";
import CurrentYear from "./CurrentYear";
import { Phone, Smartphone, Mail, Printer, MapPin } from "lucide-react";

const Footer = async (props) => {
  const {
    description = "Delivering reliable and enterprise IT solutions.",
    copyright = (
      <>
        {" "}
        © <CurrentYear />
        ODPCO, All Rights Reserved.
      </>
    ),
    credit = "Designed & Developed by Narin Madadi",
    className,
  } = props;

  const { contactList, address } = await GetContactData();

  const sections = [
    {
      title: "Company",
      links: [
        { name: "Services", href: "/services" },
        { name: "Projects", href: "/projects" },
        { name: "About Us", href: "/about-us" },
        { name: "Contact Us", href: "/contact-us" },
      ],
    },
    {
      title: "Services",
      links: SERVICES.map((services) => ({
        name: services.navLink,
        href: `/services/${services.slug}`,
      })),
    },
    {
      title: "Get In Touch",
      links: [
        { ...contactList[0], icon: Phone },
        { ...contactList[1], icon: Smartphone },
        { ...contactList[2], icon: Mail },
        { ...contactList[3], icon: Printer },
      ],
    },
    {
      title: "Address",
      links: [
        {
          name: address.name,
          icon: MapPin,
        },
      ],
    },
  ];

  const visibleSections = sections.slice(0, 4);

  return (
    <section className={cn("py-32", className)}>
      <div className="container mx-auto">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-7 mx-5">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center lg:justify-start">
                <Link href="/">
                  <Image
                    src="/images/odpco-logo-en.png"
                    alt="orange data processing company logo"
                    className="w-32"
                    width={300}
                    height={100}
                    title="ODPCO"
                  />
                </Link>
              </div>
              <p
                className="mt-4 text-[length:var(--fs-body)]
              "
              >
                {description}
              </p>
            </div>
            {visibleSections.map((section, sectionIdx) => (
              <div
                key={sectionIdx}
                className={section.title === "Address" ? "lg:col-span-2" : ""}
              >
                <h3 className="mb-4 text-sm font-semibold tracking-tight text-[var(--brand-orange)]">
                  {section.title}
                </h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => {
                    const Icon = link.icon;
                    const hasLink = Boolean(link.href);
                    const content = (
                      <>
                        {Icon && (
                          <Icon
                            size={18}
                            strokeWidth={1.5}
                            className="w-[18px] h-[18px] shrink-0 mt-0.5"
                          />
                        )}
                        <span>{link.name}</span>
                      </>
                    );

                    return (
                      <li key={linkIdx}>
                        {hasLink ? (
                          <Link
                            href={link.href}
                            className="flex items-start gap-2 font-medium hover:text-primary transition-colors"
                          >
                            {content}
                          </Link>
                        ) : (
                          <div className="flex items-start gap-2 font-medium cursor-default">
                            {content}
                          </div>
                        )}
                      </li>
                    );
                  })}
                </ul>
                {section.title === "Address" && (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.2531253901916!2d51.422151782982546!3d35.77714703971223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e06875b2987f7%3A0x4550b7828f1cc0b0!2sTehran%20Province%2C%20Tehran%2C%20District%203%2C%20Golfam%20St%2C%20Iran!5e0!3m2!1sen!2s!4v1786779455819!5m2!1sen!2s"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    className="mt-2 h-40 w-full rounded-sm "
                  />
                )}
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-center border-t border-border pt-8 text-[var(--brand-gray)]">
            <p className="text-[length:var(--fs-small)] ">{copyright}</p>
            <p className="text-[length:var(--fs-tiny)]  font-[var(--fw-light)]  mt-5 text-[var(--brand-gray-credit)]">
              {credit}
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
