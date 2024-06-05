document.addEventListener('DOMContentLoaded', function () {
    const player = new Plyr('#player');

    window.loadVideo = function () {
        const url = document.getElementById('video-url').value;
        const videoId = extractVideoId(url);
        if (videoId) {
            player.source = {
                type: 'video',
                sources: [
                    {
                        src: videoId,
                        provider: 'youtube',
                    },
                ],
            };
        } else {
            alert('Invalid URL');
        }
    };

    function extractVideoId(url) {
        const regex = /(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }
});
