/*
LESCO Bill Calculator Script
Written by Imran Ahmed
Demo: https://lescobill.pk/lesco-bill-calculator/
*/

slab1=3.95;
slab2=7.74;
slab3=10.06;
slab4=12.15;
slab5=19.55;
slab6=22.65;
setInterval(function(){
	var units=jQuery("#units").val();
	if(units!=''){
		if(units<=50&&units>0){
			bill=units*slab1;
			jQuery("#billAmount").html(units+" x "+slab1+" = "+bill.toFixed(2));
		}else if(units<=100){
			bill=units*slab2;
			jQuery("#billAmount").html(units+" x "+slab2+" = "+bill.toFixed(2));
		}else if(units<=200){
			bill=100*slab2;
			jQuery("#billAmount").html("100 x "+slab2+" = "+bill.toFixed(2));
			bill=bill+(units-100)*slab3;
			jQuery("#billAmount").append("<br>"+(units-100)+" x "+slab3+" = "+((units-100)*slab3).toFixed(2));
		}else if(units<=300){
			bill=200*slab3;
			jQuery("#billAmount").html("200 x "+slab3+" = "+bill.toFixed(2));
			
			bill=bill+(units-200)*slab4;
			jQuery("#billAmount").append("<br>"+(units-200)+" x "+slab4+" = "+((units-200)*slab4).toFixed(2));
		}else if(units<=700){
			//300
			bill=300*slab4;
			jQuery("#billAmount").html("300 x "+slab4+" = "+bill.toFixed(2));
			
			//301-700
			bill=bill+(units-300)*slab5;
			jQuery("#billAmount").append("<br>"+(units-300)+" x "+slab5+" = "+((units-300)*slab5).toFixed(2));
			
		}else if(units>700){
			//100
			bill=700*slab5;
			jQuery("#billAmount").html("700 x "+slab5+" = "+bill.toFixed(2));
			
			//701-above
			bill=bill+(units-700)*slab6;
			jQuery("#billAmount").append("<br>"+(units-700)+" x "+slab6+" = "+((units-700)*slab6).toFixed(2));
		}
		if(units>0){
			
			var fc=units*0.43;
			fc=fc.toFixed(2);
			var subtotal=Number(bill)+Number(fc);
			
			var ed=bill*1.5/100;
			ed=ed.toFixed(2);
			
			subtotal=subtotal+Number(ed);
			
			var gst=subtotal*0.17;
			gst=gst.toFixed(2);
			var nj=units/10;
			
			total=Number(subtotal)+35+Number(gst)+Number(nj);
			total=total.toFixed(2);
			jQuery("#billAmount").append("<br><br><table></table>");
			
			jQuery("#billAmount table").append('<tr><td>Cost of electricity:</td><td><b>'+bill.toFixed(2)+'</b></td></tr>');
			jQuery("#billAmount table").append('<tr><td>F.C Surcharge:</td><td><b>'+fc+'</b></td></tr>');
			jQuery("#billAmount table").append('<tr><td>Electricity Duty:</td><td><b>'+ed+'</b></td></tr>');
			
			jQuery("#billAmount table").append("<tr><td>TV Fee:</td><td><b>35</b></td></tr>");
			jQuery("#billAmount table").append("<tr><td>GST:</td><td><b>"+gst+"</b></td></tr>");
			jQuery("#billAmount table").append("<tr><td>N.J Surcharge:</td><td><b>"+nj+"</b></td></tr>");
			jQuery("#billAmount table").append("<tr><td><b>Total Estimated Bill:</td><td><b style='color:red;'>"+total+"</b></td></tr>");
			
			jQuery("#billAmount").append("<small>Note: This is just an estimate cost of electricity, the original bill amount may vary due to additional taxes.</small>");
		}
	}
		
},500);
