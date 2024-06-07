Got it! Here’s an updated `README.md` file that includes instructions for accessing the PostgreSQL database using `psql` installed in the Docker container.

````markdown
# PostgreSQL Docker Setup and Connection Guide

This guide will help you set up a PostgreSQL database using Docker and connect to it using `psql` inside the Docker container.

## Prerequisites

- Docker installed on your system

## Step 1: Pull the PostgreSQL Docker Image

Open your terminal and run the following command to pull the PostgreSQL Docker image:

```sh
docker pull postgres
```
````

## Step 2: Run the PostgreSQL Docker Container

Run the following command to start a PostgreSQL container with a custom username, password, and database name:

```sh
docker run --name twitter-cont \
    -e POSTGRES_USER=myuser \
    -e POSTGRES_PASSWORD=123456 \
    -e POSTGRES_DB=mydatabase \
    -d -p 5432:5432 postgres
```

- `--name twitter-cont`: Names the container `twitter-cont`.
- `-e POSTGRES_USER=myuser`: Sets the PostgreSQL username to `myuser`.
- `-e POSTGRES_PASSWORD=123456`: Sets the password for `myuser`.
- `-e POSTGRES_DB=mydatabase`: Sets the default database name to `mydatabase`.
- `-d`: Runs the container in detached mode.
- `-p 5432:5432`: Maps port 5432 on your host to port 5432 on the container.

## Step 3: Access the PostgreSQL Database from Inside the Container

1. **Open a Bash shell in the container**:

   ```sh
   docker exec -it twitter-cont bin/bash
   ```

2. **Connect to PostgreSQL using `psql`**:

   ```sh
   psql postgresql://myuser:123456@localhost:5432/mydatabase
   ```

## Connection String

If you need a connection string for your application, it will look like this:

```plaintext
postgresql://myuser:123456@localhost:5432/mydatabase
```

- `postgresql://`: The protocol specifier.
- `myuser`: The username.
- `123456`: The password.
- `localhost`: The host.
- `5432`: The port.
- `mydatabase`: The database name.

## Stopping and Removing the Container

To stop the PostgreSQL container, run:

```sh
docker stop twitter-cont
```

To remove the container, run:

```sh
docker rm twitter-cont
```

## Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
