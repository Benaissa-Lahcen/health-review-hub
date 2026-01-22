import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ReviewFrontmatter {
    title: string;
    slug: string;
    excerpt: string;
    thumbnail: string;
    productImage?: string;
    rating: number;
    videoId?: string;
    verdict: 'recommended' | 'not-recommended' | 'mixed';
    pros: string[];
    cons: string[];
    affiliateUrl: string;
    publishedAt: string;
    updatedAt?: string;
}

export interface Review extends ReviewFrontmatter {
    content: string;
}

const reviewsDirectory = path.join(process.cwd(), 'content/reviews');

export function getReviewSlugs(): string[] {
    try {
        const files = fs.readdirSync(reviewsDirectory);
        return files
            .filter((file) => file.endsWith('.mdx'))
            .map((file) => file.replace(/\.mdx$/, ''));
    } catch {
        return [];
    }
}

export function getReviewBySlug(slug: string): Review | null {
    try {
        const fullPath = path.join(reviewsDirectory, `${slug}.mdx`);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            ...(data as ReviewFrontmatter),
            slug,
            content,
        };
    } catch {
        return null;
    }
}

export function getAllReviews(): Review[] {
    const slugs = getReviewSlugs();
    const reviews = slugs
        .map((slug) => getReviewBySlug(slug))
        .filter((review): review is Review => review !== null)
        .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    return reviews;
}

export function getTopRatedReviews(count: number = 3): Review[] {
    const reviews = getAllReviews();
    return reviews.sort((a, b) => b.rating - a.rating).slice(0, count);
}
