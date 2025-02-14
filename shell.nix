with import <nixpkgs> { };
let
  basePackages = [
    elixir
    erlang
    elixir_ls
    # inotify-tools
    nodejs
    yarn
    process-compose
  ];
in
mkShell {
  buildInputs = basePackages;
}
