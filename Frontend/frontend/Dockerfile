# Stage 1: Build Angular app
FROM node:18-alpine as angular-builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build -- --configuration production

# Stage 2: Serve Angular app with Nginx
FROM nginx:1.25-alpine

# Copy built files from builder
COPY --from=angular-builder /app/dist/frontend /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]