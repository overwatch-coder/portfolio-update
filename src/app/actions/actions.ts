"use server";

import { revalidatePath } from "next/cache";

export const submitForm = async (prevState: any, formData: FormData) => {
  const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } =
    process.env;

  const formValues = Object.fromEntries(formData);

  const dataToSubmit = {
    service_id: REACT_APP_SERVICE_ID,
    template_id: REACT_APP_TEMPLATE_ID,
    user_id: REACT_APP_USER_ID,
    template_params: {
      fullName: formValues.fullname,
      email: formValues.email,
      subject: formValues.subject,
      message: formValues.message,
      from_name: formValues.fullname,
    },
  };

  try {
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      body: JSON.stringify(dataToSubmit),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw Error("There was a problem sending the message");
    }

    const data = await res.json();
    console.log({ data });

    return revalidatePath("/contact");
  } catch (error: any) {
    console.log({ error });
    return { message: "There was a problem sending the message" };
  }
};
