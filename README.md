# Tvorba webové aplikace pomocí GitHub Copilot a GitHub Codespaces

## Cíl

Vytvořte jednoduchou webovou aplikaci pouze pomocí nástrojů GitHub Copilot a GitHub Codespaces. Zdrojový kód nepište ručně. Veškeré soubory i kód musí vytvořit GitHub Copilot.

---

# 1. Vytvoření repozitáře

1. Přihlaste se do GitHubu.
2. Klikněte na **New Repository**.
3. Zadejte název repozitáře.
4. Nastavte repozitář jako **Public**.
5. Zaškrtněte možnost **Add a README file**.
6. Klikněte na **Create repository**.

---

# 2. Spuštění GitHub Codespaces

1. Otevřete vytvořený repozitář.
2. Klikněte na tlačítko **Code**.
3. Přepněte na záložku **Codespaces**.
4. Klikněte na **Create codespace on main**.

Počkejte na spuštění vývojového prostředí.

---

# 3. Instalace rozšíření pro náhled webu

Aby bylo možné testovat web přímo v Codespaces, nainstalujte rozšíření:

1. V levém panelu otevřete **Extensions**.
2. Vyhledejte:

   ```
   Live Preview
   ```

3. Nainstalujte rozšíření **Live Preview (Microsoft)**.
4. Po dokončení instalace případně restartujte prostředí.

---

# 4. Vytvoření aplikace pomocí GitHub Copilot Agent

1. Otevřete **Copilot Chat**.
2. Přepněte režim na **Agent**.
3. Zadejte následující zadání:

   ```
   Vytvoř kompletní webovou aplikaci „Kočičí Sibyla“.

   Vytvoř všechny potřebné soubory automaticky.
   Neptej se na potvrzení jednotlivých kroků.

   Požadavky:
   - použij HTML, CSS a JavaScript
   - vytvoř index.html, style.css a script.js
   - zobraz obrázek kočky
   - přidej tlačítko pro věštění
   - vytvoř minimálně 20 různých věšteb
   - použij moderní responzivní design
   - přidej jednoduchou animaci při losování
   ```

4. Po vytvoření souborů potvrďte navržené změny.

---

# 5. Testování aplikace

1. Otevřete soubor `index.html`.
2. Klikněte pravým tlačítkem myši.
3. Vyberte:

   ```
   Open With → Live Preview
   ```

   nebo

   ```
   Show Preview
   ```

4. Ověřte:
   - správné zobrazení stránky,
   - funkčnost tlačítka,
   - zobrazování věšteb,
   - responzivní chování aplikace.

---

# 6. Vylepšení aplikace pomocí Copilotu

Místo ručních úprav používejte další prompty v Copilot Chatu.

Příklady:

```
Přidej dalších 30 věšteb.
```

```
Vylepši design tak, aby připomínal mystickou věštírnu.
```

```
Přidej animaci otáčení křišťálové koule během věštění.
```

```
Optimalizuj zobrazení pro mobilní telefon.
```

```
Přidej tlačítko pro sdílení poslední věštby.
```

---

# 7. Uložení změn do GitHubu

1. Otevřete panel **Source Control**.
2. Zkontrolujte změny.
3. Do zprávy pro commit napište například:

   ```
   První verze aplikace
   ```

4. Klikněte na **Commit**.
5. Poté klikněte na **Sync Changes** nebo **Push**.

Po dokončení budou změny nahrány do repozitáře.

---

# 8. Publikace pomocí GitHub Pages

1. Otevřete repozitář na GitHubu.
2. Přejděte do **Settings**.
3. V levém menu otevřete **Pages**.
4. V části **Build and deployment** nastavte:

   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/(root)**

5. Klikněte na **Save**.

---

# 9. Získání veřejné adresy webu

Po několika minutách GitHub vytvoří veřejnou stránku.

Adresa bude mít tvar:

```
https://uzivatel.github.io/nazev-repozitare/
```

Příklad:

```
https://bechynsky.github.io/cat-sibila/
```
