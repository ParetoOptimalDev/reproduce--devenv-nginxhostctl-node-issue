{ pkgs, ... }:

{
  languages.javascript.enable = true;
  services.redis.enable = true;
  services.nginx = {
    enable = true;
    httpConfig = ''
server {
    listen 3001;

    location / {
        proxy_pass http://node:3000;
        proxy_redirect off;
    }
}
    '';
  };
  scripts.start-server = {
    exec = "node app.js";
  };
  hosts = {
    "node" = "127.0.0.1";
  };
}
