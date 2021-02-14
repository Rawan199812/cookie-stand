'use strict'
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];



let Seattle={
    name :'Seattle',min:23, max:65, avgCookie:6.3, cookiesPerHour:[],customersPerHour:[],
    calculateCustemers: function (){
        //to get array of the customer number in every hour 
        for(let i=0;i<hours.length;i++){
            this.customersPerHour.push(getRrandomNumber(this.min, this.max));
        }
    },
    
    getcookies: function (){
        // to get array of avarege cookies the customers pay in every hour
        for(let i=0;i<this.customersPerHour.length;i++){
            //console.log();
        this.cookiesPerHour.push(
            Math.floor(this.avgCookie*this.customersPerHour[i]));
      }
    },


 //we use render to write html on sales file from javascript
render: function(){
    let total=0
    //the id in sales.html
    const container= document.getElementById('Salmon Cookies Sales');
    // to make article
    const articleEl= document.createElement('article');
    container.appendChild(articleEl);
    // to make h2 
    const h2El= document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent= this.name;
    //to make unordered list that contain how much cookies sold in this hour  
    const ulEl=document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i<hours.length;i++){
        const liEl=document.createElement('li');
        total+=this.cookiesPerHour[i]
        liEl.textContent=`${hours[i]}:${this.cookiesPerHour[i]}Cookies`;
        ulEl.appendChild(liEl);
    }//the total for all cookies in the day
    const liEl=document.createElement('li');
    liEl.textContent=`total:${total}Cookies`;
    ulEl.appendChild(liEl);

}

};//to make the random number every time the user reload the page
//Math floor will keep the number without any decimal fractions
function getRrandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);

}//we have to write the calls in the right order   
getRrandomNumber();
Seattle.calculateCustemers();
Seattle.getcookies();
Seattle.render();



let Tokyo={
    name :'Tokyo',min:3, max:24, avgCookie:1.2, cookiesPerHour:[],customersPerHour:[],
    calculateCustemers: function (){
        //to get array of the customer number in every hour 
        for(let i=0;i<hours.length;i++){
            this.customersPerHour.push(getRrandomNumber(this.min, this.max));
        }
    },
    
    getcookies: function (){
        // to get array of avarege cookies the customers pay in every hour
        for(let i=0;i<this.customersPerHour.length;i++){
            //console.log();
        this.cookiesPerHour.push(
            Math.floor(this.avgCookie*this.customersPerHour[i]));
      }
    },


 //we use render to write html on sales file from javascript
render: function(){
    let total=0
    //the id in sales.html
    const container= document.getElementById('Salmon Cookies Sales');
    // to make article
    const articleEl= document.createElement('article');
    container.appendChild(articleEl);
    // to make h2 
    const h2El= document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent= this.name;
    //to make unordered list that contain how much cookies sold in this hour  
    const ulEl=document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i<hours.length;i++){
        const liEl=document.createElement('li');
        total+=this.cookiesPerHour[i]
        liEl.textContent=`${hours[i]}:${this.cookiesPerHour[i]} Cookies`;
        ulEl.appendChild(liEl);
    }//the total for all cookies in the day
    const liEl=document.createElement('li');
    liEl.textContent=`total :${total} Cookies`;
    ulEl.appendChild(liEl);

}

};//to make the random number every time the user reload the page
//Math floor will keep the number without any decimal fractions
function getRrandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);

}//we have to write the calls in the right order   
getRrandomNumber();
Tokyo.calculateCustemers();
Tokyo.getcookies();
Tokyo.render();

let Dubai={
    name :'Dubai',min:11, max:38, avgCookie:3.7, cookiesPerHour:[],customersPerHour:[],
    calculateCustemers: function (){
        //to get array of the customer number in every hour 
        for(let i=0;i<hours.length;i++){
            this.customersPerHour.push(getRrandomNumber(this.min, this.max));
        }
    },
    
    getcookies: function (){
        // to get array of avarege cookies the customers pay in every hour
        for(let i=0;i<this.customersPerHour.length;i++){
            //console.log();
        this.cookiesPerHour.push(
            Math.floor(this.avgCookie*this.customersPerHour[i]));
      }
    },


 //we use render to write html on sales file from javascript
render: function(){
    let total=0
    //the id in sales.html
    const container= document.getElementById('Salmon Cookies Sales');
    // to make article
    const articleEl= document.createElement('article');
    container.appendChild(articleEl);
    // to make h2 
    const h2El= document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent= this.name;
    //to make unordered list that contain how much cookies sold in this hour  
    const ulEl=document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i<hours.length;i++){
        const liEl=document.createElement('li');
        total+=this.cookiesPerHour[i]
        liEl.textContent=`${hours[i]}:${this.cookiesPerHour[i]}Cookies`;
        ulEl.appendChild(liEl);
    }//the total for all cookies in the day
    const liEl=document.createElement('li');
    liEl.textContent=`total:${total}Cookies`;
    ulEl.appendChild(liEl);

}

};//to make the random number every time the user reload the page
//Math floor will keep the number without any decimal fractions
function getRrandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);

}//we have to write the calls in the right order   
getRrandomNumber();
Dubai.calculateCustemers();
Dubai.getcookies();
Dubai.render();


let Paris={
    name :'Paris',min:20, max:38, avgCookie:2.3, cookiesPerHour:[],customersPerHour:[],
    calculateCustemers: function (){
        //to get array of the customer number in every hour 
        for(let i=0;i<hours.length;i++){
            this.customersPerHour.push(getRrandomNumber(this.min, this.max));
        }
    },
    
    getcookies: function (){
        // to get array of avarege cookies the customers pay in every hour
        for(let i=0;i<this.customersPerHour.length;i++){
            //console.log();
        this.cookiesPerHour.push(
            Math.floor(this.avgCookie*this.customersPerHour[i]));
      }
    },


 //we use render to write html on sales file from javascript
render: function(){
    let total=0
    //the id in sales.html
    const container= document.getElementById('Salmon Cookies Sales');
    // to make article
    const articleEl= document.createElement('article');
    container.appendChild(articleEl);
    // to make h2 
    const h2El= document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent= this.name;
    //to make unordered list that contain how much cookies sold in this hour  
    const ulEl=document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i<hours.length;i++){
        const liEl=document.createElement('li');
        total+=this.cookiesPerHour[i]
        liEl.textContent=`${hours[i]}:${this.cookiesPerHour[i]}Cookies`;
        ulEl.appendChild(liEl);
    }//the total for all cookies in the day
    const liEl=document.createElement('li');
    liEl.textContent=`total:${total}Cookies`;
    ulEl.appendChild(liEl);

}

};//to make the random number every time the user reload the page
//Math floor will keep the number without any decimal fractions
function getRrandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);

}//we have to write the calls in the right order   
getRrandomNumber();
Paris.calculateCustemers();
Paris.getcookies();
Paris.render();

let Lima={
    name :'Lima',min:2, max:16, avgCookie:4.6, cookiesPerHour:[],customersPerHour:[],
    calculateCustemers: function (){
        //to get array of the customer number in every hour 
        for(let i=0;i<hours.length;i++){
            this.customersPerHour.push(getRrandomNumber(this.min, this.max));
        }
    },
    
    getcookies: function (){
        // to get array of avarege cookies the customers pay in every hour
        for(let i=0;i<this.customersPerHour.length;i++){
            //console.log();
        this.cookiesPerHour.push(
            Math.floor(this.avgCookie*this.customersPerHour[i]));
      }
    },


 //we use render to write html on sales file from javascript
render: function(){
    let total=0
    //the id in sales.html
    const container= document.getElementById('Salmon Cookies Sales');
    // to make article
    const articleEl= document.createElement('article');
    container.appendChild(articleEl);
    // to make h2 
    const h2El= document.createElement('h2');
    articleEl.appendChild(h2El);
    h2El.textContent= this.name;
    //to make unordered list that contain how much cookies sold in this hour  
    const ulEl=document.createElement('ul');
    articleEl.appendChild(ulEl);
    for(let i=0; i<hours.length;i++){
        const liEl=document.createElement('li');
        total+=this.cookiesPerHour[i]
        liEl.textContent=`${hours[i]}:${this.cookiesPerHour[i]}Cookies`;
        ulEl.appendChild(liEl);
    }//the total for all cookies in the day
    const liEl=document.createElement('li');
    liEl.textContent=`total:${total}Cookies`;
    ulEl.appendChild(liEl);

}

};//to make the random number every time the user reload the page
//Math floor will keep the number without any decimal fractions
function getRrandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);

}//we have to write the calls in the right order   
getRrandomNumber();
Lima.calculateCustemers();
Lima.getcookies();
Lima.render();
        











