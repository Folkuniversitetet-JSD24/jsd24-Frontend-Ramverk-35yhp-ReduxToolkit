- **Nyckelbegrepp:** Slice, Reducer, Action, dispatch, useSelector, useDispatch.

### Övningar:

1. **Modifiera räknaren:**

   - Lägg till en knapp för att återställa räknaren till noll.
   - Skapa en reducer `reset` i `counterSlice.js` och använd den i din `Counter.jsx`.

2. **Utöka logiken:**

   - Lägg till en ny reducer som multiplicerar räknarens värde med 2 (t.ex. `double`).
   - Testa att lägga till en knapp i din komponent som dispatchar denna action.

3.A **Refaktorering:**

- Försök att flytta ut all logik för räknaren till en separat fil (om den inte redan är det) och diskutera fördelarna med att ha en modulär struktur.

3.B Gå tillbaka till era tidigare applikationer, testa att bryta ut state som är komplicerade (till exempel: skickas mellan grandparents och granchildren) till Global state. Mängd repetetion av att skapa slices och store, samt använding av det med useSelector, useDispatch i era komponenter.
