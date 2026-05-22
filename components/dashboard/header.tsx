"use client";

import { useState } from "react";
import { Bell, Search, ChevronDown, TrendingUp, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DashboardHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-4 lg:gap-8">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-primary">
              <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
            </div>
            <span className="text-lg sm:text-xl font-semibold tracking-tight">
              WealthFolio
            </span>
          </div>

          <nav className="hidden items-center gap-6 lg:flex">
            <a
              href="#"
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              Dashboard
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Investments
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              SIP Plans
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Reports
            </a>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <div className="relative hidden xl:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search funds, stocks..."
              className="w-64 border-border bg-secondary pl-9 text-sm placeholder:text-muted-foreground focus-visible:ring-primary"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="relative text-muted-foreground hover:text-foreground h-9 w-9"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="gap-2 text-muted-foreground hover:text-foreground px-2 sm:px-4"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-xs sm:text-sm font-medium text-foreground">
                  AK
                </div>
                <span className="hidden text-sm font-medium text-foreground md:inline-block">
                  Arun Kumar
                </span>
                <ChevronDown className="h-4 w-4 hidden sm:block" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-48 bg-card border-border"
            >
              <DropdownMenuItem className="text-foreground focus:bg-secondary focus:text-foreground">
                Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="text-foreground focus:bg-secondary focus:text-foreground">
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem className="text-foreground focus:bg-secondary focus:text-foreground">
                Help Center
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive focus:bg-secondary focus:text-destructive">
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden h-9 w-9"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="px-4 py-3">
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search funds, stocks..."
                className="w-full border-border bg-secondary pl-9 text-sm placeholder:text-muted-foreground focus-visible:ring-primary"
              />
            </div>
            <nav className="flex flex-col gap-1">
              <a
                href="#"
                className="px-3 py-2 rounded-lg text-sm font-medium text-foreground bg-secondary transition-colors"
              >
                Dashboard
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              >
                Investments
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              >
                SIP Plans
              </a>
              <a
                href="#"
                className="px-3 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors"
              >
                Reports
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
