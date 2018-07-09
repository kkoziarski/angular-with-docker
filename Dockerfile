# Stage 0, "builder", based on Node.js, to build and compile Angular
FROM node:9.11 as builder

WORKDIR /app

# Copy all files not listed in .dockerignore
COPY . .

RUN npm install --no-optional

RUN npm run build -- --output-path=./dist/out --configuration production

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
WORKDIR /app

RUN  rm -rf /usr/share/nginx/html/*

COPY --from=builder /app/dist/out /usr/share/nginx/html

COPY ./.docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY ./.docker/entrypoint.sh /entrypoint.sh

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["bash", "/entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]


#------------------------------------------
#docker build -t kk/ng-docker:v1 .
#docker build --no-cache -t kk/ng-docker:v1 .
#docker run --rm -p 34444:80  kk/ng-docker:v1
#docker run --rm -it -p 34444:80 -e ENV_NAME='localInContainer' -e API_HOST_URL='//localhost:33333/' -e ADAL_TENANT='ookkoo.onmicrosoft.com' -e ADAL_CLIENT_ID='00020000-0000-1111-0000-000000003000' kk/ng-docker:v1
