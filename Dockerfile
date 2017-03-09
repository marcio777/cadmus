FROM ubuntu:14.04
RUN apt-get update
RUN apt-get install -y nginx
#RUN apt-get install -y nodejs-legacy
#RUN apt-get install -y npm
RUN mkdir /app
ADD . /app
WORKDIR /app
#RUN npm install gulp -g
#RUN npm install
#RUN ln -s /usr/bin/nodejs /usr/bin/node
#RUN gulp
EXPOSE 4999
CMD ["nginx", "-c", "/app/.nginx.conf"]
