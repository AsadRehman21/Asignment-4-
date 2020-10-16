(function() {
    'use strict';

    angular.module('ShoppingList')
        .controller('ItemDetailController', ItemDetailController);

    // Version with resolving to 1 item based on $stateParams in route config
    ItemDetailController.$inject = ['item'];

    function ItemDetailController(item) {
        var itemDetail = this;

        itemDetail.name = item.name;
        itemDetail.quantity = item.quantity;
        itemDetail.description = item.description;
    }

})();