import React from "react";
import {  Calendar } from "lucide-react";

type PoemType = {
  id: number,
  date: string,
  piece: string,
  title: string,
  brief_summary: string,
}

interface PoetryCarouselProps {
  data: PoemType;
}

export const PoetryCarousel: React.FC<PoetryCarouselProps> = ({
  data,
}) => {

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="flex items-center justify-center mb-8">

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span className="font-medium">{data?.date}</span>
        </div>
    
      </div>

      <div
        className="transition-all duration-500 ease-in-out"
      >
        <div className="space-y-8">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-3xl font-extralight text-crane-black leading-tight poetry-text">
              {data?.title}
            </h2>
            <div className="max-w-3xl mx-auto px-4">
              <p className="text-lg md:text-xl lg:text-2xl leading-loose text-foreground whitespace-pre-line poetry-text">
                {data?.piece}
              </p>
            </div>
            <p className="text-base text-muted-foreground font-medium tracking-wide">
              {data?.brief_summary}
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
