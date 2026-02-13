import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
            <div className="container-main py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <Link href="/" className="text-xl font-bold text-dark-slate no-underline">
                            review<span className="text-trust-blue">dotcom</span><span className="text-gray-400">.com</span>
                        </Link>
                        <p className="text-sm text-gray-500 mt-1">
                            © {currentYear} reviewdotcom.com. All rights reserved.
                        </p>
                    </div>

                    {/* Disclaimer */}
                    <div className="text-center md:text-right max-w-md">
                        <p className="text-xs text-gray-400 leading-relaxed">
                            Disclaimer: The content on this site is for informational purposes only.
                            Always consult a healthcare professional before taking any supplement.
                            We may earn affiliate commissions from qualifying purchases.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
