import Image from 'next/image';
import Link from 'next/link';
import StarRating from './StarRating';

interface ReviewCardProps {
    slug: string;
    title: string;
    excerpt: string;
    thumbnail: string;
    rating: number;
}

export default function ReviewCard({ slug, title, excerpt, thumbnail, rating }: ReviewCardProps) {
    return (
        <Link href={`/reviews/${slug}`} className="block no-underline group">
            <article className="card overflow-hidden h-full flex flex-col">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={thumbnail}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                </div>

                {/* Content */}
                <div className="p-4 flex flex-col flex-1">
                    <h2 className="text-lg font-semibold text-dark-slate mb-2 line-clamp-2 group-hover:text-trust-blue transition-colors">
                        {title}
                    </h2>

                    <StarRating rating={rating} size="sm" />

                    <p className="text-sm text-gray-600 mt-2 line-clamp-2 flex-1">
                        {excerpt}
                    </p>

                    <span className="text-sm font-medium text-trust-blue mt-3 inline-flex items-center gap-1">
                        Read Review
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </span>
                </div>
            </article>
        </Link>
    );
}
