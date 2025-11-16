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
    <header className="w-full top-0 sticky z-50">
      <div className="px-6 3xl:fixed:px-0 h-14 items-center flex">
        <NavigationMenu>
          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <a href="/" className="text-xl">
                  Home
                </a>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
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
      </div>
    </header>
  );
}
