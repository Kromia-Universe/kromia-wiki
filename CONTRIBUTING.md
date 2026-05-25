# 🤝 Ghidul de contribuție la Kromia Wiki

Mulțumim că vrei să ajuți la îmbunătățirea wiki-ului comunității! Acest ghid te va ajuta să contribui eficient.

## 🎯 Ce fel de contribuții acceptăm

### ✅ Contribuții binevenite
- Corecții de greșeli de scriere/gramatică
- Actualizări la informații outdated
- Ghiduri noi pentru joburi/sisteme
- Îmbunătățiri la structura și navigarea wiki-ului
- Screenshot-uri și imagini explicative
- Traduceri pentru jucători străini
- Clarificări la proceduri confuze

### ❌ Contribuții care nu vor fi acceptate  
- Informații false sau care înșeală jucătorii
- Conținut care încurajează breaking of rules
- Spam sau conținut irelevant
- Injurii, discriminare sau limbaj ofensator
- Publicitate pentru alte servere/comunități

## 📝 Procesul de contribuție

### Pentru modificări mici (typos, corecții)
1. **Navighează** la pagina ce trebuie modificată pe wiki
2. **Click** pe "Editează această pagină pe GitHub" (jos la pagină)
3. **Editează** fișierul direct în browser
4. **Scrie** un commit message clar (ex: "Corectează greșeala de la joburi/taxi")
5. **Creează** Pull Request
6. **Așteaptă** review-ul echipei

### Pentru modificări mari (pagini noi, restructurări)
1. **Creează** un Issue pe GitHub pentru a discuta schimbarea
2. **Așteaptă** feedback de la echipa wiki
3. **Fork** repository-ul
4. **Creează** o branch nouă (`git checkout -b feature/nume-descriptiv`)
5. **Fă modificările** locale
6. **Testează** cu `npm run docs:dev`
7. **Comite** și push la fork
8. **Creează** Pull Request

## ✍️ Standards de scriere

### Formatare Markdown
- Folosește **heading-uri** în ordine logică (H1 → H2 → H3)
- **Bold** pentru termeni importanți
- **Code blocks** pentru comenzi și exemple
- **Link-uri interne** către alte pagini wiki
- **Tabele** pentru informații structurate

### Stil de scriere
- **Limba română** pentru tot conținutul principal
- **Ton prietenos** și accesibil pentru toți jucătorii
- **Instrucțiuni clare** pas-cu-pas
- **Exemple concrete** pentru comenzi și proceduri

### Structura paginilor
```markdown
# Titlul principal

Introducere scurtă care explică despre ce este pagina.

## Secțiunea principală

Conținutul organizat în secțiuni logice.

### Subsecțiune
Detalii specifice.

::: tip Sfat util
Folosește box-urile pentru informații importante
:::

::: warning Atenție
Pentru avertismente și lucruri de evitat
:::

::: info Informație
Pentru context sau explicații suplimentare
:::
```

## 🎨 Imagini și media

### Cerințe pentru imagini
- **Format**: PNG sau JPG
- **Mărime**: Sub 500KB pe imagine
- **Rezoluție**: Minim 1280x720 pentru screenshot-uri
- **Calitate**: Clare și lizibile

### Unde să pui imaginile
1. **Creează** folder în `/docs/public/images/`
2. **Denumește** descriptiv (ex: `taxi-job-spawn.png`)
3. **Referențiază** în markdown: `![Alt text](/images/taxi-job-spawn.png)`

## 🔍 Review process

### Criterii de aprobare
- **Acuratețea** informațiilor
- **Respectarea** guidelines de scriere
- **Testarea** comenzilor și procedurilor
- **Consistența** cu restul wiki-ului

### Timeline
- **Modificări mici**: 1-2 zile
- **Modificări mari**: 3-7 zile
- **Pagini noi**: 1-2 săptămâni

### Feedback și revisions
Echipa poate cere modificări pentru:
- Clarificare informații confuze
- Corectarea formatării
- Adăugarea de exemple sau detalii
- Respectarea standards de scriere

## 🏷️ Commit messages

Folosește format-ul:
```
tip(scop): descriere scurtă

- tip: feat, fix, docs, style, refactor
- scop: regulament, ghiduri, joburi, comenzi
- descriere: max 50 caractere

Exemple:
docs(ghiduri): adaugă ghidul pentru banking
fix(comenzi): corectează comanda /radio
feat(joburi): adaugă pagina pentru mecanic
```

## 🤖 Automatizări

### GitHub Actions
- **Build test** la fiecare PR
- **Link checking** pentru link-uri sparte
- **Spell checking** pentru greșeli comune
- **Auto-deploy** după merge

### Netlify Preview
- Fiecare PR primește un **preview link**
- **Testează** schimbările înainte de merge
- **Partajează** link-ul pentru feedback

## 📱 Contact și suport

### Pentru întrebări despre contribuție
- **Discord**: `#wiki-contributors`
- **GitHub**: Creează un Issue
- **Email**: hello@kromia.ro

### Pentru probleme tehnice
- **GitHub Issues**: Pentru bug-uri
- **Discord**: `#suport-tehnic`

### Pentru sugestii de conținut
- **Discord**: `#sugestii-wiki`
- **In-game**: Întreabă administratorii

## 🏆 Recognition

### Contribuitori activi primesc
- **Badge special** pe Discord
- **Menționare** în changelog-ul wiki-ului
- **Acces** la canal privat de contribuitori
- **Consultare** pentru decizii importante despre wiki

---

## 💡 Tips pentru contribuții de succes

1. **Citește wiki-ul existent** înainte să adaugi conținut
2. **Întreabă** dacă nu ești sigur de ceva
3. **Testează** în joc înainte să scrii ghiduri
4. **Ține cont** de experiența începătorilor
5. **Fii răbdător** cu procesul de review

**Mulțumim că ajuți comunitatea să crească și să învețe împreună!** 🎮❤️