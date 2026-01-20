'use client';

interface StickyCTAProps {
    href: string;
    text?: string;
}

export default function StickyCTA({
    href,
    text = 'Check Official Website & Discount'
}: StickyCTAProps) {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-200 p-3 shadow-lg">
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn-primary w-full flex items-center justify-center gap-2 text-center no-underline"
            >
                <span>{text}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </a>
        </div>
    );
}
