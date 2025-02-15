defmodule WebsiteWeb.PortfolioLive do
  use WebsiteWeb, :live_view

  @images [
    "_DSC0501.webp",
    "_DSC0637.webp",
    "_DSC0751.webp",
    "_DSC0836.webp",
    "_DSC1545.webp",
    "_DSC1632.webp",
    "IMG_1653.webp",
    "IMG_1875.webp",
    "IMG_1917.webp",
    "IMG_2043.webp",
    "IMG_3025.webp",
    "IMG_3073.webp",
    "IMG_3079.webp",
    "IMG_3139.webp",
    "IMG_3202.webp",
    "IMG_3929.webp",
    "IMG_3981.webp",
    "IMG_4318.webp",
    "IMG_4390.webp",
    "IMG_4543.webp",
    "IMG_4678.webp",
    "IMG_4775.webp",
    "IMG_4800.webp",
    "IMG_4897.webp",
    "IMG_4928.webp",
    "IMG_5654.webp",
    "IMG_6058.webp",
    "IMG_7582.webp",
    "IMG_7921.webp",
    "IMG_8508.webp"
  ]

  def mount(%{"id" => id}, _session, socket) do
    index = Enum.find_index(@images, &(&1 == id))

    socket =
      assign(socket,
        id: id,
        page_title: "Portfolio",
        images: @images,
        prev_id: Enum.at(@images, rem(index - 1 + length(@images), length(@images))),
        next_id: Enum.at(@images, rem(index + 1, length(@images)))
      )

    {:ok, socket}
  end

  def mount(_params, _session, socket) do
    first = hd(@images)

    socket =
      assign(socket,
        id: first,
        page_title: "Portfolio",
        images: @images,
        prev_id: List.last(@images),
        next_id: Enum.at(@images, 1)
      )

    {:ok, socket}
  end
end
