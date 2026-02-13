import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: {
        default: 'reviewdotcom.com - Honest Health Supplement Reviews',
        template: '%s | reviewdotcom.com',
    },
    description: 'Unbiased, science-backed reviews of health supplements. No hype, just honest analysis to help you make informed decisions.',
    keywords: ['health supplements', 'supplement reviews', 'vitamins', 'wellness', 'nutrition'],
    authors: [{ name: 'reviewdotcom.com Team' }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        siteName: 'reviewdotcom.com',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col">
                {children}
            </body>
        </html>
    );
}
