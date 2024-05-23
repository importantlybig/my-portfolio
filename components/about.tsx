"use client";

import React from "react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { useTranslations } from "next-intl";

export default function About() {
  const t = useTranslations("ABOUT");
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{t("ABOUT_ME")}</SectionHeading>
      <p className="mb-3">
        {t.rich("DESCRIPTION", {
          semibold: (content) => <span className="font-bold">{content}</span>,
          italic: (content) => <span className="italic">{content}</span>,
        })}
      </p>

      <p>
        {t.rich("HABITS", {
          italic: (content) => <span className="italic">{content}</span>,
          semibold: (content) => <span className="font-bold">{content}</span>,
        })}
      </p>
    </motion.section>
  );
}
