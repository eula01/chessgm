import Head from 'next/head';
import Navbar from './components/Navbar';

const faqs = [
  {
    question: 'Is this like a Buzzfeed quiz?',
    answer: 'Lmao',
  },
  {
    question: "How do you know which chess GM I'm most similar to?",
    answer:
      'We use a proprietary machine learning algorithm that analyzes all your chess games and represents your playstyle as an n-dimensional vector. We then find the closet match against a database of pre-computed vectors for all GMs.',
  },
  {
    question: 'How can this help me improve at chess?',
    answer: `Natural differences in the way we intuitively think about chess leads to a diverse set of "thought categories". If you know which category you belong to, you can double down and direct your chess studies more effectively. Aggressive? Read Fischer. Positional? Read Karpov`,
  },
];

export default function About() {
  return (
    <div>
      <Head>
        <title>Railway NextJS Prisma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main>
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">
                  How it works
                </h2>
              </div>
              <div className="mt-12 lg:mt-0 lg:col-span-2">
                <dl className="space-y-12">
                  {faqs.map((faq) => (
                    <div key={faq.question}>
                      <dt className="text-lg leading-6 font-medium text-gray-900">
                        {faq.question}
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        {faq.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
