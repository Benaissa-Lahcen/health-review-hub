import type { ReviewFrontmatter } from './reviews';

interface ProductSchema {
    '@context': string;
    '@type': string;
    name: string;
    image: string;
    description: string;
    review: {
        '@type': string;
        reviewRating: {
            '@type': string;
            ratingValue: number;
            bestRating: number;
        };
        author: {
            '@type': string;
            name: string;
        };
        reviewBody: string;
    };
}

export function generateReviewSchema(review: ReviewFrontmatter, siteUrl: string = ''): ProductSchema {
    return {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: review.title.replace(/Is |a Scam\?.*|An Honest Review/gi, '').trim(),
        image: `${siteUrl}${review.thumbnail}`,
        description: review.excerpt,
        review: {
            '@type': 'Review',
            reviewRating: {
                '@type': 'Rating',
                ratingValue: review.rating,
                bestRating: 5,
            },
            author: {
                '@type': 'Organization',
                name: 'reviewdotcom.com',
            },
            reviewBody: review.excerpt,
        },
    };
}

export function generateBreadcrumbSchema(
    items: { name: string; url: string }[],
    siteUrl: string = ''
) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: `${siteUrl}${item.url}`,
        })),
    };
}

export function generateWebsiteSchema(siteUrl: string = '') {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'reviewdotcom.com',
        url: siteUrl || 'https://reviewdotcom.com',
        description: 'Honest, science-backed reviews of health supplements.',
        publisher: {
            '@type': 'Organization',
            name: 'reviewdotcom.com',
        },
    };
}
