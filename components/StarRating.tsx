interface StarRatingProps {
    rating: number;
    maxRating?: number;
    size?: 'sm' | 'md' | 'lg';
    showValue?: boolean;
}

export default function StarRating({
    rating,
    maxRating = 5,
    size = 'md',
    showValue = false
}: StarRatingProps) {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
    };

    const textSizeClasses = {
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
    };

    const renderStar = (index: number) => {
        const filled = index < Math.floor(rating);
        const halfFilled = !filled && index < rating;

        return (
            <svg
                key={index}
                className={`${sizeClasses[size]} ${filled || halfFilled ? 'text-star-gold' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
            >
                {halfFilled ? (
                    <defs>
                        <linearGradient id={`half-${index}`}>
                            <stop offset="50%" stopColor="currentColor" />
                            <stop offset="50%" stopColor="#d1d5db" />
                        </linearGradient>
                    </defs>
                ) : null}
                <path
                    fill={halfFilled ? `url(#half-${index})` : 'currentColor'}
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
            </svg>
        );
    };

    return (
        <div className="flex items-center gap-1" role="img" aria-label={`Rating: ${rating} out of ${maxRating} stars`}>
            <div className="flex">
                {Array.from({ length: maxRating }, (_, i) => renderStar(i))}
            </div>
            {showValue && (
                <span className={`${textSizeClasses[size]} font-medium text-dark-slate ml-1`}>
                    {rating.toFixed(1)}
                </span>
            )}
        </div>
    );
}
