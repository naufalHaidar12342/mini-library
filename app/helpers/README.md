# helpers

Functions/methods that use/import third-party library, i.e. library outside JavaScript, TypeScript, React, and Nextjs

## Files and folders convention

- `supabase`: folder specifically for functions related to Supabase
- `fallback-books.ts`: function that return an array of static books, meant as fallback data when the data from Supabase still being fetched
- `custom-theme-provider.tsx`: React Client Component that imports from `next-themes` library and being used as wrapper for `{children}` props in `layout.tsx`
