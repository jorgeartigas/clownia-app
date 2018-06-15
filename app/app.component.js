"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_service_1 = require("./shared/user/user.service");
var core_1 = require("@angular/core");
var LocalNotifications = require("nativescript-local-notifications");
var AppComponent = /** @class */ (function () {
    function AppComponent(userService) {
        this.userService = userService;
    }
    AppComponent.prototype.ngOnInit = function () {
        LocalNotifications.hasPermission();
        this.userService.isLoggedIn();
        LocalNotifications.addOnMessageReceivedCallback(function (notification) {
            LocalNotifications.cancel(notification.id).then(function (result) { return console.log(result); });
        }).then(function () {
            console.log("Listener added");
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            template: "<page-router-outlet></page-router-outlet>"
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyREFBeUQ7QUFDekQsc0NBQWtEO0FBQ2xELHFFQUF1RTtBQU12RTtJQUNFLHNCQUFvQixXQUF3QjtRQUF4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUFHLENBQUM7SUFDaEQsK0JBQVEsR0FBUjtRQUNFLGtCQUFrQixDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDOUIsa0JBQWtCLENBQUMsNEJBQTRCLENBQzdDLFVBQVUsWUFBWTtZQUNwQixrQkFBa0IsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU0sSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQW5CLENBQW1CLENBQUMsQ0FBQTtRQUNoRixDQUFDLENBQ0osQ0FBQyxJQUFJLENBQ0Y7WUFDRSxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDaEMsQ0FBQyxDQUNKLENBQUE7SUFDRCxDQUFDO0lBZFUsWUFBWTtRQUp4QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLDJDQUEyQztTQUN0RCxDQUFDO3lDQUVpQywwQkFBVztPQURqQyxZQUFZLENBZXhCO0lBQUQsbUJBQUM7Q0FBQSxBQWZELElBZUM7QUFmWSxvQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQvdXNlci91c2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0ICogYXMgTG9jYWxOb3RpZmljYXRpb25zIGZyb20gXCJuYXRpdmVzY3JpcHQtbG9jYWwtbm90aWZpY2F0aW9uc1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6IFwibWFpblwiLFxuICB0ZW1wbGF0ZTogXCI8cGFnZS1yb3V0ZXItb3V0bGV0PjwvcGFnZS1yb3V0ZXItb3V0bGV0PlwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7fVxuICBuZ09uSW5pdCgpIHtcbiAgICBMb2NhbE5vdGlmaWNhdGlvbnMuaGFzUGVybWlzc2lvbigpXG4gICAgdGhpcy51c2VyU2VydmljZS5pc0xvZ2dlZEluKCk7XG4gICAgTG9jYWxOb3RpZmljYXRpb25zLmFkZE9uTWVzc2FnZVJlY2VpdmVkQ2FsbGJhY2soXG4gICAgICBmdW5jdGlvbiAobm90aWZpY2F0aW9uKSB7XG4gICAgICAgIExvY2FsTm90aWZpY2F0aW9ucy5jYW5jZWwobm90aWZpY2F0aW9uLmlkKS50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxuICAgICAgfVxuICApLnRoZW4oXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJMaXN0ZW5lciBhZGRlZFwiKTtcbiAgICAgIH1cbiAgKVxuICB9XG59Il19