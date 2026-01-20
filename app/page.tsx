import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ReviewCard from '@/components/ReviewCard';
import { getAllReviews } from '@/lib/reviews';

// Static data for demo (will be replaced by MDX content)
const demoReviews = [
    {
        slug: 'sumatra-slim-belly-tonic',
        title: 'Is Sumatra Slim Belly Tonic a Scam? An Honest Review',
        excerpt: 'We tested Sumatra Slim Belly Tonic for 90 days. Here\'s what happened to our weight, energy levels, and overall health...',
        thumbnail: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=800&q=80',
        rating: 4.2,
    },
    {
        slug: 'liv-pure',
        title: 'Liv Pure Review: Does This Liver Supplement Actually Work?',
        excerpt: 'Liv Pure claims to support liver health and boost metabolism. We analyzed the ingredients and real user results...',
        thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
        rating: 3.8,
    },
    {
        slug: 'java-burn',
        title: 'Java Burn Coffee Review: Weight Loss or Waste of Money?',
        excerpt: 'Can adding a powder to your coffee really help you lose weight? We investigated Java Burn\'s claims...',
        thumbnail: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80',
        rating: 3.5,
    },
];

export default function HomePage() {
    // Try to get reviews from MDX, fall back to demo data
    let reviews = getAllReviews();
    if (reviews.length === 0) {
        reviews = demoReviews as any;
    }

    return (
        <>
            <Header />

            <main className="flex-1">
                {/* Hero Section */}
                <section className="bg-gradient-to-b from-gray-50 to-white py-12 md:py-16">
                    <div className="container-main text-center">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-slate mb-4">
                            Honest Health Supplement Reviews
                        </h1>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            No hype. No bias. Just science-backed analysis to help you make informed decisions about your health.
                        </p>
                    </div>
                </section>

                {/* Latest Reviews Grid */}
                <section className="py-12" id="top-rated">
                    <div className="container-main">
                        <h2 className="text-2xl font-bold text-dark-slate mb-8">Latest Reviews</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {reviews.map((review) => (
                                <ReviewCard
                                    key={review.slug}
                                    slug={review.slug}
                                    title={review.title}
                                    excerpt={review.excerpt}
                                    thumbnail={review.thumbnail}
                                    rating={review.rating}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    );
}
