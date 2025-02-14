defmodule WebsiteWeb.AboutLive do
  use WebsiteWeb, :live_view

  @skills [
    %{
      category: "Office",
      field: ["Microsoft Office Suite", "Google Workspace"]
    },
    %{
      category: "Adobe CC",
      field: ["Photoshop", "Illustrator", "Lightroom (Classic)", "Premiere Pro", "After Effects"]
    },
    %{
      category: "Programming",
      field: [
        "VB.net",
        "C#",
        "HTML",
        "SvelteKit",
        "CSS",
        "Tailwind CSS",
        "Javascript",
        "Typescript",
        "Bash"
      ]
    },
    %{
      category: "Operating Systems",
      field: [
        "Windows",
        "MacOS",
        "Debian",
        "Ubuntu",
        "Arch",
        "NixOS",
        "Proxmox VE",
        "TrueNAS Scale"
      ]
    },
    %{
      category: "Languages",
      field: [
        "Dutch <span class='text-xs text-neutral-400'>Native</span>",
        "English <span class='text-xs text-neutral-400'>Fluent</span>",
        "French <span class='text-xs text-neutral-400'>Basic</span>",
        "German <span class='text-xs text-neutral-400'>Basic</span>"
      ]
    },
    %{
      category: "Others",
      field: [
        "Blackboard Learn",
        "Salesforce",
        "Docker/LXC",
        "ZFS",
        "Git",
        "Databases",
        "Additive Manufacturing",
        "Autodesk Fusion 360",
        "Photography",
        "Videography"
      ]
    }
  ]

  def mount(_params, _session, socket) do
    socket = assign(socket, page_title: "About", skills: @skills)
    {:ok, socket}
  end
end
