"use client";

import { useFormState, useFormStatus } from "react-dom";
import { submitForm } from "../actions/actions";

const initialState = {
  message: "",
};
const Form = () => {
  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(submitForm, initialState);

  return (
    <form
      action={formAction}
      className="p-5 shadow-lg flex-1 w-full border rounded-md flex flex-col space-y-5"
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
      <button
        disabled={pending}
        className="w-full px-4 py-2 bg-slate-900 rounded text-white hover:scale-[1.01] uppercase"
      >
        Send message
      </button>

      {state?.message && (
        <p className="p-3 bg-red-300 text-red-600 text-center w-full rounded mt-4">
          {state.message}
        </p>
      )}
    </form>
  );
};

export default Form;
