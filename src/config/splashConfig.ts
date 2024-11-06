interface SocialLink {
  icon: string
  text: string
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
  logoPath: '/src/assets/logo.svg',
  logoHeight: 150,
  socialLinks: [
    { icon: 'facebook', text: 'Facebook' },
    { icon: 'twitter', text: 'Twitter' },
  ],
  uiCredit: 'UI Design by',
  uiCreditName: 'Tilarna',
  uiCreditImagePath: '/src/assets/dribble_author.png',
}
