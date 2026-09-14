export const AMAZON_ASSOCIATE_TAG = 'bestcigarhumidor0c-20';

export function getAmazonUrl(searchQuery: string, asin?: string): string {
  const cleanAsin = asin?.trim();

  if (cleanAsin) {
    return `https://www.amazon.com/dp/${encodeURIComponent(cleanAsin)}?tag=${AMAZON_ASSOCIATE_TAG}`;
  }

  return `https://www.amazon.com/s?k=${encodeURIComponent(searchQuery)}&tag=${AMAZON_ASSOCIATE_TAG}`;
}
