# NodeJS and Docker

This repository is used for deploying a simple web application. 

This is the step by step: 

1. **Create the Node.js app** 

Create `package.json` file that describes your app and its dependencies. 

Create `server.js` file that defines a web app using Express.js framework. 

Create `Dockerfile`. 

2. **Build the Dockerfile** 

```bash
docker build -t hunglv/node-web-app .
```

3. **Run the container** 

```
docker run -d -p 8080:8080 -v $(pwd):/usr/src/app hunglv/node-web-app
```

4. **For Development**

Don't use the `-d` mode: detach mode.

To exit the program with `Ctrl+C`.

```
process.on('SIGINT', () => {
	console.info('Interrupted')
	process.exit(0)
});
```



### How to install NodeJS and NPM locally
Note the, the build the Docker Image with NodeJS. It requires the `package-lock.json` file. If you add new dependencies, you need to run `npm install` to create that file again.

```
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt install nodejs
```

> npm install

## Reference 

https://nodejs.org/de/docs/guides/nodejs-docker-webapp/