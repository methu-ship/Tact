import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Tact-By-Building',
  sidebar: [
    {
      text: 'Introduction',
      link: '/getting-started',
    },
    {
      text: 'Wallets In TON',
      link: '/Wallet',
    },
    {
      text: "Guides",
      collapsed: true,
      items: [
        {
          text: 'Setting Up the Environment',
          link: '/Guides/Settings',
        },
        
        {
          text: 'Tact Language Intro',
          link: '/Guides/Basics',
        },
        {
          text: 'Implement a Vault Contract',
          link: '/Guides/Vault',
        },
        {
          text: 'Implementing a Fungible Token',
          link: '/Guides/Token',
        },

        {
          text: 'Implementing Non-Fungible Tokens (NFTs)',
          link: '/Guides/NFT',
        },
        
      ],
    },
    
  ],
})
