defmodule WebsiteWeb.HomeLive do
  use WebsiteWeb, :live_view

  def mount(_params, _session, socket) do
    {:ok, dateTime} = DateTime.now("Europe/Brussels")

    socket = assign(socket, page_title: "Home", date: dateTime)
    {:ok, socket}
  end
end
