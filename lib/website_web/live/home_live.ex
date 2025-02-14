defmodule WebsiteWeb.HomeLive do
  use WebsiteWeb, :live_view

  def mount(_params, _session, socket) do
    socket = assign(socket, :page_title, "Home")
    {:ok, socket}
  end
end
