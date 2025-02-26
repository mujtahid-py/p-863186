
import React from "react";
import { Button } from "@/components/ui/button";
import { Home, Settings, Users, DollarSign, Phone } from "lucide-react";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "#", icon: Home },
    { label: "Services", href: "#services", icon: Settings },
    { label: "About Us", href: "#about", icon: Users },
    { label: "Pricing", href: "#pricing", icon: DollarSign },
    { label: "Contact Us", href: "#contact", icon: Phone },
  ];

  return (
    <nav className="backdrop-blur-md bg-white/5 border border-white/10 flex w-full items-center justify-between text-xs text-[#DDFCAD] px-20 py-[18px] rounded-[20px] max-md:px-5">
      <div className="flex items-center gap-[40px]">
        <span className="text-xl font-['Pacifico'] text-white">Sara's Marketing</span>
        <div className="flex items-center gap-[40px] flex-wrap">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                <Icon size={16} />
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
      <Button
        variant="outline"
        className="text-[#DDFCAD] px-[30px] py-5 rounded-[20px] border border-white/40 [border-width:0.5px] bg-transparent hover:bg-[#DDFCAD] hover:text-black transition-colors"
      >
        Book a Call Now
      </Button>
    </nav>
  );
};

export default Navbar;
