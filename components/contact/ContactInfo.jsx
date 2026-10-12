import React from "react";
import { GetContactData } from "@/lib/readContact";

import { Phone, Smartphone, Mail, Printer, Clock, MapPin } from "lucide-react";

export default async function ContactInfo() {
  const { contactList, address } = await GetContactData();

  const contactWithIcons = [
    { ...contactList[0], icon: Phone },
    { ...contactList[1], icon: Smartphone },
    { ...contactList[2], icon: Printer },
    { ...contactList[3], icon: Mail },
    { ...contactList[4], icon: Clock },
  ];

  return (
    <div className="p-5 shadow-sm rounded-sm bg-white">
      <h2 className="text-[length:var(--fs-h2)] mb-[24px] text-[var(--brand-blue)] lg:text-start text-center">
        Contact Information
      </h2>

      <div className="flex flex-col justify-between lg:h-[450px] gap-5">
        {contactWithIcons.map((info, index) => {
          if (!info || !info.label) return null;

          const Icon = info.icon;

          return (
            <div key={index} className="flex gap-5">
              {Icon && (
                <Icon
                  strokeWidth={1.5}
                  className="mt-1 text-[var(--brand-orange)] transition-colors duration-300 shrink-0"
                />
              )}

              <div>
                <p className="font-[var(--fw-semibold)] text-[length:var(--fs-body)]">
                  {info.label}
                </p>

                {info.href && info.href !== "#" ? (
                  <a
                    href={info.href}
                    className=" hover:text-[var(--brand-blue)] transition-colors"
                  >
                    {info.name}
                  </a>
                ) : (
                  <p className=" text-[length:var(--fs-body)]">{info.name}</p>
                )}
              </div>
            </div>
          );
        })}

        {address && (
          <div className="flex gap-5">
            <MapPin
              strokeWidth={1.5}
              className="mt-1 text-[var(--brand-orange)] shrink-0 transition-colors duration-300"
            />

            <div>
              <p className="font-[var(--fw-semibold)] text-[length:var(--fs-body)]">
                Address
              </p>

              <p className=" text-[length:var(--fs-body)]">{address.name}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
