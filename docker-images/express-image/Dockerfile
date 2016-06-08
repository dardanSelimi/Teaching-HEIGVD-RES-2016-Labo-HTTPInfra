FROM node:4.4
MAINTAINER Dardan Selimi <dardan.selimi@heig-vd.ch>

RUN apt-get update && \
	apt-get install -y vim
	
COPY src/ /opt/app

CMD ["node", "/opt/app/index.js"]