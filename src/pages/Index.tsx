import { useState } from "react";
import { PoetryCarousel } from "@/components/PoetryCarousel";
import { CrestedCrane } from "@/components/CrestedCrane";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { getPoems } from "@/lib/api";

const Index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const { data, isLoading } = useQuery({
    queryKey: ["poems"],
    queryFn: getPoems,
  });

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-crane-yellow/5 relative">
      <div className="fixed inset-0 poetry-bg pointer-events-none" />

      <header className="border-b border-border/50 bg-background/90 backdrop-blur-md sticky top-0 z-10 relative">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CrestedCrane className="text-crane-yellow" size="md" />
              <div>
                <h1 className="text-xl font-light text-foreground">
                 Crested Verses 
                </h1>
                <p className="text-xs text-muted-foreground">
                Poetry & Reflection a daily inspiration through verse
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="hover:bg-crane-yellow/20"
              >
                {isDarkMode ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-3xl md:text-7xl lg:text-5xl font-extralight text-foreground leading-tight tracking-tight poetry-text">
              Daily Poetry
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed poetry-text">
              Explore Uganda’s stories through crafted verses and
              thought-provoking reflections inspired by real news and local
              voices.
            </p>
          </div>

          <div className="space-y-5">
            {isLoading ? (
              <p className="text-xl text-center md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed poetry-text">
                Loading...
              </p>
            ) : (
              <PoetryCarousel
                currentIndex={currentIndex}
                onIndexChange={setCurrentIndex}
                data={data}
              />
            )}
          </div>
        </div>
      </main>

      <div className="fixed top-1/3 left-8 opacity-5 pointer-events-none hidden xl:block animate-pulse">
        <CrestedCrane className="text-crane-yellow" size="lg" />
      </div>
      <div className="fixed bottom-1/3 right-8 opacity-5 pointer-events-none hidden xl:block animate-pulse">
        <CrestedCrane
          className="text-crane-red transform scale-x-[-1] rotate-12"
          size="lg"
        />
      </div>
      <div className="fixed top-2/3 left-16 opacity-3 pointer-events-none hidden 2xl:block">
        <CrestedCrane className="text-crane-black" size="md" />
      </div>
    </div>
  );
};

export default Index;
