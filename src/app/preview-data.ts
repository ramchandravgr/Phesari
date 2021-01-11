export class DesignerPreviewData {
    dressType : string;
    cost : number;
    colour : string;
    material : string;
    imageUrl : any;
    description : string;
    duration : number;
    constructor(x,y,z,a,b,c,d){
        this.duration=x;
        this.cost = y;
        this.colour = z;
        this.dressType = a;
        this.material = b;
        this.imageUrl = c;
        this.description = d;
    }
}
