System.register(['angular2/core', 'angular2/router', '../services/publisher.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, publisher_service_1;
    var PublishersComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (publisher_service_1_1) {
                publisher_service_1 = publisher_service_1_1;
            }],
        execute: function() {
            PublishersComponent = (function () {
                function PublishersComponent(_router, _publisherService) {
                    this._router = _router;
                    this._publisherService = _publisherService;
                }
                PublishersComponent.prototype.ngOnInit = function () {
                    this.getPublishers();
                };
                PublishersComponent.prototype.getPublishers = function () {
                    var _this = this;
                    this._publisherService.getPublishers().subscribe(function (publishers) { return _this.publishers = publishers; }, function (error) { return _this.errorMessage = error; });
                };
                PublishersComponent = __decorate([
                    core_1.Component({
                        selector: 'publishers',
                        templateUrl: 'app/templates/publishers.template.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, publisher_service_1.PublisherService])
                ], PublishersComponent);
                return PublishersComponent;
            }());
            exports_1("PublishersComponent", PublishersComponent);
        }
    }
});
//# sourceMappingURL=publishers.component.js.map