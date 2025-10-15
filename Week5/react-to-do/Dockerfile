# Step 1: Build the React app
# FROM node:24-alpine AS build
FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
 
# Step 2: Serve the built app using nginx
FROM nginx:alpine AS run
COPY --from=build /app/build /usr/share/nginx/html
 
# Expose the port nginx runs on
EXPOSE 80
 
# Start nginx
# ENTRYPOINT ["nginx", "-g", "daemon off;"]
CMD ["nginx", "-g", "daemon off;"]
 
# Entrypoint will ALWAYS run
# If you also have a CMD, it will run after the entrypoint
# CMD can be overwritten on startup, but not entryploint
# We can use CMD as a default behavior, and customize it on startup

# $ docker run -p 80:80 nginx-server