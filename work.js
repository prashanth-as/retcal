function getValues()
{

document.getElementById("nm").innerHTML = document.getElementById("name").value;

var balance = parseFloat(document.getElementById("principal").value);
var interestRate = parseFloat(document.getElementById("interest").value/100.0);
var terms = parseInt(document.getElementById("terms").value);
var extrap = parseInt(document.getElementById("extra").value);
var earlyp;

var div = document.getElementById("amor"); div.innerHTML = "";

var balVal = validateInputs(balance);
var intrVal = validateInputs(interestRate);

	if (balVal && intrVal)
	{
		div.innerHTML += amort(balance, interestRate, terms, extrap);
	}
	else
	{
		div.innerHTML += "Invalid values. Please try again.";
	}
}

function amort(balance, interestRate, terms, extrap)
{
var monthlyRate = interestRate/12;
var payment = balance * (monthlyRate/(1-Math.pow(1+monthlyRate, -terms)));


	document.getElementById("am").innerHTML = "$"+balance.toFixed(2);
	document.getElementById("in").innerHTML = (interestRate*100).toFixed(2)+"%";
	document.getElementById("mon").innerHTML = terms;
	document.getElementById("mp").innerHTML = "$"+payment.toFixed(2);
	document.getElementById("ex").innerHTML = "$"+extrap;
	document.getElementById("tmp").innerHTML = "$"+(extrap+payment).toFixed(2);
	document.getElementById("tot").innerHTML = "$"+(payment * terms).toFixed(2);

var result = ""; var to_int = 0; var tinterest = 0; var pcount =1;
var to_bal = 0; var tinterest = 0; payment = payment + extrap;

		 while (balance > 0)
		 {
			 to_int = monthlyRate*balance;
			 if (payment > balance) { payment = balance + to_int; }
			 to_bal = payment - to_int;
			 tinterest = tinterest + to_int;
			 balance = balance - to_bal;

			 result += "<tr>";
			 result += "<td>" + pcount + "</td>";
			 result += "<td> $ " + payment.toFixed(2) + "</td>";
			 result += "<td> $ " + to_int.toFixed(2) + "</td>";
			 result += "<td> $ " + tinterest.toFixed(2) + "</td>";
			 result += "<td> $ " + to_bal.toFixed(2) + "</td>";
			 result += "<td> $ " + Math.abs(balance.toFixed(2)) + "</td>";
			 result += "</tr>";

			 pcount++;
		 }
		earlyp = (terms - pcount)+1;
	 	document.getElementById("early").innerHTML = earlyp+" months";
		result += "</table>";
		return result;
}

function validateInputs(value)
{
	//some code here to validate inputs
	if ((value == null) || (value == ""))
	{
		return false;
	}
	else
	{
		return true;
	}
}

/*----- Retirement Calculator -----*/

function takeInputs()
{

var curr_age = parseInt(document.getElementById("currage").value);
var curr_sal = parseInt(document.getElementById("currsal").value);
var ret_with = parseInt(document.getElementById("retwith").value);
var I_growth = parseInt(document.getElementById("growth").value);
var infl =     parseInt(document.getElementById("inf").value);


var div = document.getElementById("retire"); div.innerHTML = "";
div.innerHTML += workcal(curr_age,curr_sal);

}

function workcal(curr_age,curr_sal)
{

var result = ""; 
var acount =curr_age;
var beg_bal = 0;
var inv_gr = 0;
var con_inc = ((10*curr_sal)/100);
var ret_inc = 84425;
var ret_draw = 84425;
var end_ret = 0;
   
    result += "<tr>";
    result += "<td>" + acount + "</td>";
    result += "<td> $ " + Math.round(beg_bal.toFixed(2)) + "</td>";
    result += "<td> $ " + Math.round(inv_gr.toFixed(2))+ "</td>";
    result += "<td> $ " + Math.round(con_inc.toFixed(2)) + "</td>";
    result += "<td> $ " + 0+ "</td>";
    result += "<td> $ " + 0+ "</td>";
    result += "<td> $ " + Math.round((end_ret+con_inc).toFixed(2))+ "</td>";
    result += "</tr>";

		 while (acount < 64)
		 {
             
             beg_bal = beg_bal + inv_gr + con_inc;
             inv_gr = ((5*beg_bal)/100);
             con_inc = con_inc + ((2*con_inc)/100);
             end_ret = beg_bal + inv_gr + con_inc;

             result += "<tr>";
			 result += "<td>" + (acount+1) + "</td>";
			 result += "<td> $ " + Math.round(beg_bal.toFixed(2)) + "</td>";
			 result += "<td> $ " + Math.round(inv_gr.toFixed(2))+ "</td>";
             result += "<td> $ " + Math.round(con_inc.toFixed(2)) + "</td>";
             result += "<td> $ " + 0+ "</td>";
             result += "<td> $ " + 0+ "</td>";
             result += "<td> $ " + Math.round(end_ret.toFixed(2))+ "</td>";
			 result += "</tr>";

			 acount++;
		 }
    
    var bb = Math.round(end_ret);
    var ig = Math.round(((5*end_ret)/100));
    var ri = Math.round(ret_inc);
    var rd = Math.round(ret_draw);
    var er = Math.round(end_ret + ((5*end_ret)/100) - ret_inc);
    
    result += "<tr>";
    result += "<td>" + (acount+1) + "</td>";
    result += "<td> $ " + bb + "</td>";
    result += "<td> $ " + ig + "</td>";
    result += "<td> $ " + 0 + "</td>";
    result += "<td> $ " + ri + "</td>";
    result += "<td> $ " + rd + "</td>";
    result += "<td> $ " + er + "</td>";
    result += "</tr>";
    acount++;
    
         while (acount < 77)
		 {
             
             bb = er;
             ig = Math.round(((5*bb)/100));
             ri = ri + ((1.5*ri)/100);
             rd=ri;
             er = Math.round(bb + ig - ri);
             
             
             result += "<tr>";
			 result += "<td>" + (acount+1) + "</td>";
			 result += "<td> $ " + bb + "</td>";
			 result += "<td> $ " + ig + "</td>";
             result += "<td> $ " + 0 + "</td>";
             result += "<td> $ " + Math.round(ri) + "</td>";
             result += "<td> $ " + Math.round(rd) + "</td>";
             result += "<td> $ " + er + "</td>";
			 result += "</tr>";

			 acount++;
		 }
    
    var bbal = Math.round(er);
    var igr = Math.round(((5*er)/100));
    var rin = Math.round(ri + ((1.5*ri)/100));
    var rdr = Math.round(rd);
    var eret = Math.round(bbal+igr);
    result += "<tr>";
    result += "<td>" + (acount+1) + "</td>";
    result += "<td> $ " + bbal + "</td>";
    result += "<td> $ " + igr + "</td>";
    result += "<td> $ " + 0 + "</td>";
    result += "<td> $ " + rin + "</td>";
    result += "<td> $ " + eret + "</td>";
    result += "<td> $ " + 0 + "</td>";
    result += "</tr>";
    acount++;
    
        while (acount < 103)
		 {
             
             
             ri = ri + ((1.5*ri)/100);
             
             
             result += "<tr>";
			 result += "<td>" + (acount+1) + "</td>";
			 result += "<td> $ " + 0 + "</td>";
			 result += "<td> $ " + 0 + "</td>";
             result += "<td> $ " + 0 + "</td>";
             result += "<td> $ " + Math.round(ri + ((1.5*ri)/100)) + "</td>";
             result += "<td> $ " + 0 + "</td>";
             result += "<td> $ " + 0 + "</td>";
			 result += "</tr>";

			 acount++;
		 }

var canvas = document.getElementById('chart');
new Chart(canvas, {
  type: 'line',
  data: {
    labels: [0,26, 38, 45, 50, 54, 56, 59, 62, 63, 65, 67, 69, 71,72,74,75,76,77,78,79,80,90,100],
    datasets: [{
      label: 'Retirement Savings',
      borderColor: "#3cba9f",
      yAxisID: 'A',
      data: [0,6000, 105523, 214028, 323333, 435821, 502116, 616191, 750386, 800114, 908001, 826734, 731868, 621848, 560626, 424602, 349301, 268787,90977, 0]
    }, {
      label: 'Retirement Withdrawals',
      borderColor: "#3e95cd",
      yAxisID: 'B',
      data: [0,0, 0, 0, 0, 0, 0, 0, 0, 0, 84425, 86977, 89606, 92314, 93699, 96531, 97979, 99448,100940, 95526,0,0,0,0]
    }]
  },
  options: {
    scales: {
      yAxes: [{
        id: 'A',
        type: 'linear',
        position: 'left',
      }, {
        id: 'B',
        type: 'linear',
        position: 'right',
      }]
    }
  }
});

		
    return result;
    
}
