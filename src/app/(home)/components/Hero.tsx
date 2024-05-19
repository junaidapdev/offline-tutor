import { Input } from "@/components/ui/input";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "@/components/ui/button";


const Hero = () => {
  return (
    // <section className="w-full py-28 md:py-30 lg:py-24 xl:py-48">
    <section className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="container mx-auto px-10 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              Find the Perfect Tutor Near You
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Get personalized one-on-one tutoring from experienced
              professionals in your local area.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex space-x-2">
              <Input
                className="max-w-lg flex-1"
                placeholder="Search for tutors by subject or location"
                type="text"
              />
              <Button type="submit">Search</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
