# Comenzi specifice job-urilor

Lista comenzilor speciale disponibile pentru fiecare job și departament din Kromia Universe.

## 🚔 Poliția (LSPD)

### Comenzi de bază
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/badge [ID]` | Arată insigna | `/badge 12` |
| `/cuff [ID]` | Pune cătușe | `/cuff 15` |
| `/uncuff [ID]` | Scoate cătușele | `/uncuff 15` |
| `/drag [ID]` | Târăște persoana | `/drag 8` |
| `/undrag [ID]` | Oprește târâirea | `/undrag 8` |

### Arestări și sancțiuni
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/arrest [ID] [timp] [motiv]` | Arestează suspecul | `/arrest 12 60 Furt aggravat` |
| `/ticket [ID] [sumă] [motiv]` | Dă amendă | `/ticket 8 500 Viteză excesivă` |
| `/search [ID]` | Perchezționează | `/search 15` |
| `/seize [ID] [item]` | Confiscă un obiect | `/seize 12 gun` |

### Investigații
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/investigate` | Caută dovezi la fața locului | `/investigate` |
| `/evidence [descriere]` | Marchează o dovadă | `/evidence Casă de gloanțe` |
| `/warrant [ID] [motiv]` | Emite mandat | `/warrant 25 Suspicion murder` |
| `/apb [ID] [descriere]` | All Points Bulletin | `/apb 12 Armed and dangerous` |

### Vehicule și echipament
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/cruiser` | Spawn mașină de poliție | `/cruiser` |
| `/backup` | Solicită backup | `/backup Officer needs assistance` |
| `/roadblock` | Plasează baricadă | `/roadblock` |
| `/spike` | Plasează benzi cu ținte | `/spike` |

### Radio și comunicare
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/radio [mesaj]` | Radio departament | `/radio Unit 12 on patrol` |
| `/dispatch [mesaj]` | Mesaj către dispecer | `/dispatch Need backup at bank` |
| `/unit [ID]` | Verifică unitatea | `/unit 12` |

## 🏥 Serviciul Medical (EMS)

### Tratament pacienți
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/examine [ID]` | Examinează pacientul | `/examine 15` |
| `/treat [ID]` | Tratează rănile | `/treat 8` |
| `/heal [ID]` | Vindecă complet | `/heal 12` |
| `/revive [ID]` | Reanimează pacientul | `/revive 25` |
| `/stabilize [ID]` | Stabilizează starea | `/stabilize 8` |

### Transport medical
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/stretcher [ID]` | Pune pe targă | `/stretcher 15` |
| `/load [ID]` | Încarcă în ambulanță | `/load 12` |
| `/unload [ID]` | Descarcă din ambulanță | `/unload 12` |
| `/ambulance` | Spawn ambulanță | `/ambulance` |

### Medicație și echipament
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/medkit` | Folosește trusa medicală | `/medkit` |
| `/morphine [ID]` | Administrează calmante | `/morphine 8` |
| `/adrenaline [ID]` | Stimulent cardiac | `/adrenaline 15` |
| `/bandage [ID]` | Bandajează rănile | `/bandage 12` |

### Spital și clinică
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/admit [ID] [motiv]` | Internează pacientul | `/admit 12 Surgery needed` |
| `/discharge [ID]` | Externează pacientul | `/discharge 12` |
| `/surgery [ID]` | Operație chirurgicală | `/surgery 8` |
| `/checkup [ID]` | Control medical | `/checkup 15` |

## 🔧 Mecanic Auto

### Reparații vehicule
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/repair [parte]` | Repară partea specificată | `/repair engine` |
| `/fix` | Repară complet vehiculul | `/fix` |
| `/diagnostic` | Scanează problemele | `/diagnostic` |
| `/estimate [ID]` | Estimare cost reparație | `/estimate 1500` |

### Tunning și modificări
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/tune [categorie]` | Meniu tuning | `/tune performance` |
| `/paint [culoare]` | Vopsește vehiculul | `/paint red` |
| `/wheels [tip]` | Schimbă roțile | `/wheels sport` |
| `/tint [nivel]` | Folie geamuri | `/tint 50` |

### Transport și depanare
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/tow` | Tractează vehiculul | `/tow` |
| `/untow` | Detașează remorca | `/untow` |
| `/towtruck` | Spawn mașină de tractare | `/towtruck` |
| `/refuel [ID]` | Alimentează vehiculul | `/refuel 50` |

## 🚕 Taxi Driver

### Serviciu taxi
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/fare [ID] [preț]` | Setează tariful | `/fare 12 150` |
| `/meter start` | Pornește taximetrul | `/meter start` |
| `/meter stop` | Oprește taximetrul | `/meter stop` |
| `/destination [locație]` | Setează destinația | `/destination Airport` |

### Gestionare clienți
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/accept [ID]` | Acceptă clientul | `/accept 8` |
| `/decline [ID]` | Refuză clientul | `/decline 15` |
| `/pickup [ID]` | Ridică clientul | `/pickup 12` |
| `/dropoff [ID]` | Lasă clientul | `/dropoff 12` |

## 🏪 Vânzător magazin

### Gestionare magazine
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/stock [item] [cantitate]` | Adaugă în stoc | `/stock bread 50` |
| `/price [item] [preț]` | Setează prețul | `/price bread 5` |
| `/sell [ID] [item]` | Vinde unui client | `/sell 12 phone` |
| `/inventory` | Verifică stocul | `/inventory` |

### Serviciu clienți
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/greet [ID]` | Salută clientul | `/greet 8` |
| `/assist [ID]` | Ajută clientul | `/assist 15` |
| `/checkout [ID]` | Procesează plata | `/checkout 12` |
| `/receipt [ID]` | Dă bonul fiscal | `/receipt 12` |

## 🚛 Delivery Driver

### Livrări
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/pickup [locație]` | Ridică pachetele | `/pickup warehouse` |
| `/deliver [ID]` | Livrează la client | `/deliver 12` |
| `/route` | Verifică ruta | `/route` |
| `/complete` | Marchează livrarea finalizată | `/complete` |

### Vehicul livrare
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/van` | Spawn vehicul de livrare | `/van` |
| `/load [item] [cantitate]` | Încarcă marfa | `/load boxes 10` |
| `/unload [item]` | Descarcă marfa | `/unload boxes` |
| `/manifest` | Lista cu livrări | `/manifest` |

## 🏗️ Construction Worker

### Construcții
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/build [tip]` | Începe construcția | `/build wall` |
| `/demolish` | Demolează structura | `/demolish` |
| `/measure [distanță]` | Măsoară distanța | `/measure 10` |
| `/blueprint` | Vezi planurile | `/blueprint` |

### Echipament construcții
| Comandă | Descriere | Exemplu |
|---------|-----------|---------|
| `/crane` | Operează macaraua | `/crane` |
| `/drill` | Folosește burghiul | `/drill` |
| `/cement` | Amestecă betonul | `/cement` |
| `/safety` | Verifică echipamentul | `/safety` |

---

::: tip Învățare comenzi
Pentru fiecare job nou, participă la training-ul oficial pentru a învăța toate comenzile specifice și cum să le folosești corect.
:::

::: warning Roleplaying
Toate comenzile trebuie folosite în contexte realiste de roleplay. Nu abuza de ele și respectă limitările caracterului tău.
:::

::: info Updates
Lista comenzilor se actualizează periodic. Verifică Discord-ul pentru anunțuri despre comenzi noi sau modificări.
:::

**Folosește comenzile cu responsabilitate în jobul tău!** 💼