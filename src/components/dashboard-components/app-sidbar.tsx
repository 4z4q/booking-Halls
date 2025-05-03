"use client";
import {
  BarChartIcon,
  FolderIcon,
  HelpCircleIcon,
  LayoutDashboardIcon,
  ListIcon,
  SettingsIcon,
  UsersIcon,
  StarIcon,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";
import Link from "next/link";
import { NavMain } from "./nav-main";
import { NavSecondary } from "./nav-secondary";
import { NavUser } from "./nav-user";

const data = {
  user: {
    name: "محمد جميل",
    email: "m@example.com",
    avatar: "https://github.com/shadcn.png",
  },
  navMain: [
    {
      title: "لوحة التحكم",
      url: "/dashboard/",
      icon: LayoutDashboardIcon,
    },
    {
      title: "الحجوزات",
      url: "/dashboard/bookings",
      icon: ListIcon,
    },
    {
      title: "الخدمات",
      url: "/dashboard/services",
      icon: FolderIcon,
    },
    {
      title: "التقارير",
      url: "/dashboard/reports",
      icon: BarChartIcon,
    },
  ],
  navClouds: [
    {
      title: "الحساب الشخصي",
      icon: UsersIcon,
      url: "/dashboard/profile",
      items: [
        {
          title: "معلومات الحساب",
          url: "/dashboard/profile",
        },
      ],
    },
    {
      title: "التقييمات",
      icon: StarIcon, // تأكد أنك مستورد StarIcon
      url: "/dashboard/reviews",
      items: [
        {
          title: "عرض التقييمات",
          url: "/dashboard/reviews",
        },
      ],
    },
  ],
  navSecondary: [
    {
      title: "الإعدادات",
      url: "/dashboard/settings",
      icon: SettingsIcon,
    },
    {
      title: "مساعدة",
      url: "/help",
      icon: HelpCircleIcon,
    },
  ],
};

const AppSidebar = () => {
  return (
    <Sidebar
      side="right"
      collapsible="icon"
    >
      <SidebarHeader className="border-b h-12">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <Link href="/" className="flex items-center justify-center ">
                <Image
                  src="https://github.com/shadcn.png"
                  className="rounded-full border-2 "
                  alt="logo"
                  width={32}
                  height={32}
                />
                <span className="">محمد جميل</span>
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
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
};

export default AppSidebar;
