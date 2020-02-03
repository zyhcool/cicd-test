# from 构建镜像的基础源镜像 该image镜像文件继承官方的node image
FROM node:lts-alpine3.9

# 在容器中创建一个目录
RUN mkdir -p /usr/src/cicd-test/

WORKDIR /usr/src/cicd-test/

COPY . /usr/src/cicd-test/

RUN npm install

EXPOSE 4000

CMD npm run start