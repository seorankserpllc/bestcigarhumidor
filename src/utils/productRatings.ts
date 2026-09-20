import type { AmazonProduct } from '../types/humidor';

export const getEditorialRating = (product: AmazonProduct): number | null => {
  if (product.scorecard) {
    const scores = Object.values(product.scorecard);
    return scores.reduce((total, score) => total + score, 0) / scores.length;
  }

  return product.sealRating > 0 ? product.sealRating : null;
};
