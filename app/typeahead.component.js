"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var typeahead_service_1 = require('./typeahead.service');
var TypeaheadComponent = (function () {
    function TypeaheadComponent(typeaheadService) {
        this.dProvider = this.dataProvider = typeaheadService.getDataProvider();
        //this.inputStr = 'when ';
        this.listDisplay = 'none';
        this.rulListArray = [];
    }
    TypeaheadComponent.prototype.clickItem = function (obj, el) {
        switch (obj.id) {
            case 'e':
                this.tArr = this.inputStr.split(' ');
                this.inputStr = this.tArr[0] + ' ' + obj.name;
                this.inputStr += '.';
                this.dataProvider = obj.properties;
                el.focus();
                break;
            case 'p':
                this.tArr = this.inputStr.split('.');
                this.inputStr = this.tArr[0] + '.' + obj.name;
                this.inputStr += ' ';
                this.dataProvider = obj.operators;
                el.focus();
                break;
            case 'o':
                this.tArr = this.inputStr.split(' ');
                this.inputStr = this.tArr[0] + ' ' + this.tArr[1] + ' ' + obj.name + ' ';
                this.listDisplay = 'none';
                el.focus();
                break;
            default:
                break;
        }
    };
    TypeaheadComponent.prototype.onKeyprassHandler = function (event, type) {
        this.inputStr = this.tstr = event.target.value;
        this.tArr = [];
        if (event.target.value == type) {
            this.listDisplay = 'block';
            this.dataProvider = this.dProvider;
        }
        else if (event.keyCode == 190) {
            this.tArr = this.tstr.split('.');
            this.tArr = this.tArr[0].split(' ');
            if (this.tArr.length == 2) {
                this.dataProvider = this.dProvider;
                for (var indx in this.dataProvider) {
                    if (this.dataProvider[indx].name == this.tArr[1] && this.dataProvider[indx].id == 'e') {
                        this.dataProvider = this.dataProvider[indx].properties;
                        this.listDisplay = 'block';
                        break;
                    }
                }
            }
        }
        else if (event.keyCode == 32) {
            // console.log('space key 32')
            this.tArr = this.tstr.split(' ');
            this.tArr = this.tArr[1].split('.');
            if (this.tArr.length == 2) {
                for (var indx in this.dataProvider) {
                    if (this.dataProvider[indx].name == this.tArr[1] && this.dataProvider[indx].id == 'p') {
                        this.dataProvider = this.dataProvider[indx].operators;
                        this.listDisplay = 'block';
                        break;
                    }
                }
            }
        }
        else if (event.keyCode == 8 || event.keyCode == 46 || event.keyCode == 27) {
            this.listDisplay = 'none';
        }
        else if (event.keyCode == 13) {
            //console.log('Enter Key  - 13');
            this.tArr = this.inputStr.split(' ');
            var tsrt = this.tArr[2];
            var tArray = this.inputStr.split(tsrt);
            var rObj = {
                condition: this.tArr[0],
                event: this.tArr[1],
                operator: this.tArr[2],
                operend: tArray[1]
            };
            this.inputStr = "";
            this.updateRulList(rObj);
        }
    };
    TypeaheadComponent.prototype.updateRulList = function (obj) {
        this.rulListArray.push(obj);
    };
    TypeaheadComponent = __decorate([
        core_1.Component({
            selector: 'autofill',
            templateUrl: '../customView/customView.autofillView.html',
            providers: [typeahead_service_1.TypeaheadService]
        }), 
        __metadata('design:paramtypes', [typeahead_service_1.TypeaheadService])
    ], TypeaheadComponent);
    return TypeaheadComponent;
}());
exports.TypeaheadComponent = TypeaheadComponent;
//# sourceMappingURL=typeahead.component.js.map