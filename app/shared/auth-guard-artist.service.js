"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var artist_service_1 = require("./artist.service");
var firebase = require("nativescript-plugin-firebase");
var youtubeParser = require("nativescript-youtube-parser");
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
                if (artist.data().main_video != "") {
                    youtubeParser.getURL(artist.data().main_video, { quality: 'medium', container: 'mp4' })
                        .then(function (urlList) {
                        that.currentArtist.artist.main_video = urlList[0].url;
                    });
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC1hcnRpc3Quc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImF1dGgtZ3VhcmQtYXJ0aXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsbURBQWlEO0FBQ2pELHVEQUF5RDtBQUN6RCwyREFBOEQ7QUFJOUQ7SUFJRSx5QkFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFIbEQsUUFBRyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBR00sQ0FBQztJQUVwRCxxQ0FBVyxHQUFYLFVBQVksS0FBNkIsRUFBRSxLQUEwQjtRQUNuRSxJQUFNLElBQUksR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE1BQU07WUFDN0MsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLENBQUEsQ0FBQztnQkFDUCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQzFDLEVBQUUsQ0FBQSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxVQUFVLElBQUksRUFBRSxDQUFDLENBQUEsQ0FBQztvQkFDL0IsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUM7eUJBQ3RGLElBQUksQ0FBQyxVQUFVLE9BQU87d0JBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO29CQUN4RCxDQUFDLENBQ0YsQ0FBQztnQkFDTixDQUFDO2dCQUNELE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsQ0FBQztZQUFBLElBQUksQ0FBQSxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxLQUFLLENBQUE7WUFDaEIsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQXhCVSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBS3dCLDhCQUFhO09BSnJDLGVBQWUsQ0F5QjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuQWN0aXZhdGUsIEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIEFjdGl2YXRlZFJvdXRlLFJvdXRlclN0YXRlU25hcHNob3QgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDdXJyZW50QXJ0aXN0IH0gZnJvbSAnLi9hcnRpc3Quc2VydmljZSc7XHJcbmltcG9ydCBmaXJlYmFzZSA9IHJlcXVpcmUoXCJuYXRpdmVzY3JpcHQtcGx1Z2luLWZpcmViYXNlXCIpXHJcbmltcG9ydCB5b3V0dWJlUGFyc2VyID0gcmVxdWlyZSgnbmF0aXZlc2NyaXB0LXlvdXR1YmUtcGFyc2VyJyk7XHJcblxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXV0aEd1YXJkQXJ0aXN0IGltcGxlbWVudHMgQ2FuQWN0aXZhdGUge1xyXG5yZWYgPSBmaXJlYmFzZS5maXJlc3RvcmUuY29sbGVjdGlvbihcImFydGlzdHNcIik7XHJcbmlkOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY3VycmVudEFydGlzdDogQ3VycmVudEFydGlzdCkge31cclxuXHJcbiAgY2FuQWN0aXZhdGUocm91dGU6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsIHN0YXRlOiBSb3V0ZXJTdGF0ZVNuYXBzaG90KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgIHRoaXMuaWQgPSBzdGF0ZS51cmwuc3BsaXQoXCIvXCIpXHJcbiAgICByZXR1cm4gdGhpcy5yZWYuZG9jKHRoaXMuaWRbMl0pLmdldCgpLnRoZW4oYXJ0aXN0ID0+IHtcclxuICAgICAgICBpZihhcnRpc3Qpe1xyXG4gICAgICAgICAgICB0aGF0LmN1cnJlbnRBcnRpc3QuYXJ0aXN0ID0gYXJ0aXN0LmRhdGEoKTtcclxuICAgICAgICAgICAgaWYoYXJ0aXN0LmRhdGEoKS5tYWluX3ZpZGVvICE9IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgeW91dHViZVBhcnNlci5nZXRVUkwoYXJ0aXN0LmRhdGEoKS5tYWluX3ZpZGVvLCB7IHF1YWxpdHk6ICdtZWRpdW0nLCBjb250YWluZXI6ICdtcDQnIH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAodXJsTGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuY3VycmVudEFydGlzdC5hcnRpc3QubWFpbl92aWRlbyA9IHVybExpc3RbMF0udXJsO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxufSJdfQ==