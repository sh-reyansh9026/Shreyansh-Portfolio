import React from "react";
import { FloatingDock } from "../components/ui/floating-dock"; // Adjust path as needed
import {
  IconBrandGithub,
  IconHome,
  IconBrandLinkedin,
  IconBrandInstagram,
} from "@tabler/icons-react";

import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/shreyansh-mishra-b92840256/",
    },
    {
      title: "Instagram",
      icon: (
        <IconBrandInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/sh.reyansh9026/?hl=en",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/sh-reyansh9026",
    },
    {
      title: "Leetcode",
      icon: (
        <SiLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://leetcode.com/u/sh-reyansh9026/",
    },
    {
      title: "GFG",
      icon: (
        <img
          src="data:image/png;base64,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"
          alt="CodeChef"
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "https://www.geeksforgeeks.org/user/shreyanttsu/",
    },
    {
      title: "Codechef",
      icon: (
        <img
          src="data:image/jpeg;base64,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"
          alt="CodeChef"
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "https://www.codechef.com/users/mi_shreyansh90",
    },
    {
      title: "HackerRank",
      icon: (
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAXVBMVEUNFB4A6mT///8AAAANEh4A62QFDhoNABkACxgNABc5PUMjKC8HmkcA72YMAxwAABKwsbK/wMIFvlXr7OwAAAgAABQMBR0YHSaLjI+Ymp0JdTqsra68vb729/fq6+v0ofD5AAABAklEQVR4nO3cuw6CMBiAUbXeFbzjnfd/TBdd6GIag9Ccs/IP/dKJJu1gAAAAAAAAAAAAAAAAAAAAANCecZq2ljcNm6ZjPBUNncL0860sqzJBNWsp8HwYNV2ixHCNhur5J/BWDFNM1u0kzpfR2kfbEBXu4qnVexNn62KSotgv+lOYtIcKFSpUqFChQoUKFSpUqFChQoUKFSpUqPD/hfcQeeRV+KwPDfUzr8LvKFSoUKFChQoVKlSoUKFChX0vzP8fP/9zmvzP2hQqVKhQoUKFChUqVKhQoUKFChUqVKhQYWJhp+/j5/+mQv7vYvxCx982AQAAAAAAAAAAAAAAAAAAAHrtBfbJYbP19NC0AAAAAElFTkSuQmCC"
          alt="Hackerrank"
          className="h-full w-full text-neutral-500 dark:text-neutral-300"
        />
      ),
      href: "https://www.hackerrank.com/profile/sh_reyansh9026",
    },
  ];

  return (
    <div className="flex items-center justify-center">
      <footer className="fixed bottom-6 px-24 md:px-56 py-8 min-w-[350px] bg-transparent shadow-lg flex items-center justify-center">
        <FloatingDock mobileClassName="translate-y-2" items={links} />
      </footer>
    </div>
  );
}
