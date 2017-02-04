import { Component } from '@angular/core';
import {TypeaheadService} from './typeahead.service';

@Component({
    selector: 'autofill',
    templateUrl: '../customView/customView.autofillView.html',
    providers : [TypeaheadService]
    
})


export class TypeaheadComponent{
    dataProvider: any[];
    dProvider: any[];
    inputStr: string;
    tstr: string;
    tArr: string[];
    rulListArray: any[];
    public listDisplay: string;
   
    constructor(typeaheadService:TypeaheadService){
        this.dProvider = this.dataProvider = typeaheadService.getDataProvider();
        //this.inputStr = 'when ';
        this.listDisplay = 'none';
         this.rulListArray = [];
    }

    clickItem(obj:any, el:any) {
        switch(obj.id){
            case 'e':
                this.tArr =  this.inputStr.split(' ');
                this.inputStr = this.tArr[0]+' '+ obj.name;
                this.inputStr += '.'
                this.dataProvider = obj.properties;  
                el.focus();
                break;
            case 'p':
                this.tArr =  this.inputStr.split('.');
                this.inputStr = this.tArr[0]+'.'+ obj.name;
                this.inputStr += ' '
                this.dataProvider = obj.operators;
                el.focus();
                break;
            case 'o':
                this.tArr =  this.inputStr.split(' ');
                this.inputStr = this.tArr[0] + ' ' + this.tArr[1] + ' ' + obj.name + ' ';
                this.listDisplay = 'none';
                el.focus();
                break;
            default:
                 break;
        }
    }

    onKeyprassHandler(event:any, type:string) {

       this.inputStr =  this.tstr = event.target.value;
       this.tArr =[];
      if(event.target.value == type ){
          this.listDisplay = 'block';
          this.dataProvider = this.dProvider;
      }else if(event.keyCode == 190){ 
          this.tArr =  this.tstr.split('.');
          this.tArr = this.tArr[0].split(' ');
          if(this.tArr.length == 2){
               this.dataProvider = this.dProvider;
              for(var indx in this.dataProvider) {
                    if(this.dataProvider[indx].name == this.tArr[1] && this.dataProvider[indx].id == 'e'){
                         this.dataProvider = this.dataProvider[indx].properties;
                         this.listDisplay = 'block';
                         break;
                    }
               }
          }
          
      }else if(event.keyCode == 32){
          // console.log('space key 32')
           this.tArr =  this.tstr.split(' ');
           this.tArr = this.tArr[1].split('.');
          
           if(this.tArr.length == 2){
                for(var indx in this.dataProvider) {
                    if(this.dataProvider[indx].name == this.tArr[1] && this.dataProvider[indx].id == 'p'){
                         this.dataProvider = this.dataProvider[indx].operators;
                         this.listDisplay = 'block';
                         break;
                    }
               }
           }
      }else if(event.keyCode == 8 ||  event.keyCode == 46 || event.keyCode == 27){
          this.listDisplay = 'none'; 
      }else if(event.keyCode == 13){
           //console.log('Enter Key  - 13');
           this.tArr =  this.inputStr.split(' ');
           var tsrt:string = this.tArr[2];
           var tArray: string[] = this.inputStr.split(tsrt);
           var rObj:rlObject ={
                condition: this.tArr[0],
                event: this.tArr[1],
                operator: this.tArr[2],
                operend: tArray[1]

            }
            this.inputStr = "";
           this.updateRulList (rObj);
      }
    }

    updateRulList(obj:any){
         this.rulListArray.push(obj);   
    }

}

interface rlObject {
        condition: string;
        event: string;
        operator:string;
        operend:string;
    }
