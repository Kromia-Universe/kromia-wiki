import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Kromia Wiki',
  description: 'Ghidul oficial al serverului Kromia Universe FiveM Roleplay',
  lang: 'ro-RO',
  
  // SEO and metadata
  head: [
    ['meta', { name: 'theme-color', content: '#ff0080' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'ro_RO' }],
    ['meta', { name: 'og:site_name', content: 'Kromia Wiki' }],
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    ['link', { rel: 'apple-touch-icon', href: '/favicon.png' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Exo+2:wght@300;400;500;600;700;800&display=swap', rel: 'stylesheet' }]
  ],

  // Theme configuration
  appearance: 'force-dark', // Force dark mode always
  themeConfig: {
    
    // Navigation
    nav: [
      { text: 'Acasă', link: '/' },
      { text: 'Regulament', link: '/regulament/' },
      { text: 'Ghiduri', link: '/ghiduri/' },
      { text: 'Joburi', link: '/joburi/' },
      { text: 'Comenzi', link: '/comenzi/' },
      { text: '🌐 Website', link: 'https://kromia.ro' },
      { text: '🛒 Store', link: 'https://store.kromia.ro' }
    ],

    // Sidebar
    sidebar: {
      '/regulament/': [
        {
          text: 'Regulament Server',
          items: [
            { text: 'Reguli generale', link: '/regulament/' },
            { text: 'Reguli roleplay', link: '/regulament/roleplay' },
            { text: 'Reguli PvP/PvE', link: '/regulament/pvp' },
            { text: 'Reguli chat', link: '/regulament/chat' },
            { text: 'Sanctiuni', link: '/regulament/sanctiuni' }
          ]
        }
      ],
      
      '/ghiduri/': [
        {
          text: 'Ghiduri pentru jucători',
          items: [
            { text: 'Primul pas', link: '/ghiduri/' },
            { text: 'Crearea personajului', link: '/ghiduri/personaj' },
            { text: 'Interfata jocului', link: '/ghiduri/interfata' },
            { text: 'Sistemul bancar', link: '/ghiduri/banca' },
            { text: 'Cumpărarea mașinilor', link: '/ghiduri/masini' },
            { text: 'Proprietăți imobiliare', link: '/ghiduri/case' }
          ]
        },
        {
          text: 'Ghiduri avansate',
          items: [
            { text: 'Economia serverului', link: '/ghiduri/economie' },
            { text: 'Sistemul legal', link: '/ghiduri/legal' },
            { text: 'Evenimente server', link: '/ghiduri/evenimente' }
          ]
        }
      ],
      
      '/joburi/': [
        {
          text: 'Joburi legale',
          items: [
            { text: 'Prezentare generală', link: '/joburi/' },
            { text: 'Șofer de taxi', link: '/joburi/taxi' },
            { text: 'Mecanic auto', link: '/joburi/mecanic' },
            { text: 'Livrator', link: '/joburi/livrator' },
            { text: 'Fermier', link: '/joburi/fermier' }
          ]
        },
        {
          text: 'Servicii publice',
          items: [
            { text: 'Poliția Română', link: '/joburi/politie' },
            { text: 'Serviciul Medical', link: '/joburi/medic' },
            { text: 'Pompieri', link: '/joburi/pompieri' }
          ]
        },
        {
          text: 'Business & Antreprenoriat',
          items: [
            { text: 'Cum să îți deschizi business', link: '/joburi/business' },
            { text: 'Magazine și magazine', link: '/joburi/magazine' },
            { text: 'Restaurante și baruri', link: '/joburi/restaurant' }
          ]
        }
      ],
      
      '/comenzi/': [
        {
          text: 'Comenzi de bază',
          items: [
            { text: 'Lista completă', link: '/comenzi/' },
            { text: 'Chat și comunicare', link: '/comenzi/chat' },
            { text: 'Personaj și inventar', link: '/comenzi/personaj' },
            { text: 'Vehicule', link: '/comenzi/vehicule' }
          ]
        },
        {
          text: 'Comenzi speciale',
          items: [
            { text: 'Admin și moderare', link: '/comenzi/admin' },
            { text: 'Job-uri specifice', link: '/comenzi/joburi' }
          ]
        }
      ]
    },

    // Social links
    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/kromia' },
      { icon: 'github', link: 'https://github.com/Kromia-Universe/kromia-wiki' }
    ],

    // Footer
    footer: {
      message: 'Construit cu ❤️ pentru comunitatea Kromia Universe | <a href="/politica-confidentialitate">Politica de Confidențialitate</a> | <a href="/termeni-conditii">Termeni și Condiții</a>',
      copyright: '© 2026 Kromia Universe. Toate drepturile rezervate.'
    },

    // Search
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Caută în wiki',
            buttonAriaLabel: 'Caută în wiki'
          },
          modal: {
            displayDetails: 'Afișează lista detaliată',
            resetButtonTitle: 'Resetează căutarea',
            backButtonTitle: 'Închide căutarea',
            noResultsText: 'Nu s-au găsit rezultate pentru',
            footer: {
              selectText: 'pentru a selecta',
              selectKeyAriaLabel: 'enter',
              navigateText: 'pentru a naviga',
              navigateUpKeyAriaLabel: 'săgeată sus',
              navigateDownKeyAriaLabel: 'săgeată jos',
              closeText: 'pentru a închide',
              closeKeyAriaLabel: 'escape'
            }
          }
        }
      }
    },

    // Edit link
    editLink: {
      pattern: 'https://github.com/Kromia-Universe/kromia-wiki/edit/main/docs/:path',
      text: 'Editează această pagină pe GitHub'
    },

    // Last updated
    lastUpdated: {
      text: 'Actualizat la'
    },

    // Outline
    outline: {
      label: 'Pe această pagină',
      level: [2, 3]
    }
  },

  // Custom CSS
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            :root {
              --vp-c-brand-1: #ff0080;
              --vp-c-brand-2: #ff0080;
              --vp-c-brand-3: #ff0080;
              --vp-c-brand-soft: rgba(255, 0, 128, 0.14);
              --vp-c-sponsor: #00d4ff;
            }
            
            .VPNav {
              background: rgba(5, 0, 20, 0.95) !important;
              backdrop-filter: blur(10px);
            }
            
            .VPNavBar .title {
              font-family: 'Orbitron', monospace !important;
              font-weight: 700;
              color: #ff0080;
              text-shadow: 0 0 10px #ff0080;
            }
            
            .VPSidebar {
              background: rgba(5, 0, 20, 0.95) !important;
              backdrop-filter: blur(10px);
            }
            
            body {
              background: linear-gradient(135deg, #0a001f 0%, #1a0033 50%, #060015 100%);
              font-family: 'Exo 2', sans-serif;
            }
            
            h1, h2, h3, h4, h5, h6 {
              font-family: 'Orbitron', monospace !important;
            }
            
            .VPContent {
              background: rgba(0, 0, 0, 0.3);
              backdrop-filter: blur(5px);
              border-radius: 8px;
              margin: 2rem;
              padding: 2rem;
            }
          `
        }
      }
    }
  },

  // Build options
  cleanUrls: true,
  metaChunk: true,
  ignoreDeadLinks: true
})