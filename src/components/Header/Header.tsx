import Link from 'next/link';
// import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import { QuestionMarkCircleIcon } from '@heroicons/react/outline';
import { ThemeChanger } from 'src/components';

const Header = () => {
  return (
    <div className="relative z-10 shadow-sm">
      <div className="relative inset-0 z-20">
        <div className="flex inset-0 py-4 px-6 mx-auto max-w-3xl sm:px-6 lg:py-4 lg:px-8">
          <div className="flex relative items-center w-full">
            <div className="grow text-base text-almostblack dark:text-gray-50 sm:text-xl md:text-xl">
              <Link href="/">
                <a className="tracking-normal text-gray-100 opacity-90">
                  <span className="font-mono text-2xl font-semibold tracking-widest uppercase sm:text-2xl">
                    consequent
                  </span>
                </a>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Link href="/docs">
                <a className="w-6 h-6 text-gray-300 hover:text-blue-400 transition-all duration-300 fill-current">
                  <QuestionMarkCircleIcon />
                </a>
              </Link>

              <ThemeChanger />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
