# Comenzi pentru administrare și moderare

Lista comenzilor disponibile pentru administratori și moderatori pe serverul Kromia Universe.

::: warning Acces restricționat
Aceste comenzi sunt disponibile doar pentru membrii echipei de administrare. Folosirea neautorizată poate rezulta în ban permanent.
:::

## 🛡️ Comenzi pentru moderatori

### Gestionarea jucătorilor
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/kick [ID] [motiv]` | Scoate jucătorul de pe server | `/kick 12 AFK în RP` |
| `/warn [ID] [motiv]` | Avertizează un jucător | `/warn 25 Metagaming` |
| `/mute [ID] [timp] [motiv]` | Oprește chatul pentru un jucător | `/mute 8 30m Spam chat` |
| `/unmute [ID]` | Ridică mute-ul | `/unmute 8` |

### Informații jucător
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/check [ID]` | Verifică informații despre jucător | `/check 15` |
| `/history [ID]` | Istoricul sancțiunilor | `/history 20` |
| `/playtime [ID]` | Timpul petrecut pe server | `/playtime 12` |
| `/alts [ID]` | Verifică account-uri alternative | `/alts 25` |

### Teleportare și poziționare
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/goto [ID]` | Teleportează la un jucător | `/goto 12` |
| `/bring [ID]` | Aduce un jucător la tine | `/bring 15` |
| `/tphere [ID]` | Alias pentru bring | `/tphere 8` |
| `/tpcoords [x] [y] [z]` | Teleportare la coordonate | `/tpcoords 100 200 30` |

## 👑 Comenzi pentru administratori

### Sancțiuni avansate
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/ban [ID] [timp] [motiv]` | Ban temporar sau permanent | `/ban 12 3d Cheating` |
| `/unban [ID]` | Ridică ban-ul | `/unban 12` |
| `/banip [IP]` | Ban după adresa IP | `/banip 192.168.1.1` |
| `/jail [ID] [timp] [motiv]` | Închisoare în joc | `/jail 8 60m Trolling` |

### Gestionare server
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/restart [timp]` | Restart server programat | `/restart 300` |
| `/announce [mesaj]` | Anunț global | `/announce Restart în 10 min` |
| `/weather [tip]` | Schimbă vremea | `/weather rain` |
| `/time [oră]` | Setează ora din joc | `/time 14:30` |

### Economie și items
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/givemoney [ID] [sumă]` | Dă bani unui jucător | `/givemoney 12 5000` |
| `/takemoney [ID] [sumă]` | Ia bani de la jucător | `/takemoney 8 1000` |
| `/giveitem [ID] [item] [cantitate]` | Dă un item | `/giveitem 12 phone 1` |
| `/clearinv [ID]` | Golește inventarul | `/clearinv 25` |

### Vehicule
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/car [model]` | Spawn vehicul | `/car sultan` |
| `/dv` | Șterge vehiculul apropiat | `/dv` |
| `/fix` | Repară vehiculul | `/fix` |
| `/fuel [cantitate]` | Alimentează vehiculul | `/fuel 100` |

## 🔍 Comenzi pentru investigații

### Loguri și monitorizare
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/logs [ID]` | Logurile unui jucător | `/logs 12` |
| `/chatlog [ID]` | Istoricul chat-ului | `/chatlog 8` |
| `/connections [ID]` | Istoricul conectărilor | `/connections 15` |
| `/damage [ID]` | Log-urile de damage | `/damage 20` |

### Anti-cheat
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/spectate [ID]` | Observă un jucător | `/spectate 12` |
| `/noclip` | Mod zburare pentru admin | `/noclip` |
| `/invisible` | Devine invizibil | `/invisible` |
| `/freeze [ID]` | Înghețează un jucător | `/freeze 8` |

## 🎭 Comenzi pentru roleplay

### Evenimente și scene
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/event [descriere]` | Anunță un eveniment | `/event Accident major pe highway` |
| `/scene [text]` | Creează o scenă | `/scene Mașina arde violent` |
| `/ame [acțiune]` | Acțiune în numele altcuiva | `/ame transpiră profund` |
| `/news [știre]` | Știre la radio/TV | `/news Primar arestat pentru corupție` |

### Proprietăți și locații
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/createhouse` | Creează o casă | `/createhouse` |
| `/deletehouse [ID]` | Șterge o casă | `/deletehouse 25` |
| `/setprice [ID] [preț]` | Setează prețul unei case | `/setprice 12 50000` |
| `/interior [ID]` | Schimbă interiorul | `/interior 2` |

## 📊 Comenzi pentru statistici

### Monitoring server
| Comandă | Descriere |
|---------|-----------|
| `/players` | Lista jucătorilor online |
| `/stats` | Statistici server |
| `/performance` | Performance metrics |
| `/memory` | Utilizare memoria |

### Database
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/sql [query]` | Execută query SQL | `/sql SELECT * FROM users` |
| `/backup` | Backup database | `/backup` |
| `/cleanup` | Curăță datele vechi | `/cleanup` |

## 🔧 Comenzi pentru dezvoltare

### Testing
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/test [feature]` | Testează o funcționalitate | `/test banking` |
| `/reload [script]` | Reîncarcă un script | `/reload main` |
| `/debug [on/off]` | Activează debug mode | `/debug on` |

### Configurare
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/setconfig [key] [value]` | Modifică configurația | `/setconfig maxplayers 64` |
| `/getconfig [key]` | Verifică o setare | `/getconfig economy_rate` |
| `/save` | Salvează datele manuale | `/save` |

## ⚖️ Protocoluri de utilizare

### Când să folosești comenzile
1. **Verifică întotdeauna** - confirmă situația înainte să acționezi
2. **Documentează** - ține evidența tuturor acțiunilor
3. **Comunicarea** - anunță echipa despre sancțiuni mari
4. **Escalation** - situații complexe către administratori superiori

### Ce să eviți
- **Abuse of power** - Nu folosi comenzile pentru avantaj personal
- **Emotional decisions** - Nu sancționa când ești supărat
- **Lack of evidence** - Ai întotdeauna dovezi pentru sancțiuni
- **Inconsistency** - Aplică regulile uniform pentru toți

---

::: danger Responsabilitate
Puterea administrativă vine cu responsabilitate mare. Orice abuz va rezulta în pierderea priviligiilor și posibil ban.
:::

::: info Training
Toți administratorii noi trebuie să treacă printr-un program de training înainte de a primi acces complet la comenzi.
:::

::: tip Best practices
Întotdeauna explică jucătorilor motivul sancțiunii și oferă-le șansa să se explice înainte de a lua măsuri drastice.
:::

**Folosește puterea cu înțelepciune pentru binele comunității!** ⚖️