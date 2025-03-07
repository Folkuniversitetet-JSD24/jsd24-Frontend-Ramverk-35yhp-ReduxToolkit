## Lektion 3 – Asynkrona åtgärder & API-integration med createAsyncThunk()

### Teori och kodgenomgång

- **Mål:** Skapa en asynkron thunk för att hämta data från ett API och visa resultatet i en komponent.
- **Nyckelbegrepp:** Asynkrona åtgärder, createAsyncThunk, pending/fulfilled/rejected, API-integration, useEffect.

### Övningar:

1. **Förbättra posts-thunken:**

   - Modifiera `fetchPosts` i `postsSlice.js` så att den hanterar en parameter (t.ex. antal inlägg att hämta).
   - Lägg till felhantering om API-anropet tar längre tid än förväntat (du kan simulera detta med en timeout).

2. **Skapa en ny API-integration:**

   - Skapa en ny thunk, t.ex. `fetchComments`, som hämtar kommentarer från ett API (använd t.ex. `https://jsonplaceholder.typicode.com/comments`).
   - Skapa en ny slice för kommentarer och en komponent som visar en lista med kommentarer.

3. **Visualisering av asynkrona tillstånd:**
   - Lägg till en visuell indikator (t.ex. en spinner eller en text "Loading...") i din `PostsList.jsx` för att tydliggöra när data laddas.
   - Diskutera hur du kan hantera fel (t.ex. visa ett meddelande) och hur detta förbättrar användarupplevelsen.
