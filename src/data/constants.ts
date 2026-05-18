// ──────────────────────────────────────
// Single source of truth for all profile data
// ──────────────────────────────────────

export const PROFILE = {
  name: 'Poulami Burman',
  shortName: 'Poulami Burman',
  alias: 'Poulami',
  title: 'CS Student & Builder',
  email: 'burmanpoulami05@gmail.com',
  phone: '',
  website: 'github.com/PoulamiBurman',
  blogHost: '',
} as const;

export const SOCIAL_LINKS = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/PoulamiBurman',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/poulami-burman',
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:burmanpoulami05@gmail.com',
  },
] as const;

export type SocialLinkId = (typeof SOCIAL_LINKS)[number]['id'];

/** Helper to get a social link by id */
export const getSocialLink = (id: SocialLinkId) =>
  SOCIAL_LINKS.find((link) => link.id === id)!;
