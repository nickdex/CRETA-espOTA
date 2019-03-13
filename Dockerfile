FROM node

WORKDIR /app

COPY . /app

RUN yarn

ENV PORT=80

EXPOSE 80

CMD [ "node", "server.js" ]
