"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../user/user.service");
var DrawerComponent = /** @class */ (function () {
    function DrawerComponent(userService) {
        this.userService = userService;
    }
    DrawerComponent.prototype.logout = function () {
        this.userService.logout();
    };
    DrawerComponent = __decorate([
        core_1.Component({
            selector: "drawer-content",
            moduleId: module.id,
            providers: [user_service_1.UserService],
            templateUrl: "./drawer.component.html",
            styleUrls: []
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], DrawerComponent);
    return DrawerComponent;
}());
exports.DrawerComponent = DrawerComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRyYXdlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMscURBQW1EO0FBU25EO0lBQ0UseUJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO0lBQzVDLENBQUM7SUFFRCxnQ0FBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBTlUsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztZQUN4QixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxFQUFFO1NBQ2QsQ0FBQzt5Q0FFaUMsMEJBQVc7T0FEakMsZUFBZSxDQU8zQjtJQUFELHNCQUFDO0NBQUEsQUFQRCxJQU9DO0FBUFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uL3VzZXIvdXNlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiBcImRyYXdlci1jb250ZW50XCIsXHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBwcm92aWRlcnM6IFtVc2VyU2VydmljZV0sXHJcbiAgdGVtcGxhdGVVcmw6IFwiLi9kcmF3ZXIuY29tcG9uZW50Lmh0bWxcIixcclxuICBzdHlsZVVybHM6IFtdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEcmF3ZXJDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBsb2dvdXQoKXtcclxuICAgIHRoaXMudXNlclNlcnZpY2UubG9nb3V0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==