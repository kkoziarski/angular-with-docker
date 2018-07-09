:: If you want to use multiple environments from the command line then before every environment variable use the -e flag.
:: Example:
:: docker run -d -t -i -e NAMESPACE='staging' -e PASSWORD='foo' busybox sh

::!!Note: Make sure put the container name after the environment variable, not before that.

docker run --rm -it -p 34444:80^
  -e ENV_NAME='localInContainer'^
  -e API_HOST_URL='//localhost:33333/'^
  -e ADAL_TENANT='ooaaaooo.onmicrosoft.com'^
  -e ADAL_CLIENT_ID='00020000-0000-1111-0000-000000003000'^
  kk/ng-docker:v1
