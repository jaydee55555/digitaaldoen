export const SITE = {
  name: 'DigitaalDoen',
  title: 'DigitaalDoen - Online marketing voor ambiteuze ondernemers',
  description: 'Wij helpen ondernemers actief als coaches, dienstverleners en vakmannen automatisch leads aantrekken en succesvol omzetten naar nieuwe klanten.',
  url:
    (typeof process !== 'undefined' && process.env.SITE_URL) ||
    'https://digitaaldoen.nl',
  twitterHandle: '@digitaaldoen',
  socials: {
    twitter: 'https://twitter.com/digitaaldoen',
    instagram: 'https://instagram.com/digitaaldoen',
    linkedin: 'https://www.linkedin.com/company/digitaaldoen',
    dribbble: 'https://dribbble.com/digitaaldoen',
  },
} as const;

export type SiteConfig = typeof SITE;
