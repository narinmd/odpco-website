"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { HERO_DATA } from "./data";
import Grainient from "./Grainient";
import DotGrid from "./DotGrid";
import ShapeGrid from "./ShapeGrid";

export default function Hero({ page, data: customData }) {
  const baseData = HERO_DATA[page] || {};
  const data = { ...baseData, ...customData };

  if (!data.title && !data.description && !data.background) {
    return null;
  }

  const ButtonIcon = data.button?.icon;

  return (
    <section className="relative h-120 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {data.background === "grainient" && (
          <Grainient
            color1="#4b5563"
            color2="#355e8a"
            color3="#B8C7D6"
            timeSpeed={0.25}
            colorBalance={0}
            warpStrength={1}
            warpFrequency={5}
            warpSpeed={2}
            warpAmplitude={50}
            blendAngle={0}
            blendSoftness={0.05}
            rotationAmount={500}
            noiseScale={2}
            grainAmount={0.1}
            grainScale={2}
            grainAnimated={false}
            contrast={1.1}
            gamma={1}
            saturation={1}
            centerX={0}
            centerY={0}
            zoom={0.9}
          />
        )}
        {data.background === "dotgrid" && (
          <DotGrid
            dotSize={5}
            gap={30}
            baseColor="#B8C7D6"
            activeColor="#112D4E"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        )}

        {data.background === "shapegrid" && (
          <ShapeGrid
            speed={0.3}
            squareSize={60}
            direction="diagonal"
            borderColor="rgba(17, 45, 78, 0.08)"
            hoverFillColor="none"
            shape="square"
            // size={40}
          />
        )}
      </div>

      {/* Content */}
      <div className="relative flex flex-col-reverse items-center h-full lg:mx-10 justify-center lg:flex-row lg:justify-between mx-5">
        <div className="w-full lg:w-3xl">
          <h1
            className={`text-[length:var(--fs-h2)] lg:text-[length:var(--fs-h1)] text-center lg:text-left mt-5 ${
              data.theme === "dark" ? "text-white" : "text-[var(--brand-blue)]"
            }`}
          >
            {data.title}
          </h1>

          <p
            className={`mt-1 text-[length:var(--fs-body)] leading-[var(--lh-body)] font-[var(--fw-medium)] text-center lg:text-left mx-2 lg:mx-0 ${
              data.theme === "dark" ? "text-white" : "text-black"
            }`}
          >
            {data.description}
          </p>

          {/* Button */}
          {data.button && (
            <div className="flex justify-center lg:justify-start">
              <Link
                href={data.button.href}
                className="bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-hover)] text-white py-2 px-4 rounded flex justify-center transition duration-300 mt-5 font-[var(--fw-medium)]"
              >
                {ButtonIcon && <ButtonIcon strokeWidth={1.5} />}

                <span className="mx-2 text-[length:var(--fs-body)] font-[var(--fw-medium)]">
                  {data.button.text}
                </span>
              </Link>
            </div>
          )}
        </div>

        {/* Image */}
        {data.image && (
          <Image
            src={data.image}
            alt={data.imageAlt || ""}
            className={data.imageClassName}
            width={300}
            height={300}
          />
        )}
      </div>
    </section>
  );
}
