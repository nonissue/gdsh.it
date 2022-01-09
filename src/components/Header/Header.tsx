import Link from 'next/link';
import { QuestionMarkCircleIcon } from '@heroicons/react/outline';
import { ThemeChanger } from 'src/components';
import * as metadata from 'data/meta.json';

const Header = () => {
  return (
    <div className="relative z-10 shadow-sm">
      <div className="relative inset-0 z-20">
        <div className="flex inset-0 p-4 mx-auto max-w-3xl sm:px-6 lg:py-8">
          <div className="flex relative items-center w-full">
            <div className="grow text-base text-slate-900 dark:text-slate-50 sm:text-xl md:text-xl">
              <Link href="/">
                <a className="text-slate-400 dark:text-slate-200/90">
                  <span className="font-sans text-2xl font-black tracking-tighter sm:text-2xl">
                    {metadata.title}
                  </span>
                </a>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Link href="/docs">
                <a className="w-6 h-6 text-slate-400 hover:text-slate-400 dark:text-slate-500 dark:hover:text-slate-300 transition-all duration-500 fill-current">
                  <QuestionMarkCircleIcon />
                </a>
              </Link>
              &nbsp;
              <ThemeChanger />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
