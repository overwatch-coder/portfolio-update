"use client";

import { useFormState } from "react-dom";
import { submitForm } from "../actions/actions";
import { useRef, useState } from "react";
import Button from "./Button";

const initialState = {
  message: "",
  success: false,
  error: "",
};

const Form = () => {
  const [state, formAction] = useFormState(submitForm, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const [closeMessage, setCloseMessage] = useState(false);

  const closeSuccessMessage = () => {
    state.success = false;
    setCloseMessage(true);
    setTimeout(() => {
      setCloseMessage(false);
    }, 3000);
    formRef.current?.reset();
  };

  return (
    <>
      {state?.success && state?.message && (
        <div
          className={`flex flex-col items-center justify-center mx-auto shadow-lg rounded-md p-10 space-y-3 ${
            closeMessage ? "hidden" : ""
          }`}
        >
          <p className="p-3 bg-green-300 text-green-600 text-center w-full rounded mt-4">
            {state?.message}
          </p>

          <button
            onClick={closeSuccessMessage}
            className="px-4 py-2 rounded hover:scale-105 bg-slate-900 text-white uppercase"
          >
            Close
          </button>
        </div>
      )}

      <form
        action={formAction}
        className={`p-5 shadow-lg flex-1 w-full border rounded-md flex flex-col space-y-5 ${
          state?.success ? "hidden" : "flex"
        }`}
        ref={formRef}
      >
        <div className="flex flex-col items-start space-y-3">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            name="fullname"
            required
            placeholder="your full name"
            className="py-2 px-3 w-full rounded border focus:border-2 focus:border-slate-900"
          />
        </div>

        <div className="flex flex-col items-start space-y-3">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            required
            placeholder="your email address"
            className="py-2 px-3 w-full rounded border focus:border-2 focus:border-slate-900"
          />
        </div>

        <div className="flex flex-col items-start space-y-3">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            required
            placeholder="subject of the message"
            className="py-2 px-3 w-full rounded border focus:border-2 focus:border-slate-900"
          />
        </div>

        <input type="hidden" name="dob" />

        <div className="flex flex-col items-start space-y-3">
          <label htmlFor="fullname">Message</label>
          <textarea
            name="message"
            required
            placeholder="your full name"
            rows={7}
            className="py-2 px-3 w-full rounded border focus:border-2 focus:border-slate-900"
          ></textarea>
        </div>

        {!state?.success && state?.error && (
          <p className="p-3 bg-red-300 text-red-600 text-center w-full rounded mt-4">
            {state?.error}
          </p>
        )}

        <Button />
      </form>
    </>
  );
};

export default Form;
