# Base image: Ruby with necessary dependencies for Jekyll
FROM ruby:3.2

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    nodejs \
    && rm -rf /var/lib/apt/lists/*


# Create a non-root user matching the host UID
RUN groupadd -g 1002 devuser && \
    useradd -m -u 1002 -g devuser devuser

# Set the working directory
WORKDIR /usr/src/app

# Set permissions for the working directory
RUN chown -R devuser:devuser /usr/src/app

# Switch to the non-root user
USER devuser

# Copy Gemfile into the container (necessary for `bundle install`)
COPY Gemfile ./



# Install bundler and dependencies
RUN gem install connection_pool:2.5.0
RUN gem install bundler:2.3.26
RUN bundle install

# Command to serve the Jekyll site
CMD ["jekyll", "serve", "-H", "0.0.0.0", "-w", "--config", "_config.yml,_config_docker.yml"]
