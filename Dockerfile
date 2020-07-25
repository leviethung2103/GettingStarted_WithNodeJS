# define from what image we want to build from
FROM node:12

# create a directory to hold the application code inside the image
WORKDIR /usr/src/app

# install your app dependencies using the npm binary
COPY package*.json ./


RUN npm install 



# Bundle app source
COPY . .


EXPOSE 8080


# Define the CMD to run your app 

CMD [ "node", "server.js" ]
# ENTRYPOINT ["./bin/simulator"]
# ENTRYPOINT ["node","server.js"]
# CMD ["tail", "-f", "/dev/null"]