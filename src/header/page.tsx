"use client"

import * as React from "react"
import { cn } from "../lib/utils"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle, } from "../components/ui/navigation-menu";
import { Link } from "@radix-ui/react-navigation-menu";



const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },

];



export default function NavigationMenuDemo() {
    const [activeItem, setActiveItem] = React.useState(null);

  return (

    <NavigationMenu className="w-[816px] h-[56px]  bg-white">
      <NavigationMenuList>
        <NavigationMenuItem>
            <Link href="#" className={navigationMenuTriggerStyle()}>
                <NavigationMenuLink>
                Dashboard
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[370px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Emails</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[370px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[500px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link href="#" className={navigationMenuTriggerStyle()}>
                <NavigationMenuLink>
                Forms
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link href="#" className={navigationMenuTriggerStyle()}>
                <NavigationMenuLink>
                Automations
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link href="#" className={navigationMenuTriggerStyle()}>
                <NavigationMenuLink>
                Reports
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <Link href="#" className={navigationMenuTriggerStyle()}>
                <NavigationMenuLink>
                Settings
                </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink className=" text-white h-[56px] bg-[#7757e6] px-[20px] py-[17px] font-bold">
                <a href="#">
                Get Pro
                </a>
            </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}


const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-[12px] opacity-50 leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
