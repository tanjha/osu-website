"use client";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-wrap">
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/" className="text-xl">
              Home
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <a href="/about" className="text-xl">
              About
            </a>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="text-xl">
            Games
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-card">
            <ul className="grid gap-2 grid-cols-2 w-[400px] text-xl">
              <NavigationMenuLink>Overwatch</NavigationMenuLink>
              <NavigationMenuLink>Overwatch</NavigationMenuLink>
              <NavigationMenuLink>Overwatch</NavigationMenuLink>
              <NavigationMenuLink>Overwatch</NavigationMenuLink>
              <NavigationMenuLink>Overwatch</NavigationMenuLink>
              <NavigationMenuLink>Overwatch</NavigationMenuLink>
              <NavigationMenuLink>Overwatch</NavigationMenuLink>
              <NavigationMenuLink>Overwatch</NavigationMenuLink>
              <NavigationMenuLink>Overwatch</NavigationMenuLink>
              <NavigationMenuLink>Overwatch</NavigationMenuLink>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
