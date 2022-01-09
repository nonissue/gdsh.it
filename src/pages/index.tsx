import type { NextPage } from 'next/types';
import Link from 'next/link';
import { ExternalLinkIcon, ArrowRightIcon } from '@heroicons/react/outline';
import { getLayout } from 'src/layouts/Layout';

const IndexPage: NextPage & {
  getLayout?: (component: JSX.Element) => JSX.Element;
} = () => (
  <>
    <section className="text-base leading-relaxed text-slate-600 dark:text-slate-300 divide-y divide-slate-300 dark:divide-slate-700 divide-dashed sm:leading-relaxed">
      <h5 className="mb-4 text-3xl font-bold tracking-tight leading-snug text-slate-600/90 dark:text-slate-200 sm:mb-12 sm:text-5xl sm:leading-normal">
        Another Next
        <span className="font-mono text-base font-semibold tracking-wide text-orange-400 uppercase align-text-top sm:text-2xl sm:font-semibold">
          .js
        </span>{' '}
        Starter
      </h5>
      <p className="py-4 px-0 text-xl italic tracking-tight leading-relaxed text-slate-500 dark:text-slate-200 sm:py-8 sm:px-0 sm:text-3xl sm:leading-normal sm:text-left">
        Turpis egestas pretium aenean pharetra. Orci eu lobortis elementum nibh
        tellus molestie. Vulputate dignissim suspendisse in est. Vel pharetra
        vel turpis nunc. Malesuada nunc vel risus commodo.
      </p>
      <div>
        <div className="flex flex-col justify-between py-4 mx-auto space-y-4 text-base sm:flex-row sm:py-8 sm:space-y-0 sm:space-x-4 sm:text-xl">
          <p className="p-2 text-center bg-slate-100/0 dark:bg-slate-800/50 rounded-none border dark:border-2 border-slate-300 dark:border-slate-700 shadow-sm dark:shadow-xl sm:p-4 sm:w-1/2">
            <Link href="/docs">
              <a className="font-bold text-slate-700 hover:text-slate-700 dark:text-slate-200 dark:hover:text-slate-400 transition-colors duration-100">
                Get Started
              </a>
            </Link>
            <ArrowRightIcon className="inline-block -mt-1 ml-1 w-4 h-4" />
          </p>
          <p className="p-2 text-center bg-slate-100/0 dark:bg-slate-800/50 rounded-none border dark:border-2 border-slate-300 dark:border-slate-700 shadow-sm dark:shadow-xl sm:p-4 sm:w-1/2">
            <Link href="https://github.com/nonissue/consequent">
              <a className="font-bold text-slate-700 hover:text-slate-700 dark:text-slate-200 dark:hover:text-slate-400 transition-colors duration-100">
                View on Github
              </a>
            </Link>
            <ExternalLinkIcon className="inline-block -mt-1 ml-1 w-4 h-4" />
          </p>
        </div>
      </div>
      {/* <br /> */}
      <p className="py-4 sm:py-8">
        Nisi vitae suscipit tellus mauris. Posuere morbi leo urna molestie at
        elementum eu. Urna duis convallis convallis tellus. Urna molestie at
        elementum eu. Nunc sed blandit libero volutpat. Lorem ipsum dolor sit
        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Turpis egestas pretium aenean pharetra.
      </p>
      <div className="py-4 space-y-8 sm:flex sm:flex-row sm:py-8 sm:space-y-0 sm:space-x-6">
        <p className="sm:w-1/2">
          Orci eu lobortis elementum nibh tellus molestie. Vulputate dignissim
          suspendisse in est. Vel pharetra vel turpis nunc. Malesuada nunc vel
          risus commodo. Nisi vitae suscipit tellus mauris. Posuere morbi leo
          urna molestie at elementum eu. Urna duis convallis convallis tellus.
          Urna molestie at elementum eu. Nunc sed blandit libero volutpat. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Turpis egestas
          pretium aenean pharetra.
        </p>
        <p className="sm:w-1/2">
          Orci eu lobortis elementum nibh tellus molestie. Vulputate dignissim
          suspendisse in est. Vel pharetra vel turpis nunc. Malesuada nunc vel
          risus commodo. Nisi vitae suscipit tellus mauris. Posuere morbi leo
          urna molestie at elementum eu. Urna duis convallis convallis tellus.
          Urna molestie at elementum eu. Nunc sed blandit libero volutpat. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Turpis egestas
          pretium aenean pharetra. Nisi vitae suscipit tellus mauris. Posuere
          morbi leo urna molestie at elementum eu. Urna duis convallis convallis
          tellus. Urna molestie at elementum eu. Nunc sed blandit libero
          volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <p></p>
    </section>
  </>
);

IndexPage.getLayout = getLayout;

// eslint-disable-next-line import/no-default-export
export default IndexPage;
