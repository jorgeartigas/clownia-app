"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var BottomBarComponent = /** @class */ (function () {
    function BottomBarComponent(route) {
        this.route = route;
        // 0 -> LineUp
        // 1 -> Social
        // 2 -> Map
        // 3 -> Help
        this.arraySelected = [false, false, false, false];
        console.log(route.snapshot.url[0].path);
    }
    BottomBarComponent.prototype.selected = function (index) {
        for (var i = 0; i < this.arraySelected.length; i++) {
            if (i === index) {
                this.arraySelected[i] = true;
            }
            else {
                this.arraySelected[i] = false;
            }
        }
    };
    BottomBarComponent = __decorate([
        core_1.Component({
            selector: "bottom-bar",
            moduleId: module.id,
            providers: [],
            templateUrl: "./bottom-bar.html",
            styleUrls: ["./bottom-bar-common.css", "./bottom-bar.css"]
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute])
    ], BottomBarComponent);
    return BottomBarComponent;
}());
exports.BottomBarComponent = BottomBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib3R0b20tYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBaUQ7QUFTakQ7SUFNRSw0QkFBb0IsS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFMekMsY0FBYztRQUNkLGNBQWM7UUFDZCxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFhLEdBQW1CLENBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFFeEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQscUNBQVEsR0FBUixVQUFTLEtBQVk7UUFDbkIsR0FBRyxDQUFBLENBQUMsSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsR0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUUsRUFBQyxDQUFDO1lBQzNDLEVBQUUsQ0FBQSxDQUFDLENBQUMsS0FBRyxLQUFLLENBQUMsQ0FBQSxDQUFDO2dCQUNaLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDO1lBQzdCLENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDSixJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxHQUFDLEtBQUssQ0FBQztZQUM5QixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFsQlUsa0JBQWtCO1FBUDlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLEVBQUU7WUFDYixXQUFXLEVBQUUsbUJBQW1CO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixFQUFFLGtCQUFrQixDQUFDO1NBQzNELENBQUM7eUNBTzJCLHVCQUFjO09BTjlCLGtCQUFrQixDQW1COUI7SUFBRCx5QkFBQztDQUFBLEFBbkJELElBbUJDO0FBbkJZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwiYm90dG9tLWJhclwiLFxyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgcHJvdmlkZXJzOiBbXSxcclxuICB0ZW1wbGF0ZVVybDogXCIuL2JvdHRvbS1iYXIuaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wiLi9ib3R0b20tYmFyLWNvbW1vbi5jc3NcIiwgXCIuL2JvdHRvbS1iYXIuY3NzXCJdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCb3R0b21CYXJDb21wb25lbnQge1xyXG4gIC8vIDAgLT4gTGluZVVwXHJcbiAgLy8gMSAtPiBTb2NpYWxcclxuICAvLyAyIC0+IE1hcFxyXG4gIC8vIDMgLT4gSGVscFxyXG4gIGFycmF5U2VsZWN0ZWQ6IEFycmF5PGJvb2xlYW4+ID0gW2ZhbHNlLGZhbHNlLGZhbHNlLGZhbHNlXTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSl7XHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZS5zbmFwc2hvdC51cmxbMF0ucGF0aCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RlZChpbmRleDpudW1iZXIpe1xyXG4gICAgZm9yKGxldCBpPTA7aTx0aGlzLmFycmF5U2VsZWN0ZWQubGVuZ3RoO2krKyl7XHJcbiAgICAgIGlmKGk9PT1pbmRleCl7XHJcbiAgICAgICAgdGhpcy5hcnJheVNlbGVjdGVkW2ldPXRydWU7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuYXJyYXlTZWxlY3RlZFtpXT1mYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSJdfQ==