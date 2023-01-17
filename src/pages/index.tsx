import { NextPage } from 'next';
import Head from 'next/head';
import Navbar from './components/Navbar';
import { useState } from 'react';

const Home: NextPage = () => {
  const [text, setText] = useState('');
  const [showTost, setShowToast] = useState(false);

  const handleEnter = (e: any) => {
    if (e.key === 'Enter') {
      console.log('enter press here! ' + text);
      e.preventDefault();
      setText('');
      setShowToast(true);
    }
  };

  return (
    <div>
      <Head>
        <title>Railway NextJS Prisma</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:py-16 lg:px-8 lg:py-20">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Find your inner GM</span>
              <span className="block text-indigo-600">
                Sign up for the waitlist now
              </span>
            </h2>
            <div className="mt-8 flex">
              <div className="ml-3 inline-flex">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      onKeyDown={handleEnter}
                      type="email"
                      name="email"
                      id="email"
                      className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                      placeholder="you@example.com"
                    />
                  </div>
                  {showTost && (
                    <div className="mt-2 text-sm text-green-600">
                      Thank you for signing up!
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="pt-6">UPDATE (1/17/2023): building ML models</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
