"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "BlissCode",
    description: "Business site for web development and design services.",
    image: "portfolio-blisscodedev.png",
    url: "https://www.blisscode.dev",
  },
  {
    title: "Blog",
    description: "Personal blog for thoughts and ideas.",
    image: "portfolio-blisscode-articles.png",
    url: "https://www.blisscode.dev/articles",
  },
  {
    title: "Diluted Science",
    description: "Music website for local artists.",
    image: "portfolio-diluted-science.png",
    url: "https://dilutedscience.com",
  },
  {
    title: "Abybyo",
    description:
      "Language learning app for adults with little to no time to learn.",
    image: "portfolio-abybyo.png",
    url: "https://abybyo.com",
  },
  {
    title: "Zero Fall Studios",
    description: "Game development studio website.",
    image: "portfolio-zerofall.png",
    url: "https://www.zerofallstudios.com",
  },
  {
    title: "Music Profile",
    description: "Music profile page for Andy B Mixin.",
    image: "portfolio-music-page.png",
    url: "https://www.dilutedscience.com/artists/andy-b-mixin",
  },
  {
    title: "Scheduler",
    description: "Scheduler for website consulting.",
    image: "portfolio-scheduler.png",
    url: "https://www.blisscode.dev/schedule",
  },
  {
    title: "Questionnaire",
    description: "Questionnaire for website consulting.",
    image: "portfolio-questionnaire.png",
    url: "https://www.blisscode.dev/questionnaire/website-consulting",
  },
];

export default function PortfolioPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
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
    <>
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.h1
          variants={item}
          className="text-white text-4xl font-bold text-center mb-8"
        >
          My Portfolio
        </motion.h1>
        <motion.div
          variants={item}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href="/" className="text-white text-xl hover:underline">
            Back
          </Link>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 my-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="overflow-hidden text-white hover:underline"
            >
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover object-top"
                />
                <div className="py-4">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
