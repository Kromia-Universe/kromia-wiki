# 📚 Kromia Universe Wiki

Ghidul oficial al comunității Kromia Universe FiveM Roleplay Server - construit și menținut de comunitate.

## 🌐 Vezi Wiki-ul Live

**Website**: https://wiki.kromia.ro

## 🤝 Cum să contribui

Acest wiki este **community-driven**! Orice membru al comunității poate contribui cu informații, corecții sau îmbunătățiri.

### 📝 Contribuție rapidă
1. **Găsește** o pagină care poate fi îmbunătățită
2. **Click** pe "Editează această pagină pe GitHub" (jos la fiecare pagină)
3. **Fă modificările** direct în browser-ul GitHub
4. **Creează** un Pull Request
5. **Așteaptă** aprobarea de la echipa de moderare

### 🔧 Contribuție avansată
Pentru modificări mari sau adăugarea de pagini noi:

```bash
# 1. Fork repository-ul
# 2. Clonează local
git clone https://github.com/Kromia-Universe/kromia-wiki.git
cd kromia-wiki

# 3. Instalează dependențele
npm install

# 4. Pornește serverul de dezvoltare
npm run docs:dev

# 5. Editează fișierele .md din /docs
# 6. Comite și creează Pull Request
```

### 📋 Ce poți contribui
- ✅ **Corecții** de greșeli de scriere sau informații
- ✅ **Actualizări** când se schimbă regulile/sistemele
- ✅ **Ghiduri noi** pentru activități/joburi 
- ✅ **Îmbunătățiri** la design și organizare
- ✅ **Traduceri** pentru jucători non-români
- ✅ **Screenshot-uri** și imagini explicative

## 🏗️ Structura project-ului

```
kromia-wiki/
├── docs/
│   ├── .vitepress/
│   │   ├── config.js          # Configurare VitePress
│   │   └── theme/             # Tema custom
│   ├── regulament/            # Regulamentul serverului
│   ├── ghiduri/              # Ghiduri pentru jucători
│   ├── joburi/               # Informații despre cariere
│   ├── comenzi/              # Lista comenzilor
│   └── index.md              # Pagina principală
├── netlify.toml              # Configurare Netlify
└── package.json              # Dependențe NPM
```

## 🎨 Styling și tema

Wiki-ul folosește **tema Vice City** pentru a se potrivi cu estetica serverului:
- **Culori primară**: Neon Pink (`#ff0080`) și Cyan (`#00d4ff`)
- **Font-uri**: Orbitron (titluri) și Exo 2 (text)
- **Stil**: Cyberpunk/Retro-futuristic

## 📋 Guidelines pentru contribuții

### Conținut
- **Limba română** pentru tot conținutul
- **Informații corecte** și actualizate
- **Ton prietenos** și util pentru comunitate
- **Formatare consistentă** cu restul wiki-ului

### Stil scriere
- Folosește **titluri clare** și ierarhie logică
- **Exemple concrete** pentru comenzi și proceduri
- **Boxes info/warning/tip** pentru informații importante
- **Link-uri interne** către alte pagini relevante

### Procesul de aprobare
1. **Review automat** de către GitHub Actions
2. **Review manual** de către moderatori wiki
3. **Testing** pe site-ul de preview
4. **Aprobare și merge** în main branch
5. **Deploy automat** pe site-ul live

## 🔄 Deployment

Wiki-ul se deploy-ează automat pe **Netlify** la fiecare commit pe `main` branch:

- **Build**: VitePress generează site-ul static
- **Deploy**: Netlify publică automat la domain-ul custom
- **CDN**: Global distribution pentru încărcare rapidă

## 🆘 Suport și întrebări

### Pentru contribuții
- **Discord**: `#wiki-contributors` pe serverul Kromia
- **GitHub Issues**: Pentru bug-uri și feature requests
- **Pull Requests**: Pentru discuții despre modificări

### Pentru conținut
- **Discord**: `#întrebări-generale` 
- **In-game**: Întreabă administratorii
- **GitHub Issues**: Pentru sugestii de conținut

## 📜 Licența

Acest project este sub licența MIT. Contribuind, ești de acord ca munca ta să fie folosită sub aceeași licență.

---

**Mulțumim că ajuți la îmbunătățirea experiienței comunității Kromia Universe!** ❤️

**Links rapide**:
- 🌐 [Website principal](https://kromia.ro)
- 💬 [Discord server](https://discord.gg/kromia)
- 🎮 [Conectează-te](fivem://connect/game.kromia.ro:30107)