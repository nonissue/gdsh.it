import type { NextPage } from 'next/types';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ExternalLinkIcon, ArrowRightIcon } from '@heroicons/react/outline';
import { getLayout } from 'src/layouts/Layout';

const notTest = 'NOTTEST';

const IndexPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => {
  const [test, setTest] = useState('FML');

  const CONSTANTTEST = 'HAHAHA';

  useEffect(() => {
    setTest((test) => test + '134' + notTest);
    updateTest();
    console.log(CONSTANTTEST);
  }, []);

  useEffect(() => {
    console.log(test);
  }, []);

  const updateTest = () => {
    setTest('NOTTEST');
  };
  return (
    <>
      <section className="text-base leading-relaxed text-gray-600 dark:text-gray-300 divide-y divide-gray-400 divide-dashed sm:leading-relaxed">
        <h5 className="mb-8 text-4xl font-black tracking-tight text-slate-900 dark:text-slate-100 sm:mb-12 sm:text-5xl">
          A Next.js Starter
        </h5>
        <p className="py-8 px-2 text-xl italic tracking-tight leading-relaxed text-center text-gray-800 sm:px-0 sm:text-4xl sm:leading-relaxed sm:text-left">
          Turpis egestas pretium aenean pharetra. Orci eu lobortis elementum
          nibh tellus molestie. Vulputate dignissim suspendisse in est. Vel
          pharetra vel turpis nunc. Malesuada nunc vel risus commodo.
        </p>
        <div>
          <div className="flex flex-col justify-between py-6 mx-auto text-2xl sm:flex-row sm:space-x-4">
            <p className="p-4 mb-3 text-center rounded-md border-2 border-gray-500 shadow-sm sm:mb-0 sm:w-1/2">
              <Link href="/docs">
                <a className="font-bold text-gray-100 hover:text-gray-100 transition-colors duration-100">
                  Get Started
                </a>
              </Link>
              <ArrowRightIcon className="inline-block -mt-1 ml-1 w-4 h-4" />
            </p>
            <p className="p-4 text-center rounded-md border-2 border-gray-600 shadow-sm sm:w-1/2">
              <Link href="https://github.com/nonissue/consequent">
                <a className="font-bold text-gray-300 hover:text-gray-300 transition-colors duration-100">
                  View on Github
                </a>
              </Link>
              <ExternalLinkIcon className="inline-block -mt-1 ml-1 w-4 h-4" />
            </p>
          </div>
        </div>
        {/* <br /> */}
        <p className="py-8">
          Nisi vitae suscipit tellus mauris. Posuere morbi leo urna molestie at
          elementum eu. Urna duis convallis convallis tellus. Urna molestie at
          elementum eu. Nunc sed blandit libero volutpat. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra.
        </p>
        <div className="py-8 space-y-8 sm:flex sm:flex-row sm:space-y-0 sm:space-x-6">
          <p className="sm:w-1/2">
            Orci eu lobortis elementum nibh tellus molestie. Vulputate dignissim
            suspendisse in est. Vel pharetra vel turpis nunc. Malesuada nunc vel
            risus commodo. Nisi vitae suscipit tellus mauris. Posuere morbi leo
            urna molestie at elementum eu. Urna duis convallis convallis tellus.
            Urna molestie at elementum eu. Nunc sed blandit libero volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
            egestas pretium aenean pharetra.
          </p>
          <p className="sm:w-1/2">
            Orci eu lobortis elementum nibh tellus molestie. Vulputate dignissim
            suspendisse in est. Vel pharetra vel turpis nunc. Malesuada nunc vel
            risus commodo. Nisi vitae suscipit tellus mauris. Posuere morbi leo
            urna molestie at elementum eu. Urna duis convallis convallis tellus.
            Urna molestie at elementum eu. Nunc sed blandit libero volutpat.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
            egestas pretium aenean pharetra. Nisi vitae suscipit tellus mauris.
            Posuere morbi leo urna molestie at elementum eu. Urna duis convallis
            convallis tellus. Urna molestie at elementum eu. Nunc sed blandit
            libero volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit.
          </p>
        </div>
        <p></p>
      </section>
    </>
  );
};

IndexPage.getLayout = getLayout;

// eslint-disable-next-line import/no-default-export
export default IndexPage;
