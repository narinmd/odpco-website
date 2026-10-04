export const validateConsultationForm = ({ fullName, phone, message }) => {
  const errors = [];

  if (!fullName || fullName.trim().length === 0) {
    errors.push("Full name is required.");
  }

  const phonePattern = /^0\d{10}$/;
  if (!phone || !phonePattern.test(phone.trim())) {
    errors.push(
      "Please enter a valid 11-digit phone number (e.g. 021... or 091...).",
    );
  }

  return errors;
};
