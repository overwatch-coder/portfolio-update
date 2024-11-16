import SocialMedia from "@/components/social-media";

export function Contact() {
  return (
    <section id="contact" className="container py-24 sm:py-32 -mt-24">
      <div className="max-w-4xl mx-auto px-4 md:px-auto">
        <div className="group">
          <h2 className="text-[4vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear px-4 md:px-10">
            Get In Touch
          </h2>
          <div className="h-24 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full"></div>
        </div>

        <div className="mx-auto flex flex-col items-center">
          {/* Social Media */}
          <SocialMedia classes="dark:text-gray-200 dark:border-slate-100" />
        </div>

        <div className="pt-10 flex flex-col space-y-5 md:px-5 items-center mx-auto w-full max-w-2xl px-4 md:px-auto">
          <p className="text-sm text-slate-500 text-center dark:text-gray-200">
            My inbox is always open. Whether you have a question or just want to
            say hello, I&apos;ll try my best to get back to you! Feel free to
            email me about any relevant job updates.
          </p>
        </div>
      </div>
    </section>
  );
}
