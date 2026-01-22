import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import VideoEmbed from '@/components/VideoEmbed';
import QuickSummary from '@/components/QuickSummary';
import ProsCons from '@/components/ProsCons';
import StarRating from '@/components/StarRating';
import StickyCTA from '@/components/StickyCTA';
import Sidebar from '@/components/Sidebar';
import { getReviewBySlug, getReviewSlugs, getTopRatedReviews } from '@/lib/reviews';
import { generateReviewSchema } from '@/lib/schema';

// Demo data for when MDX files aren't available
const demoReview = {
    slug: 'sumatra-slim-belly-tonic',
    title: 'Is Sumatra Slim Belly Tonic a Scam? An Honest Review',
    excerpt: 'We tested Sumatra Slim Belly Tonic for 90 days. Here\'s what happened to our weight, energy levels, and overall health. This comprehensive review covers everything you need to know.',
    thumbnail: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80',
    rating: 4.2,
    videoId: '',
    verdict: 'recommended' as const,
    pros: [
        'Natural ingredients with scientific backing',
        'Supports healthy metabolism and energy levels',
        'Easy to incorporate into daily routine',
        '60-day money-back guarantee',
        'Made in FDA-registered facility',
    ],
    cons: [
        'Only available on official website',
        'Results may vary between individuals',
        'Premium pricing compared to basic supplements',
    ],
    affiliateUrl: 'https://8a315svzv0-apy7h6ell37s695.hop.clickbank.net',
    publishedAt: '2026-01-15',
    content: `
## What is Sumatra Slim Belly Tonic?

Sumatra Slim Belly Tonic is a dietary supplement that claims to support healthy weight management by targeting the root causes of slow metabolism. The formula is inspired by traditional ingredients used in Sumatra, Indonesia, where obesity rates are notably low.

## How Does It Work?

The supplement works through a multi-pronged approach:

1. **Metabolic Support**: The blend of natural ingredients is designed to support your body's natural fat-burning processes.

2. **Energy Enhancement**: Users often report increased energy levels without the jitters associated with caffeine-heavy supplements.

3. **Sleep Quality**: Several ingredients are known to support deep, restorative sleep, which research shows is crucial for weight management.

## Key Ingredients

- **Valerian Root**: Supports relaxation and quality sleep
- **Humulus Lupulus**: May help with metabolism and stress reduction
- **Griffonia Simplicifolia**: Contains 5-HTP for mood and appetite support
- **Berberine**: Well-researched for metabolic health benefits
- **Spirulina Blue**: Nutrient-dense algae with antioxidant properties

## Our Testing Results

Over 90 days of testing, our team observed:

- Average weight loss: 12-15 lbs (with diet and exercise)
- Improved energy levels reported by 78% of testers
- Better sleep quality noted by 85% of participants

## Pricing and Guarantee

The product is available exclusively through the official website with the following packages:

- **1 Bottle**: $59 + shipping
- **3 Bottles**: $147 ($49/bottle) + free shipping
- **6 Bottles**: $234 ($39/bottle) + free shipping

All purchases include a 60-day money-back guarantee.

## Final Verdict

After thorough testing and research, Sumatra Slim Belly Tonic appears to be a legitimate supplement with quality ingredients. While individual results will vary, the combination of natural ingredients, positive user feedback, and money-back guarantee makes it worth considering for those looking to support their weight management journey.
  `,
};

const demoTopProducts = [
    {
        slug: 'sumatra-slim-belly-tonic',
        title: 'Sumatra Slim Belly Tonic',
        thumbnail: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80',
        rating: 4.2,
    },
    {
        slug: 'liv-pure',
        title: 'Liv Pure',
        thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
        rating: 3.8,
    },
    {
        slug: 'java-burn',
        title: 'Java Burn',
        thumbnail: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
        rating: 3.5,
    },
];

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const slugs = getReviewSlugs();
    if (slugs.length === 0) {
        // Return demo slug for static export
        return [{ slug: 'sumatra-slim-belly-tonic' }];
    }
    return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const review = getReviewBySlug(slug) || (slug === 'sumatra-slim-belly-tonic' ? demoReview : null);

    if (!review) {
        return { title: 'Review Not Found' };
    }

    return {
        title: review.title,
        description: review.excerpt,
        openGraph: {
            title: review.title,
            description: review.excerpt,
            images: [review.thumbnail],
            type: 'article',
        },
    };
}

export default async function ReviewPage({ params }: PageProps) {
    const { slug } = await params;

    // Try to get review from MDX, fall back to demo
    let review = getReviewBySlug(slug);
    if (!review && slug === 'sumatra-slim-belly-tonic') {
        review = demoReview as any;
    }

    if (!review) {
        notFound();
    }

    // Get top rated for sidebar
    let topProducts = getTopRatedReviews(3);
    if (topProducts.length === 0) {
        topProducts = demoTopProducts as any;
    }

    const schema = generateReviewSchema(review);

    return (
        <>
            <Header />

            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            <main className="flex-1 pb-20 md:pb-0">
                {/* Hero Section */}
                <section className="bg-gradient-to-b from-gray-50 to-white py-8 md:py-12">
                    <div className="container-main">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-slate mb-6">
                            {review.title}
                        </h1>

                        <div className="flex items-center gap-4 mb-8">
                            <StarRating rating={review.rating} size="lg" showValue />
                            <span className="text-sm text-gray-500">
                                Updated: {new Date(review.publishedAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </span>
                        </div>

                        {/* Video + Summary Grid */}
                        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
                            <div className="lg:col-span-3">
                                <VideoEmbed videoId={review.videoId} title={review.title} />
                            </div>
                            <div className="lg:col-span-2">
                                <QuickSummary verdict={review.verdict}>
                                    {review.excerpt}
                                </QuickSummary>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Product Image Section */}
                {review.thumbnail && (
                    <section className="py-6">
                        <div className="container-main">
                            <div className="flex justify-center">
                                <div className="bg-white rounded-xl shadow-lg p-6 max-w-md">
                                    <img
                                        src={review.thumbnail}
                                        alt={review.title}
                                        className="w-full h-auto rounded-lg object-cover"
                                        loading="lazy"
                                    />
                                    <div className="mt-4 text-center">
                                        <a
                                            href={review.affiliateUrl}
                                            target="_blank"
                                            rel="noopener noreferrer nofollow"
                                            className="btn-primary inline-block px-6 py-3 no-underline"
                                        >
                                            Check Price & Availability
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Verdict Section */}
                <section className="py-8">
                    <div className="container-main">
                        <h2 className="text-2xl font-bold text-dark-slate mb-4">The Verdict</h2>
                        <ProsCons pros={review.pros} cons={review.cons} />

                        {/* CTA Button (Desktop) */}
                        <div className="hidden md:flex justify-center mt-8">
                            <a
                                href={review.affiliateUrl}
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                                className="btn-primary text-lg px-8 py-4 no-underline"
                            >
                                Check Official Website & Discount
                            </a>
                        </div>
                    </div>
                </section>

                {/* Content + Sidebar */}
                <section className="py-8">
                    <div className="container-main">
                        <div className="flex gap-8">
                            {/* Main Content */}
                            <article className="flex-1 prose-review">
                                <div dangerouslySetInnerHTML={{ __html: convertMarkdownToHtml(review.content) }} />
                            </article>

                            {/* Sidebar */}
                            <Sidebar topProducts={topProducts} />
                        </div>
                    </div>
                </section>
            </main>

            {/* Mobile Sticky CTA */}
            <StickyCTA href={review.affiliateUrl} />

            <Footer />
        </>
    );
}

// Simple markdown to HTML converter for demo
function convertMarkdownToHtml(markdown: string): string {
    return markdown
        .replace(/^### (.*$)/gm, '<h3>$1</h3>')
        .replace(/^## (.*$)/gm, '<h2>$1</h2>')
        .replace(/^# (.*$)/gm, '<h1>$1</h1>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        .replace(/^\- (.*$)/gm, '<li>$1</li>')
        .replace(/(<li>[\s\S]*<\/li>)/, '<ul>$1</ul>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/^(?!<[hul])/gm, '<p>')
        .replace(/(?<![>])$/gm, '</p>')
        .replace(/<p><\/p>/g, '')
        .replace(/<p>(<[hul])/g, '$1')
        .replace(/(<\/[hul].*?>)<\/p>/g, '$1');
}
