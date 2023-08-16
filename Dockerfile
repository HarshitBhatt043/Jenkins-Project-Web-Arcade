# Stage 1: Build the application
FROM php:alpine AS Building

# Install Git
RUN apk update && apk add --no-cache git

# Set the working directory
WORKDIR /app

# Copy your PHP script(s) into the container
COPY . /app

# Change directory and run the PHP script
WORKDIR /app/maker
RUN php build.php install

RUN find /app -type d -name ".git" -exec rm -rf {} +
# Stage 2: Final image
FROM httpd:alpine3.16

# Copy the built files from the previous stage
COPY --from=Building /app /usr/local/apache2/htdocs/

# Expose port 80
EXPOSE 80
