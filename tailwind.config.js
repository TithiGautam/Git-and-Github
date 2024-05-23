/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html","./test/*.html"],  // bs yaha rakha kr ki jo file bnai hai vo yaha se 
  //accessible hai age koi folder bna kr usme add kre toh add that here like ./folder_name/*.html ok
  theme: {//bs ye / se ho jata h ky yha pe apn ne nhi likha h n koi folder name 
    //han kyuki abhi koi folder nh hai na
    extend: {},
  },
  plugins: [],
}

