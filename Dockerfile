FROM node:slim

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose a port (if needed)
EXPOSE 3000

ENTRYPOINT [ "npx" ]

# Define the command to run the application
CMD [ "vite", "--host", "0.0.0.0", "--port", "3000" ]