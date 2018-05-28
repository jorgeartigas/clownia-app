"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var artist_service_1 = require("./artist.service");
var firebase = require("nativescript-plugin-firebase");
var AuthGuardArtist = /** @class */ (function () {
    function AuthGuardArtist(currentArtist) {
        this.currentArtist = currentArtist;
        this.ref = firebase.firestore.collection("artists");
    }
    AuthGuardArtist.prototype.canActivate = function (route, state) {
        var that = this;
        this.id = state.url.split("/");
        return this.ref.doc(this.id[2]).get().then(function (artist) {
            if (artist) {
                that.currentArtist.artist = artist.data();
                //if(artist.data().main_video != ""){
                //youtubeParser.getURL(artist.data().main_video, { quality: 'medium', container: 'mp4' })
                //.then(function (urlList) {
                //  that.currentArtist.artist.main_video = urlList[0].url;
                //  }
                // );
                // }
                return true;
            }
            else {
                return false;
            }
        });
    };
    AuthGuardArtist = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [artist_service_1.CurrentArtist])
    ], AuthGuardArtist);
    return AuthGuardArtist;
}());
exports.AuthGuardArtist = AuthGuardArtist;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC1hcnRpc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGgtZ3VhcmQtYXJ0aXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsbURBQWlEO0FBQ2pELHVEQUEwRDtBQUcxRDtJQUlFLHlCQUFvQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUhsRCxRQUFHLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUM7SUFHTSxDQUFDO0lBRXBELHFDQUFXLEdBQVgsVUFBWSxLQUE2QixFQUFFLEtBQTBCO1FBQ25FLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQzlCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUM3QyxFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsQ0FBQSxDQUFDO2dCQUNQLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDMUMscUNBQXFDO2dCQUNqQyx5RkFBeUY7Z0JBQ3pGLDRCQUE0QjtnQkFDMUIsMERBQTBEO2dCQUM1RCxLQUFLO2dCQUNOLEtBQUs7Z0JBQ1QsSUFBSTtnQkFDSCxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDRixNQUFNLENBQUMsS0FBSyxDQUFBO1lBQ2hCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUF4QlUsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUt3Qiw4QkFBYTtPQUpyQyxlQUFlLENBeUIzQjtJQUFELHNCQUFDO0NBQUEsQUF6QkQsSUF5QkM7QUF6QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENhbkFjdGl2YXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBBY3RpdmF0ZWRSb3V0ZSxSb3V0ZXJTdGF0ZVNuYXBzaG90IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ3VycmVudEFydGlzdCB9IGZyb20gJy4vYXJ0aXN0LnNlcnZpY2UnO1xyXG5pbXBvcnQgZmlyZWJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZEFydGlzdCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcclxucmVmID0gZmlyZWJhc2UuZmlyZXN0b3JlLmNvbGxlY3Rpb24oXCJhcnRpc3RzXCIpO1xyXG5pZDogYW55O1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGN1cnJlbnRBcnRpc3Q6IEN1cnJlbnRBcnRpc3QpIHt9XHJcblxyXG4gIGNhbkFjdGl2YXRlKHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBzdGF0ZTogUm91dGVyU3RhdGVTbmFwc2hvdCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICB0aGlzLmlkID0gc3RhdGUudXJsLnNwbGl0KFwiL1wiKVxyXG4gICAgcmV0dXJuIHRoaXMucmVmLmRvYyh0aGlzLmlkWzJdKS5nZXQoKS50aGVuKGFydGlzdCA9PiB7XHJcbiAgICAgICAgaWYoYXJ0aXN0KXtcclxuICAgICAgICAgICAgdGhhdC5jdXJyZW50QXJ0aXN0LmFydGlzdCA9IGFydGlzdC5kYXRhKCk7XHJcbiAgICAgICAgICAgIC8vaWYoYXJ0aXN0LmRhdGEoKS5tYWluX3ZpZGVvICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgLy95b3V0dWJlUGFyc2VyLmdldFVSTChhcnRpc3QuZGF0YSgpLm1haW5fdmlkZW8sIHsgcXVhbGl0eTogJ21lZGl1bScsIGNvbnRhaW5lcjogJ21wNCcgfSlcclxuICAgICAgICAgICAgICAgIC8vLnRoZW4oZnVuY3Rpb24gKHVybExpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gIHRoYXQuY3VycmVudEFydGlzdC5hcnRpc3QubWFpbl92aWRlbyA9IHVybExpc3RbMF0udXJsO1xyXG4gICAgICAgICAgICAgICAgLy8gIH1cclxuICAgICAgICAgICAgICAgLy8gKTtcclxuICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufSJdfQ==