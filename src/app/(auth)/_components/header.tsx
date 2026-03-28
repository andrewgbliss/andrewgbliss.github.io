"use client";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { LoginForm } from "../login/_components/LoginForm";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex h-14 items-center px-2">
        <div className="flex flex-1 items-center justify-end space-x-4">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button variant="default">Login</Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px]">
              <LoginForm onSuccess={() => setOpen(false)} showSignup={false} />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
}
