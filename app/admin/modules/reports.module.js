'use strict';

angular.module('ReportsModule', [
    'ngAnimate',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ngMessages',
    'firebase',
    'ui.bootstrap',
    'ui.router',
    'ui.grid',
    'ui.grid.edit',
    'ui.grid.cellNav',
    'ui.grid.selection',
    'ui.grid.importer'

])

.config(    ['$stateProvider',
    function( $stateProvider) {

      $stateProvider

          .state('admin.reports', {
              url: '/reports',
              views: {
                  "header@admin": {
                      templateUrl: 'admin/views/reports/salesorders.header.html'
                  },
                  "main@admin": {
                      templateUrl: 'admin/views/reports/reports.html'
                  },
                  "list@admin.reports": {
                      controller: 'ReportsCtrl as reportsCtrl',
                      templateUrl: 'admin/views/reports/salesorders.html'
                  }
              }
          })
          .state('admin.reports.salesorders', {
              url: '/salesorders',
              views: {
                  "header@admin": {
                      templateUrl: 'admin/views/reports/salesorders.header.html'
                  },
                  "main@admin": {
                      templateUrl: 'admin/views/reports/reports.html'
                  },
                  "list@admin.reports.salesorders": {
                      controller: 'ReportsCtrl as reportsCtrl',
                      templateUrl: 'admin/views/reports/salesorders.html'
                  }
              }
          })
          .state('admin.reports.salestaxes', {
              url: '/salestaxes',
              views: {
                  "header@admin": {
                      templateUrl: 'admin/views/reports/salestaxes.header.html'
                  },
                  "main@admin": {
                      templateUrl: 'admin/views/reports/reports.html'
                  },
                  "list@admin.reports.salestaxes": {
                      controller: 'ReportsCtrl as reportsCtrl',
                      templateUrl: 'admin/views/reports/salestaxes.html'
                  }
              }
          })
          .state('admin.reports.salesshipping', {
              url: '/salesshipping',
              views: {
                  "header@admin": {
                      templateUrl: 'admin/views/reports/salesshipping.header.html'
                  },
                  "main@admin": {
                      templateUrl: 'admin/views/reports/reports.html'
                  },
                  "list@admin.reports.salesshipping": {
                      controller: 'ReportsCtrl as reportsCtrl',
                      templateUrl: 'admin/views/reports/salesshipping.html'
                  }
              }
          })
          .state('admin.reports.salesreturns', {
              url: '/salesreturns',
              views: {
                  "header@admin": {
                      templateUrl: 'admin/views/reports/salesreturns.header.html'
                  },
                  "main@admin": {
                      templateUrl: 'admin/views/reports/reports.html'
                  },
                  "list@admin.reports.salesreturns": {
                      controller: 'ReportsCtrl as reportsCtrl',
                      templateUrl: 'admin/views/reports/salesreturns.html'
                  }
              }
          })
          .state('admin.reports.salescoupons', {
              url: '/salescoupons',
              views: {
                  "header@admin": {
                      templateUrl: 'admin/views/reports/salescoupons.header.html'
                  },
                  "main@admin": {
                      templateUrl: 'admin/views/reports/reports.html'
                  },
                  "list@admin.reports.salescoupons": {
                      controller: 'ReportsCtrl as reportsCtrl',
                      templateUrl: 'admin/views/reports/salescoupons.html'
                  }
              }
          })
          .state('admin.reports.productsviewed', {
              url: '/productsviewed',
              views: {
                  "header@admin": {
                      templateUrl: 'admin/views/reports/productsviewed.header.html'
                  },
                  "main@admin": {
                      templateUrl: 'admin/views/reports/reports.html'
                  },
                  "list@admin.reports.productsviewed": {
                      controller: 'ReportsCtrl as reportsCtrl',
                      templateUrl: 'admin/views/reports/productsviewed.html'
                  }
              }
          })
          .state('admin.reports.productspurchased', {
              url: '/productspurchased',
              views: {
                  "header@admin": {
                      templateUrl: 'admin/views/reports/productspurchased.header.html'
                  },
                  "main@admin": {
                      templateUrl: 'admin/views/reports/reports.html'
                  },
                  "list@admin.reports.productspurchased": {
                      controller: 'ReportsCtrl as reportsCtrl',
                      templateUrl: 'admin/views/reports/productspurchased.html'
                  }
              }
          })
          .state('admin.reports.customersonline', {
              url: '/customersonline',
              views: {
                  "header@admin": {
                      templateUrl: 'admin/views/reports/customersonline.header.html'
                  },
                  "main@admin": {
                      templateUrl: 'admin/views/reports/reports.html'
                  },
                  "list@admin.reports.customersonline": {
                      controller: 'ReportsCtrl as reportsCtrl',
                      templateUrl: 'admin/views/reports/customersonline.html'
                  }
              }
          })
          .state('admin.reports.customersactivity', {
              url: '/customersactivity',
              views: {
                  "header@admin": {
                      templateUrl: 'admin/views/reports/customersactivity.header.html'
                  },
                  "main@admin": {
                      templateUrl: 'admin/views/reports/reports.html'
                  },
                  "list@admin.reports.customersactivity": {
                      controller: 'ReportsCtrl as reportsCtrl',
                      templateUrl: 'admin/views/reports/customersactivity.html'
                  }
              }
          })
          .state('admin.reports.customersorders', {
              url: '/customersorders',
              views: {
                  "header@admin": {
                      templateUrl: 'admin/views/reports/customersorders.header.html'
                  },
                  "main@admin": {
                      templateUrl: 'admin/views/reports/reports.html'
                  },
                  "list@admin.reports.customersorders": {
                      controller: 'ReportsCtrl as reportsCtrl',
                      templateUrl: 'admin/views/reports/customersorders.html'
                  }
              }
          })
          .state('admin.reports.customersrewards', {
              url: '/customersrewards',
              views: {
                  "header@admin": {
                      templateUrl: 'admin/views/reports/customersrewards.header.html'
                  },
                  "main@admin": {
                      templateUrl: 'admin/views/reports/reports.html'
                  },
                  "list@admin.reports.customersrewards": {
                      controller: 'ReportsCtrl as reportsCtrl',
                      templateUrl: 'admin/views/reports/customersrewards.html'
                  }
              }
          })
          .state('admin.reports.customerscredit', {
              url: '/customerscredit',
              views: {
                  "header@admin": {
                      templateUrl: 'admin/views/reports/customerscredit.header.html'
                  },
                  "main@admin": {
                      templateUrl: 'admin/views/reports/reports.html'
                  },
                  "list@admin.reports.customerscredit": {
                      controller: 'ReportsCtrl as reportsCtrl',
                      templateUrl: 'admin/views/reports/customerscredit.html'
                  }
              }
          })

  }


])

.controller('ReportsCtrl', ['Orders', 'Taxes', 'Product', 'Customer', 'Coupons', '$state', '$scope', '$stateParams',
        function (           Orders,   Taxes,   Product,   Customer,   Coupons,   $state,   $scope,   $stateParams) {
              var reportsCtrl = this;
              reportsCtrl.customers = Customer.all;

              reportsCtrl.gridOrders = {
                    enableSorting: true,
                    enableCellEditOnFocus: false,
                    enableFiltering: true,
                    data: Orders.all,
                    columnDefs: [
                          { name:'orderDate', field: 'create_date', sort: { direction: 'desc' }, enableHiding: false, enableFiltering: true, enableCellEdit: false, width: '15%', cellFilter: 'date' },
                          { name:'orderCode', field: 'order_id', enableHiding: false, enableFiltering: false, enableCellEdit: false },
                          { name:'status', field: 'status', enableHiding: false, enableFiltering: true, width: '10%', enableCellEdit: false },
                          { name:'tax', field: 'tax_total', enableHiding: false, enableFiltering: true, width: '10%', enableCellEdit: false, cellClass: 'grid-align-right', cellFilter:'currency' },
                          { name:'total', field: 'total', enableHiding: false, enableFiltering: true, width: '10%', enableCellEdit: false, cellClass: 'grid-align-right', cellFilter:'currency' },
                    ]
              };

              reportsCtrl.gridTaxes = {
                    enableSorting: true,
                    enableCellEditOnFocus: false,
                    enableFiltering: true,
                    data: Taxes.all,
                    columnDefs: [
                          { name:'taxName', field: 'tax_name', enableHiding: false, enableFiltering: true, enableCellEdit: false },
                          { name:'orders', field: 'order_count', enableHiding: false, enableFiltering: false, width: '15%', enableCellEdit: false },
                          { name:'total', field: 'order_total', enableHiding: false, enableFiltering: false, width: '15%', enableCellEdit: false },
                    ]
              };

              reportsCtrl.gridShipping = {
                    enableSorting: true,
                    enableCellEditOnFocus: false,
                    enableFiltering: true,
            //        data: Orders.all,
                    columnDefs: [
                          { name:'dateStart', field: 'date_start',enableHiding: false, enableFiltering: true, enableCellEdit: false, width: '15%' },
                          { name:'dateEnd', field: 'date_end', enableHiding: false, enableFiltering: true, enableCellEdit: false, width: '15%' },
                          { name:'shippingName', field: 'shipping_name', enableHiding: false, enableFiltering: true, enableCellEdit: false },
                          { name:'orders', field: 'order_count', enableHiding: false, enableFiltering: false, width: '15%', enableCellEdit: false },
                    ]
              };

              reportsCtrl.gridReturns = {
                    enableSorting: true,
                    enableCellEditOnFocus: false,
                    enableFiltering: true,
            //        data: Orders.all,
                    columnDefs: [
                          { name:'dateStart', field: 'date_start',enableHiding: false, enableFiltering: true, enableCellEdit: false, width: '15%' },
                          { name:'dateEnd', field: 'date_end', enableHiding: false, enableFiltering: true, enableCellEdit: false, width: '15%' },
                          { name:'returns', field: 'return_count', enableHiding: false, enableFiltering: true, enableCellEdit: false },
                    ]
              };

              reportsCtrl.gridCoupons = {
                    enableSorting: true,
                    enableCellEditOnFocus: false,
                    enableFiltering: true,
                    data: Coupons.all,
                    columnDefs: [
                          { name:'couponName', field: 'coupon_name', enableHiding: false, enableFiltering: true, enableCellEdit: false },
                          { name:'couponCode', field: '$id', enableHiding: false, enableFiltering: false, enableCellEdit: false },
                          { name:'orders', field: 'order_count', enableHiding: false, enableFiltering: true, width: '15%', enableCellEdit: false },
                          { name:'total', field: 'order_total', enableHiding: false, enableFiltering: true, width: '15%', enableCellEdit: false },
                    ]
              };

              reportsCtrl.getViews = function(obj) {
                    var views = obj.views;
                    if (views == undefined) {
                        views = 0;
                        return views;
                    } else {
                        views = Object.keys(views).length;
                        return views;
                    };
              };

              reportsCtrl.gridViewed = {
                    enableSorting: true,
                    enableCellEditOnFocus: false,
                    enableFiltering: true,
                    data: Product.all,
                    columnDefs: [
                          { name:'productName', field: 'product_name', enableHiding: false, enableFiltering: true, enableCellEdit: false },
                          { name:'views', field: 'reportsCtrl.getViews()', cellTemplate : '<div class="ui-grid-cell-contents"> {{grid.appScope.reportsCtrl.getViews(row.entity)}} </div>',
                           cellClass: 'grid-align-right', enableHiding: false, enableFiltering: true, width: '15%', enableCellEdit: false },
        //                  { name:'percent', field: 'view_percent', enableHiding: false, enableFiltering: false, width: '15%', enableCellEdit: false },
                    ]
              };

              reportsCtrl.gridPurchased = {
                    enableSorting: true,
                    enableCellEditOnFocus: false,
                    enableFiltering: true,
                    data: Product.all,
                    columnDefs: [
                          { name:'productName', field: 'product_name', enableHiding: false, enableFiltering: true, enableCellEdit: false },
                          { name:'productsSold', field: 'purchase_count', enableHiding: false, enableFiltering: false, width: '20%', enableCellEdit: false,  },
                          { name:'total', field: 'purchase_total', enableHiding: false, enableFiltering: false, width: '15%', enableCellEdit: false, cellClass: 'grid-align-right', cellFilter:'currency' },
                    ]
              };

              /*reportsCtrl.gridOnline = {
                    enableSorting: true,
                    enableCellEditOnFocus: false,
                    enableFiltering: true,
            //        data: Orders.all,
                    columnDefs: [
                          { name:'iP', field: 'customer_ip', enableHiding: false, enableFiltering: true, enableCellEdit: false },
                          { name:'customerName', field: 'customer_name', enableHiding: false, enableFiltering: true, enableCellEdit: false },
                          { name:'lastPageVisited', field: 'last_page_visited', enableHiding: false, enableFiltering: false, width: '15%', enableCellEdit: false },
                          { name:'referer', field: 'customer_referer', enableHiding: false, enableFiltering: false, width: '15%', enableCellEdit: false },
                          { name:'lastClick', field: 'last_click', enableHiding: false, enableFiltering: false, width: '15%', enableCellEdit: false },
                          { name:'action', field: 'action', enableHiding: false, enableFiltering: false, width: '15%', enableCellEdit: false },
                    ]
              };*/

              reportsCtrl.filterCustomer = function(customer) {
                    reportsCtrl.customer_name = customer.customer_first_name + ' ' + customer.customer_last_name;
                    var theLog = Customer.getLogs(customer.$id);
                        theLog.$loaded().then(function() {
                            reportsCtrl.gridActivity.data = theLog;
                        });
              }, function(error) {
                    AlertService.addError(error.message);
              };

              reportsCtrl.gridActivity = {
                    enableSorting: true,
                    enableCellEditOnFocus: false,
                    enableFiltering: true,
            //        data: Orders.all,
                    columnDefs: [
                        { name:'loginDate', field: 'login_date', width:'50%', enableHiding: false, enableFiltering: false, cellFilter:'date:"longDate"' },
                        { name:'loginTime', field: 'login_date', width:'50%', enableHiding: false, enableFiltering: false, cellFilter:'date:"shortTime"' },
                    ]
              };

              reportsCtrl.filterCustomerOrders = function(customer) {
                    reportsCtrl.customer_name = customer.customer_first_name + ' ' + customer.customer_last_name;
                    var theOrder = Orders.getCustomerOrder(customer.$id);
                        theOrder.$loaded().then(function() {
                            reportsCtrl.gridCustomerOrders.data = theOrder;
                        });
              }, function(error) {
                    AlertService.addError(error.message);
              };

              reportsCtrl.gridCustomerOrders = {
                    enableSorting: true,
                    enableCellEditOnFocus: false,
                    enableFiltering: true,
                    columnDefs: [
                          { name:'orderDate', field: 'create_date', sort: { direction: 'desc' }, enableHiding: false, enableFiltering: true, enableCellEdit: false, width: '15%', cellFilter: 'date' },
                          { name:'orderCode', field: 'order_id', enableHiding: false, enableFiltering: false, enableCellEdit: false },
                          { name:'items', field: 'items', enableHiding: false, enableFiltering: false, width: '10%', enableCellEdit: false, cellClass: 'grid-align-right' },
                          { name:'subTotal', field: 'sub_total', enableHiding: false, enableFiltering: false, width: '10%', enableCellEdit: false, cellClass: 'grid-align-right', cellFilter:'currency' },
                          { name:'tax', field: 'tax_total', enableHiding: false, enableFiltering: false, width: '10%', enableCellEdit: false, cellClass: 'grid-align-right', cellFilter:'currency' },
                          { name:'total', field: 'total', enableHiding: false, enableFiltering: false, width: '10%', enableCellEdit: false, cellClass: 'grid-align-right', cellFilter:'currency' },
                    ]
              };

              reportsCtrl.gridRewards = {
                    enableSorting: true,
                    enableCellEditOnFocus: false,
                    enableFiltering: true,
                    data: Customer.all,
                    columnDefs: [
                          { name:'customerName', cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.customer_first_name}} {{row.entity.customer_last_name}}</div>',
                           enableHiding: false, enableFiltering: true, enableCellEdit: false },
                          { name:'rewardPoints', field: 'reward_points', enableHiding: false, enableFiltering: false, enableCellEdit: false, cellClass: 'grid-align-right' }
                    ]
              };

            /*  reportsCtrl.gridCredit = {
                    enableSorting: true,
                    enableCellEditOnFocus: false,
                    enableFiltering: true,
            //        data: Orders.all,
                    columnDefs: [
                          { name:'customerName', field: 'customer_name', enableHiding: false, enableFiltering: true, enableCellEdit: false },
                          { name:'Email', field: 'customer_email', enableHiding: false, enableFiltering: true, enableCellEdit: false },
                          { name:'customerGroup', field: 'customer_group', enableHiding: false, enableFiltering: true, enableCellEdit: false },
                          { name:'status', field: 'customer_status', enableHiding: false, enableFiltering: true, width: '15%', enableCellEdit: false },
                          { name:'total', field: 'customer_credit_total', enableHiding: false, enableFiltering: false, width: '10%', enableCellEdit: false },
                    ]
              }; */

        }

])
