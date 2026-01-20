interface VideoEmbedProps {
    videoId?: string;
    title?: string;
}

export default function VideoEmbed({ videoId, title = 'Video Review' }: VideoEmbedProps) {
    if (!videoId) {
        // Placeholder state when no video ID is provided
        return (
            <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden flex items-center justify-center">
                <div className="text-center text-white">
                    <svg className="w-16 h-16 mx-auto mb-3 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm opacity-75">Video Coming Soon</p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
            />
        </div>
    );
}
