cp ../AIDA-IoT-RoomAgent/.pioenvs/nodemcuv2/firmware.bin public/update.bin

rsync -Ptv public/update.bin rpi:/home/pi/firmware/
