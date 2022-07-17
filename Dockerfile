# Development Stage
# from node 16-alpine as a base image
FROM node:16-alpine AS development

# set /app as working directory
WORKDIR /app
# copy all files to working directory
COPY . ./
# install dependencies
RUN npm install

# run next build 
RUN npm run build



# Production Stage
# from node 16-alpine as a base image
FROM node:16-alpine AS production

# set NODE_ENV as production
ENV NODE_ENV production
# set /app as working directory
WORKDIR /app

# copy package.json, package-lock.json from development stage
COPY --from=development /app/package*.json ./
# install production dependencies only
RUN npm install --only=prod
# copy all files to work dir
COPY . ./
# copy .next, public folders from development stage
COPY --from=development /app/.next ./.next
COPY --from=development /app/public ./public

# expose port 3000 to port 3001
EXPOSE 3000
# run next start
CMD ["npm", "run", "start"]