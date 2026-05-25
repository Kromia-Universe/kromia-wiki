# Comenzi de chat și comunicare

Ghid complet pentru toate tipurile de comunicare disponibile pe serverul Kromia Universe.

## 💬 Chat-uri de bază

### Local chat (proximitate)
| Comandă | Rază | Descriere | Exemplu |
|---------|------|-----------|---------|
| `/say [mesaj]` | 20m | Chat normal, conversație | `/say Bună ziua!` |
| `/s [mesaj]` | 20m | Alias pentru say | `/s Cum merge?` |
| `Fără comandă` | 20m | Chat direct în textbox | `Salut tuturor!` |

### Whisper (șoptit)
| Comandă | Rază | Descriere | Exemplu |
|---------|------|-----------|---------|
| `/whisper [mesaj]` | 3m | Șoptește discretă | `/whisper Avem probleme` |
| `/w [mesaj]` | 3m | Alias pentru whisper | `/w Nu ne aude nimeni?` |

### Strigat (yell)
| Comandă | Rază | Descriere | Exemplu |
|---------|------|-----------|---------|
| `/yell [mesaj]` | 50m | Strigă tare | `/yell Ajutor! Poliția!` |
| `/y [mesaj]` | 50m | Alias pentru yell | `/y Stop, hoții!` |

## 🎭 Acțiuni și descrieri

### Me commands (acțiuni)
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/me [acțiune]` | Descrie o acțiune | `/me își aprinde țigara nervos` |
| `/ame [acțiune]` | Acțiune pentru admin | `/ame tremură de frică` |

### Do commands (mediu/situație)
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/do [descriere]` | Descrie mediul | `/do Plouă torențial afară` |
| `/ado [descriere]` | Descriere pentru admin | `/ado Mașina fumegă din motor` |

### Try commands (încercări)
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/try [încercare]` | Acțiune cu șansă de eșec | `/try să deschidă ușa forțat` |
| Result: | Automat | `John Doe reușește/eșuează să...` |

## 📱 Chat privat și mesaje

### Mesaje private
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/pm [ID] [mesaj]` | Mesaj privat | `/pm 12 Te aștept la parcul central` |
| `/reply [mesaj]` | Răspuns la ultimul PM | `/reply Ok, vin imediat!` |
| `/r [mesaj]` | Alias pentru reply | `/r Mulțumesc!` |

### Telefon și SMS
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/call [număr]` | Sună pe cineva | `/call 555-0123` |
| `/pickup` | Răspunde la telefon | `/pickup` |
| `/hangup` | Închide telefonul | `/hangup` |
| `/sms [număr] [mesaj]` | Trimite SMS | `/sms 555-0123 Întârziu 10 min` |

### Gestionare contacte
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/contacts` | Lista contacte | `/contacts` |
| `/addcontact [nume] [număr]` | Adaugă contact | `/addcontact Maria 555-0123` |
| `/delcontact [nume]` | Șterge contact | `/delcontact Maria` |

## 📻 Radio și comunicare de grup

### Radio departament
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/radio [mesaj]` | Radio job/departament | `/radio Unit 12 pe poziție` |
| `/r [mesaj]` | Alias radio (unele servere) | `/r Roger that` |
| `/radioon` | Pornește radioul | `/radioon` |
| `/radiooff` | Oprește radioul | `/radiooff` |

### Radio civil (walkie-talkie)
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/walkietalkie [mesaj]` | Radio civil | `/walkietalkie Grup 1 la mine` |
| `/wt [mesaj]` | Alias pentru walkie | `/wt Am ajuns la locație` |
| `/freq [canal]` | Schimbă frecvența | `/freq 101.5` |

## 🌐 Chat-uri speciale și globale

### Out of Character (OOC)
| Comandă | Rază | Descriere | Exemplu |
|---------|------|-----------|---------|
| `/ooc [mesaj]` | 20m | Chat OOC local | `/ooc Am lag, scuzați-mă` |
| `/looc [mesaj]` | 20m | Local OOC | `/looc Puteți să repetați?` |
| `/b [mesaj]` | 20m | Bracket OOC | `/b ((AFK 2 minute))` |

### Chat global (limitat)
| Comandă | Acces | Descriere | Exemplu |
|---------|-------|-----------|---------|
| `/global [mesaj]` | VIP/Events | Chat pentru toți jucătorii | `/global Eveniment la mall!` |
| `/announcement` | Admin | Anunț oficial | `/announcement Restart în 10 min` |

## 🎪 Chat-uri pentru evenimente

### News și media
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/news [știre]` | Știre la televizor | `/news Accident major pe highway` |
| `/ad [anunț]` | Anunț publicitar | `/ad Vând BMW Seria 3, tel: 555-0123` |
| `/weather [descriere]` | Raport meteo | `/weather Ploi torențiale până mâine` |

### Evenimente speciale
| Comandă | Acces | Descriere | Exemplu |
|---------|-------|-----------|---------|
| `/event [descriere]` | Admin | Anunț eveniment | `/event Concurs de drift la plajă` |
| `/scene [descriere]` | Event Staff | Setează o scenă | `/scene Explozie puternică în depozit` |

## 🔧 Setări și configurare chat

### Filtrarea mesajelor
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/ignore [ID]` | Ignoră un jucător | `/ignore 25` |
| `/unignore [ID]` | Oprește ignorarea | `/unignore 25` |
| `/ignorelist` | Lista jucători ignorați | `/ignorelist` |

### Setări chat
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/chatsize [mărime]` | Mărimea fontului | `/chatsize 14` |
| `/timestamp [on/off]` | Afișare timp | `/timestamp on` |
| `/chatlines [număr]` | Linii vizibile în chat | `/chatlines 15` |

### Moderare chat
| Comandă | Acces | Descriere | Exemplu |
|---------|-------|-----------|---------|
| `/mute [ID] [timp] [motiv]` | Staff | Mute jucător | `/mute 12 30m Spam` |
| `/unmute [ID]` | Staff | Ridică mute-ul | `/unmute 12` |
| `/clearchat` | Admin | Golește chat-ul | `/clearchat` |

## 📝 Emotes și expresii

### Emotes rapide
| Comandă | Acțiune vizuală |
|---------|----------------|
| `/wave` | Salută cu mâna |
| `/nod` | Dă din cap (da) |
| `/shake` | Dă din cap (nu) |
| `/shrug` | Ridică din umeri |
| `/point` | Arată cu degetul |
| `/thumbsup` | Thumbs up |
| `/thumbsdown` | Thumbs down |
| `/clap` | Aplaudă |

### Expresii faciale
| Comandă | Expresie |
|---------|----------|
| `/smile` | Zâmbește |
| `/frown` | Se întristează |
| `/angry` | Supărat |
| `/confused` | Confuz |
| `/surprised` | Surprins |
| `/wink` | Clipește din ochi |

## 🎯 Tips pentru comunicare eficientă

### Bune practici
- **Folosește emoji-uri** pentru a exprima emoții: :) :( :D
- **Scrie clar** și evită prescurtările excesive
- **Respectă proximitatea** - nu vorbi cu cineva de la distanță
- **Contextul contează** - adaptează stilul la situație

### Combinații utile
```
/me se uită în jur îngrijorat
/do Strada este pustie și întunecată
/say Cred că ar trebui să plecăm de aici...
```

### Greșeli comune de evitat
- **Metagaming prin OOC** - Nu transmite informații IC prin OOC
- **Chat flooding** - Nu spama cu mesaje
- **Breaking character** - Nu ieși din rol în chat IC
- **Informații OOC în IC** - Nu folosi info din OOC în roleplay

---

::: tip Roleplay quality
Comunicarea de calitate face diferența în roleplay. Investește timp în descrieri și acțiuni pentru experiențe memorabile.
:::

::: warning Chat rules
Respectă regulile de chat. Limbaj ofensator, spam sau metagaming pot rezulta în sancțiuni severe.
:::

::: info Voice chat
Pe lângă text, serverul poate avea și voice chat. Verifică setările și echipamentul pentru cea mai bună experiență.
:::

**Comunică eficient în lumea Kromia Universe!** 💬