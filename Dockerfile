FROM node:20-alpine

RUN apk add --no-cache libc6-compat

WORKDIR /app

RUN corepack enable

COPY package.json yarn.lock .yarnrc.yml ./

RUN yarn install --immutable

EXPOSE 3000

ENV HOSTNAME=0.0.0.0
ENV PORT=3000

# Root in development avoids EACCES on bind-mounted source from the Linux host.
CMD ["yarn", "dev", "--hostname", "0.0.0.0", "--port", "3000"]
