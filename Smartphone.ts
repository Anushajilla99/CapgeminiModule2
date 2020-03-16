import{Mobile}from'./Mobile'
class SmartPhone extends Mobile{
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
var e2=new SmartPhone(1,"redmi",20000,"android");
e2.printMobileDetail();


