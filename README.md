# Angular Docker image on multiple environments
How to build Angular docker image which can be deployed anywhere.

## Build Once, Deploy Anywhere
The problem described here: 
* [M: Multiple environments with Angular and Docker](https://medium.com/voobans-tech-stories/multiple-environments-with-angular-and-docker-2512e342ab5a)
* [GH: Load configuration from external file](https://github.com/angular/angular-cli/issues/6711)

## Main points
Load configuration from external file:
```
src\app\core\app-load\app-load.module.ts
src\app\core\app-load\app-load.service.ts
src\app\core\models\app-settings.ts

src\assets\env-config.json
src\assets\env-config.json.template
```
Docker - replace configuration on container run:

```
...

COPY ./.docker/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["bash", "/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
```
Replace tokens in the `env-config.json.template` file with those from environment variables passed on runtime in `.docker\tools\docker-run.bat`
```
.docker\entrypoint.sh
```

Docker tools:
```
.docker\tools\docker-build.bat
.docker\tools\docker-run.bat
```

## Resources
* [GH: Load configuration from external file](https://github.com/angular/angular-cli/issues/6711)
* [M: Multiple environments with Angular and Docker](https://medium.com/voobans-tech-stories/multiple-environments-with-angular-and-docker-2512e342ab5a)
* [Angular 4 Tutorial – Run Code During App Initialization](https://www.intertech.com/Blog/angular-4-tutorial-run-code-during-app-initialization/)
* [Deploying Angular 4 Apps with Environment-Specific Info](https://www.intertech.com/Blog/deploying-angular-4-apps-with-environment-specific-info/)
* [GH: Microservices Demo App](https://github.com/benc-uk/microservices-demoapp)
* [SO: configure Angular 2 Webpack App in Docker container environment specific](https://stackoverflow.com/a/40431356/3096092)

## Other resources
* [M: Angular in Docker with Nginx, supporting configurations / environments](https://medium.com/@tiangolo/angular-in-docker-with-nginx-supporting-environments-built-with-multi-stage-docker-builds-bb9f1724e984)
* [M: Your Angular apps as Docker containers](https://medium.com/@DenysVuika/your-angular-apps-as-docker-containers-471f570a7f2)
* [Angular app in docker](https://devblog.dymel.pl/2017/10/04/angular-in-docker/)
* [M: Create efficient Angular Docker images with Multi Stage Builds](https://medium.com/@avatsaev/create-efficient-angular-docker-images-with-multi-stage-builds-907e2be3008d)
