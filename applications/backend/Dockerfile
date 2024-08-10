FROM node:18-alpine AS base

# stage for building the application
FROM base AS builder

# update package repository and install necessary compatibility library
RUN apk update
RUN apk add --no-cache libc6-compat

# set working directory inside the container
WORKDIR /app

# install turbo globally
RUN yarn global add turbo

# copy all project files into the container
COPY . .

# prune unnecessary files and prepare the Docker environment for the API
RUN turbo prune api --docker

# stage for installing dependencies
FROM base AS installer

# update package repository and install necessary compatibility library again (may not be necessary if cached)
RUN apk update
RUN apk add --no-cache libc6-compat

# set working directory inside the container
WORKDIR /app

# copy the pruned package.json and lockfile from the builder stage
COPY --from=builder /app/out/json/ .

# install only necessary dependencies
RUN yarn install

# copy the full application codebase after pruning
COPY --from=builder /app/out/full/ .

# build the API and its dependencies
RUN yarn turbo build --filter=api...

# stage for running the application
FROM base AS runner

# set working directory inside the container
WORKDIR /app

# create a non-root user to run the application
RUN addgroup --system --gid 1001 mkafonso
RUN adduser --system --uid 1001 mkafonso

# switch to non-root user
USER mkafonso

# copy the built application from the installer stage
COPY --from=installer /app .

# command to start the API
CMD ["node", "applications/backend/dist/main.js"]
