https://www.jenkins.io/doc/book/installing/docker/

```
./run_docker_dind.sh
docker build -t myjenkins-blueocean:2.452.2-1 .
./run_docker_jenkins.sh
```