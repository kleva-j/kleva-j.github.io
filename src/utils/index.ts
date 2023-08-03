export const context = {
  darkMode: false,
  theme: 'default',
  profileImg: './michael.jpg',
  aboutMe: {
    name: 'Michael Obasi',
    role: 'Software Engineer',
    desc: 'I love solving problems by building cool software tool that addresses such problem and makes live a bit easier.',
    contactMe: 'kasmickleva@gmail.com',
  },
  works: [{ title: 'ReplIt', desc: '', backgroundImage: '', links: [{ url: '', alt: '' }] }],
  socials: [{ name: 'github', url: 'https://github.com/kleva-j', alt: 'github' }],
};

export type ITheme = {
  base: string;
  primary: string;
  secondary: string;
  accent: string;
  neutral?: string;
};

export enum colorSchemes {
  light = 'light',
  dark = 'dark',
  default = 'default',
}

export type IThemes = { [key in colorSchemes]: ITheme };

export interface IMappedTheme {
  [key: string]: string | null;
}

export const themes: IThemes = {
  light: {
    primary: '#493190',
    secondary: '#e8d0ef',
    base: '#e4e9f6',
    accent: '#983fb5',
    neutral: '#000000',
  },
  dark: {
    primary: '#a84d82',
    secondary: '#efdce7',
    base: '#f4e7ee',
    accent: '#af5087',
    neutral: '#180b13',
  },
  default: {
    primary: '#329dae',
    secondary: '#b4c7e9',
    base: '#e7f8f2',
    accent: '#2f59a2',
    neutral: '#000000',
  },
};

export const DEFAULT_THEME = colorSchemes.light;

export const mapTheme = (variables: ITheme): IMappedTheme => {
  return {
    '--color-primary': variables.primary || '',
    '--color-secondary': variables.secondary || '',
    '--color-base': variables.base || '',
    '--color-accent': variables.accent || '',
    '--color-neutral': variables.neutral || '',
  };
};

export const applyTheme = (theme: colorSchemes): void => {
  const themeObject: IMappedTheme = mapTheme(themes[theme]);
  if (!themeObject) return;

  const root = document.documentElement;

  Object.keys(themeObject).forEach((property) => {
    if (property === 'name') return;
    root.style.setProperty(property, themeObject[property]);
  });
};

export const extend = (extending: ITheme, newTheme: ITheme): ITheme => {
  return { ...extending, ...newTheme };
};
