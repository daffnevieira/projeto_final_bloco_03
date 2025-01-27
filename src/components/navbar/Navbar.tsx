import { ReactNode, useContext } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full  bg-green-200 text-gray-900 flex justify-center py-4">
      <div className="container flex justify-between text-lg ">
        {/* <div className="text-2xl font-bold">Farmácia SaúdeMil</div> */}
        <Link to='/home' className="text-2xl font-bold ">Farmácia SaúdeMil</Link>
        <div className="flex gap-4">
          Produtos

          <Link to='/listarcategorias' className='hover:underline'>Categorias</Link>
          <Link to='/cadastrarcategorias'className='hover:underline'>Cadastrar Categorias</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
