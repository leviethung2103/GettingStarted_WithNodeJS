## Dockerizing a Node.js web app

Get a Nodejs application into Docker container. 

Create a simple web application in Node.js 

Then build a Docker image for that application 

**Instantiate** a **container** from that image. 



**Docker**: allow you to package an application with its environment and all of its dependencies into a "box" (called a container).

An image is the blueprint for a container. 

A container is a running instance of an image 

npm install will generate a `package-lock.json` file which will be copied to your Docker image. 



`server.js` file that defines a web app using the Express.js framework.



Express.js is just a **framework**. 

Can run this app inside a Docker container using the official Docker image. 



Firstly, we need to build a Docker image of your app. 

1. **Create a Dockerfile**

2. Copy dependencies 

copy `package.json` file into the current directory. 

`npm ci` command: provide faster, reliable reproducible builds for production environment. 



Create `.dockerignore` to prevent your local modules and debug logs from being copied into your Docker image. 



### Building your image

Go the directory that has your `Dockerfile`

```bash
docker build -t <your username>/node-web-app .
```

E.g 

```
docker build -t hunglv/node-web-app .
```

Your image will now be listed by Docker: 

```
docker images
# Example
REPOSITORY                      TAG        ID              CREATED
node                            12         1934b0b038d1    5 days ago
<your username>/node-web-app    latest     d64d3505b0d2    1 minute ago
```



## Run the image 

Running your image with -d runs the containers in detached mode. 

Leave the container running in the background. 

-p: flag redirects a public port to a private port inside the container. 

```
docker run -p 49160:8080 -d <your username>/node-web-app
```

Print the output of your app

```
# get the container ID 
docker ps 

# print app output
docker logs <container_id>
```

If you need to go inside the container you can use the `exec` command. 

```
# enter the container 
docker exec -it <container_id> /bin/bash
```





## Test 

To test your app, get the port of your app that Docker mapped:

```
docker ps 
```



Docker mapped the 8080 port inside of the container to the port 49160 on you machine. 

Call your app using `curl` 

```
curl -i localhost:49160
```

The result will be 

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 11
ETag: W/"b-Ck1VqNd45QIvq3AZd8XYQLvEhtA"
Date: Tue, 23 Jun 2020 02:00:37 GMT
Connection: keep-alive
```





```
docker run -v /home/... :/app -it hunglv/node-web-app /bin/bash
```





## Run the command

```
docker run -p 49160:8080 -v /mnt/6ff19c96-33ad-4ca2-a50c-63ee1355eb0a/Docker_NodeJS:/usr/src/app -it hunglv/node-web-app:latest /bin/bash
```

