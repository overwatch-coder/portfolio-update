"use server";

export const submitForm = async (prevState: any, formData: FormData) => {
  const dataToSubmit = {
    service_id: process.env.EMAIL_JS_SERVICE_ID as string,
    template_id: process.env.EMAIL_JS_TEMPLATE_ID as string,
    user_id: process.env.EMAIL_JS_USER_ID as string,
    accessToken: process.env.EMAIL_JS_ACCESS_TOKEN as string,
    template_params: {
      fullName: formData.get("fullname") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      from_name: formData.get("fullname") as string,
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

    if (res.status !== 200) {
      console.log({ erorr: await res.text(), res, message: "if clause" });
      throw Error("There was a problem sending the message");
    }

    return {
      message: "Thank you for leaving a message. I will respond to you asap!",
      success: true,
      error: "",
    };
  } catch (error: any) {
    return {
      error: "There was a problem sending the message",
      success: false,
      message: "",
    };
  }
};
