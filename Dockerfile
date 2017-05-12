FROM alpine:3.5

RUN apk --update add nodejs

EXPOSE 8125/udp
EXPOSE 8125

RUN npm install -g statsd@0.8.0
RUN mkdir -p /etc/statsd
ADD ./config.js /etc/statsd/

ENTRYPOINT ["statsd", "/etc/statsd/config.js"]
