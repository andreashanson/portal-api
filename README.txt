#Make sure you have docker installed on your computer.

# Start a mongoDB with docker.
docker container run -it -d -p 27017:27017 mongo
Type docker ps to make sure it is up and running.

# Set environment variables for local development.
export X_TOKEN="TRALALALALA"
export MONGO_URI="mongodb://localhost:27017/portalconfigs"

# Set APP_HOST variable to make it work with swagger.
export APP_HOST="127.0.0.1:3000"

The X_TOKEN Variable you set here is the one you shall use when making requests to the API for auth's.

Then run "npm start"

# Curls for testing the different routes for the API.
curl -H "X-Token: TRALALALALA" http://localhost:3000/api/portals
curl -H "X-Token: TRALALALALA" -X DELETE http://localhost:3000/api/portals/andreas
curl -H "X-Token: asdfddd" -H "Accept-Charset: utf-8" -X POST -d portalname="andanna" -d customer_id=7 http://localhost:3000/api/portals
curl -H "X-Token: asdfddd" -X POST -d portalname="andanna" -d -d customer_id=7 http://localhost:3000/api/portals
curl -H "X-Token: TRALALALALA" -X POST -d portalname="andreas2" -d customer_id=2 http://localhost:3000/api/portals


# Docker help
docker version
docker info // will show you nr of running container etc.

docker container run -it //Interactive mode - running in foreground and not in the background.

docker container run --publish or -p // 80:80 my local port 80 and expose port 80 from container.


docker container run -it -p 27017:27017 --name my-mongodb mongo
// Will map /data/db on your container where data will be stored by default. To /my/own/datadir
$ docker run --name some-mongo -v /my/own/datadir:/data/db -d mongo


Start docker container with mongo.

docker container run -it -p 27017:27017 --name my-mongo mongo

When its up and running

make sure you have mongo installed on your computer. Then type mongo localhost:27017 and it will connect to your mongodb

# Build docker image.
docker build -t harbor.api.aws.icomera.com/custom/andreas:tag .

# Push docker image
docker push harbor.api.aws.icomera.com/custom/andreas:tag

# Deploy docker image with kubectl
Change deployment file to tag that you just pushed.
kubectl apply -f <deployment_file>
