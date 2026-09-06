import {configureStore} from '@reduxjs/toolkit'
import profileUserSlice from './slices/profileSlice.js'
import cartSlice from './slices/cartSlice.js'
export const store=configureStore({
    reducer:{
      profile:profileUserSlice,
      cart:cartSlice

      
    }
})

// reducer ek helpin function hota hein 
//normally kya hota hein ye bohot bara store hein
//bohot bare store ko ham chhote chhote slices ke liye divide kar lenge
//jaise profile ka data bana rahe thein to profile ka data store karne keliye hamne profile slice banaya
//uske baad hamne koi aur data jaise cart ka data jaise cart ka data add karne keliye hamne cart slice banaya
//products ka sara data download ho gaya to products to uska add karne ke liye product slice banaya
//to jitne bhi slices honge wo yaha provide honge but store ka bigger structure bas itna hi hein

//1.create store
//2.to provide the store
//3.Creation of slices for our app and providing those slices to the store

//revise
//store kaise create kiya hamne configure store se kiya
//configure store kaha se aaya reduxjs/toolkit se aaya
//fir hamne store ko provide kaise kiya apni react ki app ko
//hamne provider se kiya usme hamne store jo create kra tha configure 
//Ab confugure store kya leta hein
//congiure store ko jab ham invoke karte hein to uske andar ek object hota hein
//object ke andar reducer hota h aur reducer ke andar jo reducer 

