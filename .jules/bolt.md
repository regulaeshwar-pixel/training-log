## 2024-05-23 - Redundant Array Filtering in Render Loop
**Learning:** The application re-derives state from `allData` on every render. Multiple helper functions (`checkRecoveryDebt`, `checkPartialStreak`, etc.) were independently filtering `allData` to get "valid ISO dates". This resulted in O(k*N) operations per render instead of O(N).
**Action:** Memoize the filtered "valid history" once at the start of the render cycle (or via a memoized getter) and pass this clean array to all helper functions. This pattern is crucial for "re-render from scratch" architectures.
