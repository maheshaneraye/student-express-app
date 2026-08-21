FROM node:20-alpine

WORKDIR /app

# Install curl for container health check
RUN apk add --no-cache curl

# Copy dependency definition
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy application source code
COPY ./src ./src

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# Start server
CMD ["node", "src/server.js"]
