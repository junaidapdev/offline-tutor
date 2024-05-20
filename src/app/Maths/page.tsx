import { LanguagesIcon, MapPinIcon, PlayIcon, StarIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Spotlight } from "../(home)/components/ui/Spotlight";

const Maths = () => {
  const tutor = {
    
    image: "/placeholder.svg",
    name: "Maha S Ibrahim",
    degree: "B.Sc Honors in Chemical Engineering",
    expertise: "Math, Science",
    experience: "6 Years",
    price: "₹500/hr",
    video: "https://www.youtube.com/embed/3C2VyvHb8fo",
    avatar: "/placeholder-user.jpg",
  };

  return (
    <>
      {/*  */}
      <section className="container mx-auto py-12 px-4 md:px-6 w-full md:py-24 lg:py-32 bg-black/[0.96] antialiased bg-grid-white/[0.07] overflow-x-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20 obsalute"
          fill="white"
        />
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Maths Tutors in Your Area.
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Our tutors cover a wide range of subjects to help you or your child
            excel.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-9">
          {/* <div className="border-2 dark:bg-gray-950 rounded-lg shadow-md overflow-hidden"> */}

          <div className="bg-white/5 backdrop-blur-md border max-w-sm border-gray-200 dark:border-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <div className="aspect-video relative">
                <iframe
                  width="400"
                  height="300"
                  src={tutor.video}
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                Top Tutor
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {tutor.name}
                  </h3>
                  <p className="text-white dark:text-gray-400 text-sm">
                    {tutor.degree}
                  </p>
                  <p className="text-white dark:text-gray-400 text-sm mt-4">
                    <MapPinIcon className="w-4 h-4 inline-block mr-2" />
                    Bengaluru
                  </p>
                  <p className="text-white dark:text-gray-400 text-sm">
                    <LanguagesIcon className="w-4 h-4 inline-block mr-2" />
                    English, Kannada, Hindi
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-white dark:text-gray-400 text-sm ">
                  Expertise: {tutor.expertise}
                </p>
                <p className="text-white dark:text-gray-400 text-sm">
                  Teaching Experience: {tutor.experience}
                </p>
              </div>

              <div className="flex justify-between items-center text-white">
                <div className="flex items-center fill-white">
                  <StarIcon className="w-5 h-5 fill-white" />
                  <StarIcon className="w-5 h-5 fill-white" />
                  <StarIcon className="w-5 h-5 fill-white" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <span className="ml-2 text-white dark:text-gray-400 text-sm">
                    5.0
                  </span>
                </div>
                <div className="text-white font-semibold">{tutor.price}</div>
              </div>

              <div className="mt-6 flex justify-between">
                <Link href="/book-now" passHref>
                  <button className="bg-primary text-white px-4 py-2 rounded-md">
                    Book now
                  </button>
                </Link>
                <Link href="/view-profile" passHref>
                  <button className="border border-white text-white px-4 py-2 rounded-md">
                    View profile
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="bg-white/5 backdrop-blur-md border max-w-sm border-gray-200 dark:border-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <div className="aspect-video relative">
                <iframe
                  width="400"
                  height="300"
                  src={tutor.video}
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                Top Tutor
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {tutor.name}
                  </h3>
                  <p className="text-white dark:text-gray-400 text-sm">
                    {tutor.degree}
                  </p>
                  <p className="text-white dark:text-gray-400 text-sm mt-4">
                    <MapPinIcon className="w-4 h-4 inline-block mr-2" />
                    Bengaluru
                  </p>
                  <p className="text-white dark:text-gray-400 text-sm">
                    <LanguagesIcon className="w-4 h-4 inline-block mr-2" />
                    English, Kannada, Hindi
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-white dark:text-gray-400 text-sm ">
                  Expertise: {tutor.expertise}
                </p>
                <p className="text-white dark:text-gray-400 text-sm">
                  Teaching Experience: {tutor.experience}
                </p>
              </div>

              <div className="flex justify-between items-center text-white">
                <div className="flex items-center fill-white">
                  <StarIcon className="w-5 h-5 fill-white" />
                  <StarIcon className="w-5 h-5 fill-white" />
                  <StarIcon className="w-5 h-5 fill-white" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <span className="ml-2 text-white dark:text-gray-400 text-sm">
                    5.0
                  </span>
                </div>
                <div className="text-white font-semibold">{tutor.price}</div>
              </div>

              <div className="mt-6 flex justify-between">
                <Link href="/book-now" passHref>
                  <button className="bg-primary text-white px-4 py-2 rounded-md">
                    Book now
                  </button>
                </Link>
                <Link href="/view-profile" passHref>
                  <button className="border border-white text-white px-4 py-2 rounded-md">
                    View profile
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/*  */}

          <div className="bg-white/5 backdrop-blur-md border max-w-sm border-gray-200 dark:border-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <div className="aspect-video relative">
                <iframe
                  width="400"
                  height="300"
                  src={tutor.video}
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                Top Tutor
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {tutor.name}
                  </h3>
                  <p className="text-white dark:text-gray-400 text-sm">
                    {tutor.degree}
                  </p>
                  <p className="text-white dark:text-gray-400 text-sm mt-4">
                    <MapPinIcon className="w-4 h-4 inline-block mr-2" />
                    Bengaluru
                  </p>
                  <p className="text-white dark:text-gray-400 text-sm">
                    <LanguagesIcon className="w-4 h-4 inline-block mr-2" />
                    English, Kannada, Hindi
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-white dark:text-gray-400 text-sm ">
                  Expertise: {tutor.expertise}
                </p>
                <p className="text-white dark:text-gray-400 text-sm">
                  Teaching Experience: {tutor.experience}
                </p>
              </div>

              <div className="flex justify-between items-center text-white">
                <div className="flex items-center fill-white">
                  <StarIcon className="w-5 h-5 fill-white" />
                  <StarIcon className="w-5 h-5 fill-white" />
                  <StarIcon className="w-5 h-5 fill-white" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <span className="ml-2 text-white dark:text-gray-400 text-sm">
                    5.0
                  </span>
                </div>
                <div className="text-white font-semibold">{tutor.price}</div>
              </div>

              <div className="mt-6 flex justify-between">
                <Link href="/book-now" passHref>
                  <button className="bg-primary text-white px-4 py-2 rounded-md">
                    Book now
                  </button>
                </Link>
                <Link href="/view-profile" passHref>
                  <button className="border border-white text-white px-4 py-2 rounded-md">
                    View profile
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/*  */}

          <div className="bg-white/5 backdrop-blur-md border max-w-sm border-gray-200 dark:border-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <div className="aspect-video relative">
                <iframe
                  width="400"
                  height="300"
                  src={tutor.video}
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                Top Tutor
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {tutor.name}
                  </h3>
                  <p className="text-white dark:text-gray-400 text-sm">
                    {tutor.degree}
                  </p>
                  <p className="text-white dark:text-gray-400 text-sm mt-4">
                    <MapPinIcon className="w-4 h-4 inline-block mr-2" />
                    Bengaluru
                  </p>
                  <p className="text-white dark:text-gray-400 text-sm">
                    <LanguagesIcon className="w-4 h-4 inline-block mr-2" />
                    English, Kannada, Hindi
                  </p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-white dark:text-gray-400 text-sm ">
                  Expertise: {tutor.expertise}
                </p>
                <p className="text-white dark:text-gray-400 text-sm">
                  Teaching Experience: {tutor.experience}
                </p>
              </div>

              <div className="flex justify-between items-center text-white">
                <div className="flex items-center fill-white">
                  <StarIcon className="w-5 h-5 fill-white" />
                  <StarIcon className="w-5 h-5 fill-white" />
                  <StarIcon className="w-5 h-5 fill-white" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <StarIcon className="w-5 h-5 fill-primary" />
                  <span className="ml-2 text-white dark:text-gray-400 text-sm">
                    5.0
                  </span>
                </div>
                <div className="text-white font-semibold">{tutor.price}</div>
              </div>

              <div className="mt-6 flex justify-between">
                <Link href="/book-now" passHref>
                  <button className="bg-primary text-white px-4 py-2 rounded-md">
                    Book now
                  </button>
                </Link>
                <Link href="/view-profile" passHref>
                  <button className="border border-white text-white px-4 py-2 rounded-md">
                    View profile
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Maths;
