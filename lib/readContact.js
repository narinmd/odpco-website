import prisma from "@/lib/prisma";

export async function GetContactData() {
  "use cache";
  const dbData = await prisma.contactManagement.findFirst();

  const contactList = [
    {
      label: "Phone",
      name: dbData?.phone || "---",
      href: `tel:${dbData?.phone}`,
    },
    {
      label: "Mobile",
      name: dbData?.mobile || "---",
      href: `https://wa.me/${dbData?.mobile}`,
    },
    {
      label: "Email",
      name: dbData?.email || "---",
      href: `mailto:${dbData?.email}`,
    },
    { label: "Fax", name: dbData?.fax || "---" },
  ];

  const address = {
    name: dbData?.address || "---",
  };

  return { contactList, address };
}
