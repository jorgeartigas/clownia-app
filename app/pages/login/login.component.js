"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var page_1 = require("ui/page");
var color_1 = require("color");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, page) {
        this.userService = userService;
        this.page = page;
        this.isLoggingIn = true;
        //this.userService.isLoggedIn();
        this.user = new user_1.User();
        this.user.email = "hola@hola.com";
        this.user.password = "hola123";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
    };
    LoginComponent.prototype.submit = function () {
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        this.userService.login(this.user);
    };
    LoginComponent.prototype.signUp = function () {
        this.userService.register(this.user);
        this.loggingIn();
    };
    LoginComponent.prototype.facebookLogin = function () {
        this.userService.facebookLogin();
    };
    LoginComponent.prototype.googleLogin = function () {
        this.userService.googleLogin();
    };
    LoginComponent.prototype.guestLogin = function () {
        this.userService.guestLogin();
    };
    LoginComponent.prototype.loggingIn = function () {
        this.isLoggingIn = !this.isLoggingIn;
        var container = this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color('#0000ffff') : new color_1.Color('blue'),
            duration: 200
        });
    };
    LoginComponent.prototype.resetPassword = function () {
        this.userService.resetPassword(this.user);
    };
    LoginComponent.prototype.changePassword = function () {
        this.userService.changePassword(this.user);
    };
    __decorate([
        core_1.ViewChild("container"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "container", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [user_service_1.UserService],
            templateUrl: "pages/login/login.html",
            styleUrls: ["pages/login/login-common.css", "pages/login/login.css"]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, page_1.Page])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLCtDQUE4QztBQUM5QywrREFBNkQ7QUFDN0QsZ0NBQStCO0FBQy9CLCtCQUE4QjtBQVM5QjtJQUtFLHdCQUFvQixXQUF3QixFQUFVLElBQVU7UUFBNUMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBSGhFLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBSWpCLGdDQUFnQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFBO1FBQ2pDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsaUNBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBRUQsK0JBQU0sR0FBTjtRQUNFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQSxDQUFDO1lBQ25CLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUM7UUFBQSxJQUFJLENBQUEsQ0FBQztZQUNKLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDO0lBQ0gsQ0FBQztJQUVELDhCQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsb0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELG1DQUFVLEdBQVY7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxrQ0FBUyxHQUFUO1FBQ0UsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDckMsSUFBSSxTQUFTLEdBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUM7UUFDbkQsU0FBUyxDQUFDLE9BQU8sQ0FBQztZQUNoQixlQUFlLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxhQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksYUFBSyxDQUFDLE1BQU0sQ0FBQztZQUM5RSxRQUFRLEVBQUUsR0FBRztTQUNkLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxzQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCx1Q0FBYyxHQUFkO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUF4RHVCO1FBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDO2tDQUFhLGlCQUFVO3FEQUFDO0lBSHBDLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFNBQVMsRUFBRSxDQUFDLDBCQUFXLENBQUM7WUFDeEIsV0FBVyxFQUFDLHdCQUF3QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSx1QkFBdUIsQ0FBQztTQUNyRSxDQUFDO3lDQU1pQywwQkFBVyxFQUFnQixXQUFJO09BTHJELGNBQWMsQ0E0RDFCO0lBQUQscUJBQUM7Q0FBQSxBQTVERCxJQTREQztBQTVEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC91c2VyL3VzZXJcIjtcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktYXBwXCIsXHJcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLFxyXG4gIHRlbXBsYXRlVXJsOlwicGFnZXMvbG9naW4vbG9naW4uaHRtbFwiLFxyXG4gIHN0eWxlVXJsczogW1wicGFnZXMvbG9naW4vbG9naW4tY29tbW9uLmNzc1wiLCBcInBhZ2VzL2xvZ2luL2xvZ2luLmNzc1wiXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHVzZXI6IFVzZXI7XHJcbiAgaXNMb2dnaW5nSW4gPSB0cnVlO1xyXG4gIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyIDogRWxlbWVudFJlZjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcGFnZTogUGFnZSl7XHJcbiAgICAvL3RoaXMudXNlclNlcnZpY2UuaXNMb2dnZWRJbigpO1xyXG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcclxuICAgIHRoaXMudXNlci5lbWFpbCA9IFwiaG9sYUBob2xhLmNvbVwiXHJcbiAgICB0aGlzLnVzZXIucGFzc3dvcmQgPSBcImhvbGExMjNcIjtcclxuICB9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHN1Ym1pdCgpe1xyXG4gICAgaWYodGhpcy5pc0xvZ2dpbmdJbil7XHJcbiAgICAgIHRoaXMubG9naW4oKTtcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnNpZ25VcCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9naW4oKSB7XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2luKHRoaXMudXNlcik7XHJcbiAgfVxyXG5cclxuICBzaWduVXAoKSB7XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcik7XHJcbiAgICB0aGlzLmxvZ2dpbmdJbigpO1xyXG4gIH1cclxuXHJcbiAgZmFjZWJvb2tMb2dpbigpIHtcclxuICAgIHRoaXMudXNlclNlcnZpY2UuZmFjZWJvb2tMb2dpbigpO1xyXG4gIH1cclxuXHJcbiAgZ29vZ2xlTG9naW4oKSB7XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmdvb2dsZUxvZ2luKCk7XHJcbiAgfVxyXG5cclxuICBndWVzdExvZ2luKCkge1xyXG4gICAgdGhpcy51c2VyU2VydmljZS5ndWVzdExvZ2luKCk7XHJcbiAgfVxyXG5cclxuICBsb2dnaW5nSW4oKSB7XHJcbiAgICB0aGlzLmlzTG9nZ2luZ0luID0gIXRoaXMuaXNMb2dnaW5nSW47XHJcbiAgICBsZXQgY29udGFpbmVyID0gPFZpZXc+dGhpcy5jb250YWluZXIubmF0aXZlRWxlbWVudDtcclxuICAgIGNvbnRhaW5lci5hbmltYXRlKHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmlzTG9nZ2luZ0luID8gbmV3IENvbG9yKCcjMDAwMGZmZmYnKSA6IG5ldyBDb2xvcignYmx1ZScpLFxyXG4gICAgICBkdXJhdGlvbjogMjAwXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmVzZXRQYXNzd29yZCgpIHtcclxuICAgIHRoaXMudXNlclNlcnZpY2UucmVzZXRQYXNzd29yZCh0aGlzLnVzZXIpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGFzc3dvcmQoKSB7XHJcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLmNoYW5nZVBhc3N3b3JkKHRoaXMudXNlcik7XHJcbiAgfVxyXG59Il19