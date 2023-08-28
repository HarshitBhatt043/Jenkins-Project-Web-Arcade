FROM php:alpine AS Building
RUN apk update && apk add --no-cache git
WORKDIR /app
COPY . /app
WORKDIR /app/maker
RUN php build.php install
RUN find /app -type d -name ".git" -exec rm -rf {} +

FROM httpd:alpine3.16
COPY --from=Building /app /usr/local/apache2/htdocs/
EXPOSE 80
