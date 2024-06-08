// Youtube api
const CHANNEL_ID = 'UCDENDWqdCLdO6g2H9ixTNTw'; 
const API_KEY = 'AIzaSyBkcoF0yhxLZhmRBmZV9t51frh_DvrOUSM'; 
let Alert = document.getElementById('alert');

function abbreviateNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    } else {
        return num;
    }
}

//  Lấy số lượng người đăng ký
fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${API_KEY}`)
    .then(response => response.json())
    .then(data => {
        const subscriberCount = data.items[0].statistics.subscriberCount;
        document.querySelector('#channel-container2 .title-container p').textContent = `${abbreviateNumber(subscriberCount)} Subscribers`;
    })
    .catch(
        error => {
            console.error('Error:', error);
            Alert.style.display = 'flex'
        }
    );    

//  Lấy 3 video có lượt xem nhiều nhất
fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&key=${API_KEY}&maxResults=3&order=viewCount&type=video`)
    .then(response => response.json())
    .then(data => {
        const videoIds = data.items.map(item => item.id.videoId).join(',');

         // Lấy số lượt xem và hình thu nhỏ cho từng video
        return fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoIds}&key=${API_KEY}`);
    })
    .then(response => response.json())
    .then(data => {
        data.items.forEach((item, index) => {
            const videoElement = document.querySelectorAll('#channel-container2 .slider1 .item')[index];
            videoElement.querySelector('.card-title h6').textContent = item.snippet.title;
            videoElement.querySelector('.card-title p').textContent = abbreviateNumber(item.statistics.viewCount) + " Views";
            videoElement.querySelector('.card-img-top').src = item.snippet.thumbnails.maxres.url;
            const videoUrl = `https://www.youtube.com/watch?v=${item.id}`;
            videoElement.querySelector('a').href = videoUrl;
        });
    })
    .catch(
        error => {
            console.error('Error:', error);
            Alert.style.display = 'flex'
            let videoIds = ['XFQhHJLwfFk', 'ML8h7-UrtDw', 'DNqRD5EZ2KQ'];

            videoIds.forEach(videoId => {
                fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videoId}&key=${apiKey}`)
                    .then(response => response.json())
                    .then(data => {
                        let viewCount = data.items[0].statistics.viewCount;
                        videoElement.querySelector('.card-title p').textContent = abbreviateNumber(viewCount) + " Views";
                    })
                    .catch(error => console.error('Error:', error));
            });

        }
    );    


const CHANNEL_IDS = ['UCKyCNNJMe7dqlHhA8TRbe2A', 'UCYVtMuCevOLZdBVbWzrz21w', 'UC_fGtUvYTzYWXVQUwGXleDg', 'UCwf_BHwAGw3DrK9dPjtnYAw', 'UCcC4snU6cU0laQ9bK4Mn11A'];

CHANNEL_IDS.forEach((channelId, index) => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            const subscriberCount = data.items[0].statistics.subscriberCount;
            document.getElementById('sub' + (index + 1)).textContent = `${abbreviateNumber(subscriberCount)} Subscribers`;
        })
        .catch(
            error => {
                console.error('Error:', error);
                Alert.style.display = 'flex'
            }
        );        
});

//     ['UCKyCNNJMe7dqlHhA8TRbe2A', 'UCYVtMuCevOLZdBVbWzrz21w', 'UC_fGtUvYTzYWXVQUwGXleDg', 'UCwf_BHwAGw3DrK9dPjtnYAw', 'UCcC4snU6cU0laQ9bK4Mn11A']