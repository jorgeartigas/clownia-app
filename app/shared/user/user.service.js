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
                _this.router.navigate(["home"]);
            }
        });
    };
    UserService.prototype.register = function (user) {
        firebase.createUser({
            email: user.email,
            password: user.password
        }).then(function (result) {
            user.uid = result.key;
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
            console.log(JSON.stringify(result));
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
            console.log(JSON.stringify(result));
            _this.router.navigate(["home"]);
        }), function (error) {
            console.log(error);
        };
    };
    UserService.prototype.signOut = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            firebase.logout()
                .then(function () {
                _this.currentUser = undefined;
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
        this.router.navigate(['']);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLHVEQUEwRDtBQUMxRCwwQ0FBeUM7QUFHekM7SUFFRSxxQkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFDbEMsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFBQSxpQkFNQztRQUxDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO1lBQ2pDLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDO2dCQUNYLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNqQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsOEJBQVEsR0FBUixVQUFTLElBQVU7UUFDZixRQUFRLENBQUMsVUFBVSxDQUFDO1lBQ2xCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDMUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDVixJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDdEIsS0FBSyxDQUFDLDBCQUEwQixDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsR0FBRztZQUNSLEtBQUssQ0FBQyxvQkFBb0IsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFDRCwyQkFBSyxHQUFMLFVBQU0sSUFBVTtRQUFoQixpQkFjQztRQWJHLFFBQVEsQ0FBQyxLQUFLLENBQUM7WUFDYixJQUFJLEVBQUUsUUFBUSxDQUFDLFNBQVMsQ0FBQyxRQUFRO1lBQ2pDLGVBQWUsRUFBRTtnQkFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTthQUN4QjtTQUNGLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO1lBQ1YsS0FBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDeEIsb0JBQW9CO1lBQ3BCLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDUCxLQUFLLENBQUMsNEJBQTRCLENBQUMsQ0FBQztRQUN0QyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBQ0QsbUNBQWEsR0FBYjtRQUFBLGlCQVlDO1FBWEMsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNYLElBQUksRUFBRSxRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVE7WUFDakMsZUFBZSxFQUFFO2dCQUNmLEtBQUssRUFBRSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sRUFBQyxlQUFlLENBQUM7YUFDbEQ7U0FDTCxDQUFDLENBQUMsSUFBSSxDQUFFLFVBQUEsTUFBTTtZQUNYLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFFRCxpQ0FBVyxHQUFYO1FBQUEsaUJBU0M7UUFSQyxRQUFRLENBQUMsS0FBSyxDQUFDO1lBQ2IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTTtTQUNoQyxDQUFDLENBQUMsSUFBSSxDQUFFLFVBQUEsTUFBTTtZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFFRCw2QkFBTyxHQUFQO1FBQUEsaUJBYUM7UUFaQyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxRQUFRLENBQUMsTUFBTSxFQUFFO2lCQUNaLElBQUksQ0FBQztnQkFDSixLQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztnQkFDN0IsT0FBTyxFQUFFLENBQUM7WUFDWixDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUEsR0FBRztnQkFDUixNQUFNLENBQUM7b0JBQ0wsT0FBTyxFQUFFLEdBQUc7aUJBQ2IsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDVCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDRCxtQ0FBYSxHQUFiLFVBQWMsSUFBVTtRQUN0QixRQUFRLENBQUMsYUFBYSxDQUFDO1lBQ3JCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztTQUNsQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSTtZQUNWLEtBQUssQ0FBQyxnQkFBZ0IsR0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDcEMsQ0FBQyxDQUFDLEVBQUMsVUFBQSxLQUFLO1lBQ04sS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1FBQ3BCLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCxvQ0FBYyxHQUFkLFVBQWUsSUFBUztRQUN0QixRQUFRLENBQUMsY0FBYyxDQUFDO1lBQ3RCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDMUIsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxJQUFJO1lBQ1YsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDNUIsQ0FBQyxDQUFDLEVBQUMsVUFBQSxLQUFLO1lBQ04sS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCw0QkFBTSxHQUFOO1FBQ0UsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBdEdVLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FHaUIsZUFBTTtPQUZ2QixXQUFXLENBdUd2QjtJQUFELGtCQUFDO0NBQUEsQUF2R0QsSUF1R0M7QUF2R1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXJcIjtcclxuaW1wb3J0IGZpcmViYXNlID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1wbHVnaW4tZmlyZWJhc2VcIik7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcclxuICBjdXJyZW50VXNlcjogYW55O1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuICB9XHJcbiAgXHJcbiAgaXNMb2dnZWRJbigpe1xyXG4gICAgZmlyZWJhc2UuZ2V0Q3VycmVudFVzZXIoKS50aGVuKGRhdGEgPT4ge1xyXG4gICAgICBpZihkYXRhLnVpZCl7XHJcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiaG9tZVwiXSk7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG4gIHJlZ2lzdGVyKHVzZXI6IFVzZXIpIHtcclxuICAgICAgZmlyZWJhc2UuY3JlYXRlVXNlcih7XHJcbiAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmRcclxuICAgIH0pLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICB1c2VyLnVpZCA9IHJlc3VsdC5rZXk7XHJcbiAgICAgICAgYWxlcnQoXCJVc2VyIGNyZWF0ZWQgc3VjY2VzZnVsbHlcIik7XHJcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgIGFsZXJ0KFwiY3JlYXRlVXNlciBlcnJvcjogXCIgKyBlcnIpO1xyXG4gICAgfSlcclxuICB9XHJcbiAgbG9naW4odXNlcjogVXNlcikge1xyXG4gICAgICBmaXJlYmFzZS5sb2dpbih7XHJcbiAgICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLlBBU1NXT1JELFxyXG4gICAgICAgIHBhc3N3b3JkT3B0aW9uczoge1xyXG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgICAgIH1cclxuICAgICAgfSkudGhlbih1c2VyID0+IHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRVc2VyID0gdXNlcjtcclxuICAgICAgICAvL2NvbnNvbGUuZGlyKHVzZXIpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImhvbWVcIl0pO1xyXG4gICAgICB9KSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIGFsZXJ0KFwiSW5jb3JyZWN0IHVzZXIgb3IgcGFzc3dvcmRcIik7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgZmFjZWJvb2tMb2dpbigpIHtcclxuICAgIGZpcmViYXNlLmxvZ2luKHtcclxuICAgICAgICB0eXBlOiBmaXJlYmFzZS5Mb2dpblR5cGUuRkFDRUJPT0ssXHJcbiAgICAgICAgZmFjZWJvb2tPcHRpb25zOiB7XHJcbiAgICAgICAgICBzY29wZTogWydwdWJsaWNfcHJvZmlsZScsICdlbWFpbCcsJ3VzZXJfaG9tZXRvd24nXVxyXG4gICAgICAgICB9XHJcbiAgICB9KS50aGVuKCByZXN1bHQgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImhvbWVcIl0pO1xyXG4gICAgICB9KSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gIH1cclxuXHJcbiAgZ29vZ2xlTG9naW4oKXtcclxuICAgIGZpcmViYXNlLmxvZ2luKHtcclxuICAgICAgdHlwZTogZmlyZWJhc2UuTG9naW5UeXBlLkdPT0dMRVxyXG4gICAgfSkudGhlbiggcmVzdWx0ID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlc3VsdCkpO1xyXG4gICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiaG9tZVwiXSk7XHJcbiAgICAgIH0pLCBlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG4gIHNpZ25PdXQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGZpcmViYXNlLmxvZ291dCgpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFVzZXIgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KHtcclxuICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuICByZXNldFBhc3N3b3JkKHVzZXI6IFVzZXIpe1xyXG4gICAgZmlyZWJhc2UucmVzZXRQYXNzd29yZCh7XHJcbiAgICAgIGVtYWlsOiB1c2VyLmVtYWlsXHJcbiAgICB9KS50aGVuKHVzZXIgPT4ge1xyXG4gICAgICBhbGVydChcImVtYWlsIHNlbnQgdG8gXCIrdXNlci5lbWFpbClcclxuICAgIH0pLGVycm9yID0+e1xyXG4gICAgICBhbGVydChcIlRyeSBhZ2FpblwiKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGFzc3dvcmQodXNlcjpVc2VyKXtcclxuICAgIGZpcmViYXNlLmNoYW5nZVBhc3N3b3JkKHtcclxuICAgICAgZW1haWw6IHVzZXIuZW1haWwsXHJcbiAgICAgIG9sZFBhc3N3b3JkOiB1c2VyLnBhc3N3b3JkLFxyXG4gICAgICBuZXdQYXNzd29yZDogdXNlci5wYXNzd29yZFxyXG4gICAgfSkudGhlbih1c2VyID0+IHtcclxuICAgICAgYWxlcnQoXCJQYXNzd29yZCBjaGFuZ2VkXCIpO1xyXG4gICAgfSksZXJyb3IgPT4ge1xyXG4gICAgICBhbGVydChcIlRyeSBhZ2FpblwiKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGxvZ291dCgpe1xyXG4gICAgZmlyZWJhc2UubG9nb3V0KCk7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJyddKTtcclxuICB9XHJcbn0iXX0=