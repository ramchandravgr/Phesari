export class FilterData {
     BudgetMin : number;
     BudgetMax : number;
     DressType : string;
     Colour : string[];
     Material   : string;
     // TimeDuration : number;
     constructor(){
          this.BudgetMax=99999999;
          this.BudgetMin=0;
          this.Colour=[];
          this.DressType='';
          this.Material='';
     }
}
