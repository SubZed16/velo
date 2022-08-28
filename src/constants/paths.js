import { AccountCreating, CircuitsPage, LandingPage, ShopingPage, BuyingProductPage, MultipagePage, AddingCircuit } from "../pages"



const paths=[{
  path:"/",
  element:<LandingPage/>
},
  {
  path:"/creationdecompte",
  element:<AccountCreating/>
},
  {
  path:"/searchsection",
  element:<ShopingPage/>
},
  {
  path:"/cercuitsection",
  element:<CircuitsPage/>
},
  {
  path:"/acheterunvelo",
  element:<BuyingProductPage/>
},
  {
  path:"/troispagePage",
  element:<MultipagePage/>
},
  {
  path:"/ajouteruncicuite",
  element:<AddingCircuit/>
},
]
console.log(paths.length)
export default paths