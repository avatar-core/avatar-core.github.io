import Accordion from "@/components/utils/accordion";

const QUESTIONS = [
  {
    question: "How does Avatar AI work?",
    answer:
      `Our platform's onboarding process collects information on your personality, audience demographics, and monetization objectives. ` +
      `Our team's AI engineers will then create a conversational AI with your personality for you to distribute to your fans through a secure link. ` +
      `Avatar AI will then continually message, engage, and monetize your audience anywhere and anytime with no additional work from you.`,
  },
  {
    question: "How much does Avatar AI cost?",
    answer:
      "Avatar AI has a free trial period of a month. " +
      "Subscriptions start at $25 per month. " +
      "Creators who sell a single chat subscription to their fans will have their monthly subscription cost covered.",
  },
  {
    question: "Who owns my data?",
    answer:
      "You own all of the data between you and your fans. All messages are encrypted, stored securely, and deleted if you ever stop using Avatar AI.",
  },
  {
    question: "How much can I make?",
    answer:
      "The average active creator makes ~$600 per month from their fans through chat subscriptions and PPV (Pay Per View) content.",
  },
  {
    question: "How am I paid?",
    answer:
      "Creators are paid on a monthly basis. Avatar AI offers payment solutions by direct ACH transfers, Paypal, and Zelle.",
  },
] as const;

export default function Faqs() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-20">
            <div className="uppercase mb-4 text-xl font-bold text-blue-600 tracking-wider">
              FAQ
            </div>
            <h2 className="h2">Questions & Answers</h2>
          </div>

          {/* Faqs */}
          <ul className="max-w-3xl mx-auto pl-12">
            {QUESTIONS.map((q, i) => (
              <Accordion key={i} title={q.question} active>
                {q.answer}
              </Accordion>
            ))}
            <span
              className="block border-t border-gray-200"
              aria-hidden="true"
            ></span>
          </ul>
        </div>
      </div>
    </section>
  );
}
