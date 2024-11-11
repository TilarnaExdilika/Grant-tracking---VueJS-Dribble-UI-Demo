interface SocialLink {
  icon: string
  text: string
  url?: string
}

interface SplashConfigType {
  title: string
  logoPath: string
  logoHeight: number
  socialLinks: SocialLink[]
  uiCredit: string
  uiCreditName: string
  uiCreditImagePath: string
}

export const SplashConfig: SplashConfigType = {
  title: 'by Tilarna',
  logoPath: '/src/assets/images/logo.png',
  logoHeight: 150,
  socialLinks: [
    {
      icon: 'brands fa-github',
      text: 'TilarnaExdilika',
      url: 'https://github.com/TilarnaExdilika',
    },
    {
      icon: 'brands fa-discord',
      text: '_tilarna',
      url: 'https://discord.com/_tilarna',
    },
    {
      icon: 'brands fa-facebook-messenger',
      text: 'IShino.Avery',
      url: 'https://m.me/IShino.Avery',
    },
  ],
  uiCredit: 'UI Design by',
  uiCreditName: 'George Lov',
  uiCreditImagePath: '/src/assets/images/dribble_author.png',
}
