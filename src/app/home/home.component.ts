import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() app2home;
  @Output() onyell = new EventEmitter();

 
  lala = "welcome to angularjs";
  bool = true;

  staffname="";
  staffname2="";
  discount="";
  discount2="";
  datedisp="";
  recptdisp="";
  totalbill: string;
  datetoday: Date =null;
 rec_no: number;

  ninja = {
    name: "dani",
    type: "asd"
  };
  toInsert = {
    name: "", price: "", quantity: ""
  };

  CartInsert = {
    name: "", price: "", quantity: ""
  };

  items = [

    { name: "Phone 1", price: "45", quantity: "5" },
    { name: "Phone 2", price: "45", quantity: "5" },
    { name: "Phone 3", price: "45", quantity: "5" },
    { name: "Phone 4", price: "45", quantity: "5" },
    { name: "Phone 5", price: "45", quantity: "5" }
  ];

  carts=[   { name: "", price: "", quantity: "" }  ];


  fireevent(e) {
    this.onyell.emit(e);
  }
  constructor() { }

  ngOnInit() {
  }

makeBill()
{
  if(this.staffname=="" || this.carts.length<=1)
  {
    if (this.carts.length <= 1) {
      alert("Shopping Cart is empty!");
    }
    else {
      alert("Enter Staff Name to generate bill!");
    }

  }
  else
  {
     this.staffname2="Staff Name: " + this.staffname;
     this.discount2="Discount(%): " + this.discount;
     this.datetoday=new Date();
     this.datedisp="Date: " + this.datetoday.toString();

     this.rec_no= Math.floor(Math.random()*13544)+123;
     this.recptdisp= "Receipt No: " + this.rec_no.toString(); 
     var dis=Number(this.discount);
     var temp=0;
     var sum=0;
     for(var i=0; i<this.carts.length; i++)
     {
       var price= this.carts[i].price;
       var quantity= this.carts[i].quantity;
       temp= Number(price)*Number(quantity);
       sum=sum+ temp;
     }
     var x=Number(this.discount);
     if(x!=0 || x!=NaN)
     {
       x=x/100;
       var final= sum - (sum*x);
       var t="Total($): " +final.toString();
        this.totalbill=t;
     }
     
  }

}
  AddtoCart(nam,pri, qua) {
    var index=this.items.findIndex(item => item.name== nam);
    var int= Number( this.items[index].quantity); //item quantity
    if(int<=1 || this.items[index].quantity=="Out of Stock" )
    {
      //alert("Item out of stock!");
      this.items[index].quantity="Out of Stock";
      
    }
    else
    {
      console.log(this.carts);

      int--;
      var no_str=String(int);
      this.items[index].quantity=no_str;
      //console.log(int);

      var index2 = this.carts.findIndex(item => item.name == nam);
       index2=Number(index2);
       
        console.log(index2);
       if(index2!=-1)
       {
         var int2= Number( this.carts[index2].quantity); 
         int2++;
         this.carts[index2].quantity=int2.toString();
        //var na=nam;
        //var pr=pri;
        //var qt=qua;
        //this.carts.push({name: na, price: pr, quantity: qt });
       }
       else if(index2==-1)
       {
         qua="1";
         var na=nam;
         var pr=pri;
         var qt=qua;
         //var obj={ name: na, price:pr, quantity:qt };
         this.carts.push( {name: String(nam), price: String(pri), quantity: String(qua) } );
        // {name: na, price: pr, quantity: qt }
         
       }
      
      
    }
   
    
    //var no_str=String(int);
   // this.items[index].quantity=no_str;
   
    // alert(val);
   // var int = Number(val);
    //int--;
    //alert(n);
    //this.toInsert.name=n;
    //this.toInsert.price=p;
    //this.toInsert.quantity=q;
    
    
  }

  insertNew(val) {
    var n = this.toInsert.name;
    var p = this.toInsert.price;
    var q = this.toInsert.quantity;
    if (n == "" || p == "" || q == "") {
      alert("All fields must be filled!")
    }
    else {
      
      this.items.push({ name: String(n), price: String(p), quantity: String(p) });
     
      this.toInsert.name = "";
      this.toInsert.price = "";
      this.toInsert.quantity = "";
       alert("New item added!")
      
    }



  }

}
