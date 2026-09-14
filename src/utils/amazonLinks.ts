export function getAmazonUrl(
  searchQuery: string,
  asin?: string,
  affiliateTag: string = 'cigaradvisor-20'
): string {
  const cleanTag = affiliateTag.trim() || 'cigaradvisor-20';
  const cleanAsin = asin?.trim();

  // Direct product page link on Amazon
  if (cleanAsin) {
    return `https://www.amazon.com/dp/${cleanAsin}?tag=${encodeURIComponent(cleanTag)}`;
  }

  return `https://www.amazon.com/dp/${encodeURIComponent(searchQuery)}?tag=${encodeURIComponent(cleanTag)}`;
}
