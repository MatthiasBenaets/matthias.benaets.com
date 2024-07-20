import type { Snippet } from 'svelte';

export interface Seo {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  siteName?: string;
  imageURL?: string;
  logo?: string;
  author?: string;
  name?: string;
  index?: boolean;
  twitter?: boolean;
  openGraph?: boolean;
  schemaOrg?: boolean;
  schemaType?: string[];
  socials?: string[];
  jsonld?: Record<string, string>;
  children?: Snippet;
}

export interface Education {
  period: string;
  name: string;
  honor?: string;
  school: string;
  link: string;
}

export interface Experience {
  period: string;
  name: string;
  company: string;
  link?: string;
  tasks?: string;
  visible: boolean;
}

export interface Skills {
  category: string;
  field: string[];
}

export interface Image {
  src: string;
  alt: string;
  height: number;
  width: number;
}
