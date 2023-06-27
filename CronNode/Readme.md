# First Container
* Create a docker file to run a single service with node JS

Build image with tag latest
* docker build --tag cron-ticker .

Build image with tag 1.0
* docker build --tag cron-ticker:1.1

Rename image
* docker image tag cron-ticker laravelseadocker/cron-ticker

Upload Image to Docker Hub
* docker login
  
Push image
* docker push laravelseadocker/cron-ticker
  
Remove image
* docker image rm name_container

Remove images with use
* docker image prune

Run Container
* docker container run name_container


