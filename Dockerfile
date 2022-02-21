FROM node:14.16.1

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 3000

CMD ["npm", "run", "start"]

# Create an image 'docker build -t todoapp .'
# Run container 'docker run -dp 3000:3000 --rm todoapp'
# Run container for local development 'docker run -dp 3000:3000 -v "$(pwd):/app" --rm todoapp'