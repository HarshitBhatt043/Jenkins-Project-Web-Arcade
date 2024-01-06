FROM php:alpine AS Building
RUN apk update && apk add --no-cache git
RUN pwd && ls && ls -l
WORKDIR /app
COPY . /app
RUN  cd ~ && pwd && ls && ls -l
RUN  cd root && pwd && ls && ls -l /app.maker
WORKDIR /app/maker
RUN php build.php install
RUN find /app -type d -name ".git" -exec rm -rf {} +
RUN  cp -r /app/cloud/assets/* /app/
RUN rm -rf /app/cloud

FROM httpd:alpine3.16
COPY --from=Building /app /usr/local/apache2/htdocs/
RUN addgroup -g 1001 arcade && adduser -D -u 1001 -G arcade arcade
RUN find /usr/local/apache2/htdocs -type d -print0 | xargs -0 -P 4 -I {} chown arcade:arcade {}
RUN chown -R arcade:arcade /usr/local/apache2/logs/
USER arcade
EXPOSE 80
CMD ["httpd-foreground"]
