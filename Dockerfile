FROM node:12.18

WORKDIR /build

COPY . .

RUN yarn install
RUN yarn build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=0 /build/build/ /usr/share/nginx/html/

EXPOSE 80