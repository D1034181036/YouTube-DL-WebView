# YouTube-Video-Downloader

A simple web tool to find YouTube video download url.

Powered by [youtube-dl](https://github.com/ytdl-org/youtube-dl)

## Online Demo
[YouTube Video Downloader](http://18.179.174.37/youtube/)

## Screen Shot
![screen_shot](https://i.imgur.com/MFrVaTl.png)

## How It Works
1. Build a php api to call `youtube-dl -j [youtube video url]`.
2. Make a web view to communicate with the api.

## Getting Started

1. Setup a php server.
2. Setting your server domain in `api.php`.
```
$domain = 'http://localhost/youtube/';
```
3. Install youtube-dl.

### Linux
```
sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
sudo chmod a+rx /usr/local/bin/youtube-dl
```
### Windows
```
youtube-dl --update
```

