import React from "react";
import { accountService } from "../../_services/account.services";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
const Home = () => {
  let navigate = useNavigate();
  const logof = () => {
    accountService.logout();
    navigate("/", { replace: true });
  };
  return (
    <div className="h-screen">
      <div className="w-screen h-1/3 bg-blue-400 flex justify-center items-center z-1 shadow-xl">
        <div className="flex justify-between gap-4">
          <img
            className="bg-gray-400 h-32 w-32 rounded-full"
            alt=""
            src="logobc.png"
          />
          <div className="flex flex-col gap-3 items-center">
            <h1 className="text-3xl font-bold">
              Gestion des agences de voyages
            </h1>
            {/* <FontAwesomeIcon icon="coffee" color='' size="xl" /> */}
            <h2>Global Voyage - Brazzaville</h2>
            <button
              onClick={logof}
              className="transition ease-in-out delay-100 bg-blue-700 hover:bg-red-700 text-white text-sm p-2 rounded-lg"
            >
              Deconnexion
              <FontAwesomeIcon
                icon="right-from-bracket"
                color="white"
                size="xl"
                className="pl-2"
              />
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 md:h-2/3 flex justify-center items-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-4 mt-14 md:mt-0">
          <div className="bg-green-600   hover:text-white transition ease-in-out duration-200 rounded-md p-9 hover:bg-green-700 hover:shadow-xl shadow">
            <FontAwesomeIcon icon="ticket" color="white" size="2xl" />
            <span className="pl-3 font-semibold">Vente des tickets de Bus</span>
          </div>
          <div className="bg-orange-600  hover:text-white   hover:bg-orange-700 transition ease-in-out duration-200 rounded-md p-9 hover:shadow-xl shadow">
            <FontAwesomeIcon icon="bus" color="white" size="2xl" />
            <span className="pl-3 font-semibold">Gestion des Bus</span>
          </div>
          <div className="bg-blue-600  hover:text-white  hover:bg-blue-700  transition ease-in-out duration-200 rounded-md p-9 hover:shadow-xl shadow">
            <FontAwesomeIcon icon="user" color="white" size="2xl" />
            <span className="pl-3 font-semibold">Gestion du personnel</span>
          </div>
          <div className="bg-red-600 hover:text-white  hover:bg-red-700 transition ease-in-out duration-200 rounded-md p-9 hover:shadow-xl shadow">
            <FontAwesomeIcon icon="user-cog" color="white" size="2xl" />
            <span className="pl-3 font-semibold">Comptes d'utilisateur</span>
          </div>
          <div className="bg-sky-600  hover:text-white   hover:bg-sky-700 transition ease-in-out duration-200 rounded-md p-9 hover:shadow-xl shadow">
            <FontAwesomeIcon icon="history" color="white" size="2xl" />
            <span className="pl-3 font-semibold">Historiques</span>
          </div>
          <div className="bg-gray-600  hover:text-white  transition  hover:bg-gray-700 ease-in-out duration-200 rounded-md p-9 hover:shadow-xl shadow">
            <FontAwesomeIcon icon="cog" color="white" size="2xl" />
            <span className="pl-3 font-semibold">Parametres</span>
          </div>
        </div>
      </div>
    </div>

    // <div className="flex">
    //     <aside className="w-44 fixed left-0 top-0 h-screen bg-slate-700 p-10">
    //         <h1 className="text-white text-4xl">Sidebar</h1>
    //     </aside>
    //     <main className="flex-1 ml-44">
    //         <div className="h-96 bg-amber-400 p-10">
    //             <h1 className="text-4xl">Top Content</h1>
    //         </div>
    //         <div className="h-96 bg-white p-10">
    //             <h1 className="text-4xl">Middle Content</h1>
    //         </div>
    //         <div className="h-96 bg-green-400 p-10">
    //             <h1 className="text-4xl">Middle Content</h1>
    //         </div>
    //         <div className="h-96 bg-indigo-400 p-10">
    //             <h1 className="text-4xl">Last Content</h1>
    //         </div>
    //     </main>
    // </div>
  );
};

export default Home;
