import type { NextPage } from 'next/types';
import Link from 'next/link';
import { ExternalLinkIcon, ArrowRightIcon } from '@heroicons/react/outline';
import { getLayout } from 'src/layouts/Layout';

const IndexPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => (
  <>
    <section className="text-base leading-relaxed text-slate-600 dark:text-slate-300 divide-y-0 divide-slate-300 dark:divide-slate-700 divide-dashed sm:leading-relaxed">
      <div className="p-1 mx-auto bg-gradient-to-r from-indigo-500 dark:from-indigo-300 via-purple-500 dark:via-purple-300 to-pink-500 dark:to-pink-300 rounded-2xl shadow sm:w-2/3">
        <div className=" tracking-tight leading-relaxed text-slate-500 dark:text-slate-200 bg-white dark:bg-almostblack rounded-xl shadow-sm dark:shadow-xl backdrop-brightness-0 p-5 sm:leading-normal sm:text-left">
          <h5 className="mb-4 text-3xl font-black tracking-tight leading-snug text-indigo-900 dark:text-indigo-100 sm:mb-5 sm:text-6xl sm:leading-[1]">
            Another Next
            <span className="font-mono text-base font-semibold tracking-wide text-indigo-400 uppercase align-baseline sm:text-xl sm:font-semibold">
              .js
            </span>{' '}
            Starter
          </h5>
          <p>
            Turpis egestas pretium aenean pharetra. Orci eu lobortis elementum
            nibh tellus molestie. Vulputate dignissim suspendisse in est. Vel
            pharetra vel turpis nunc. Malesuada nunc vel risus commodo.
          </p>
          <div className="flex flex-col justify-end items-end mt-12 text-base sm:flex-col sm:mt-5">
            <Link href="/docs">
              <a className="p-2 min-w-[140px] font-bold text-center text-slate-50 hover:text-indigo-100 dark:text-slate-200 bg-indigo-900 hover:bg-indigo-800 dark:bg-indigo-900 dark:hover:bg-indigo-800 rounded-full border-2 border-indigo-300 dark:border-indigo-800 shadow-sm dark:shadow-sm shadow-indigo-900/20 dark:shadow-indigo-900 transition-colors duration-300">
                Get Started
                <ArrowRightIcon className="inline-block -mt-1 ml-1 w-4 h-4" />
              </a>
            </Link>

            <div className="hidden p-0.5 min-w-[50%] bg-gradient-to-r from-indigo-400 dark:from-indigo-400 via-indigo-400 dark:via-indigo-400 to-indigo-400 dark:to-indigo-400 rounded-[8px]">
              <div className="p-1 text-center bg-white dark:bg-slat-400 rounded-[6px] border-slate-300 dark:border-slate-700 shadow-sm dark:shadow-xl sm:py-1 sm:px-2">
                <Link href="/docs">
                  <a className="font-bold text-indigo-900 hover:text-slate-700 dark:text-slate-200 dark:hover:text-slate-400 transition-colors duration-100">
                    Get Started
                  </a>
                </Link>
                <ArrowRightIcon className="inline-block -mt-1 ml-1 w-4 h-4" />
              </div>
            </div>
            <div className="hidden p-0.5 min-w-[50%]  bg-gradient-to-r from-indigo-400 dark:from-indigo-400 via-indigo-400 dark:via-indigo-400 to-indigo-400 dark:to-indigo-400 rounded-[8px]">
              <div className="p-1 text-center bg-white dark:bg-slate-900 rounded-[6px] border-slate-300 dark:border-slate-700 shadow-sm dark:shadow-xl sm:px-2 sm:py-1">
                <Link href="https://github.com/nonissue/consequent">
                  <a className="font-bold text-indigo-900 hover:text-slate-700 dark:text-slate-200 dark:hover:text-slate-400 transition-colors duration-100">
                    Github
                  </a>
                </Link>
                <ExternalLinkIcon className="inline-block -mt-1 ml-1 w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>

      {true ? (
        ''
      ) : (
        <>
          <p className="py-4 sm:py-8">
            Nisi vitae suscipit tellus mauris. Posuere morbi leo urna molestie
            at elementum eu. Urna duis convallis convallis tellus. Urna molestie
            at elementum eu. Nunc sed blandit libero volutpat. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Turpis egestas pretium
            aenean pharetra.
          </p>
          <div className="py-4 space-y-8 sm:flex sm:flex-row sm:py-8 sm:space-y-0 sm:space-x-6">
            <p className="sm:w-1/2">
              Orci eu lobortis elementum nibh tellus molestie. Vulputate
              dignissim suspendisse in est. Vel pharetra vel turpis nunc.
              Malesuada nunc vel risus commodo. Nisi vitae suscipit tellus
              mauris. Posuere morbi leo urna molestie at elementum eu. Urna duis
              convallis convallis tellus. Urna molestie at elementum eu. Nunc
              sed blandit libero volutpat. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Turpis egestas pretium aenean
              pharetra.
            </p>
            <p className="sm:w-1/2">
              Orci eu lobortis elementum nibh tellus molestie. Vulputate
              dignissim suspendisse in est. Vel pharetra vel turpis nunc.
              Malesuada nunc vel risus commodo. Nisi vitae suscipit tellus
              mauris. Posuere morbi leo urna molestie at elementum eu. Urna duis
              convallis convallis tellus. Urna molestie at elementum eu. Nunc
              sed blandit libero volutpat. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Turpis egestas pretium aenean
              pharetra. Nisi vitae suscipit tellus mauris. Posuere morbi leo
              urna molestie at elementum eu. Urna duis convallis convallis
              tellus. Urna molestie at elementum eu. Nunc sed blandit libero
              volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <p></p>
        </>
      )}
    </section>
  </>
);

IndexPage.getLayout = getLayout;

// eslint-disable-next-line import/no-default-export
export default IndexPage;
