
import { ReactNode, useContext } from "react";
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

function Footer() {
  return (
    <div className="flex justify-center bg-green-200 text-gray-900 py-6 mt-auto">
<div className="container flex flex-col items-center py-4">
    <p className='text-xl font-bold'>
        Farmácia SaúdeMil | Copyright 2025
    </p>
    <p className='text-lg'>Acesse nossas redes sociais</p>
    <div className='flex gap-2'>
        <a href="https://www.linkedin.com/school/generationbrasil" target="_blank">
            <LinkedinLogo size={48} weight='bold' />
        </a>
        <a href="https://www.instagram.com/generationbrasil" target="_blank">
            <InstagramLogo size={48} weight='bold' />
        </a>
        <a href="https://www.facebook.com/generationbrasil" target="_blank">
            <FacebookLogo size={48} weight='bold' />
        </a>
    </div>
</div>
</div>
  );
}

export default Footer;