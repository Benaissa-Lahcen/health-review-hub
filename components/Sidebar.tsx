import Image from 'next/image';
import Link from 'next/link';
import StarRating from './StarRating';

interface TopProduct {
    slug: string;
    title: string;
    thumbnail: string;
    rating: number;
}

interface SidebarProps {
    topProducts: TopProduct[];
}

export default function Sidebar({ topProducts }: SidebarProps) {
    return (
        <aside className="hidden lg:block w-80 flex-shrink-0">
            <div className="sticky top-24">
                {/* Top Rated Widget */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <h3 className="flex items-center gap-2 font-semibold text-dark-slate mb-4">
                        <svg className="w-5 h-5 text-star-gold" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        Top Rated
                    </h3>

                    <div className="space-y-4">
                        {topProducts.slice(0, 3).map((product, index) => (
                            <Link
                                key={product.slug}
                                href={`/reviews/${product.slug}`}
                                className="flex items-start gap-3 group no-underline"
                            >
                                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                                    <Image
                                        src={product.thumbnail}
                                        alt={product.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform"
                                        sizes="64px"
                                    />
                                    <div className="absolute top-1 left-1 bg-trust-blue text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                        {index + 1}
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-medium text-dark-slate line-clamp-2 group-hover:text-trust-blue transition-colors">
                                        {product.title}
                                    </h4>
                                    <StarRating rating={product.rating} size="sm" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </aside>
    );
}
