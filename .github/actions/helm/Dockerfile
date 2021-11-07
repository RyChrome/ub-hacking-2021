FROM alpine/helm:3.2.1

COPY entrypoint.sh /entrypoint.sh

RUN ["chmod", "+x", "/usr/src/app/docker-entrypoint.sh"]

ENTRYPOINT ["/entrypoint.sh"]