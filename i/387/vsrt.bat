echo ---------------vsrt.bat v0. 13 ==============
echo %1 %2 %3
ffmpeg -i %1 -vf subtitles=%2 %3