import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";

export const footerLinks: FooterLinkType[] = [
  {
    label: "Quick Links",
    items: [
      {
        label: "Trade",
        href: "https://docs.keeswap.com/contact-us",
      },
      {
        label: "Earn",
        href: "https://keeswap.medium.com/",
      },
      {
        label: "BodyHAM Token",
        href: "https://docs.keeswap.com/contact-us/telegram",
      },
    ],
  },
  {
    label: "Support",
    items: [
      {
        label: "Contact Us",
        href: "https://docs.keeswap.com/contact-us/customer-support",
      },
      {
        label: "Developers",
        href: "https://docs.keeswap.com/help/troubleshooting",
      },
      {
        label: "Privacy policy",
        href: "https://docs.keeswap.com/get-started",
      },
    ],
  },
];

export const socials = [
  {
    label: "Instagram",
    icon: "Instagram",
    href: "https://instagram.com/keeswap_official",
  },
  {
    label: "Twitter",
    icon: "Twitter",
    href: "https://twitter.com/keeswap",
  },
  {
    label: "Discord",
    icon: "Discord",
    href: "https://discord.gg/8VMwCVaDnY",
  },
  {
    label: "Telegram",
    icon: "Telegram",
    items: [
      {
        label: "English",
        href: "https://t.me/keeswap_finance",
      },
      {
        label: "中文",
        href: "https://t.me/keeswap_finance_CN",
      },
    ],
  },
  {
    label: "Reddit",
    icon: "Reddit",
    href: "https://s.reddit.com/r/keeswap",
  },
];

export const langs: Language[] = [...Array(20)].map((_, i) => ({
  code: `en${i}`,
  language: `English${i}`,
  locale: `Locale${i}`,
}));
