import { ReactNode, useContext } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full  bg-green-200 text-gray-900 flex justify-center py-4">
      <div className="container flex justify-between text-lg ">
        <div className="text-2xl font-bold">Farmácia SaúdeMil</div>
        {/* <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link> */}
        <div className="flex gap-4">
          Produtos

          <Link to='/categorias' className='hover:underline'>Categoria</Link>
          {/* <Link to='/categorias' className='hover:underline'>Postagens</Link>
          <Link to='/produtos' className='hover:underline'>Temas</Link> */}
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
