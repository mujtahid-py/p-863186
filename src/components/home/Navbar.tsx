import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const navItems = [
    { label: "Home", href: "#" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className="bg-[rgba(247,242,242,0.1)] flex w-full items-center justify-between text-xs text-[#DDFCAD] px-20 py-[18px] rounded-[20px] max-md:px-5">
      <div className="flex items-center gap-[40px] flex-wrap">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="hover:text-white transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
      <Button
        variant="outline"
        className="border-white text-[#DDFCAD] px-[30px] py-5 rounded-[20px] hover:bg-[#DDFCAD] hover:text-black transition-colors"
      >
        Book a Call Now
      </Button>
    </nav>
  );
};

export default Navbar;
