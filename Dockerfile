FROM node:lts-alpine as angular
WORKDIR /usr/src/app
COPY ["package.json", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY . .
EXPOSE 3000
RUN chown -R node /usr/src/app
USER node
CMD ["npm", "start"]


FROM nginx:alpine
VOLUME [ "/var/cache/nginx" ]
COPY --from=angular /usr/src/app/dist/fiap-atividade-4 /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/deault.conf




# docker build -t atividade4 .
# docker run -p 8081:80 atividade4


