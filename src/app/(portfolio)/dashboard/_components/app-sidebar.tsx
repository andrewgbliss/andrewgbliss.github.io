"use client";

import * as React from "react";
import {
  BookOpen,
  Bot,
  Briefcase,
  Command,
  LayoutDashboard,
  LifeBuoy,
  ListTodo,
  SquareTerminal,
  TreePine,
} from "lucide-react";

import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { website } from "@/lib/data/website";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const data = {
    navMain: [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: LayoutDashboard,
        isActive: true,
      },
      // {
      //   title: "Work",
      //   url: "/work",
      //   icon: Briefcase,
      // },
      // {
      //   title: "Learning Tree",
      //   url: "/learning-tree",
      //   icon: TreePine,
      // },
      {
        title: "Todos",
        url: "/todos",
        icon: ListTodo,
      },
      // {
      //   title: "Kanban",
      //   url: "/kanban",
      //   icon: SquareTerminal,
      // },
      {
        title: "Json DB",
        url: "/jsondb",
        icon: Bot,
      },
    ],
    navSecondary: [
      {
        title: "Support",
        url: "/support",
        icon: LifeBuoy,
      },
    ],
  };

  data.navMain.forEach((item) => {
    item.isActive = pathname.startsWith(item.url);
    // if (item.items) {
    //   item.items.forEach((subItem) => {
    //     subItem.isActive = pathname.startsWith(subItem.url);
    //   });
    // }
  });

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{website.name}</span>
                  <span className="truncate text-xs">
                    {website.description}
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
