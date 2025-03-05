## Lektion 2 – Dela upp state – Flera slices

### Teori och kodgenomgång

- **Mål:** Skapa en todo-slice och kombinera den med counter-slicen i storen.
- **Nyckelbegrepp:** Modularitet, flera slices, kombinerade reducers, useSelector, useDispatch.

### Övningar:

1. **Utöka todo-applikationen:**

   - Lägg till en funktion för att redigera en befintlig todo. Skapa en reducer `editTodo` i `todosSlice.js` som uppdaterar texten för en specifik todo.
   - Uppdatera din `TodoApp.jsx` så att den visar ett formulär för att redigera en todo vid behov.

2. **Skapa en ny slice:**
   - Skapa en ny slice, t.ex. `userSlice.js`, som hanterar en enkel användarprofil med namn och email.
   - Kombinera den nya slicen i `store.js` och skapa en komponent för att visa och uppdatera användarens information.
