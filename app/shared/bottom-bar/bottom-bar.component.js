"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var BottomBarComponent = /** @class */ (function () {
    function BottomBarComponent(route) {
        this.route = route;
        this.activeRoute = route.snapshot.url[0].path;
        console.log(route.snapshot.url[0].path);
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJib3R0b20tYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQywwQ0FBaUQ7QUFTakQ7SUFHRSw0QkFBb0IsS0FBcUI7UUFBckIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDOUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBTlUsa0JBQWtCO1FBUDlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsWUFBWTtZQUN0QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLEVBQUU7WUFDYixXQUFXLEVBQUUsbUJBQW1CO1lBQ2hDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixFQUFFLGtCQUFrQixDQUFDO1NBQzNELENBQUM7eUNBSTJCLHVCQUFjO09BSDlCLGtCQUFrQixDQU85QjtJQUFELHlCQUFDO0NBQUEsQUFQRCxJQU9DO0FBUFksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogXCJib3R0b20tYmFyXCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBwcm92aWRlcnM6IFtdLFxyXG4gIHRlbXBsYXRlVXJsOiBcIi4vYm90dG9tLWJhci5odG1sXCIsXHJcbiAgc3R5bGVVcmxzOiBbXCIuL2JvdHRvbS1iYXItY29tbW9uLmNzc1wiLCBcIi4vYm90dG9tLWJhci5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJvdHRvbUJhckNvbXBvbmVudCB7XHJcbiAgYWN0aXZlUm91dGU6IHN0cmluZztcclxuICBcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSl7XHJcbiAgICB0aGlzLmFjdGl2ZVJvdXRlID0gcm91dGUuc25hcHNob3QudXJsWzBdLnBhdGg7XHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZS5zbmFwc2hvdC51cmxbMF0ucGF0aCk7XHJcbiAgfVxyXG59Il19