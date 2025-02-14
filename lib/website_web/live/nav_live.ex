defmodule WebsiteWeb.NavLive do
  use WebsiteWeb, :live_component

  def mount(socket) do
    {:ok, assign(socket, menu_open: false)}
  end

  def handle_event("menu-toggle", _, socket) do
    {:noreply, assign(socket, menu_open: !socket.assigns.menu_open)}
  end
end
