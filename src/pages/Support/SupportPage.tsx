import { useState } from "react";

function SupportPage() {
  const [openFAQ, setOpenFAQ] =
    useState<number | null>(0);

  const faqs = [
    {
      question:
        "How do I cancel a booking?",
      answer:
        "You can cancel bookings from your account dashboard or booking confirmation page.",
    },
    {
      question:
        "How long do refunds take?",
      answer:
        "Refunds usually take 5–10 business days depending on your payment provider.",
    },
    {
      question:
        "Can I modify my hotel reservation?",
      answer:
        "Yes, modifications are available depending on hotel policies and room availability.",
    },
    {
      question:
        "What payment methods are accepted?",
      answer:
        "We support Visa, Mastercard, American Express, PayPal, and Apple Pay.",
    },
    {
      question:
        "How do I contact support?",
      answer:
        "You can use live chat, phone support, or email support available below.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      {/* HERO */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <p className="text-sm font-bold uppercase tracking-[4px] text-[#14B8A6]">
            Support Center
          </p>

          <h1 className="mt-6 text-6xl font-black text-slate-900 md:text-7xl">
            How can we help?
          </h1>

          <p className="mt-6 max-w-3xl text-xl leading-9 text-slate-500">
            Get help with bookings,
            payments, cancellations,
            travel information, and
            account support.
          </p>

          {/* SEARCH */}
          <div className="mt-12 flex flex-col gap-4 rounded-[32px] bg-slate-100 p-5 shadow-lg md:flex-row">
            <input
              type="text"
              placeholder="Search help articles..."
              className="
                h-16
                flex-1
                rounded-2xl
                border
                border-slate-200
                bg-white
                px-6
                text-lg
                outline-none
              "
            />

            <button
              className="
                h-16
                rounded-2xl
                bg-gradient-to-r
                from-[#2563EB]
                to-[#14B8A6]
                px-10
                text-lg
                font-bold
                text-white
              "
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* CONTACT OPTIONS */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-3">
          {/* CHAT */}
          <div className="rounded-[32px] bg-white p-8 shadow-xl">
            <div className="text-5xl">💬</div>

            <h3 className="mt-6 text-3xl font-black text-slate-900">
              Live Chat
            </h3>

            <p className="mt-4 leading-8 text-slate-500">
              Chat with our support
              team in real-time for
              instant help.
            </p>

            <button
              className="
                mt-8
                h-14
                w-full
                rounded-2xl
                bg-slate-900
                text-lg
                font-bold
                text-white
              "
            >
              Start Chat
            </button>
          </div>

          {/* CALL */}
          <div className="rounded-[32px] bg-white p-8 shadow-xl">
            <div className="text-5xl">📞</div>

            <h3 className="mt-6 text-3xl font-black text-slate-900">
              Call Support
            </h3>

            <p className="mt-4 leading-8 text-slate-500">
              Available 24/7 for urgent
              travel and booking issues.
            </p>

            <div className="mt-8 rounded-2xl bg-slate-100 p-5">
              <p className="text-sm text-slate-500">
                Main Support
              </p>

              <h4 className="mt-2 text-2xl font-black text-slate-900">
                +1 (800) 555-2030
              </h4>
            </div>
          </div>

          {/* EMAIL */}
          <div className="rounded-[32px] bg-white p-8 shadow-xl">
            <div className="text-5xl">✉️</div>

            <h3 className="mt-6 text-3xl font-black text-slate-900">
              Email Support
            </h3>

            <p className="mt-4 leading-8 text-slate-500">
              Send us detailed issues
              and our team will respond
              within 24 hours.
            </p>

            <div className="mt-8 rounded-2xl bg-slate-100 p-5">
              <p className="text-sm text-slate-500">
                Support Email
              </p>

              <h4 className="mt-2 text-xl font-black text-slate-900">
                support@nextrip.com
              </h4>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-5xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>

          <div className="mt-12 space-y-5">
            {faqs.map((faq, index) => {
              const isOpen =
                openFAQ === index;

              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-[28px] bg-white shadow-lg"
                >
                  <button
                    onClick={() =>
                      setOpenFAQ(
                        isOpen
                          ? null
                          : index
                      )
                    }
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      p-8
                      text-left
                    "
                  >
                    <h3 className="text-2xl font-black text-slate-900">
                      {faq.question}
                    </h3>

                    <span className="text-3xl font-light">
                      {isOpen
                        ? "−"
                        : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-8 pb-8">
                      <p className="text-lg leading-8 text-slate-500">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SupportPage;