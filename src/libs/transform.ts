export const getURLFromSearchParams = (searchParams: any): string => {
  const fallback = process.env.BASE_URL ?? "";
  const { q = fallback } = searchParams ?? {};
  return (Array.isArray(q) ? q.at(0) : q) ?? fallback;
};
