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
            _this.currentUser = result;
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
            _this.currentUser = result;
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
            _this.currentUser = result;
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
            _this.currentUser = user;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHVEQUEwRDtBQUMxRCwwQ0FBeUM7QUFHekM7SUFHRSxxQkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDbEMsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFBQSxpQkFRQztRQVBDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO1lBQ2pDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDO2dCQUNYLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDdkIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUMxQixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsOEJBQVEsR0FBUixVQUFTLElBQVU7UUFBbkIsaUJBVUM7UUFURyxRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ2xCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDVixLQUFJLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztZQUMxQixLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1IsS0FBSyxDQUFDLG9CQUFvQixHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELDJCQUFLLEdBQUwsVUFBTSxJ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QUksQ0FBQztRQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTtRQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQWhJVSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBSWlCLGVBQU07T0FIdkIsV0FBVyxDQWlJdkI7SUFBRCxrQkFBQztDQUFBLEFBaklELElBaUlDO0FBaklZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi91c2VyXCI7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSB7XHJcbiAgdXNlcklkOiBzdHJpbmc7XHJcbiAgY3VycmVudFVzZXI6IGFueTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcbiAgfVxyXG4gIFxyXG4gIGlzTG9nZ2VkSW4oKXtcclxuICAgIGZpcmViYXNlLmdldEN1cnJlbnRVc2VyKCkudGhlbihkYXRhID0+IHtcclxuICAgICAgaWYoZGF0YS51aWQpe1xyXG4gICAgICAgIHRoaXMudXNlcklkID0gZGF0YS51aWQ7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiaG9tZVwiXSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VySWQpXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICByZWdpc3Rlcih1c2VyOiBVc2VyKSB7XHJcbiAgICAgIGZpcmViYXNlLmNyZWF0ZVVzZXIoe1xyXG4gICAgICAgIGVtYWlsOiB1c2VyLmVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXHJcbiAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHJlc3VsdDtcclxuICAgICAgICBhbGVydChcIlVzZXIgY3JlYXRlZCBzdWNjZXNmdWxseVwiKTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgYWxlcnQoXCJjcmVhdGVVc2VyIGVycm9yOiBcIiArIGVycik7XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbG9naW4odXNlcjogVXNlcikge1xyXG4gICAgICBmaXJlYmFzZS5sb2dpbih7XHJcbiAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxyXG4gICAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xyXG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgICAgIH1cclxuICAgICAgfSkudGhlbih1c2VyID0+IHtcclxuICAgICAgICB0aGlzLnVzZXJJZCA9IHVzZXIudWlkO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB1c2VyO1xyXG4gICAgICAgIC8vY29uc29sZS5kaXIodXNlcik7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiaG9tZVwiXSk7XHJcbiAgICAgIH0pLCBlcnJvciA9PiB7XHJcbiAgICAgICAgYWxlcnQoXCJJbmNvcnJlY3QgdXNlciBvciBwYXNzd29yZFwiKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgZmFjZWJvb2tMb2dpbigpIHtcclxuICAgIGZpcmViYXNlLmxvZ2luKHtcclxuICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuRkFDRUJPT0ssXHJcbiAgICAgICAgZmFjZWJvb2tPcHRpb25zOiB7XHJcbiAgICAgICAgICBzY29wZTogWydwdWJsaWNfcHJvZmlsZScsICdlbWFpbCcsJ3VzZXJfaG9tZXRvd24nXVxyXG4gICAgICAgICB9XHJcbiAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSByZXN1bHQudWlkO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSByZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiaG9tZVwiXSk7XHJcbiAgICAgIH0pLCBlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBnb29nbGVMb2dpbigpe1xyXG4gICAgZmlyZWJhc2UubG9naW4oe1xyXG4gICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuR09PR0xFXHJcbiAgICB9KS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICB0aGlzLnVzZXJJZCA9IHJlc3VsdC51aWQ7XHJcbiAgICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gcmVzdWx0XHJcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCJob21lXCJdKTtcclxuICAgICAgfSksIGVycm9yID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgZ3Vlc3RMb2dpbigpIHtcclxuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImhvbWVcIl0pO1xyXG4gICAgZmlyZWJhc2UubG9naW4oe1xyXG4gICAgICAgIHR5cGU6IGZpcmViYXNlLkxvZ2luVHlwZS5BTk9OWU1PVVNcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4odXNlciA9PiB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VXNlciA9IHVzZXI7XHJcbiAgICAgICAgdGhpcy51c2VySWQgPSB1c2VyLnVpZDtcclxuXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcIkNvdWxkIG5vdCBjcmVhdGUgYW4gYW5vbnltb3VzIHVzZXI6IFwiICsgZXJyb3IpKTtcclxuICB9XHJcbiAgc2lnbk91dCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL1wiXSk7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmaXJlYmFzZS5sb2dvdXQoKVxyXG4gICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSBudWxsO1xyXG4gICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdCh7XHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogZXJyXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJlc2V0UGFzc3dvcmQodXNlcjogVXNlcil7XHJcbiAgICBmaXJlYmFzZS5yZXNldFBhc3N3b3JkKHtcclxuICAgICAgZW1haWw6IHVzZXIuZW1haWxcclxuICAgIH0pLnRoZW4odXNlciA9PiB7XHJcbiAgICAgIGFsZXJ0KFwiZW1haWwgc2VudCB0byBcIit1c2VyLmVtYWlsKVxyXG4gICAgfSksZXJyb3IgPT57XHJcbiAgICAgIGFsZXJ0KFwiVHJ5IGFnYWluXCIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQYXNzd29yZCh1c2VyOlVzZXIpe1xyXG4gICAgZmlyZWJhc2UuY2hhbmdlUGFzc3dvcmQoe1xyXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgb2xkUGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXHJcbiAgICAgIG5ld1Bhc3N3b3JkOiB1c2VyLnBhc3N3b3JkXHJcbiAgICB9KS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICBhbGVydChcIlBhc3N3b3JkIGNoYW5nZWRcIik7XHJcbiAgICB9KSxlcnJvciA9PiB7XHJcbiAgICAgIGFsZXJ0KFwiVHJ5IGFnYWluXCIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbG9nb3V0KCl7XHJcbiAgICBmaXJlYmFzZS5sb2dvdXQoKTtcclxuICAgIHRoaXMudXNlcklkID0gbnVsbDtcclxuICAgIHRoaXMuY3VycmVudFVzZXIgPSBudWxsXHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcclxuICB9XHJcbn0iXX0=