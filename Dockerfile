# Stage 1: Making Build package
FROM node:14.15.4 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
# Stage 2: Running on nginx server
FROM nginx:alpine
COPY --from=node /app/dist/email-app /usr/share/nginx/html
EXPOSE  80