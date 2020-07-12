export class DesignerPreviewData {
    dressType : string;
    budget : number;
    colour : string;
    material : string;
    imageUrl : any;
    age : number;
    description : string;
    // duration : number;
    constructor(x,y,z,a,b,c,d){
        this.age = x;
        this.budget = y;
        this.colour = z;
        this.dressType = a;
        this.material = b;
        this.imageUrl = c;
        this.description = d;
    }
}
