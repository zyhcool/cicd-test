# from 构建镜像的基础源镜像 该image镜像文件继承官方的node image
FROM node:lts-alpine3.9

# 在容器中创建一个目录
RUN mkdir -p /usr/src/travis-test/

WORKDIR /usr/src/travis-test/

COPY . /usr/src/travis-test/

RUN npm install

EXPOSE 4000

CMD npm run start