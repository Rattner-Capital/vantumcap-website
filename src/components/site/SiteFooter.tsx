 "use client";

import { FormEvent, useState } from "react";
import Image from "next/image";

export default function SiteFooter() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitted(false);
    setSubmitError("");
    setIsSubmitting(true);

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 12000);
      let response: Response;
      try {
        response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
          signal: controller.signal,
        });
      } finally {
        clearTimeout(timeoutId);
      }

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error || "Failed to send inquiry.");
      }

      setIsSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      const message = error instanceof Error ? error.message : "We were unable to send your inquiry at this time. Please try again.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <footer id="contact-footer" className="border-t border-white/15 bg-[#002b49]">
      <div className="mx-auto max-w-[1240px] px-6 py-14 sm:px-10">
        <div className="mb-12 border border-white/20 bg-[linear-gradient(135deg,rgba(0,43,73,0.66)_0%,rgba(1,173,211,0.14)_100%)] p-7">
          <p className="text-[10px] uppercase tracking-[0.16em] text-[#b8d6ea]">Contact Our Investment Team</p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#d8e7f2]">
            Share your inquiry and our team will follow up with you shortly.
          </p>
          <form onSubmit={handleSubmit} className="mt-5 max-w-3xl space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="Name"
                className="w-full border border-white/30 bg-transparent px-3 py-2 text-sm text-white placeholder:text-[#b8d6ea]/80"
              />
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Email"
                className="w-full border border-white/30 bg-transparent px-3 py-2 text-sm text-white placeholder:text-[#b8d6ea]/80"
              />
            </div>
            <textarea
              name="message"
              required
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              placeholder="Message"
              rows={4}
              className="w-full resize-y border border-white/30 bg-transparent px-3 py-2 text-sm text-white placeholder:text-[#b8d6ea]/80"
            />
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="border border-white/40 px-5 py-2 text-[10px] uppercase tracking-[0.16em] text-[#d8e7f2] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send to team"}
              </button>
              {isSubmitted ? (
                <p className="flex items-center gap-2 text-sm text-[#8ff0b8]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 20 20"
                    className="h-4 w-4 flex-none"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.172 7.707 8.88a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Our investment team will be in touch shortly. Thank you for your inquiry.
                </p>
              ) : null}
              {submitError ? <p className="text-sm text-[#ffb4b4]">{submitError}</p> : null}
            </div>
          </form>
        </div>

        <div className="border-b border-white/15 pb-12">
          <div>
            <div className="relative h-[63px] w-[262px] max-w-full">
              <Image
                src="/vantum-logo-footer-white.png"
                alt="Vantum Capital"
                fill
                className="object-contain object-left"
                sizes="262px"
              />
            </div>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#d8e7f2]">
              Special situations investment firm focused on complexity, dislocation, and value transformation opportunities.
            </p>
          </div>
        </div>
        <div className="pt-6 text-[11px] leading-relaxed text-[#b8d6ea]">
          The information on this website is provided for informational purposes only and does not constitute an offer to sell, or a solicitation of an offer to buy, any security or advisory service. Any such offer will be made only through definitive documentation and in accordance with applicable law.
        </div>
      </div>
    </footer>
  );
}
