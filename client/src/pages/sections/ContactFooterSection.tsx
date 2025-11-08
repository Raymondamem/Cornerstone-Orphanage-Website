import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import React from "react";

const navigationLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact us", href: "#" },
  { label: "Gallery", href: "#" },
];

export const ContactFooterSection = (): JSX.Element => {
  return (
    <footer className="relative w-full bg-white py-12">
      <div className="flex flex-col items-center gap-4 max-w-[1271px] mx-auto px-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-[106px]">
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-[13.02px] rounded-[59.89px]">
                <div className="flex items-center gap-1">
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    alt="Cornerstone Orphanage Logo"
                    src="/figmaAssets/image-11-1.png"
                  />
                  <div className="[font-family:'Inter',Helvetica] font-bold text-black text-[22px] leading-normal tracking-[0] whitespace-nowrap">
                    Cornerstone Orphanage
                  </div>
                </div>
              </div>
            </div>

            <nav className="flex items-start gap-10">
              {navigationLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="[font-family:'Archivo',Helvetica] font-normal text-black text-base tracking-[0] leading-normal whitespace-nowrap hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <FacebookIcon className="w-3 h-[22px]" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <InstagramIcon className="w-[21.95px] h-[21.95px]" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <LinkedinIcon className="w-[22.9px] h-[21.9px]" />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-center w-full [font-family:'Roboto',Helvetica] font-normal text-black text-xs text-center tracking-[0] leading-normal">
          <span className="font-light">© </span>
          <span className="[font-family:'Archivo',Helvetica] font-light">
            2025
          </span>
          <span className="font-light">&nbsp;</span>
          <span className="[font-family:'Inter',Helvetica] font-bold">
            Cornerstone Orphanage
          </span>
          <span className="font-light">&nbsp;</span>
          <span className="[font-family:'Archivo',Helvetica] font-light">
            All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};
