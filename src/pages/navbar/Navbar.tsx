import { ReactNode, useContext } from "react";

function Navbar() {
  return (
    <div className="w-full  bg-green-200 text-gray-900 flex justify-center py-4">
      <div className="container flex justify-between text-lg ">
        <div className="text-2xl font-bold">Farmácia SaúdeMil</div>
        {/* <Link to='/home' className="text-2xl font-bold">Blog Pessoal</Link> */}
        <div className="flex gap-4">
          Produtos
          Categorias
          {/* <Link to='/postagens' className='hover:underline'>Postagens</Link>
          <Link to='/temas' className='hover:underline'>Temas</Link>
          <Link to='/cadastrartema' className='hover:underline'>Cadastrar tema</Link>
          <Link to='/perfil' className='hover:underline'>Perfil</Link>
          <Link to='' onClick={logout} className='hover:underline'>Sair</Link> */}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
