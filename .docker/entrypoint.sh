#!/usr/bin/env bash
set -e

cp /usr/share/nginx/html/assets/env-config.json.template /usr/share/nginx/html/assets/env-config.json

## declare an array variable
declare -a env_vars=("ENV_NAME" "API_HOST_URL" "ADAL_TENANT" "ADAL_CLIENT_ID")

## now loop through the above array
for var in "${env_vars[@]}"
do
  sed -i 's|##'"$var"'##|"'"${!var}"'"|g' /usr/share/nginx/html/assets/env-config.json
done

exec "$@"
