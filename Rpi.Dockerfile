FROM arm32v7/node

COPY qemu-arm-static /usr/bin/qemu-arm-static

WORKDIR /app

COPY . /app

RUN yarn

ENV PORT=80

EXPOSE 80

CMD [ "node", "server.js" ]
