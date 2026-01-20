import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: {
        default: 'HealthDaily - Honest Health Supplement Reviews',
        template: '%s | HealthDaily',
    },
    description: 'Unbiased, science-backed reviews of health supplements. No hype, just honest analysis to help you make informed decisions.',
    keywords: ['health supplements', 'supplement reviews', 'vitamins', 'wellness', 'nutrition'],
    authors: [{ name: 'HealthDaily Team' }],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        siteName: 'HealthDaily',
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
