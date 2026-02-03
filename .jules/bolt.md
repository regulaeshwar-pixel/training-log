## 2024-05-23 - Date String Performance
**Learning:** In Node 22, `d.toISOString().substring(0,10)` was slower (10ms) than template literal ``${y}-${m}-${d}`` (7.4ms) for 10k iterations.
**Action:** Do not assume native methods like `toISOString` are always faster for partial formatting. Benchmark always.
