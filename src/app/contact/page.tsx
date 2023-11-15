import SocialMedia from "../components/SocialMedia";
import Form from "./Form";

const ContactPage = () => {
  return (
    <section className="flex flex-col space-y-5 py-10 md:max-w-xl w-full mx-auto items-center">
      <h1 className="text-center font-semibold text-2xl md:text-4xl lg:text-5xl text-slate-900">
        Get In Touch
      </h1>

      <div className="mx-auto flex flex-col items-center">
        {/* Social Media */}
        <SocialMedia />
      </div>

      <div className="pt-10 flex flex-col space-y-5 md:px-5 items-center mx-auto w-full">
        <p className="text-sm text-slate-500 text-center">
          My inbox is always open. Whether you have a question or just want to
          say hello, I'll try my best to get back to you! Feel free to email me
          about any relevant job updates.
        </p>

        {/* Form Goes Here */}
        <Form />
      </div>
    </section>
  );
};

export default ContactPage;
