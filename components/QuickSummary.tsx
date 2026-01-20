interface QuickSummaryProps {
    children: React.ReactNode;
    verdict?: 'recommended' | 'not-recommended' | 'mixed';
}

export default function QuickSummary({ children, verdict = 'mixed' }: QuickSummaryProps) {
    const verdictStyles = {
        recommended: 'border-l-pro-green',
        'not-recommended': 'border-l-con-red',
        mixed: 'border-l-yellow-500',
    };

    const verdictLabels = {
        recommended: { text: 'Recommended', color: 'text-pro-green' },
        'not-recommended': { text: 'Not Recommended', color: 'text-con-red' },
        mixed: { text: 'Mixed Results', color: 'text-yellow-600' },
    };

    return (
        <div className={`bg-gray-100 rounded-xl p-6 border-l-4 ${verdictStyles[verdict]}`}>
            <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-dark-slate" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <h3 className="font-semibold text-dark-slate">Quick Summary</h3>
            </div>

            <div className="text-gray-700 text-sm leading-relaxed mb-4">
                {children}
            </div>

            <div className="flex items-center gap-2 pt-3 border-t border-gray-200">
                <span className="text-sm font-medium text-gray-500">Bottom Line:</span>
                <span className={`text-sm font-bold ${verdictLabels[verdict].color}`}>
                    {verdictLabels[verdict].text}
                </span>
            </div>
        </div>
    );
}
