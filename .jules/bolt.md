## 2024-05-22 - Date Object Overhead
**Learning:** In a rendering loop or frequent calculation (like streak counting), creating `new Date()` and formatting ISO strings (`YYYY-MM-DD`) creates significant GC pressure and CPU overhead.
**Action:** Use `Date.parse()` or integer timestamp comparisons on sorted arrays where possible to avoid object allocation.
