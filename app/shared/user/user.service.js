"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firebase = require("nativescript-plugin-firebase");
var router_1 = require("@angular/router");
var UserService = /** @class */ (function () {
    function UserService(router) {
        this.router = router;
    }
    UserService.prototype.isLoggedIn = function () {
        var _this = this;
        firebase.getCurrentUser().then(function (data) {
            if (data.uid) {
                _this.userId = data.uid;
                _this.router.navigate(["home"]);
                console.log(_this.userId);
            }
        });
    };
    UserService.prototype.register = function (user) {
        var _this = this;
        firebase.createUser({
            email: user.email,
            password: user.password
        }).then(function (result) {
            _this.userId = result.key;
            alert("User created succesfully");
        }).catch(function (err) {
            alert("createUser error: " + err);
        });
    };
    UserService.prototype.login = function (user) {
        var _this = this;
        firebase.login({
            type: firebase.LoginType.PASSWORD,
            passwordOptions: {
                email: user.email,
                password: user.password
            }
        }).then(function (user) {
            _this.userId = user.uid;
            _this.currentUser = user;
            //console.dir(user);
            _this.router.navigate(["home"]);
        }), function (error) {
            alert("Incorrect user or password");
        };
    };
    UserService.prototype.facebookLogin = function () {
        var _this = this;
        firebase.login({
            type: firebase.LoginType.FACEBOOK,
            facebookOptions: {
                scope: ['public_profile', 'email', 'user_hometown']
            }
        }).then(function (result) {
            _this.userId = result.uid;
            _this.router.navigate(["home"]);
        }), function (error) {
            console.log(error);
        };
    };
    UserService.prototype.googleLogin = function () {
        var _this = this;
        firebase.login({
            type: firebase.LoginType.GOOGLE
        }).then(function (result) {
            _this.userId = result.uid;
            _this.router.navigate(["home"]);
        }), function (error) {
            console.log(error);
        };
    };
    UserService.prototype.guestLogin = function () {
        var _this = this;
        this.router.navigate(["home"]);
        firebase.login({
            type: firebase.LoginType.ANONYMOUS
        })
            .then(function (user) {
            console.log("User uid: " + user.uid);
            _this.userId = user.uid;
        })
            .catch(function (error) { return console.log("Could not create an anonymous user: " + error); });
    };
    UserService.prototype.signOut = function () {
        var _this = this;
        this.router.navigate(["/"]);
        return new Promise(function (resolve, reject) {
            firebase.logout()
                .then(function () {
                _this.userId = null;
                _this.currentUser = null;
                resolve();
            })
                .catch(function (err) {
                reject({
                    message: err
                });
            });
        });
    };
    UserService.prototype.resetPassword = function (user) {
        firebase.resetPassword({
            email: user.email
        }).then(function (user) {
            alert("email sent to " + user.email);
        }), function (error) {
            alert("Try again");
        };
    };
    UserService.prototype.changePassword = function (user) {
        firebase.changePassword({
            email: user.email,
            oldPassword: user.password,
            newPassword: user.password
        }).then(function (user) {
            alert("Password changed");
        }), function (error) {
            alert("Try again");
        };
    };
    UserService.prototype.logout = function () {
        firebase.logout();
        this.userId = null;
        this.currentUser = null;
        this.router.navigate(['']);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHVEQUEwRDtBQUMxRCwwQ0FBeUM7QUFHekM7SUFHRSxxQkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDbEMsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFBQSxpQkFRQztRQVBDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO1lBQ2pDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDO2dCQUNYLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDdkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUMxQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsOEJBQVEsR0FBUixVQUFTLElBQVU7UUFBbkIsaUJBVUM7UUFURyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ2xCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDVixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDekIsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNSLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCwyQkFBSyxH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SSxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBN0hVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FJaUIsZUFBTTtPQUh2QixXQUFXLENBOEh2QjtJQUFELGtCQUFDO0NBQUEsQUE5SEQsSUE4SEM7QUE5SFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICB1c2VySWQ6IHN0cmluZztcclxuICBjdXJyZW50VXNlcjogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICB9XHJcbiAgXHJcbiAgaXNMb2dnZWRJbigpe1xyXG4gICAgZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICBpZihkYXRhLnVpZCl7XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSBkYXRhLnVpZDtcclxuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJob21lXCJdKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJJZClcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcclxuICAgICAgZmlyZWJhc2UuY3JlYXRlVXNlcih7XHJcbiAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcclxuICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICB0aGlzLnVzZXJJZCA9IHJlc3VsdC5rZXk7XHJcbiAgICAgICAgYWxlcnQoXCJVc2VyIGNyZWF0ZWQgc3VjY2VzZnVsbHlcIik7XHJcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGFsZXJ0KFwiY3JlYXRlVXNlciBlcnJvcjogXCIgKyBlcnIpO1xyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGxvZ2luKHVzZXI6IFVzZXIpIHtcclxuICAgICAgZmlyZWJhc2UubG9naW4oe1xyXG4gICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5QQVNTV09SRCxcclxuICAgICAgICBwYXNzd29yZE9wdGlvbnM6IHtcclxuICAgICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcclxuICAgICAgICB9XHJcbiAgICAgIH0pLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSB1c2VyLnVpZDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICAgICAvL2NvbnNvbGUuZGlyKHVzZXIpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImhvbWVcIl0pO1xyXG4gICAgICB9KSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIGFsZXJ0KFwiSW5jb3JyZWN0IHVzZXIgb3IgcGFzc3dvcmRcIik7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIGZhY2Vib29rTG9naW4oKSB7XHJcbiAgICBmaXJlYmFzZS5sb2dpbih7XHJcbiAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLkZBQ0VCT09LLFxyXG4gICAgICAgIGZhY2Vib29rT3B0aW9uczoge1xyXG4gICAgICAgICAgc2NvcGU6IFsncHVibGljX3Byb2ZpbGUnLCAnZW1haWwnLCd1c2VyX2hvbWV0b3duJ11cclxuICAgICAgICAgfVxyXG4gICAgfSkudGhlbiggcmVzdWx0ID0+IHtcclxuICAgICAgICB0aGlzLnVzZXJJZCA9IHJlc3VsdC51aWQ7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiaG9tZVwiXSk7XHJcbiAgICAgIH0pLCBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBnb29nbGVMb2dpbigpe1xyXG4gICAgZmlyZWJhc2UubG9naW4oe1xyXG4gICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuR09PR0xFXHJcbiAgICB9KS50aGVuKCByZXN1bHQgPT4ge1xyXG4gICAgICAgICAgdGhpcy51c2VySWQgPSByZXN1bHQudWlkO1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiaG9tZVwiXSk7XHJcbiAgICAgIH0pLCBlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIGd1ZXN0TG9naW4oKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJob21lXCJdKTtcclxuICAgIGZpcmViYXNlLmxvZ2luKHtcclxuICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuQU5PTllNT1VTXHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKHVzZXIgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVXNlciB1aWQ6IFwiICsgdXNlci51aWQpO1xyXG4gICAgICAgIHRoaXMudXNlcklkID0gdXNlci51aWQ7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcIkNvdWxkIG5vdCBjcmVhdGUgYW4gYW5vbnltb3VzIHVzZXI6IFwiICsgZXJyb3IpKTtcclxuICB9XHJcbiAgc2lnbk91dCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmaXJlYmFzZS5sb2dvdXQoKVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBudWxsO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdCh7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogZXJyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlc2V0UGFzc3dvcmQodXNlcjogVXNlcil7XHJcbiAgICBmaXJlYmFzZS5yZXNldFBhc3N3b3JkKHtcclxuICAgICAgZW1haWw6IHVzZXIuZW1haWxcclxuICAgIH0pLnRoZW4odXNlciA9PiB7XHJcbiAgICAgIGFsZXJ0KFwiZW1haWwgc2VudCB0byBcIit1c2VyLmVtYWlsKVxyXG4gICAgfSksZXJyb3IgPT57XHJcbiAgICAgIGFsZXJ0KFwiVHJ5IGFnYWluXCIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQYXNzd29yZCh1c2VyOlVzZXIpe1xyXG4gICAgZmlyZWJhc2UuY2hhbmdlUGFzc3dvcmQoe1xyXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgb2xkUGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXHJcbiAgICAgIG5ld1Bhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXHJcbiAgICB9KS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICBhbGVydChcIlBhc3N3b3JkIGNoYW5nZWRcIik7XHJcbiAgICB9KSxlcnJvciA9PiB7XHJcbiAgICAgIGFsZXJ0KFwiVHJ5IGFnYWluXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9nb3V0KCl7XHJcbiAgICBmaXJlYmFzZS5sb2dvdXQoKTtcclxuICAgIHRoaXMudXNlcklkID0gbnVsbDtcclxuICAgIHRoaXMuY3VycmVudFVzZXIgPSBudWxsXHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcclxuICB9XHJcbn0iXX0=