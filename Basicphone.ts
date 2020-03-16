import{Mobile}from'./Mobile'
class BasicPhone extends Mobile{
mobileType:String;
constructor(mobileId:number,mobileName:String,mobileCost:number,mobileType:String){
super(mobileId,mobileName,mobileCost)
this.mobileType=mobileType;
}
printMobileDetail() :void{
    console.log("id=",this.mobileId );
	console.log("name=",this.mobileName );
	console.log("cost=",this.mobileCost );
	console.log("type=",this.mobileType)
}
}
var e1=new BasicPhone(1,"samsung galaxy",10000,"android");
e1.printMobileDetail();

