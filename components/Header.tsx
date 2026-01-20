'use client';

import Link from 'next/link';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
            <div className="container-main">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-1 no-underline">
                        <span className="text-2xl font-bold text-dark-slate">Health</span>
                        <span className="text-2xl font-bold text-trust-blue">Daily</span>
                    </Link>

                    {/* Navigation */}
                    <nav className="flex items-center gap-6">
                        <Link
                            href="/#top-rated"
                            className="text-sm font-medium text-dark-slate hover:text-trust-blue transition-colors no-underline"
                        >
                            Top Rated
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
