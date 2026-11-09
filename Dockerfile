# Production image: nginx serving the static build. `dist/` is built beforehand in CI
# (.github/workflows/deploy.yml), so the server never runs the build.
FROM nginx:1.29-alpine

COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY dist/ /usr/share/nginx/html/

EXPOSE 80
