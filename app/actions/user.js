"use server";

import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function updateUserProfile(prevState, formData) {
  const userId = formData.get("userId");
  const currentPassword = formData.get("currentPassword");
  const newPassword = formData.get("newPassword");
  const confirmPassword = formData.get("confirmPassword");

  if (newPassword.length < 4) {
    return { error: "New password must be at least 4 characters long!" };
  }

  if (currentPassword === newPassword) {
    return {
      error: "New password cannot be the same as the current password!",
    };
  }

  if (newPassword !== confirmPassword) {
    return { error: "New password and confirmation do not match!" };
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  const isPasswordValid = await bcrypt.compare(currentPassword, user.password);
  if (!isPasswordValid) {
    return { error: "The current password is incorrect!" };
  }

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await prisma.user.update({
    where: { id: userId },
    data: { password: hashedPassword },
  });

  await new Promise((resolve) => setTimeout(resolve, 2500));

  return { success: "Password updated successfully!" };
}
