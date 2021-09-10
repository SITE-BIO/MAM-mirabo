FROM node:12-alpine


WORKDIR /app

RUN apk update \
    && apk add --no-cache tzdata
ENV TZ=Asia/Ho_Chi_Minh
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
COPY package.json ./

RUN npm i 

COPY . .
EXPOSE 3030
RUN npm run build
CMD ["npm", "start"]
