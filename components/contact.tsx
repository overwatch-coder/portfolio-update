"use client";

import { useState } from "react";
import SocialMedia from "@/components/social-media";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const initialForm = { name: "", email: "", subject: "", message: "" };

export function Contact() {
  const [form, setForm] = useState(initialForm);

  const hasContent = Object.values(form).some((v) => v.trim() !== "");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleClear() {
    setForm(initialForm);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { name, email, subject, message } = form;
    const mailtoUrl = `mailto:devbrainy98@gmail.com?subject=${encodeURIComponent(subject || "Contact from Portfolio")}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.location.href = mailtoUrl;
  }

  return (
    <section id="contact" className="container py-24 sm:py-32 -mt-24">
      <div className="max-w-5xl mx-auto px-4">
        <div className="group">
          <h2 className="text-[4vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear px-4 md:px-10">
            Get In Touch
          </h2>
          <div className="h-24 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full"></div>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Left – Contact Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-sm font-medium text-slate-700 dark:text-gray-200"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
                className="rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="text-sm font-medium text-slate-700 dark:text-gray-200"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
                className="rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="subject"
                className="text-sm font-medium text-slate-700 dark:text-gray-200"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What's this about?"
                value={form.subject}
                onChange={handleChange}
                className="rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="message"
                className="text-sm font-medium text-slate-700 dark:text-gray-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message here…"
                value={form.message}
                onChange={handleChange}
                required
                className="rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-1">
              <Button type="submit" className="flex-1">
                Send Message
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleClear}
                disabled={!hasContent}
                className="flex items-center gap-2"
              >
                <X className="h-4 w-4" />
                Clear
              </Button>
            </div>
          </form>

          {/* Right – Social Media & Info */}
          <div className="flex flex-col gap-6">
            <p className="text-sm text-slate-500 dark:text-gray-200">
              My inbox is always open. Whether you have a question or just want
              to say hello, I&apos;ll try my best to get back to you! Feel free
              to email me about any relevant job updates.
            </p>
            <SocialMedia classes="dark:text-gray-200 dark:border-slate-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
