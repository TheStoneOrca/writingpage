"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "./ui/navigation-menu";

export default function Navbar() {
  return (
    <NavigationMenu className="dark:bg-[#1a1b1e]">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuContent>
            <NavigationMenuLink>Home</NavigationMenuLink>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
