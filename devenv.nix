{ pkgs, ... }:

{
  languages.javascript.enable = true;
  services.redis.enable = true;
  services.nginx = {
    enable = true;
  };
}
