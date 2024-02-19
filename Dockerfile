FROM node:14.15.4 as node
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
# Stage 2
FROM nginx:alpine
COPY --from=node /app/dist/email-app /usr/share/nginx/html
EXPOSE  80