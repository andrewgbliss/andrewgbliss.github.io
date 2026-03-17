"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FileText, Briefcase, Linkedin } from "lucide-react";
import { website } from "@/lib/website";

export function HoverLinks() {
  const container = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full max-w-7xl mx-auto px-4 py-4 sm:py-8"
    >
      {/* Header Section */}
      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start mb-8 sm:mb-12 lg:mb-16">
        {/* Left Side - Image */}
        <div className="flex flex-col items-center lg:items-end">
          <motion.div variants={item}>
            <img
              src={`andy.jpg`}
              alt={website.name}
              className="rounded-2xl h-48 w-48 sm:h-64 sm:w-64 lg:h-96 lg:w-96 object-cover object-top shadow-2xl ring-1 ring-white/10"
            />
          </motion.div>
        </div>

        {/* Right Side - Text Content and SVG */}
        <div className="text-center lg:text-left space-y-3 sm:space-y-4 lg:space-y-6 flex flex-col justify-center">
          <motion.h1
            variants={item}
            className="text-white text-3xl sm:text-5xl lg:text-7xl font-bold tracking-tight"
          >
            {website.name}
          </motion.h1>
          <motion.p
            variants={item}
            className="text-blue-100 text-lg sm:text-xl lg:text-3xl font-light"
          >
            {website.description}
          </motion.p>
          <motion.p
            variants={item}
            className="text-white/70 text-lg sm:text-xl leading-relaxed md:block hidden"
          >
            Passionate about crafting elegant solutions to complex problems,
            building scalable applications, and turning innovative ideas into
            reality through clean, efficient code.
          </motion.p>

          {/* SVG in Right Column */}
          <motion.div
            variants={item}
            className="flex items-center justify-center lg:justify-start mt-4 sm:mt-6 lg:mt-8"
          >
            <svg
              width="300"
              height="150"
              viewBox="0 0 400 200"
              className="opacity-70 w-full max-w-xs mx-auto lg:mx-0"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Computer Monitor */}
              <rect
                x="60"
                y="70"
                width="120"
                height="75"
                rx="6"
                stroke="currentColor"
                strokeWidth="2"
                fill="rgba(59, 130, 246, 0.1)"
                className="text-blue-400"
              />
              {/* Computer Screen */}
              <rect
                x="68"
                y="78"
                width="104"
                height="52"
                rx="3"
                fill="rgba(30, 41, 59, 0.8)"
              />
              {/* Code Lines */}
              <line
                x1="75"
                y1="88"
                x2="105"
                y2="88"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-green-400"
              />
              <line
                x1="75"
                y1="98"
                x2="145"
                y2="98"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-blue-300"
              />
              <line
                x1="75"
                y1="108"
                x2="125"
                y2="108"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-yellow-400"
              />
              <line
                x1="75"
                y1="118"
                x2="155"
                y2="118"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-purple-400"
              />

              {/* Computer Stand */}
              <rect
                x="115"
                y="145"
                width="15"
                height="20"
                fill="currentColor"
                className="text-slate-400"
              />
              {/* Computer Base */}
              <rect
                x="95"
                y="165"
                width="55"
                height="6"
                rx="3"
                fill="currentColor"
                className="text-slate-400"
              />

              {/* Rocket Ship */}
              <g transform="translate(240, 50)">
                {/* Rocket Body */}
                <ellipse
                  cx="25"
                  cy="55"
                  rx="12"
                  ry="35"
                  fill="currentColor"
                  className="text-slate-300"
                />
                {/* Rocket Nose */}
                <path
                  d="M 13 20 Q 25 8 37 20"
                  fill="currentColor"
                  className="text-blue-400"
                />
                {/* Rocket Window */}
                <circle
                  cx="25"
                  cy="35"
                  r="6"
                  fill="rgba(59, 130, 246, 0.3)"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-blue-400"
                />
                {/* Rocket Fins */}
                <path
                  d="M 13 80 L 7 100 L 13 95 Z"
                  fill="currentColor"
                  className="text-red-400"
                />
                <path
                  d="M 37 80 L 43 100 L 37 95 Z"
                  fill="currentColor"
                  className="text-red-400"
                />
                {/* Rocket Flames */}
                <path
                  d="M 18 90 Q 25 105 32 90"
                  fill="currentColor"
                  className="text-orange-400 opacity-80"
                />
                <path
                  d="M 21 90 Q 25 100 29 90"
                  fill="currentColor"
                  className="text-yellow-400 opacity-60"
                />
              </g>

              {/* Connection Line */}
              <path
                d="M 185 107 Q 205 97 240 102"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="4,4"
                className="text-blue-300 opacity-50"
              />
            </svg>
          </motion.div>
        </div>
      </div>

      {/* Links Section */}
      <div className="flex items-center justify-center mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-4xl">
          <motion.div
            variants={item}
            whileHover={{
              scale: 1.02,
              y: -2,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Link
              href="/resume"
              className="relative flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white text-lg sm:text-xl lg:text-2xl font-light hover:bg-white/10 transition-all duration-300 hover:border-blue-400/50 hover:text-blue-100"
            >
              <FileText size={24} className="opacity-80" />
              Resume
            </Link>
          </motion.div>
          <motion.div
            variants={item}
            whileHover={{
              scale: 1.02,
              y: -2,
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="group relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Link
              href="https://www.linkedin.com/in/andrewgbliss/"
              className="relative flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl text-white text-lg sm:text-xl lg:text-2xl font-light hover:bg-white/10 transition-all duration-300 hover:border-blue-400/50 hover:text-blue-100"
            >
              <Linkedin size={24} className="opacity-80" />
              LinkedIn
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        variants={item}
        className="mt-8 sm:mt-12 lg:mt-16 text-center"
      >
        <p className="text-white/50 text-sm">
          Website powered by{" "}
          <a
            href="https://blisscode.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/70 hover:text-white transition-colors duration-200 hover:underline"
          >
            BlissCode.dev
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
}
