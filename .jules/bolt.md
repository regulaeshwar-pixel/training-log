## 2024-10-27 - Cache Safety in Global State Functions
**Learning:** Optimizing a function that accepts an argument (e.g., `calculateStreak(history)`) by using a global cache (`getDateMap()`) creates a bug if the argument differs from the global state.
**Action:** Always wrap global cache usage with a check `if (arg === globalState)` and provide a fallback path to preserve the function contract.
