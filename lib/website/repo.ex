defmodule Website.Repo do
  use Ecto.Repo,
    otp_app: :website,
    adapter: Ecto.Adapters.SQLite3
end
