FROM node:14.7.0

ENV YARN_VERSION 1.22.5

RUN curl -fSLO --compressed "https://yarnpkg.com/downloads/$YARN_VERSION/yarn-v$YARN_VERSION.tar.gz" \
	&& tar -xzf yarn-v$YARN_VERSION.tar.gz -C /opt/ \
	&& ln -snf /opt/yarn-v$YARN_VERSION/bin/yarn /usr/local/bin/yarn \
	&& ln -snf /opt/yarn-v$YARN_VERSION/bin/yarnpkg /usr/local/bin/yarnpkg \
	&& rm yarn-v$YARN_VERSION.tar.gz

RUN apt-get update && apt-get install -y yarn

RUN apt-get install git-core

WORKDIR /app

COPY package.json .

COPY . .

RUN yarn install

CMD ["yarn", "start"]
