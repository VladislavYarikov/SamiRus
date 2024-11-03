ARG PUBLIC_DOMAIN

# Dependencies stage
FROM oven/bun:1.1.22 AS deps

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile


# Build stage
FROM oven/bun:1.1.22 AS build

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
ENV PUBLIC_DOMAIN=$PUBLIC_DOMAIN

RUN bun run build

# Release stage
FROM oven/bun:1.1.22 AS release

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=build /app/node_modules ./node_modules

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD bun run ./dist/server/entry.mjs

