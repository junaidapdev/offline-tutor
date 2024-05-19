import Link from "next/link";
import React from "react";

const FindTutor = () => {
  return (
    
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
              Popular Subjects
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Find Tutors in Your Subject
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Our tutors cover a wide range of subjects to help you or your
              child excel.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:gap-6">
            <Link
              className="group flex h-20 w-full items-center justify-center rounded-lg bg-white p-4 shadow-sm transition-all hover:bg-gray-100 hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:shadow-lg"
              href="#"
            >
              <div className="flex flex-col items-center justify-center space-y-1">
                {/* <CalculatorIcon className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="16" height="20" x="4" y="2" rx="2" />
                  <line x1="8" x2="16" y1="6" y2="6" />
                  <line x1="16" x2="16" y1="14" y2="18" />
                  <path d="M16 10h.01" />
                  <path d="M12 10h.01" />
                  <path d="M8 10h.01" />
                  <path d="M12 14h.01" />
                  <path d="M8 14h.01" />
                  <path d="M12 18h.01" />
                  <path d="M8 18h.01" />
                </svg>
                <span className="text-sm font-medium group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50">
                  Math
                </span>
              </div>
            </Link>
            <Link
              className="group flex h-20 w-full items-center justify-center rounded-lg bg-white p-4 shadow-sm transition-all hover:bg-gray-100 hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:shadow-lg"
              href="#"
            >
              <div className="flex flex-col items-center justify-center space-y-1">
                {/* <MicroscopeIcon className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 18h8" />
                  <path d="M3 22h18" />
                  <path d="M14 22a7 7 0 1 0 0-14h-1" />
                  <path d="M9 14h2" />
                  <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
                  <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
                </svg>
                <span className="text-sm font-medium group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50">
                  Science
                </span>
              </div>
            </Link>
            <Link
              className="group flex h-20 w-full items-center justify-center rounded-lg bg-white p-4 shadow-sm transition-all hover:bg-gray-100 hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:shadow-lg"
              href="#"
            >
              <div className="flex flex-col items-center justify-center space-y-1">
                {/* <LanguagesIcon className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m5 8 6 6" />
                  <path d="m4 14 6-6 2-3" />
                  <path d="M2 5h12" />
                  <path d="M7 2h1" />
                  <path d="m22 22-5-10-5 10" />
                  <path d="M14 18h6" />
                </svg>
                <span className="text-sm font-medium group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50">
                  English
                </span>
              </div>
            </Link>
            <Link
              className="group flex h-20 w-full items-center justify-center rounded-lg bg-white p-4 shadow-sm transition-all hover:bg-gray-100 hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:shadow-lg"
              href="#"
            >
              <div className="flex flex-col items-center justify-center space-y-1">
                {/* <HistoryIcon className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
                  <path d="M3 3v5h5" />
                  <path d="M12 7v5l4 2" />
                </svg>
                <span className="text-sm font-medium group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50">
                  History
                </span>
              </div>
            </Link>
            <Link
              className="group flex h-20 w-full items-center justify-center rounded-lg bg-white p-4 shadow-sm transition-all hover:bg-gray-100 hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:shadow-lg"
              href="#"
            >
              <div className="flex flex-col items-center justify-center space-y-1">
                {/* <LanguagesIcon className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m5 8 6 6" />
                  <path d="m4 14 6-6 2-3" />
                  <path d="M2 5h12" />
                  <path d="M7 2h1" />
                  <path d="m22 22-5-10-5 10" />
                  <path d="M14 18h6" />
                </svg>
                <span className="text-sm font-medium group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50">
                  Languages
                </span>
              </div>
            </Link>
            <Link
              className="group flex h-20 w-full items-center justify-center rounded-lg bg-white p-4 shadow-sm transition-all hover:bg-gray-100 hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:shadow-lg"
              href="#"
            >
              <div className="flex flex-col items-center justify-center space-y-1">
                {/* <ComputerIcon className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="14" height="8" x="5" y="2" rx="2" />
                  <rect width="20" height="8" x="2" y="14" rx="2" />
                  <path d="M6 18h2" />
                  <path d="M12 18h6" />
                </svg>
                <span className="text-sm font-medium group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50">
                  Computer Science
                </span>
              </div>
            </Link>
            <Link
              className="group flex h-20 w-full items-center justify-center rounded-lg bg-white p-4 shadow-sm transition-all hover:bg-gray-100 hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:shadow-lg"
              href="#"
            >
              <div className="flex flex-col items-center justify-center space-y-1">
                {/* <CalculatorIcon className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="16" height="20" x="4" y="2" rx="2" />
                  <line x1="8" x2="16" y1="6" y2="6" />
                  <line x1="16" x2="16" y1="14" y2="18" />
                  <path d="M16 10h.01" />
                  <path d="M12 10h.01" />
                  <path d="M8 10h.01" />
                  <path d="M12 14h.01" />
                  <path d="M8 14h.01" />
                  <path d="M12 18h.01" />
                  <path d="M8 18h.01" />
                </svg>
                <span className="text-sm font-medium group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50">
                  Math
                </span>
              </div>
            </Link>
            <Link
              className="group flex h-20 w-full items-center justify-center rounded-lg bg-white p-4 shadow-sm transition-all hover:bg-gray-100 hover:shadow-md dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:shadow-lg"
              href="#"
            >
              <div className="flex flex-col items-center justify-center space-y-1">
                {/* <LanguagesIcon className="h-8 w-8 text-gray-500 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m5 8 6 6" />
                  <path d="m4 14 6-6 2-3" />
                  <path d="M2 5h12" />
                  <path d="M7 2h1" />
                  <path d="m22 22-5-10-5 10" />
                  <path d="M14 18h6" />
                </svg>
                <span className="text-sm font-medium group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-gray-50">
                  English
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindTutor;
