'use strict'
const hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let totalPerHour=[];
let finelTotal=0;



function getRrandomNumber (min,max){
    return Math.floor( Math.random()*(max-min+1)+min);
}

const container= document.getElementById('salmon-cookies-sales');
const tableEl= document.createElement('table');
      
function headerTable(){
        container.appendChild(tableEl);
        const headerRow = document.createElement('tr');
        tableEl.appendChild(headerRow);
        const thEl=document.createElement('th');
        headerRow.appendChild(thEl);
        thEl.textContent='Location';
        for(let i=0 ; i<hours.length; i++){
        const thEl2 = document.createElement('th');
        headerRow.appendChild(thEl2);
        thEl2.textContent=hours[i];
        totalPerHour.push(0);
        
        
    
        }
        
        const thEl3=document.createElement('th');
        headerRow.appendChild(thEl3);
        thEl3.textContent='Location Total';
      }
      headerTable();
      
      function ShopeSales(name,min,max,avgCookie){
      this.name= name;
      this.min=min;
      this.max=max;
      this.avgCookie=avgCookie;
      this.cookiesPerHour=[];
      this.total=0;
      }
      ShopeSales.prototype.getCookies =function(){
          for(let i=0; i<hours.length; i++){
              this.cookiesPerHour.push(Math.floor(getRrandomNumber(this.min,this.max)*this.avgCookie));
              this.total+= this.cookiesPerHour[i];
              totalPerHour[i]+=this.cookiesPerHour[i];
          }
        
      }; //console.log(headerTable);
           
      ShopeSales.prototype.render=function(){

            container.appendChild(tableEl);
            const trEl = document.createElement('tr');
            tableEl.appendChild(trEl);
            const tdEl = document.createElement('td');
            trEl.appendChild(tdEl);
            tdEl.textContent=this.name;
            for(let i=0 ; i<hours.length; i++){
              const tdEl = document.createElement('td');
              trEl.appendChild(tdEl);
              tdEl.textContent=this.cookiesPerHour[i];
            }
            const tddEl = document.createElement('td');
            trEl.appendChild(tddEl);
            tddEl.textContent=Math.floor(this.total);
            finelTotal+=this.total;


      };
      const seattle = new ShopeSales('Seattle',23,65,6.3);
      const tokyo = new ShopeSales('Tokyo',3, 24, 1.2);
      const dubai = new ShopeSales('Dubai',11,38,3.7);
      const paris = new ShopeSales('Paris',20, 38, 2.3);
      const lima = new ShopeSales('Lima',2, 16, 4.6,);
    
      seattle.getCookies();
      seattle.render();
      tokyo.getCookies();
      tokyo.render();
      dubai.getCookies();
      dubai.render();
      paris.getCookies();
      paris.render();
      lima.getCookies();
      lima.render();


  
      
      let shopForm =document.getElementById("shopForm");
      shopForm.addEventListener('submit',function (event){
        event.preventDefault();
        
        
        const name = event.target.name.value;
        
        const min = event.target.min.value;
        
        const max = event.target.max.value;
        
        const avg =event.target.avg.value;
        
        console.log(name,min,max,avg);
      
        const userInput = new ShopeSales(name,min,max,avg);
        const footerEl= document.getElementById('footer');
        footerEl.remove();

        userInput.getCookies();

        console.log(userInput.cookiesPerHour);
        userInput.render();
        shopForm.reset();
        footer();
      });
     
        
        function footer (){
       container.appendChild(tableEl);
          const trEl = document.createElement('tr');
          // add id to the footer so i can delet it and return after
          trEl.setAttribute('id','footer');
          tableEl.appendChild(trEl);
          const tdEl = document.createElement('td');
          trEl.appendChild(tdEl);
       tdEl.textContent='Hourly Totals for All Location';
       for (let i=0 ; i<hours.length; i++){
            const tdEl = document.createElement('td');
          trEl.appendChild(tdEl);
          tdEl.textContent=totalPerHour[i];
      }
        const tddEl = document.createElement('td');
        trEl.appendChild(tddEl);
        tddEl.textContent=finelTotal;
      }
 

footer();


