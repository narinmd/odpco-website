"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function updateContactInfo(prevState, formData) {
  const email = formData.get("email");
  const phone = formData.get("phone");
  const mobile = formData.get("mobile");
  const fax = formData.get("fax");
  const address = formData.get("address");

  try {
    const existingSetting = await prisma.contactManagement.findFirst();

    if (existingSetting) {
      await prisma.contactManagement.update({
        where: { id: existingSetting.id },
        data: { email, phone, mobile, fax, address },
      });
    } else {
      await prisma.contactManagement.create({
        data: { email, phone, mobile, fax, address },
      });
    }

    revalidatePath("/", "layout");

    return { success: "Contact information updated successfully!" };
  } catch (error) {
    console.error(error);
    return { error: "Failed to update contact settings. Please try again." };
  }
}
