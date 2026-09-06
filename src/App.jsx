import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       
    </>
  )
}

export default App

//**************General Engineering***************
//Hamare pass ek frontend hota h frontend ek domain pe hosted hota hein koi uska domain hota hien
//Ab us frontend ke code mein hamne aisa code likha ki ham backend ke domain ko call kar rahein hein ek api ke dwara
//ham karte hein na fetch ke andar api likhte hein to fetch ke andar hamne ek api likhi ek domain likha aur uska route likha
//To ab domain name hamare pass kya hota hein ek DNS server hota hein 
//Frontend se backend ke domain ko call karte hein ab domain kya hota hei jase google.com
//Ab jo backend ka domain hein jisse ham backend ka data fetch kar rahein hein jisse hamari api lihi hui hein may be wo
//Fetch karke aise likh rahein hein =>fetch(http://)=>ab wo domain route karega ek IP address pe i.e That domain route us to an IP address
//Ab wo IP address kiska hoga backend ke server ka hoga
//Ab backend server aapki api ki addres ko dekhega ki kiski request hein data leke aane ki data save karne ki data update karne ki data delete karne ki 4 hi cases possible hein 4 hi cases possible hein na majorly
//Fir wo wo chij action ko complete karega frontend ko data dedega ye hoga
//Ab ye socho ki maine yaha par like ka button hein maine us like button ko click kiya ab wo like ka button save hona hein backend pe
//Maine ye like ka button hein maine usko save kara yaha pe
//Ab ye like karte hi mere backend mein jaake save hua ki liked is true
//But mera UI to update hi nahi hua
//Usko mein kaise update karunga koi idea??
//Mein chahta hu ki maine yaha click kara user ko na pata chale ki backend ko call gayi hein wo save ho raha hein
//It will take 2-3 second of time but sath ke sath meri yaha pe state bhi update ho jaye to sahi rahega
//jaise true false ko toggle karte hein jaise hamne backend pe save karna ho isko wo ek alaga chij hein par sath ke sath ham yaha par bhi to sath ke sath
//ham yaha par bhi to state manage karke ek component ki usko change kar rahein hein
//but yaha par to puri app ki state management ki baat ho rahi hein to 2 tarike hein pehlein to ham 
//context se kar sakte hein suppose karo yaha par maine like kara aur yaha par mein deraha hu ki like items ka kitna count hein
// to mera count bhi update ho to centrally merein sare data ko manage karna parega
//ek merko backend ko bhi manage karna parega aur ek mere ko frotend pe bhi manage karna parega
//Frontend ki state manage kaise hogi ya to context se ho sakti hein usecontext jo hamne padha tha
//but wo scalable nahi hein jaada bohot large scale application usko use nahi kar pati uske liye hamare pass library hoti hein redux jaisi aur zustand jaisi

//******************Redux******************
//Ab redux pehle vanilla javascript pe likhi jaati thi
//which is very tough indeed it will take 2-3 week ki mein aapko uska brief de saku
//wo kafi lambi hein kafi prior knowledge ke sath aati hein iski liye wo hamare liye thora difficult hogi
// Uske liye jo react develoeprs hein ya community ne kuchh chij build kari jisko bolt hein react-redux joki thori si easy hein
//installation:->
//npm i react-redux @reduxjs/toolkit
//