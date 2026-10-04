import React from "react";
import { GetContactData, getContactData } from "@/lib/readContact";
import { MapPin } from "lucide-react";
export default async function ContactInfo() {
  const { contactList, address } = await GetContactData();
  return (
    <div className="p-5 shadow-sm rounded-sm bg-white">
      <h2 className="text-[length:var(--fs-h2)] mb-[24px] text-[var(--brand-blue)] lg:text-start text-center">
        Contact Information
      </h2>

      <div className="flex flex-col justify-between lg:h-[450px] gap-5">
        {contactList.map((info) => {
          const Icon = info.icon;

          return (
            <div key={info.label} className="flex gap-5">
              {Icon && (
                <Icon
                  strokeWidth={1.5}
                  className="mt-1 text-[var(--brand-orange)] transition-colors duration-300"
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

        <div className="flex gap-5">
          {address.icon && (
            <address.icon
              strokeWidth={1.5}
              className="mt-1 text-[var(--brand-orange)] shrink-0 transition-colors duration-300"
            />
          )}

          <div>
            <p className="font-[var(--fw-semibold)] text-[length:var(--fs-body)]">
              Address
            </p>

            <p className=" text-[length:var(--fs-body)]">{address.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
