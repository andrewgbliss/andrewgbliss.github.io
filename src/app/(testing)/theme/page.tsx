"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Copy } from "lucide-react";
import { DarkModeToggle } from "@/components/buttons/dark-mode-toggle";

const ColorPicker = ({ color }: { color: { name: string; class: string } }) => {
  const [customColor, setCustomColor] = useState("");
  const colorVariable = `--${color.name}`;

  const handleColorChange = (newColor: string) => {
    setCustomColor(newColor);
    document.documentElement.style.setProperty(colorVariable, newColor);
  };

  const copyValue = () => {
    const cssValue =
      customColor ||
      getComputedStyle(document.documentElement)
        .getPropertyValue(colorVariable)
        .trim();
    navigator.clipboard.writeText(cssValue);
  };
  return (
    <>
      <input
        type="color"
        value={customColor}
        onChange={(e) => handleColorChange(e.target.value)}
        className="h-6 w-6 cursor-pointer"
        title={`Change ${color.name} color`}
      />
      <button
        onClick={copyValue}
        className="ml-auto p-1 hover:bg-muted rounded-sm"
        title="Copy color value"
      >
        <Copy size={16} />
      </button>
    </>
  );
};

const ChangeColorCard = ({
  color,
}: {
  color: { name: string; class: string };
}) => {
  return (
    <Card className="overflow-hidden ">
      <div className={`h-32 ${color.class} flex items-center justify-center`}>
        <span className="font-medium">{color.name}</span>
      </div>
      <div className="p-4 bg-card text-card-foreground">
        <p className="text-sm font-mono">{color.class}</p>
        <div className="flex items-center justify-between gap-2 mt-2">
          <ColorPicker color={color} />
        </div>
      </div>
    </Card>
  );
};

const ThemePage = () => {
  const colorClasses = [
    { name: "background", class: "bg-background text-foreground" },
    { name: "foreground", class: "bg-foreground text-background" },
    { name: "card", class: "bg-card text-card-foreground" },
    { name: "card-foreground", class: "bg-card-foreground text-card" },
    { name: "popover", class: "bg-popover text-popover-foreground" },
    { name: "primary", class: "bg-primary text-primary-foreground" },

    { name: "primary-foreground", class: "bg-primary-foreground text-primary" },
    { name: "secondary", class: "bg-secondary text-secondary-foreground" },
    {
      name: "secondary-foreground",
      class: "bg-secondary-foreground text-secondary",
    },
    { name: "muted", class: "bg-muted text-muted-foreground" },
    { name: "muted-foreground", class: "bg-muted-foreground text-muted" },
    { name: "accent", class: "bg-accent text-accent-foreground" },
    { name: "accent-foreground", class: "bg-accent-foreground text-accent" },
    {
      name: "destructive",
      class: "bg-destructive text-destructive-foreground",
    },
    {
      name: "destructive-foreground",
      class: "bg-destructive-foreground text-destructive",
    },
    { name: "border", class: "bg-border text-foreground" },
    { name: "input", class: "bg-input text-foreground" },
    { name: "ring-3", class: "bg-ring text-foreground" },
    { name: "chart-1", class: "bg-[hsl(var(--chart-1))] text-foreground" },
    { name: "chart-2", class: "bg-[hsl(var(--chart-2))] text-foreground" },
    { name: "chart-3", class: "bg-[hsl(var(--chart-3))] text-foreground" },
    { name: "chart-4", class: "bg-[hsl(var(--chart-4))] text-foreground" },
    { name: "chart-5", class: "bg-[hsl(var(--chart-5))] text-foreground" },
  ];

  return (
    <div className="p-8 bg-background text-foreground">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-card-foreground">
          Tailwind Theme Showcase
        </h1>
        <DarkModeToggle />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {colorClasses.map((color) => (
          <ChangeColorCard key={color.name} color={color} />
        ))}
      </div>
    </div>
  );
};

export default ThemePage;
