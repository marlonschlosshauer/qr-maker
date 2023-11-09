export const getURLFromSearchParams = (
  searchParams: any,
  includeFallback: boolean = true
): string | undefined => {
  const fallback = includeFallback ? process.env.BASE_URL ?? "" : undefined;
  const { q = fallback } = searchParams ?? {};
  return (Array.isArray(q) ? q.at(0) : q) ?? fallback;
};
