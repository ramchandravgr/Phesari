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
import { Observable } from 'rxjs';

export class DataSender {
    category : string;
    dataArray : Observable<{}>[];

    constructor(categ : string,dataset : Observable<{}>[]){
        this.category = categ;
        this.dataArray = dataset; 
        
    } 
}

