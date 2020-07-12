// export class UploadDetails {
//     CustomerID : string;
//     image : File;
//     dressType : string;
//     Age : number;
//     Budget : number;
//     Description : string;
//     Colour : string;

//    constructor (img : File,type : string,age : number,budget : number,description : string,colour : string){
//        this.image = img;
//        this.dressType = type;
//        this.Budget = budget;
//        this.Age = age;
//        this.Colour = colour; 
//    }
// }
import { DesignerPreviewData } from './preview-data';

export class DataSender {
    category : string;
    dataArray : DesignerPreviewData[];

    constructor(categ : string,dataset : DesignerPreviewData[]){
        this.category = categ;
        this.dataArray = dataset; 
    } 
}

